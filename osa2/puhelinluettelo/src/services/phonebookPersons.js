import axios from 'axios'
const phonebookBaseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(phonebookBaseUrl)
}

const create = (newObject) => {
    return axios.post(phonebookBaseUrl, newObject)
}

const deleteFromPhonebook = (id) => {
    return axios.delete(`${phonebookBaseUrl}/${id}`)
}

const updatePhoneNum = (id, newObject) => {
    return axios.put(`${phonebookBaseUrl}/${id}`, newObject)
}

export default { getAll, create, deleteFromPhonebook, updatePhoneNum }