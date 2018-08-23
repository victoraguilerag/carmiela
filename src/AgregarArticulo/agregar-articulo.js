import React,{Component} from 'react'
import ImagePicker from '../ImagePicker/components/image-picker'

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

class AgregarArticulo extends Component {
  state = {
    fragmentos: [],
  }

  handleAddFragmento = (tipo) => {
    this.setState({
      fragmentos: [
        ...this.state.fragmentos,
        {
          id: this.state.fragmentos.length + 1,
          tipo: tipo,
        },
      ]
    })
  }

  textAreaAdjust = e => {
    if(e.key !== "Backspace"){
      e.target.style.height = (e.target.scrollHeight - 2)+"px";
    }
  }

  render () {
    return(
      <div className="Articulos agregar">
        <input type="submit" className="floatButton" value="Guardar Articulo" onClick={() => {
          let fecha = document.getElementById('fecha')
          let portada = document.getElementById('portada')
          let titulo = document.getElementById('titulo')
          console.log(fecha.value);
          console.log(portada.childNodes[0].id);
          console.log(titulo.value);
          console.log(this.state);
          this.state.fragmentos.map(elemento => {
            let fragmento = document.getElementById(elemento.id)
            console.log(fragmento);
          })
        }}/>
        <div className="herramientas">
          <div className="herramienta" onClick={() => this.handleAddFragmento('parrafo')}>Texto</div>
          <div className="herramienta" onClick={() => this.handleAddFragmento('subtitulo')}>Subtitulo</div>
          <div className="herramienta" onClick={() => this.handleAddFragmento('imagen')}>Imagen</div>
          <div className="herramienta" onClick={() => this.handleAddFragmento('video')}>Video</div>
        </div>
        <div className="Articulo nuevo">
          <div
            id="contenedor"
            ref={ref=>{
              this.contenedor = ref
            }}
          >
          <div className="parrafo">
            <label htmlFor="titulo">Fecha</label>
            <input id="fecha" type="date" onChange={this.updateElement} className="agregar-fecha"/>
          </div>
          <label>Imagen</label>
          <div id="portada" className="portada">
            <div id="imagenPortada" className="imagenArticulo">
              <ImagePicker imagenes={imagenes} />
            </div>
          </div>
          <div className="parrafo">
            <label htmlFor="titulo">Titulo</label>
            <textarea id="titulo" onChange={this.updateElement} className="agregar-titulo"/>
          </div>
          {
            this.state.fragmentos.map((parrafo, index) => {
              switch (parrafo.tipo) {
                case 'parrafo':
                  return (
                    <div key={index} className="parrafo">
                      <i className="fas fa-trash delete" onClick={(e) => this.handleDeleteElement(e, index)}></i>
                      <label htmlFor="parrafo">Parrafo</label>
                      <textarea
                        id={parrafo.id}
                        onChange={this.updateElement}
                        onKeyUp={e => this.textAreaAdjust(e)}
                        style={{ minHeight: '150px'}}
                      />
                    </div>
                  )
                case 'subtitulo':
                  return (
                    <div key={index} className="parrafo">
                       <i className="fas fa-trash delete" onClick={(e) => this.handleDeleteElement(e, index)}></i>
                       <label htmlFor="subtitulo">Subtitulo</label>
                       <textarea id={parrafo.id} name="subtitulo" className="agregar-subtitulo" />
                    </div>
                  )
                case 'imagen':
                  return (
                    <div key={index} id={parrafo.id}>
                      <div id="" className="imagenArticulo">
                        <ImagePicker imagenes={imagenes} />
                      </div>
                    </div>
                  )
                case 'video':
                  return (
                    <div key={index} className="parrafo">
                      <label htmlFor="video">Video</label>
                      <input id={parrafo.id} type="text" name="video" className="agregar-video" />
                    </div>
                  )
                default:
                  return null
              }
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

export default AgregarArticulo
