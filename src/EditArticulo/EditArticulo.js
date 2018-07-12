import React, {Component} from 'react'
import { Query, Mutation } from 'react-apollo'
import { Redirect } from 'react-router'
import gql from 'graphql-tag'

// onKeyPress={ e => {
//     e.preventDefault()
//     console.log('strangers!');
//     editFragmento({
//       variables: {
//         fragmentoId: pieza.id,
//         fragmento: {
//             valor: pieza.valor + e.key
//         }
//       }
//     })
//   }
// }

const EDIT_ARTICULO = gql`
    mutation EditarArticulo($articuloId: Int!, $articulo: ArticuloEditable, $fragmentos: [FragmentoEditable]){
      articuloEdit(articuloId: $articuloId, articulo: $articulo, fragmentos:$fragmentos){
        id
        titulo
      }
    }
  `

class EditArticulo extends Component {
  textAreaAdjust = e => {
    if(e.key !== "Backspace"){
      e.target.style.height = (e.target.scrollHeight - 2)+"px";
    }
  }

  render (props, context) {
    const GET_ARTICULO_INFO = gql`
      {
        articulo(id: ${this.props.match.params.id}){
          id
          previa
          titulo
          portada
          cuerpo{
            id
            tipo
            fragmento{
              id
              valor
            }
          }
        }
      }
    `

    return (
      <Query
        query={GET_ARTICULO_INFO}
      >
        {
          ({loading, error, data}) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error...</p>

            return (
              <Mutation
                mutation={EDIT_ARTICULO}
              >
                {(editArticulo, { data: newData }) => (
                  <div className="Articulos">
                    <div className="Articulo">
                      <div> Editando </div>
                      <div id={data.articulo.portada} className="imagen"></div>
                      <div className="parrafo">
                        <label htmlFor="titulo">Titulo</label>
                        <textarea onChange={this.updateElement} id="titulo" className="agregar-titulo" defaultValue={data.articulo.titulo}/>
                      </div>
                      <input type="submit" className="floatButton" value="Save Changes" onClick={async () => {
                        // data.articulo.cuerpo.map((seccion, index) => {
                        //     const { fragmento } = seccion
                        //     console.log(fragmento);
                        //     fragmento.map((pieza,index) => {
                        //       console.log(pieza.id);
                        //       let newData = document.getElementById(pieza.id)
                        //       editFragmento({
                        //         variables: {
                        //           fragmentoId: newData.id,
                        //           fragmento: {
                        //             valor: newData.value,
                        //           }
                        //         }
                        //       })
                        //     })
                        //   })
                          const fragmentos = []
                          data.articulo.cuerpo.map(seccion => {
                            const { fragmento } = seccion
                            fragmento.map(pieza => {
                              const newData = document.getElementById(pieza.id)
                              fragmentos.push({
                                id: newData.id,
                                valor: newData.value
                              })
                            })
                          })
                          console.log(fragmentos);
                          const titulo = document.getElementById("titulo")
                          await editArticulo({
                            variables: {
                              articuloId: data.articulo.id,
                              articulo: {
                                titulo: titulo.value,
                              },
                              fragmentos: fragmentos
                            }
                          }).then(() => {
                            window.location.href = `/articulo/${this.props.match.params.id}`;
                            // this.props.history.push(`/articulo/${this.props.match.params.id}`)
                          })
                        }}
                      />
                      {
                        data.articulo.cuerpo.map((seccion)=>{
                          const { fragmento } = seccion
                          switch (seccion.tipo) {
                            case 'texto':
                            return fragmento.map(function(pieza, index){
                              return <div key={index} className="parrafo">
                                      <label htmlFor="parrafo">Parrafo</label>
                                      <textarea
                                        id={pieza.id}
                                        style={{ minHeight: '150px'}}
                                        defaultValue={pieza.valor}
                                      />
                                    </div>
                            })
                            case 'titulo':
                            return fragmento.map(function(pieza){
                              return <div className="parrafo">
                                       <label htmlFor="subtitulo">Subtitulo</label>
                                       <textarea id={pieza.id} name="subtitulo" className="agregar-subtitulo" defaultValue={pieza.valor} />
                                     </div>
                            })
                            case 'imagen':
                            return fragmento.map(function(pieza){
                              return <div className="parrafo">
                                <label htmlFor="imagen">Imagen</label>
                                <input id={pieza.id} type="text" name="imagen" className="agregar-imagen" defaultValue={pieza.valor} />
                              </div>
                            })
                            case 'video':
                            return fragmento.map(function(pieza){
                              return <div className="parrafo">
                                <label htmlFor="video">Video</label>
                                <input id={pieza.id} type="text" name="video" className="agregar-video" defaultValue={pieza.valor} />
                              </div>
                            })
                            case 'titulo poema':
                            return fragmento.map(function(pieza){
                              return <div key={pieza.id} className="seccion poemario">{pieza.valor}</div>
                            })
                            case 'verso':
                            return fragmento.map(function(pieza){
                              return <div key={pieza.id} className="texto poemario">{pieza.valor}</div>
                            })
                            default:
                            return null
                          }
                        })
                      }
                    </div>
                  </div>

                )}
              </Mutation>
            )
          }
        }
      </Query>
    )
  }
}

export default EditArticulo
