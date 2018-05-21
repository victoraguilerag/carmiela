import React from 'react'
import Api from '../../Api/api.js'
import {connect} from 'react-redux'


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
                      break;
                    case 1:
                      return fragmento.map(function(parrafo){
                        return (<p key={parrafo} className="texto">{parrafo}</p>)
                      })
                      break;
                    case 2:
                      return (<iframe width="854" height="480" src={`https://www.youtube.com/embed/${fragmento}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>)
                      break;
                  }

                case 'poemario':
                  case 0:
                    return (<div key={fragmento} className="poema">{fragmento}</div>)
                  case 1:
                    return (<div key={fragmento} className="verso">{fragmento}</div>)
                  break;
                default: {
                  switch (index) {
                    case 0:
                      return (<div key={fragmento} className="seccion">{fragmento}</div>)
                      break;
                    case 1:
                      return (<div key={fragmento} id={fragmento} className="imagenArticulo"/>)
                      break;
                    case 2:
                      return fragmento.map(function(parrafo){
                        return (<p key={parrafo} className="texto">{parrafo}</p>)
                      })
                      break;
                    default:
                      return null
                  }
                }

              }

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

function mapStateToProps (state,props) {
  let id = Number(props.match.params.id)
  return {
    articulo: state.articulos[id]
  }
}

export default connect(mapStateToProps)(Articulos)
