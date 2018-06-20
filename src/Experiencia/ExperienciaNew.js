import React from 'react'
import perfil from '../Assets/daniela.jpg'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

function Experiencia (props) {
	return (
		<Query
			query={gql`
				{
				  experiencia{
				    educacion{
				      entidad
				      titulo
				      periodo
				    }
				    profesional{
				      nombre
				      periodo
				      descripcion
				      social{
				        nombre
				        url
				      }
				      link{
				        nombre
				        url
				      }
				      posiciones{
				        cargo
				        resumen{
				          tipo
				          fragmento
				          nombre
				          url
				        }
				        descripcion{
				          tipo
				          fragmento
				        }
				      }
				    }
						skills{
							principales{
								skill
								descripcion
							}
							secundarios{
								skill
								descripcion
							}
						}
				  }
				}
			`}
		>
			{({loading, error, data}) => {
				if (loading) return <p> Loading... </p>
				if (error) return <p> Error... </p>
				const { educacion, profesional, skills } = data.experiencia[0]
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
									educacion.map((seccion, index)=>{
										return <Educacion key={index} data={seccion} />
									})
								}
								<div className="seccion">RESUMEN PROFESIONAL</div>
								{
									profesional.map((trabajo, index) => {
										return <Trabajo key={index} trabajo={trabajo} />
									})
								}
								<h2 className="titulo" id="skills">SKILLS</h2>
								{
									skills.principales.map((fragmento, index) => {
										return <Skill key={index} skill={fragmento} />
									})
								}
								{
									skills.secundarios.map((fragmento, index) => {
										return <Skill key={index} skill={fragmento} />
									})
								}
								<a href="#exp" className="up">
									<i className="fas fa-arrow-up"></i>
								</a>
						</div>
						</div>
					</div>
				)
			}}
		</Query>
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
	const {
		link,
		nombre,
		social,
		posiciones,
		periodo,
		descripcion
	} = trabajo
	return (
		<div key={link}>
			<div className="subseccion">
				{nombre}
				{
					link &&
					link.map((link)=>{
						return (
							<span key={link.url}>
								<a href={link.url} target="_blank" rel="noopener noreferrer"> {link.nombre}</a> /
							</span>
						)
					})}
				- { periodo } (<a href={social.url} target="_blank" rel="noopener noreferrer">{social.nombre}</a>)
			</div>
			<p>{descripcion}</p>
			{
				posiciones &&
				posiciones.map((posicion)=>{
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
			<div className="subseccion">{skill.skill}</div>
			<p><strong>{skill.encabezado}</strong>{skill.descripcion}</p>
		</span>
	)
}

export default Experiencia
