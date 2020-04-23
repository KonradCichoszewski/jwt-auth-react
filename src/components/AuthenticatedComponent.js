import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { getToken } from '../helpers/jwt';

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: undefined
    }
  }

  componentDidMount() {
    const token = getToken();

    if (!token) {
      this.props.history.push('/login');
    }

    axios.get('http://localhost:8000/api/v1/blog/posts/', { headers: { Authorization: `Bearer ${token}` } }
    ).then(res => this.setState({ posts: res.data })
    ).catch(err => {
      console.log(err);
      this.props.history.push('/login');
      localStorage.removeItem('token');
    });
  }

  render() {
    if (this.state.posts === undefined) {
      return (
        <h1>Loading...</h1>
      )
    }
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(AuthenticatedComponent);