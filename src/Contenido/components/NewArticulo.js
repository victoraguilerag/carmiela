import React from 'react'
import { Link } from 'react-router-dom'

function Articulos (props) {
  return (
    <div className="Articulos">
      <div className="Articulo">
        <Link to={`/articulo/edit/${props.articulo.id}`} className="edit">
          <i className="fas fa-pencil-alt edit"></i>
        </Link>
        <div id={props.articulo.portada} className="imagen"></div>
        <h2 className="titulo"><a>{props.articulo.titulo}</a></h2>
        {

          props.articulo.cuerpo.map((seccion)=>{
            switch (seccion.tipo) {
              case 'texto':
                  return <p key={seccion.valor} className="texto">{seccion.valor}</p>
              case 'titulo':
                  return <div key={seccion.valor} className="seccion">{seccion.valor}</div>
              case 'imagen':
                  return <div key={seccion.valor} id={seccion.valor} className="imagenArticulo"/>
              case 'video':
                  return <iframe key={seccion.valor} width="854" title={seccion.valor} className="video" height="480" src={`https://www.youtube.com/embed/${seccion.valor}`} frameBorder="0" allowFullScreen></iframe>
              case 'titulo poema':
                  return <div key={seccion.valor} className="seccion poemario">{seccion.valor}</div>
              case 'verso':
                  return <div key={seccion.valor} className="texto poemario">{seccion.valor}</div>
              default:
                return null
            }
          })
        }
  		</div>
    </div>
  )
}

export default Articulos
