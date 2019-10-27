import React, { Component } from 'react';
import { authService } from '../shared/services';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      email: ''
    };
  }

  isFormValid() {
    const { password, passwordConfirm, email } = this.state;
    return password && password === passwordConfirm && email;
  }

  submitHandler(event) {
    event.preventDefault();
    const { password, email, firstName, lastName } = this.state;
    authService.signUp({ password, email, firstName, lastName });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s10  offset-s1'>
            <div id='input' className='section scrollspy'>
              <h3 className='header'>Please create an account</h3>
              <p></p>
              <br />
              <form onSubmit={event => this.submitHandler(event)}>
                <div className='row'>
                  <div className='input-field col s6'>
                    <input
                      placeholder='Sardorbek'
                      type='text'
                      className='validate'
                      value={this.state.firstName}
                      onChange={event =>
                        this.setState({ firstName: event.target.value })
                      }
                    />
                    <label htmlFor='first_name' className='active'>
                      First Name
                    </label>
                  </div>
                  <div className='input-field col s6'>
                    <input
                      placeholder='Mamazhanov'
                      type='text'
                      className='validate'
                      value={this.state.lastName}
                      onChange={event =>
                        this.setState({ lastName: event.target.value })
                      }
                    />
                    <label htmlFor='first_name' className='active'>
                      Second Name
                    </label>
                  </div>
                </div>
                <div className='row'>
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
                  <div className='input-field col s6'>
                    <input
                      id='password-confirm'
                      type='password'
                      value={this.state.passwordConfirm}
                      onChange={event =>
                        this.setState({ passwordConfirm: event.target.value })
                      }
                    />
                    <label htmlFor='password-confirm' className='active'>
                      Password Confirm
                    </label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
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
