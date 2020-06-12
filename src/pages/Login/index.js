import React from 'react';
import { useDispatch } from 'react-redux';
import { Title } from './style';
import { Container } from '../../styles/GlobalStyle';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.cliqueRequest());
  }
  return (
    <>
      <Container>
        <Title>
          Login
          <small>Registro</small>
        </Title>
        <p>Leia mais</p>
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </Container>
    </>
  );
}
