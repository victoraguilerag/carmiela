import React, { Component } from 'react';
import logo from './logo.svg';
import Layout from './Layout/Layout.js'
import Header from './Header/Header.js'
import Menu from './Menu/Menu.js'
import Contenido from './Contenido/Contenido.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Menu />
        <Contenido />
      </Layout>
    );
  }
}

export default App;
