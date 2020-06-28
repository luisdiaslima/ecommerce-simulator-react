import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content, Main, MyLink } from './style';
import Logo from '../../img/passaro.svg';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/login');
  };
  return (
    <Container>
      <Content>
        <header>
          <img src={Logo} />

          <div>
            <Link to="/shop">Montar minha cesta</Link>
            {isLoggedIn ? (
              <Link onClick={handleLogout} to="/logout">
                <span />
                Sair
              </Link>
            ) : (
              <Link to="/login">
                <span />
                Fazer login
              </Link>
            )}
          </div>
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
