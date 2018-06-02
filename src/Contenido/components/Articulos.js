import React from 'react'
import { connect } from 'react-redux'
import Previa from '../../Previa/Previa.js'

function Articulos (props) {
  return (
    <div className="Articulos">
      {
        props.articulos.map((articulo, index)=>{
          return <Previa id={articulo.id} titulo={articulo.titulo} data={articulo.previa} portada={articulo.portada} key={index}/>
        })
      }
    </div>
  )
}

function mapStateToProps(state, props) {
	return {
		articulos: state.articulos
	}
}


export default connect(mapStateToProps)(Articulos)
