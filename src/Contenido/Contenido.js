import React, { Component } from 'react'
import Aside from './components/Aside.js'
import Articulos from './components/Articulos.js'

class Contenido extends Component {
	render() {
		return (
			<div className="Contenido">
				<Articulos />
				<Aside />
			</div>
		)
	}
}


export default Contenido
