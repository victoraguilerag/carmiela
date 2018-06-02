import React, { Component } from 'react';
import Layout from './Layout/Layout.js'
import Contenido from './Contenido/Contenido.js'
import Lector from './Lector/Lector.js'
import Contacto from './Contacto/Contacto.js'
import Experiencia from './Experiencia/Experiencia.js'
import './App.css';
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Layout>

        <Route path="/" exact component={Contenido} />
        <Route path="/contacto/" exact component={Contacto} />
        <Route path="/experiencia/" exact component={Experiencia} />
        <Route path="/articulo/:id" exact component={Lector} />
    </Layout>
    );
  }
}
// <Route path="/articulo/:id" exact component={Articulo} />

// const Home = () => {
//   <Layout>
//     <Header />
//     <Menu />
//     <Contenido />
//     <Contenido />
//   </Layout>
// }

export default App;
