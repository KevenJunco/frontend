import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton } from './styles';

export default class Join extends Component {
  state = {
    name: '',
    last_name: '',
    company: '',
    email: '',
    password: '',
    cnpj: '',
    insc_estadual: '',
    tel: '',
    cep: '',
    estado: '',
    bairro: '',
    rua: '',
    complemento: '',
    num_estabelecimento: '',
    provider: true,
  };

  handleInputNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleInputLastNameChange = (e) => {
    this.setState({ last_name: e.target.value });
  };

  handleInputCompanyChange = (e) => {
    this.setState({ company: e.target.value });
  };

  handleInputEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleInputPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleInputCnpjChange = (e) => {
    this.setState({ cnpj: e.target.value });
  };

  handleInputInscEstadualChange = (e) => {
    this.setState({ insc_estadual: e.target.value });
  };

  handleInputTelChange = (e) => {
    this.setState({ tel: e.target.value });
  };

  handleInputCepChange = (e) => {
    this.setState({ cep: e.target.value });
  };

  handleInputEstadoChange = (e) => {
    this.setState({ estado: e.target.value });
  };

  handleInputBairroChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleInputRuaChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleInputComplementoChange = (e) => {
    this.setState({ complemento: e.target.value });
  };

  handleNumEstabelecimentoChange = (e) => {
    this.setState({ num_estabelecimento: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const {
      name,
      last_name,
      company,
      email,
      password,
      cnpj,
      insc_estadual,
      tel,
      cep,
      estado,
      bairro,
      rua,
      complemento,
      num_estabelecimento,
    } = this.state;

    const response = await api.post('/users', {
      name,
      last_name,
      company,
      email,
      password,
      cnpj,
      insc_estadual,
      tel,
      cep,
      estado,
      bairro,
      rua,
      complemento,
      num_estabelecimento,
    });

    this.setState({ loading: false });

    console.log(response.data);
  };

  render() {
    const {
      name,
      last_name,
      company,
      email,
      password,
      cnpj,
      insc_estadual,
      tel,
      cep,
      estado,
      bairro,
      rua,
      complemento,
      num_estabelecimento,
      loading,
    } = this.state;

    return (
      <Container>
        <h1>Login</h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Insira o seu nome"
            value={name}
            onChange={this.handleInputNameChange}
          />
          <input
            id="last_name"
            type="text"
            placeholder="Insira o seu ultimo sobrenome"
            value={last_name}
            onChange={this.handleInputLastNameChange}
          />
          <input
            id="company"
            type="text"
            placeholder="Insira da sua empresa"
            value={company}
            onChange={this.handleInputCompanyChange}
          />
          <input
            id="email"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={this.handleInputEmailChange}
          />
          <input
            id="password"
            type="text"
            placeholder="Senha"
            value={password}
            onChange={this.handleInputPasswordChange}
          />
          <input
            id="cnpj"
            type="text"
            placeholder="cnpj"
            value={cnpj}
            onChange={this.handleInputCnpjChange}
          />
          <input
            id="insc_estadual"
            type="text"
            placeholder="Inscrição Estadual"
            value={insc_estadual}
            onChange={this.handleInscEstadualChange}
          />
          <input
            id="tel"
            type="text"
            placeholder="Número de Telefone"
            value={tel}
            onChange={this.handleTelChange}
          />
          <input
            id="cep"
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={this.handleCepChange}
          />
          <input
            id="estado"
            type="text"
            placeholder="Estado"
            value={estado}
            onChange={this.handleEstadoChange}
          />
          <input
            id="bairro"
            type="text"
            placeholder="Bairro"
            value={bairro}
            onChange={this.handleBairroChange}
          />
          <input
            id="rua"
            type="text"
            placeholder="Rua"
            value={rua}
            onChange={this.handleRuaChange}
          />
          <input
            id="bairro"
            type="text"
            placeholder="Bairro"
            value={bairro}
            onChange={this.handleBairroChange}
          />
          <input
            id="complemento"
            type="text"
            placeholder="Complemento"
            value={complemento}
            onChange={this.handleComplementoChange}
          />
          <input
            id="num_estabelecimento"
            type="text"
            placeholder="Número do estabelecimento"
            value={num_estabelecimento}
            onChange={this.handleNumEstabelecimentoChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
          <i>
            <Link to="/">Pagina Inicial</Link>
          </i>
        </Form>
      </Container>
    );
  }
}
