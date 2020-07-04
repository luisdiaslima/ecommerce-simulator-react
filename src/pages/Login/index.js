import React from 'react';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Container, Form, FieldGroup, Field, LoaderBar } from './style';
import Modal from '../Modal';
import Logo from '../../img/passaro.svg';
import api from '../../config/api';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deverá ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;
    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <LoaderBar>
        <div />
      </LoaderBar>
      <Modal check={check} />
      <header>
        <img src={Logo} />
        <Link to="/">
          <span />
          Voltar
        </Link>
      </header>
      <Form onSubmit={handleSubmit}>
        <div>
          <h1>Fazer login</h1>
          <Link to="/register">ou crie uma conta</Link>
        </div>

        <fieldset>
          <legend>
            <h2>Dados para login</h2>
          </legend>

          <FieldGroup>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </FieldGroup>
          <FieldGroup>
            <Field>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Field>
          </FieldGroup>
        </fieldset>

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
