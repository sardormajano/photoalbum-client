import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { authService } from '../shared/services';
import { ROUTES } from '../shared/constants';
import toastr from 'toastr';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthorized: false,
      password: '',
      email: ''
    };
  }

  isFormValid() {
    const { password, email } = this.state;
    return password && email;
  }

  async submitHandler(event) {
    try {
      event.preventDefault();
      const { password, email } = this.state;
      await authService.signIn({
        password,
        email
      });

      toastr.success('Welcome!');
      this.setState({ isAuthorized: authService.isAuthorized() });
    } catch (err) {
      toastr.error(err);
    }
  }

  render() {
    if (this.state.isAuthorized) {
      return <Redirect to={ROUTES.IMAGES} />;
    }

    return (
      <div className='section'>
        <div className='row'>
          <div className='col s12'>
            <div id='input' className='scrollspy'>
              <h3 className='header'>Please sign in</h3>
              <p></p>
              <br />
              <form onSubmit={event => this.submitHandler(event)}>
                <div className='row'>
                  <div className='input-field col s12 md6'>
                    <input
                      id='email'
                      type='email'
                      value={this.state.email}
                      onChange={event =>
                        this.setState({ email: event.target.value })
                      }
                    />
                    <label htmlFor='email' className='active'>
                      Email (Login)
                    </label>
                  </div>
                  <div className='input-field col s12 md6'>
                    <input
                      id='password'
                      type='password'
                      value={this.state.password}
                      onChange={event =>
                        this.setState({ password: event.target.value })
                      }
                    />
                    <label htmlFor='password' className='active'>
                      Password
                    </label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <button
                      type='submit'
                      className='waves-effect waves-light btn blue darken-4'
                      disabled={!this.isFormValid()}
                    >
                      Sign in<i className='material-icons right'>account_box</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
