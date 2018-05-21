import React from 'react'
import { Link } from 'react-router-dom'

function Previa (props) {
	return (
		<div className="Articulo">
			<div src="imagen" id={props.portada} className="imagen"></div>
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
	)
}


export default Previa
