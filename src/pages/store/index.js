import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner, FaCartPlus } from 'react-icons/fa';

import projeto1 from '../../assets/projeto1.png';
import baner from '../../assets/baner.jpeg';

import Header from '../../components/Header';
import Product from '../../components/Product';
import { SubmitButton, HeaderImg, ProductList, Divlist } from './styles';

export default class Store extends Component {
  state = {
    loading: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <HeaderImg>
          <img src={baner} alt="kes antivirus" />
        </HeaderImg>
        <Header>
          <ul>
            <li>
              {' '}
              <Link to="/store/password"> Minha conta</Link>
            </li>
            <li> Meus pedidos</li>
            <li>Produtos</li>
            <li>Relatorios</li>
            <li>Sair</li>
          </ul>
        </Header>
        <Divlist>
          <ProductList>
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
          </ProductList>
        </Divlist>
      </>
    );
  }
}
