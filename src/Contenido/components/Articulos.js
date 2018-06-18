import React from 'react'
import Previa from '../../Previa/Previa.js'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_ARTICULOS = gql`
  {
    articulos {
      id
      previa
      titulo
      portada
    }
  }
`;

function Articulos (props) {
  return (
    <div className="Articulos">
      <Query
        query={GET_ARTICULOS}
      >
      {({ loading, error, data }) => {
        if (loading) return <p> Loading... </p>
        if (error) return <p> Error... </p>

        return data.articulos.map(({ id, titulo, previa, portada }, index) => {
          return <Previa id={id} titulo={titulo} data={previa} portada={portada} key={index}/>
        })
      }}
      </Query>
    </div>
  )
}


export default Articulos
