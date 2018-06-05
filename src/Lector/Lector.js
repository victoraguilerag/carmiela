import React, { Component } from 'react'
import Aside from '../Contenido/components/Aside.js'
import Articulo from '../Contenido/components/NewArticulo.js'
import { connect } from 'react-redux'

class Lector extends Component {
  render () {
    return (
      <div className="Contenido" >
  			<Articulo articulo={this.props.articulo} />
  			<Aside />
  		</div>
    )
  }
}

function mapStateToProps (state,props) {
  let id = Number(props.match.params.id)
  return {
    articulo: state.articulos[id]
  }
}

export default connect(mapStateToProps)(Lector)
