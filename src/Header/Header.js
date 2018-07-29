import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

function Header () {
	return (
		<Query
			query={gql`
				{
					personal{
						nombre
						apellido
					}
				}
			`}
		>
		{({loading, error, data}) => {
			if (loading) return <p>Loading...</p>
			if (error) return <p>Error...</p>

			const { nombre, apellido } = data.personal[0]
			return (
				<div className="header">
					<h1 className="titulo">
						{`${nombre.toUpperCase()} ${apellido.toUpperCase()}`}
					</h1>
					<p className="subtitulo">
						FICCIÓN-CULTURA-LIFESTYLE-REALIDADES
					</p>
				</div>
			)
		}}
		</Query>
	)
}

export default Header
