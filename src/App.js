import React, { Component } from 'react';
import Layout from './Layout/Layout.js'
import Contenido from './Contenido/Contenido.js'
import Articulo from './Contenido/components/Articulo.js'
import Contacto from './Contacto/Contacto.js'
import Experiencia from './Experiencia/Experiencia.js'
import './App.css';
import { Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Layout>

        <Route path="/" exact component={Contenido} />
        <Route path="/contacto/" exact component={Contacto} />
        <Route path="/experiencia/" exact component={Experiencia} />
        <Route path="/articulo/:id" exact component={Articulo} />
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
