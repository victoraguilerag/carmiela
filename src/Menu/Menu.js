import React from 'react'
import { NavLink as Link } from 'react-router-dom'

function Menu () {
	return (
		<ul className="Menu">
			<li className="item">
				<Link to="/" exact activeStyle={{ color: 'rgba(70,70,70,1)' }} >ARTICULOS</Link>
			</li>
			<div className="punto"></div>
			<li className="item">
				<Link to="/contacto/" exact activeStyle={{ color: 'rgba(70,70,70,1)' }} >CONTACTO</Link>
			</li>
			<div className="punto"></div>
			<li className="item">
				<Link to="/experiencia" exact activeStyle={{ color: 'rgba(70,70,70,1)' }} >EXPERIENCIA</Link>
			</li>
			<li className="mobile">
				<i className="material-icons">menu</i>
				Menu
			</li>
		</ul>
	)
}

export default Menu
