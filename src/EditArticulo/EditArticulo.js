import React, {Component} from 'react'
import { Query, Mutation } from 'react-apollo'
import ImagePicker from '../ImagePicker/components/image-picker'
import gql from 'graphql-tag'

const EDIT_ARTICULO = gql`
    mutation EditarArticulo($articuloId: Int!, $articulo: ArticuloEditable){
      articuloEdit(articuloId: $articuloId, articulo: $articulo){
        id
        titulo
      }
    }
  `

const imagenes = [
  'chinos',
  'boda',
  'wasted',
  'pizza',
  'fiesta',
  'hell',
  'varas',
  'poemario',
  'flowerboy',
  'flowerboy-2',
  'flowerboy-3',
  'flowerboy-5',
  'scientology',
  'scientology-1',
  'scientology-2',
  'brazil',
  'brazil-1',
  'brazil-2',
  'brazil-3',
  'brazil-4',
  'brazil-5',
  'brazil-6',
  'brazil-7',
  'revolucion',
  'revolucion-1',
  'revolucion-2',
  'revolucion-3',
  'illuminati',
  'benito',
  'benito-1',
  'benito-2',
  'hero',
  'experiencia',
]

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
                      <div id="portada">
                        <div id={data.articulo.portada} className="imagenArticulo">
                          <ImagePicker imagenes={imagenes} />
                        </div>
                      </div>
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
                                tipo: seccion.tipo,
                                valor: (seccion.tipo === 'imagen')
                                ?
                                  newData.childNodes[0].id
                                :
                                  newData.value,
                              })
                            }
                          })
                          const titulo = document.getElementById("titulo")
                          const portada = document.getElementById("portada")
                          await editArticulo({
                            variables: {
                              articuloId: data.articulo.id,
                              articulo: {
                                titulo: titulo.value,
                                cuerpo: cuerpo,
                                portada: portada.childNodes[0].id,
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
                              return <div key={index} className="parrafo">
                                       <i className="fas fa-trash delete" onClick={(e) => this.handleDeleteElement(e, seccion.id)}></i>
                                       <textarea id={seccion.id} name="subtitulo" className="agregar-subtitulo" defaultValue={seccion.valor} />
                                     </div>
                            case 'imagen':
                              return <div key={index} id={seccion.id}>
                                <div id={seccion.valor} className="imagenArticulo">
                                  <ImagePicker imagenes={imagenes} />
                                </div>
                              </div>
                            case 'video':
                              return <div key={index} className="parrafo edicion">
                                <input id={seccion.id} type="text" name="video" className="agregar-video" defaultValue={seccion.valor} />
                                <iframe key={seccion.valor} width="854" title={seccion.valor} className="video" height="480" src={`https://www.youtube.com/embed/${seccion.valor}`} frameBorder="0" allowFullScreen></iframe>
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
