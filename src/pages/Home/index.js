import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components';

const Main = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
    </Container>
  );
};

export default Main;
