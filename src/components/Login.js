import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault();
    console.log(this.state.password + " " + this.state.username)
    axios.post('http://localhost:8000/api/v1/token/', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      localStorage.setItem('token', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      this.props.history.push('/protected');
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.submit(e)}>
          <label>Username: </label>
          <input type='text' name='username' value={this.state.username} onChange={e => this.handleChange(e)} />
          <label>Password: </label>
          <input type='password' name='password' value={this.state.password} onChange={e => this.handleChange(e)} />
          <button type='submit'>Log in</button>
        </form>
      </div>
    )
  }
}

export default Login;