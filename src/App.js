import React, { Component } from 'react';
import logo from './logo.svg';
import Layout from './Layout/Layout.js'
import Header from './Header/Header.js'
import Menu from './Menu/Menu.js'
import Articulos from './Articulos/Articulos.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Menu />
        <Articulos />
      </Layout>
    );
  }
}

export default App;
