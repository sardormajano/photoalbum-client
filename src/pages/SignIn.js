import React, { Component } from 'react';
import { authService } from '../shared/services';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: ''
    };
  }

  isFormValid() {
    const { password, email } = this.state;
    return password && email;
  }

  submitHandler(event) {
    event.preventDefault();
    authService.signIn(this.state);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s10  offset-s1'>
            <div id='input' className='section scrollspy'>
              <h3 className='header'>Please sign in</h3>
              <p></p>
              <br />
              <form onSubmit={event => this.submitHandler(event)}>
                <div className='row'>
                  <div className='input-field col s6'>
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
                  <div className='input-field col s6'>
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
                      Sign up<i className='material-icons right'>account_box</i>
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
