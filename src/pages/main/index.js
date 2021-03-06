import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSpinner, FaCartPlus } from 'react-icons/fa';

import projeto1 from '../../assets/projeto1.png';

import api from '../../services/api';

import Product from '../../components/Product';
import Container from '../../components/Container';
import { Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
  };

  handleInputEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleInputPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { email, password } = this.state;

    const response = await api.post('/sessions', {
      email,
      password,
    });

    this.setState({ loading: false });

    console.log(response.data);
  };

  render() {
    const { email, password, loading } = this.state;

    return (
      <>
        <Container>
          <h1>Login</h1>

          <Form onSubmit={this.handleSubmit}>
            <input
              id="email"
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={this.handleInputEmailChange}
            />

            <input
              id="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={this.handleInputPasswordChange}
            />

            <SubmitButton loading={loading}>
              {loading ? (
                <FaSpinner color="#FFF" size={14} />
              ) : (
                <FaPlus color="#FFF" size={14} />
              )}
            </SubmitButton>

            <i>
              <Link to="/join">Cadastre-se</Link>
            </i>
          </Form>
        </Container>

        <Product>
          <a href="/store">
            <h1>Kaspersky Endpoint Security</h1>
            <img src={projeto1} alt="kes antivirus" />
            <p>Saiba mais</p>
          </a>

          <div>
            <strong>R$ 00,00</strong>

            <SubmitButton loading={loading}>
              {loading ? (
                <FaSpinner color="#FFF" size={35} />
              ) : (
                <FaCartPlus color="#FFF" size={35} />
              )}
            </SubmitButton>
          </div>
        </Product>
      </>
    );
  }
}
