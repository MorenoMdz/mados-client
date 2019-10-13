import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginForm, SubmitButton } from './styles';
import Container from '../../components/Container';

import AuthActions from '../../store/ducks/auth';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signInRequest } = this.props;
    signInRequest(email, password);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <h1>Login</h1>

        <LoginForm onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <SubmitButton>
            <FaPlus color="#fff" size={14} />
          </SubmitButton>
        </LoginForm>

        <Link to="/">Home</Link>
        <Link to="/app">App</Link>
      </Container>
    );
  }
}

Login.propTypes = { signInRequest: PropTypes.func.isRequired };

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
