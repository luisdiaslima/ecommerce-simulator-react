import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cards } from './style';
import Logo from '../../img/passaro.svg';
import mel from '../../img/mel_p.jfif';

export default function Home() {
  return (
    <Container>
      <header>
        <img src={Logo} />
        <Link to="/">
          <span />
          Voltar
        </Link>
      </header>

      <Cards>
        <div>
          <img src={mel} />
          <h1>Mel</h1>
          <h3>Padrão por cesta 500g</h3>
          <p>
            Produzido na região Sudeste - mais precisamente nos estados de Minas
            e São Paulo -, o mel de laranjeira tem uma cor clara, aroma suave e
            o sabor com um leve toque cítrico.{' '}
          </p>
        </div>
      </Cards>
    </Container>
  );
}
