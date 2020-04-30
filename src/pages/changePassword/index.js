import React, { Component } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton } from './styles';

export default class password extends Component {
  state = {
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
    loading: false,
  };

  handleInputEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleInputPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleInputNewPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleInputConfirmPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { password, newPassword, confirmPassword } = this.state;

    const response = await api.put('/users', {
      password,
      newPassword,
      confirmPassword,
    });

    this.setState({ loading: false });

    console.log(response.data);
  };

  render() {
    const { email, password, loading } = this.state;

    return (
      <>
        <Container>
          <h1>Alterar Senha</h1>

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
              placeholder="insira sua senha atual"
              value={password}
              onChange={this.handleInputPasswordChange}
            />
            <input
              id="newPassword"
              type="password"
              placeholder="Insira sua nova senha(mínimo 8 caractéres)"
              value={password}
              onChange={this.handleInputNewPasswordChange}
            />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirme a sua nova senha"
              value={password}
              onChange={this.handleInputConfirmPasswordChange}
            />

            <SubmitButton loading={loading}>
              {loading ? (
                <FaSpinner color="#FFF" size={14} />
              ) : (
                <FaPlus color="#FFF" size={14} />
              )}
            </SubmitButton>
          </Form>
        </Container>
      </>
    );
  }
}
