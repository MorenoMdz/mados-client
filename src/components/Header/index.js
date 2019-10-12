import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.svg';
import { HeaderContainer, Login } from './styles';

function Header({ user }) {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <span>Welcome, {user.name}</span>
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
    name: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

Header.defaultProps = {
  user: {
    name: 'guest',
    lastName: 'guest',
  },
};

export default connect(
  mapStateToProps,
  null
)(Header);
