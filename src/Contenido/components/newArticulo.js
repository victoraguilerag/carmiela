import React from 'react'
import Api from '../../Api/api.js'


function Articulos (props) {
  return (
    <div className="Articulos">
      <div className="Articulo">
        <div id={props.articulo.portada} className="imagen"></div>
        <h2 className="titulo"><a>{props.articulo.titulo}</a></h2>
        {
          props.articulo.cuerpo.map((seccion)=>{
            const { fragmento } = seccion
            switch (seccion.tipo) {
              case 'texto':
                return seccion.fragmento.map((texto)=>{
                  return <div key={texto} className="texto"> {texto} </div>
                })
                break;
              case 'titulo':
                return <div key={fragmento} className="seccion">{fragmento}</div>
                break;
              case 'imagen':
                return <div key={fragmento} id={fragmento} className="imagenArticulo"/>
                break;
              case 'video':
                return <iframe width="854" className="video" height="480" src={`https://www.youtube.com/embed/${fragmento}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                break;
              case 'titulo poema':
                return <div key={fragmento} className="seccion poemario">{fragmento}</div>
                break;
              case 'verso':
                return <div key={fragmento} className="verso texto">{fragmento}</div>
                break;
              default:
              break;
            }
          })
        }
  		</div>
    </div>
  )
}

export default Articulos
