import React from 'react';
import { Link } from 'react-router-dom';
import { Container, MainContainer, BodyContainer } from '../../components';

const Main = () => {
  return (
    <Container>
      <BodyContainer>
        <MainContainer>
          <h1>Main</h1>

          <Link to="/login">Login</Link>
        </MainContainer>
      </BodyContainer>
    </Container>
  );
};

export default Main;
