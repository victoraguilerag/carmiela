import React from 'react'
import Aside from "../Contenido/components/Aside.js"

function Contacto () {
	return (
		<div className="Contacto">
      <div id="hero" className="hero"></div>
      <div className="Contenido">
        <div className="informacion">
          <h2 className="titulo">Contacto</h2>
          <p>¡Hola!</p>
          <p>¿Quires contactarme directamente? Escríbeme a:</p>
          <p>E-mail: cdanielaveliz@gmail.com</p>
          <p>Teléfono: +58 4249243017</p>
          <p>O envíame un mensaje a través de mis redes:</p>
					<a href="https://www.twitter.com/Carmiela_" target="blank">
            <p>Twitter</p>
          </a>
					<a href="https://www.instagram.com/carmiela_" target="blank">
            <p>Instagram</p>
          </a>
					<a href="https://www.facebook.com/profile.php?id=1323308137" target="blank">
            <p>Facebook</p>
          </a>
        </div>
        <Aside />
      </div>
		</div>
	)
}

export default Contacto
