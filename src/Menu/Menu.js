import React from 'react'

function Menu () {
	return (
		<ul className="Menu">
			<li className="item">INICIO</li>
			<div className="punto"></div>
			<li className="item">CONTACTO</li>
			<div className="punto"></div>
			<li className="item">EXPERIENCIA</li>
			<li className="mobile">
				<i class="material-icons">menu</i>
				Menu
			</li>
		</ul>
	)
}

export default Menu