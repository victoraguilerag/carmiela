import React from 'react'
import Simbolos from './Simbolos.js'
import perfil from '../../Assets/daniela.jpg'
function Aside () {
  return (
    <div className="aside">
      <div className="redes">
        <img src={perfil} width="50px" height="50px" alt="perfil" className="perfil"/>
        <h3>- SÍGUEME -</h3>
        <Simbolos />
      </div>
    </div>
  )
}

export default Aside
