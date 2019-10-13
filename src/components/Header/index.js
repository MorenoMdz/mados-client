import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserActions from '../../store/ducks/user';

import logo from '../../assets/images/logo.svg';
import { HeaderContainer, Login } from './styles';

function Header({ user, fetchUserRequest }) {
  useEffect(() => {
    fetchUserRequest();
  }, [fetchUserRequest]);
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <span>Welcome, {user.username}</span>

      <Link to="/login">login</Link>
      <Link to="/app">App</Link>
      <Login to="/login">
        <span>Login</span>
      </Login>
    </HeaderContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }),
  fetchUserRequest: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: {
    name: 'guest',
    lastName: 'guest',
  },
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
