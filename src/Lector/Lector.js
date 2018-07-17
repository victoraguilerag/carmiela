import React, { Component } from 'react'
import Articulo from '../Contenido/components/NewArticulo.js'
import Aside from '../Contenido/components/Aside.js'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class Lector extends Component {
  render (props) {
    const id = this.props.match.params.id
    return (
      <Query
      query={gql`
        {
          articulo (id: ${id}) {
            id
            previa
            titulo
            portada
            cuerpo{
              tipo
              valor
            }
          }
        }
        `}
      >
        {({loading, error, data}) => {
          if (loading) return <p> Loading... </p>
          if (error) return <p> Error... </p>

          return (
            <div className="Contenido" >
              <Articulo articulo={data.articulo} />
              <Aside />
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Lector
