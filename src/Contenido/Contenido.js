import React from 'react'
import Articulo from '../Articulo/Articulo.js'

function Contenido () {
	return (
		<div className="Contenido">
			<div className="Articulos">
				<Articulo />
			</div>
			<div className="aside">
				<div className="redes">
					<h3>- SÍGUEME -</h3>
					<div className="simbolos">
						<i class="fab fa-instagram"></i>
						<i class="fab fa-twitter"></i>
						<i class="fab fa-facebook"></i>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contenido