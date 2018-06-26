import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class EditArticulo extends Component {
  render (props) {
    return (
      <Query
        query={gql`
          {
            articulo(id: ${this.props.match.params.id}){
              id
              previa
              titulo
              portada
              cuerpo{
                tipo
                fragmento{
                  valor
                }
              }
            }
          }
        `}
      >
        {
          ({loading, error, data}) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error...</p>

            return (
              <div className="Articulos">
                <div className="Articulo">
                  <div> Editando </div>
                  <div id={data.articulo.portada} className="imagen"></div>
                  <h2 contentEditable className="titulo"><a>{data.articulo.titulo}</a></h2>
                  {

                    data.articulo.cuerpo.map((seccion)=>{
                      const { fragmento } = seccion
                      switch (seccion.tipo) {
                        case 'texto':
                          return fragmento.map(function(pieza){
                            return <p contentEditable key={pieza.id} className="texto">{pieza.valor}</p>
                          })
                        case 'titulo':
                          return fragmento.map(function(pieza){
                            return <div contentEditable key={pieza.id} className="seccion">{pieza.valor}</div>
                          })
                        case 'imagen':
                          return fragmento.map(function(pieza){
                            return <div key={pieza.id} id={pieza.valor} className="imagenArticulo"/>
                          })
                        case 'video':
                          return fragmento.map(function(pieza){
                            return <iframe key={pieza.id} width="854" title={pieza.valor} className="video" height="480" src={`https://www.youtube.com/embed/${pieza.valor}`} frameBorder="0" allowFullScreen></iframe>
                          })
                        case 'titulo poema':
                          return fragmento.map(function(pieza){
                            return <div contentEditable key={pieza.id} className="seccion poemario">{pieza.valor}</div>
                          })
                        case 'verso':
                          return fragmento.map(function(pieza){
                            return <div contentEditable key={pieza.id} className="texto poemario">{pieza.valor}</div>
                          })
                        default:
                          return null
                      }
                    })
                  }
                </div>
              </div>
            )
          }
        }
      </Query>
    )
  }
}

export default EditArticulo
