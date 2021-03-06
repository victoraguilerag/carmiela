import React, { Component } from 'react';
import Layout from './Layout/Layout.js'
import Contenido from './Contenido/Contenido.js'
import Lector from './Lector/Lector.js'
import Contacto from './Contacto/Contacto.js'
import Experiencia from './Experiencia/ExperienciaNew.js'
import EditArticulo from './EditArticulo/EditArticulo.js'
import AgregarArticulo from './AgregarArticulo/agregar-articulo.js'
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
      <Route path="/articulo/edit/:id" exact component={EditArticulo} />
      <Route path="/nuevo/articulo" exact component={AgregarArticulo} />
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
