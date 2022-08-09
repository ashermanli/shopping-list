import axios from 'axios'

// const baseURL = 'http://localhost:3001/api/items'
const baseURL = '/api/items'

const getAll = () =>{
	const request = axios.get(baseURL)

	return request.then(response => response.data)
}

const create = (newItem) => {
	const request = axios.post(baseURL, newItem)

	return request.then(response => response.data)
}

const remove = (id) =>{
	const request = axios.delete(`${baseURL}/${id}`)

	return request.then(response => response.data)
}

export default 
{getAll, create, remove}