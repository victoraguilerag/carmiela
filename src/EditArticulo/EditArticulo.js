import React, {Component} from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const EDIT_ARTICULO = gql`
    mutation EditarArticulo($articuloId: Int!, $articulo: ArticuloEditable){
      articuloEdit(articuloId: $articuloId, articulo: $articulo){
        id
        titulo
      }
    }
  `

class EditArticulo extends Component {
  handleDeleteElement = (e,id) => {
    console.log(e);
    let component = document.getElementById(id)
    console.log(id);
    if (component) {
      component.id = ''
      component.parentNode.style.display = "none"
      component.value = ''
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
            valor
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
                {(editArticulo, { loading, error }) => (
                  <div key="chumi bebe" className="Articulos">
                    <div className="Articulo">
                      { loading && <div> Loading </div>}
                      { error && <div> Error `${error}` </div>}
                      <div id={data.articulo.portada} className="imagen"></div>
                      <div className="parrafo">
                        <label htmlFor="titulo">Titulo</label>
                        <textarea onChange={this.updateElement} id="titulo" className="agregar-titulo" defaultValue={data.articulo.titulo}/>
                      </div>
                      <input type="submit" className="floatButton" value="Save Changes" onClick={async () => {
                          const cuerpo = []
                          data.articulo.cuerpo.map(seccion => {
                            const newData = document.getElementById(seccion.id)
                            if (newData) {
                              return cuerpo.push({
                                id: newData.id,
                                tipo: newData.tipo,
                                valor: newData.value
                              })
                            }
                          })
                          const titulo = document.getElementById("titulo")
                          await editArticulo({
                            variables: {
                              articuloId: data.articulo.id,
                              articulo: {
                                titulo: titulo.value,
                                cuerpo: cuerpo,
                              },
                            }
                          }).then(() => {
                            window.location.href = `/articulo/${this.props.match.params.id}`;
                            // this.props.history.push(`/articulo/${this.props.match.params.id}`)
                          })
                        }}
                      />
                      {
                        data.articulo.cuerpo.map((seccion, index)=>{
                          const { fragmento } = seccion
                          switch (seccion.tipo) {
                            case 'texto':
                              return <div key={index} className="parrafo">
                                      <i className="fas fa-trash delete" onClick={(e) => this.handleDeleteElement(e, seccion.id)}></i>
                                      <textarea
                                        id={seccion.id}
                                        style={{ minHeight: '150px'}}
                                        defaultValue={seccion.valor}
                                      />
                                    </div>
                            case 'titulo':
                              return <div className="parrafo">
                                       <i className="fas fa-trash delete" onClick={(e) => this.handleDeleteElement(e, seccion.id)}></i>
                                       <textarea id={seccion.id} name="subtitulo" className="agregar-subtitulo" defaultValue={seccion.valor} />
                                     </div>
                            case 'imagen':
                              return <div className="parrafo">
                                <input id={seccion.id} type="text" name="imagen" className="agregar-imagen" defaultValue={seccion.valor} />
                              </div>
                            case 'video':
                              return <div className="parrafo">
                                <input id={seccion.id} type="text" name="video" className="agregar-video" defaultValue={seccion.valor} />
                              </div>
                            case 'titulo poema':
                              return <div key={seccion.id} className="seccion poemario">{seccion.valor}</div>
                            case 'verso':
                              return <div key={seccion.id} className="texto poemario">{seccion.valor}</div>
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
