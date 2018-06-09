import React from 'react'
import { connect } from 'react-redux'
import perfil from '../Assets/daniela.jpg'

function Experiencia (props) {
	const { educacion, profesional, skills } = props.experiencia
	console.log(educacion);
	return (
		<div className="">
			<div id="experiencia" className="bExperiencia">
				<div className="expHeader">
					<a href="#exp" className="expElement">Experiencia</a>
					<a href="#skills" className="expElement">Skills</a>
				</div>
				<div className="experiencia" id="exp">
					<img src={perfil} width="50px" height="50px" alt="perfil" className="perfil"/>
					<h2 className="titulo">EXPERIENCIA</h2>
					<div className="seccion">EDUCACION</div>
					{
						educacion.map((seccion)=>{
							return <Educacion data={seccion} />
						})
					}
					<div className="seccion">RESUMEN PROFESIONAL</div>
					{
						profesional.map((trabajo) => {
							return <Trabajo trabajo={trabajo} />
						})
					}
					<h2 className="titulo" id="skills">SKILLS</h2>
					{
						skills.map((fragmento) => {
							return <Skill skill={fragmento} />
						})
					}
					<a href="#exp" className="up">
						<i className="fas fa-arrow-up"></i>
					</a>
			</div>
			</div>
		</div>
	)
}

function Educacion (props) {
	const { data } = props
	switch (data.tipo) {
		case 'subseccion':
			return <div key={data.fragmento} className="subseccion">{data.fragmento}</div>
		case 'contenido':
			return data.fragmento.map((titulo)=>{
				return <p key={titulo}>{ titulo }</p>
			})
		default:
			return null
	}
}

function Trabajo (props) {
	const { trabajo } = props
	return (
		<div key={trabajo.link}>
			<div className="subseccion">
				{trabajo.nombre}
				{
					trabajo.link &&
					trabajo.link.map((link)=>{
						return (
							<span key={link.url}>
								<a href={link.url} target="_blank" rel="noopener noreferrer"> {link.nombre}</a> /
							</span>
						)
					})}
				- { trabajo.periodo } (<a href={trabajo.social.url} target="_blank" rel="noopener noreferrer">{trabajo.social.nombre}</a>)
			</div>
			<p>{trabajo.descripcion}</p>
			{
				trabajo.posiciones &&
				trabajo.posiciones.map((posicion)=>{
					return (
						<span key={posicion.cargo}>
							<ul>
								<li>
									<strong>{posicion.cargo} </strong>
									{
										posicion.resumen.map((seccion)=>{
										switch(seccion.tipo) {
											case'texto':
												return seccion.fragmento
											case'link':
												return <a key={seccion.url} href={seccion.url} target="_blank" rel="noopener noreferrer">{seccion.nombre}</a>
											default:
											return null
										}
									})}
								</li>
							</ul>
							{
								posicion.descripcion &&
								posicion.descripcion.map((seccion)=>{
									switch(seccion.tipo) {
										case'texto':
										return <p key={seccion.fragmento}> {seccion.fragmento} </p>
										case'link':
										return <a key={seccion.url} href={seccion.url} target="_blank" rel="noopener noreferrer"> {seccion.nombre} </a>
										default:
										return null
									}
								})
							}
						</span>
					)
				})
			}
		</div>
	)
}

function Skill (props) {
	const { skill } = props
	return (
		<span>
			<div className="subseccion">{skill.seccion}</div>
			<p><strong>{skill.encabezado}</strong>{skill.descripcion}</p>
		</span>
	)
}

function mapStateToProps(state, props) {
	return {
		experiencia: state.experiencia
	}
}

export  default connect(mapStateToProps)(Experiencia)
