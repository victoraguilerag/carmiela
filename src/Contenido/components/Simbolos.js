import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

function Simbolos () {
  return (
    <Query
      query={gql`
        {
          personal{
            redes{
              nombre
              url
            }
          }
        }
      `}
    >
    {({loading, error, data}) => {
      if (loading) return <p> Loading... </p>
      if (error) return <p> Error... </p>

      const { redes } = data.personal[0]
      return (
        <div className="simbolos">
          {
            redes.map(red => (
              <a key={red.nombre} href={red.url} target="blank">
                <i className={`fab fa-${red.nombre.toLowerCase()}`}></i>
              </a>
            ))
          }
        </div>
      )
    }}
    </Query>
  )
}

export default Simbolos
