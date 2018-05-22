import React from 'react'
import { Link } from 'react-router-dom'

function Previa (props) {
	return (
		<div className="Previa">
			<div src="imagen" id={props.portada} className="imagenPrevia"></div>
			<div class="data-text">
			<h2 className="titulo">
					<Link to={`/articulo/${props.id}`}>{props.titulo}</Link>
			</h2>
			<div className="ref">
				<p className="fecha">17 abril, 2018 </p>
				<span>Deja un comentario</span>
			</div>
			<p className="resumen">
				{props.data} …
				<Link to={`/articulo/${props.id}`} id="extender" className="extender" >Sigue Leyendo</Link>
			</p>
		</div>
		</div>
	)
}


export default Previa
