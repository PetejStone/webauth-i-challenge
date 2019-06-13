import React from 'react';
import {connect} from 'react-redux';
import {login, signUp, logOut} from '../actions';


class Login extends React.Component {
  state = {
    loginForm: true,
    signupForm: false,
    credentials: {
        username: '',
        password: ''
    },
    user: {
        username: '',
        password: ''
        }
}

handleChange = e => {
  console.log(e.target.value)
  if (this.state.loginForm === true) {
      console.log('LOGIN')
  this.setState({
      credentials: {
           ...this.state.credentials,
           [e.target.name] : e.target.value

      }
  })
  } else  {
      console.log('SIGNUP')
      this.setState({
          user: {
              ...this.state.user,
              [e.target.name] : e.target.value
          }
      })
  }
  console.log(this.state.user)
}

login = e => {
  e.preventDefault();
 console.log(this.state.credentials)
 this.props.login(this.state.credentials).then(() => {
 this.props.history.push('/users')
});
}

  render() {
  return (
    <div className="App">
      <form onSubmit={this.login}>
        <label for="username">Username</label>
        <input id="username" type="text" name="username" value={this.state.credentials.username} onChange={this.handleChange} required/>
        <label for="password">Password</label>
        <input id="password" type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange} required/>
        <button>Submit</button>
      </form>
    </div>
  );
  }
}

const mapStateToProps = ({isLoggingIn, error, newUser, pending}) => ({
  isLoggingIn,
  error,
  newUser,
  pending

});

export default connect(mapStateToProps,{login, signUp, logOut})(Login)
