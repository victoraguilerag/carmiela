import React from 'react'

function Articulos (props) {
  return (
    <div className="Articulos">
      <div className="Articulo">
        <div id={props.articulo.portada} className="imagen"></div>
        <h2 className="titulo"><a>{props.articulo.titulo}</a></h2>
        {
          props.articulo.cuerpo.map((seccion)=>{
            return seccion.map((fragmento, index)=>{
              if(fragmento !== '')
              switch (props.articulo.tipo) {
                case 'peliculas':
                  switch(index) {
                    case 0:
                      return (<div key={fragmento} className="seccion">{fragmento}</div>)
                    case 1:
                      return fragmento.map(function(parrafo){
                        return (<p key={parrafo} className="texto">{parrafo}</p>)
                      })
                    case 2:
                      return (<iframe title={fragmento} width="854" key={fragmento} className="video" height="480" src={`https://www.youtube.com/embed/${fragmento}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>)
                    default:
                      return null
                  }
                case 'poemario':
                  switch(index) {
                    case 0:
                    return (<div key={fragmento} className="seccion poemario">{fragmento}</div>)
                    case 1:
                    return (<div key={fragmento} className="texto">{fragmento}</div>)
                    default:
                    break;
                  }
                  break
                default: {
                  switch (index) {
                    case 0:
                      return (<div key={fragmento} className="seccion">{fragmento}</div>)
                    case 1:
                      if (fragmento.video) return (<iframe title={fragmento} key={fragmento} width="854" className="video" height="480" src={`https://www.youtube.com/embed/${fragmento.video}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>)
                      return (<div key={fragmento} id={fragmento} className="imagenArticulo"/>)
                    case 2:
                      return fragmento.map(function(parrafo){
                        return (<p key={parrafo} className="texto">{parrafo}</p>)
                      })
                    default:
                      return null
                  }
                }

              }
              return null
            })
          })
        }
        {
          props.articulo.video && <iframe title="video" className="video" width="619px%" height="378.389px" src={props.articulo.video} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        }
  		</div>
    </div>
  )
}

export default Articulos
