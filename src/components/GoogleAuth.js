import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const userId = this.auth.currentUser.get().getId();
      this.props.signIn(userId);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => this.auth.signIn();
  onSignOutClick = () => this.auth.signOut();

  renderAuthButton = () => {
    switch (this.props.isSignedIn) {
      case true:
        return (
          <>
            <button
              className='ui red google button'
              onClick={this.onSignOutClick}
            >
              <i className='google icon' />
              Sign Out
            </button>
          </>
        );

      case false:
        return (
          <>
            <button
              className='ui red google button'
              onClick={this.onSignInClick}
            >
              <i className='google icon' />
              Sign in with google
            </button>
          </>
        );

      default:
        return null;
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
