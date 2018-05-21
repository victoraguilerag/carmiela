import React from 'react'
import Header from '../Header/Header.js'
import Menu from '../Menu/Menu.js'
import Footer from '../Footer/Footer.js'

function Layout (props) {
	return (
		<div className="Layout">
			<Header />
			<Menu />
			{props.children}
			<Footer />
		</div>
	)
}

export default  Layout
