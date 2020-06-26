import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Main, MyLink } from './style';
import Logo from '../../img/passaro.svg';

export default function Home() {
  return (
    <Container>
      <Content>
        <header>
          <img src={Logo} />
          <Link to="/shop">
            <span />
            Montar minha cesta
          </Link>
        </header>
        <Main>
          <h1>Seu e-commerce de legumes e vegetais</h1>
          <p>Ajudamos pessoas a encontrarem a comida de verdade. </p>

          <MyLink to="/products">
            <span />
            <strong>Conheça nossos produtos</strong>
          </MyLink>
        </Main>
      </Content>
    </Container>
  );
}
