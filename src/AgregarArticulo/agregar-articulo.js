import React,{Component} from 'react'

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
        <input type="submit" className="floatButton" value="Guardar Articulo"/>
        <div className="herramientas">
          <div className="herramienta" onClick={() => this.handleAddFragmento('parrafo')}>Texto</div>
          <div className="herramienta" onClick={() => this.handleAddFragmento('subtitulo')}>Subtitulo</div>
          <div className="herramienta" onClick={() => this.handleAddFragmento('imagen')}>Imagen</div>
          <div className="herramienta" onClick={() => this.handleAddFragmento('video')}>Video</div>
        </div>
        <div className="Articulo">
          <div
            id="contenedor"
            ref={ref=>{
              this.contenedor = ref
            }}
          >
          <div className="parrafo">
            <label htmlFor="titulo">Fecha</label>
            <input type="date" onChange={this.updateElement} className="agregar-fecha"/>
          </div>
          <div className="parrafo">
            <label htmlFor="titulo">Titulo</label>
            <textarea onChange={this.updateElement} className="agregar-titulo"/>
          </div>
          {
            this.state.fragmentos.map((parrafo, index) => {
              switch (parrafo.tipo) {
                case 'parrafo':
                  return (
                    <div key={index} className="parrafo">
                      <label htmlFor="parrafo">Parrafo</label>
                      <textarea id={index} onChange={this.updateElement} onKeyUp={e => this.textAreaAdjust(e)}/>
                    </div>
                  )
                case 'subtitulo':
                  return (
                    <div key={index} className="parrafo">
                      <label htmlFor="subtitulo">Subtitulo</label>
                      <textarea id={index} name="subtitulo" className="agregar-subtitulo"/>
                    </div>
                  )
                case 'imagen':
                  return (
                    <div key={index} className="parrafo">
                      <label htmlFor="imagen">Imagen</label>
                      <input id={index} type="text" name="imagen" className="agregar-imagen" />
                    </div>
                  )
                case 'video':
                  return (
                    <div key={index} className="parrafo">
                      <label htmlFor="video">Video</label>
                      <input id={index} type="text" name="video" className="agregar-video" />
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
