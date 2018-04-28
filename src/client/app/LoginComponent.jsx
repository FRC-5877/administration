import React from 'react';

class LoginComponent extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <a href="/auth/google">Sign In with Google</a>
    )
  }
}

export default LoginComponent;