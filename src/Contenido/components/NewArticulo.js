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
            const { fragmento } = seccion
            switch (seccion.tipo) {
              case 'texto':
                return fragmento.map(function(pieza){
                  return <p key={pieza.valor} className="texto">{pieza.valor}</p>
                })
              case 'titulo':
                return fragmento.map(function(pieza){
                  return <div key={pieza.valor} className="seccion">{pieza.valor}</div>
                })
              case 'imagen':
                return fragmento.map(function(pieza){
                  return <div key={pieza.valor} id={pieza.valor} className="imagenArticulo"/>
                })
              case 'video':
                return fragmento.map(function(pieza){
                  return <iframe key={pieza.valor} width="854" title={pieza.valor} className="video" height="480" src={`https://www.youtube.com/embed/${pieza.valor}`} frameBorder="0" allowFullScreen></iframe>
                })
              case 'titulo poema':
                return fragmento.map(function(pieza){
                  return <div key={pieza.valor} className="seccion poemario">{pieza.valor}</div>
                })
              case 'verso':
                return fragmento.map(function(pieza){
                  return <div key={pieza.valor} className="texto poemario">{pieza.valor}</div>
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

export default Articulos
