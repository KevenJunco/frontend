import React, { useState, Component } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';

import projeto1 from '../../assets/projeto1.png';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, Products } from './styles';

const Dashboard = () => {
  const products = useState([]);
  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    this.setState({ loading: false });
  };
};
const { loading } = this.state;

return (
  <>
    <Products>
      <h1>Kaspersky Endpoint Security</h1>
      <Form onSubmit={this.handleSubmit}>
        {products.map((repository) => (
          <a key="saiba mais" href="teste">
            <img src={projeto1} alt="kes antivirus" />
            <div>
              <strong>R$ 00,00</strong>
              <p>Saiba mais</p>
            </div>
          </a>
        ))}
        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>
    </Products>
  </>
);

export default Dashboard;
