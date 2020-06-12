import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import Image from '../../img/error.svg';
import { Img } from './style';

export default function Page404() {
  return (
    <Container>
      <h1>Erro ao carregar páginha</h1>
      <Img src={Image} />
    </Container>
  );
}
