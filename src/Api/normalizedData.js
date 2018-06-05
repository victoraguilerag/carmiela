import { normalize, schema } from 'normalizr'
import data from './newApi'

console.log(data)

const fragmento = new schema.Entity('fragmento');

const cuerpo = new schema.Entity('cuerpo', {
	cuerpo: [fragmento]
})

const articulos = new schema.Entity('articulos')

const normalizedData = normalize(data, articulos)

console.log(normalizedData)

export default data