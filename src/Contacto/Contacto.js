import React from 'react'
import Aside from "../Contenido/components/Aside.js"
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

function Contacto () {
	return (
		<Query
			query={gql`
				{
				  personal{
				    correo
				    telefono
				    redes{
				      nombre
				      url
				    }
				  }
				}
			`}
		>
			{({loading, error, data}) => {
				if (loading) return <p> Loading... </p>
				if (error) return <p> Error... </p>

				const { personal } = data
				const { correo, telefono, redes } = personal[0]
				return (
					<div className="Contacto">
						<div id="hero" className="hero"></div>
						<div className="Contenido">
							<div className="informacion">
								<div className="resumen">
									<h2 className="titulo">Contacto</h2>
									<p>¡Hola!</p>
									<p>¿Quires contactarme directamente? Escríbeme a:</p>
									<p>E-mail: {correo}</p>
									<p>Teléfono: {telefono}</p>
									<p>O envíame un mensaje a través de mis redes:</p>
									{
										redes.map((red) => (
											<a key={red.nombre} href={red.url} target="blank">
												<p>{red.nombre}</p>
											</a>
										))
									}
								</div>
							</div>
							<Aside />
						</div>
					</div>
				)
			}}
		</Query>
	)
}

export default Contacto
