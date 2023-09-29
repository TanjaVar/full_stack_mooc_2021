import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

// gets all objects from server
const getAll = () => {
    return axios.get(baseUrl)
}

// creates new note object to server
const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

// updates note importance
const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, create, update }