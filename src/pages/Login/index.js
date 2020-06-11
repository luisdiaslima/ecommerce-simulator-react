import React from 'react';
import { Title } from './style';
import { Container } from '../../styles/GlobalStyle';

export default function Login() {
  return (
    <>
      <Container>
        <Title>
          Login
          <small>Registro</small>
        </Title>
        <p>Leia mais</p>
        <button>Submit</button>
      </Container>
    </>
  );
}
