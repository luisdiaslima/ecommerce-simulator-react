import React from 'react';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Container, Form, FieldGroup, Field } from './style';
import Modal from '../Modal';
import Logo from '../../img/passaro.svg';
import api from '../../config/api';
import * as actions from '../../store/modules/auth/actions';

export default function Register(props) {
  const dispatch = useDispatch();

  const [check, setCheck] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Nome deverá ter entra 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deverpa ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ name, email, password }));
  }

  return (
    <Container>
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
          <h1>Fazer registro</h1>
        </div>

        <fieldset>
          <legend>
            <h2>Dados para o registro</h2>
          </legend>

          <FieldGroup>
            <Field>
              <label htmlFor="name">Nome</label>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
          </FieldGroup>
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
