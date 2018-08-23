import React from 'react'

function ImagePicker(props) {
  console.log(props.imagenes);
  return (
    <div className="imagePicker">
      <div className="imagenes">
      {
        props.imagenes.map(imagen => (
          <div key={imagen} id={imagen} className="imagen" onClick={e => {
            e.target.parentNode.parentNode.parentNode.id = e.target.id
          }} />
        ))
      }
      </div>
    </div>
  )
}

// props.imagenes.map((imagen) => (
//   <div id={imagen} className="imagen" />
// ))
export default ImagePicker
