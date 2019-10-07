import React from 'react';
import { FaArrowUp, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Form, SubmitButton } from './styles';
import Container from '../../components/Container';

export default function Login() {
  return (
    <Container>
      <h1>Login</h1>

      <FaArrowUp color="#fff" size={14} />
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="placeholder" />
        <SubmitButton disabled>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
      <Link to="/">Main</Link>
    </Container>
  );
}
