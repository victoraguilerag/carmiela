import React from 'react'

function Articulo () {
	return (
		<div className="Articulo">
			<div src="imagen" id="chinos" className="imagen"></div>
			<h2 className="titulo">LAS SOBRAS DE CHINA: MUJERES QUE NO SE HAN CASADO ANTES DE LOS 30</h2>
			<div className="ref"> 
				<p className="fecha">17 abril, 2018 </p>
				<span>Deja un comentario</span>
			</div>
			<p className="resumen"> En China, si eres una mujer soltera antes de llegar a tus 30, eres oficialmente un fracaso. O al menos, una persona menos valiosa, un mal innecesario que sólo trae vergüenza a la familia. ¿Suena demasiado radical? Pues en esta sociedad asiática es normal y el mismo Ministro de Educación de ese país le dio …
				<a id="extender" class="extender">Sigue Leyendo</a>
			</p>
		</div>
	)
}

export default Articulo