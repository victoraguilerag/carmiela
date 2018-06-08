import React from 'react'
import { connect } from 'react-redux'
import perfil from '../Assets/daniela.jpg'

function Experiencia (props) {
	const { educacion, profesional } = props.experiencia
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
							switch (seccion.tipo) {
								case 'subseccion':
									return <div className="subseccion">{seccion.fragmento}</div>
									break;
								case 'contenido':
									return seccion.fragmento.map((titulo)=>{
										return <p>{ titulo }</p>
									})
								default:
									return null
							}
						})
					}
					<div className="seccion">RESUMEN PROFESIONAL</div>
					{
						profesional.map((trabajo) => {
							return (
								<div>
									<div className="subseccion">
										{trabajo.nombre} /
										{trabajo.link.map((link)=>{
											return (
												<span>
													<a href={link.url} target="_blank" rel="noopener noreferrer"> {link.nombre}</a> /
												</span>
											)
										})}
										- { trabajo.periodo } (<a href={trabajo.social.url} target="_blank" rel="noopener noreferrer">{trabajo.social.nombre}</a>)
									</div>
									<p>{trabajo.descripcion}</p>
									{
										trabajo.posiciones.map((posicion)=>{
											return (
												<span>
													<ul>
														<li>
															<strong>{posicion.cargo} </strong>
															{posicion.resumen}
														</li>
													</ul>
													{
														posicion.descripcion.map((contenido)=>{
															return (
																<p> {contenido}</p>
															)
														})
													}
												</span>
											)
										})
									}
								</div>
							)

						})
					}
					<p>Agencia especializada en gestión de redes sociales y producción de contenido digital localizada en Lechería, Anzoátegui. Excelente reputación en la zona, en expansión hacia Colombia y Estados Unidos.</p>
					<ul>
						<li><strong>Guionista:</strong> Creación de hasta 20 guiones por semana para la marca <strong>Knowmore</strong> en Español en <a href="" target="_blank" rel="noopener noreferrer">Facebook</a> e <a href="https://www.facebook.com/KnowMoreEspanol/" target="_blank" rel="noopener noreferrer">Instagram</a>. Redacción de contenido literario, elección de clips y música para el material audiovisual. Guiones traducidos al inglés y portugués.</li>
					</ul>
					<p>Específicamente en categorías como religión, civilizaciones, cuerpo y fitness, sexo, estilo, nutrición, mente, amor, familia, quotes (piezas sobre poemas y extractos literarios), análisis (estudio de temas culturales), íconos (perfiles de personalidades de la pintura, música, moda, entre otros) y Storytelling.</p>
					<p>Parte del equipo que creó la personalidad de la marca y el manual de estilo aplicando estrategias de branding y benchmarking, enfocados en superar nuestra competencia para entonces: @CulturaColectiva, @Playground.</p>
					<p>Se trabajó a través de plataformas web (Slack, Google Drive, Trello) en tres países distintos: Lechería, Venezuela (Producción), Miami, Estados Unidos (Edición) y Quito, Ecuador (Postproducción).</p>
					<ul>
						<li><strong>Copywriter: </strong> Redacción de reportajes, noticias, crónicas, storytelling y artículos para la página <a href="http://www.elsubte-rraneo.com/" target="_blank" rel="noopener noreferrer">elsubte-rráneo.com</a> sobre cultura, sexo, sociedad, drogas, turismo, feminismo y estilos de vida.</li>
					</ul>
					<div className="subseccion">Revista Oráculo – Marzo 2017  (<a href="https://www.instagram.com/oraculomagazine/" target="_blank" rel="noopener noreferrer">@oraculomagazine</a>)</div>
					<p>Proyecto editorial con entrevistas, crónicas, artículos de entretenimiento y opinión principalmente sobre política, poder, sexo, drogas, música, arte y religión. Primera edición estrenada en Barcelona, estado Anzoátegui, con alcance nacional a través de su exposición web.</p>
					<ul>
						<li><strong>Editora en jefe:</strong> Producción de ideas e investigaciones para el material escrito. Creación de la línea editorial.</li>
					</ul>
					<ul>
						<li><strong>Redactora:</strong> Producción de piezas sobre religión y sexualidad.</li>
					</ul>
					<div className="subseccion">Culturizando / Cápsula Cinéfila  – Enero 2017 (<a href="https://www.instagram.com/capsulacinefila/" target="_blank" rel="noopener noreferrer">@capsulacinefila)</a></div>
					<p>Multiplataforma web que abarca Cultura General, Ambiente, Gramática y Ortografía, Actualidad, Curiosidades, Vida, Cine, Sexualidad, Entretenimiento, Historia, Tecnología, Ciencia, Arte y lo más destacado del acontecer internacional.</p>
					<ul>
						<li><strong>Copywriter:</strong> Redacción de noticias, reseñas, especiales y tops dedicados al cine para Cápsula Cinéfila, blog de <a href="http://culturizando.com/" target="_blank" rel="noopener noreferrer">culturizando.com</a> , producción de posts sobre el material para Instagram, Twitter y Facebook.</li>
					</ul>
					<div className="subseccion">Entre Largos y Cortos de Oriente – Septiembre 2016 (<a href="https://www.instagram.com/festivalcinelco/" target="_blank" rel="noopener noreferrer">@festivalcinelco</a>)</div>
					<p>Festival de cine oriental que expone y premia obras cinematográficas en Anzoátegui, Monagas, Nueva Esparta y Sucre. Ofrece talleres y exposiciones públicas para comunidades de bajos recursos incentivando la cultura de cine nacional.</p>
					<ul>
						<li><strong>Organizadora / Equipo Creativo:</strong>Preparación y promoción de la ceremonia de clausura del Festival, un evento con presentaciones musicales, números de teatro y pintura en vivo en el Centro Comercial Plaza Mayor. Parte del equipo de protocolo y calidad durante las proyecciones gratuitas.</li>
					</ul>
					<div className="subseccion">Adulto Joven 99.5FM – Marzo 2016 (<a href="https://www.instagram.com/lacupula995/" target="_blank" rel="noopener noreferrer">@lacupula995</a>)</div>
					<p>Emisora local de música contemporánea.</p>
					<ul>
						<li><strong>Productora / Conductora Secundaria:</strong>Creación de guiones originales para La Cúpula, un programa de música alternativa y actualidad pop. Comentarios dentro del espacio radial con buena respuesta del público en redes sociales.</li>
					</ul>
					<div className="subseccion">La Mega 100.9FM - Enero 2015 (<a href="https://www.instagram.com/lamega1009/" target="_blank" rel="noopener noreferrer">@lamega1009</a>)</div>
					<p>Emisora del circuito nacional Unión Radio.</p>
					<ul>
						<li><strong>Productora:</strong> Guionista de El Set con María Fernanda Orta, programa musical de La Mega, Puerto La Cruz. Lunes a viernes de 8:30 a 10:00pm durante dos años. Redacción de noticias, festivales, lanzamientos, tops y reseñas.</li>
					</ul>
					<h2 className="titulo" id="skills">SKILLS</h2>
					<div className="subseccion">Español: Nativo.</div>
					<div className="subseccion">Inglés: Avanzado.</div>
					<p>Escuela Básica bilingüe Vicente Campo Elías (2001 – 2009).</p>
					<div className="subseccion">Portugués: Básico.</div>
					<p> Tutoría privada en Macaé y Río de Janeiro, Brasil.</p>
					<div className="subseccion">Eficiente:</div>
					<p> Word, Power Point, Excel, Photoshop, Adobe Audition, WordPress, Slack, Trello.</p>
					<div className="subseccion">Principiante:</div>
					<p>Sony Vegas, Adobe Illustrator.</p>
					<div className="subseccion">Otros skills:</div>
					<p><strong>Escritura literaria</strong> (novelas, poesía y cuentos)</p>
					<p><strong>Fotografia</strong>(artística y publicitaria)</p>
					<a href="#exp" className="up">
						<i className="fas fa-arrow-up"></i>
					</a>
			</div>
			</div>
		</div>
	)
}

function mapStateToProps(state, props) {
	return {
		experiencia: state.experiencia
	}
}

export  default connect(mapStateToProps)(Experiencia)
