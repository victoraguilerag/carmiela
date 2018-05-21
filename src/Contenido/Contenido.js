import React, { Component } from 'react'
import Previa from '../Previa/Previa.js'
import Aside from './components/Aside.js'
import { connect } from 'react-redux'


class Contenido extends Component {
	render() {
		return (
			<div className="Contenido">
				{
					this.props.articulos.map((articulo, index)=>{
						return <Previa id={articulo.id} titulo={articulo.titulo} data={articulo.previa} portada={articulo.portada} key={index}/>
					})
				}
				<Aside />
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	return {
		articulos: state.articulos
	}
}

export default connect(mapStateToProps)(Contenido)
