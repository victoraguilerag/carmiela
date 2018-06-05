import React from 'react'

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
                return fragmento.map(function(parrafo){
                  return <p key={parrafo} className="texto">{parrafo}</p>
                })
              case 'titulo':
                return <div key={fragmento} className="seccion">{fragmento}</div>
              case 'imagen':
                return <div key={fragmento} id={fragmento} className="imagenArticulo"/>
              case 'video':
                return <iframe width="854" title={fragmento} className="video" height="480" src={`https://www.youtube.com/embed/${fragmento}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              case 'titulo poema':
                return <div key={fragmento} className="seccion poemario">{fragmento}</div>
              case 'verso':
                return <div key={fragmento} className="texto poemario">{fragmento}</div>
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
