// web service module
const { response } = require('express')
const express = require('express')
const app = express()

let notes = [
	{
		id: 1,
		content: "HTML is easy",
		important: true
	},
	{
		id: 2,
		content: "Browser can execute only JavaScript",
		important: true
	},
	{
		id: 3,
		content: "GET and POST are the most important methods in HTTP protocol",
		important: true
	}
]

app.get('/', (request, response) => {
	response.send('<h1>Hello World!</h1>')
})

//handles HTTP GET requests
app.get('/api/notes', (req, res) => {
	res.json(notes)
app.get('/api/notes/:id', (req, res) => {
	const id = Number(req.params.id)
	// console.log(id)
	const note = notes.find(note => note.id === id)
	// console.log(note)
	if (note) {
		response.json(note)
	} else {
		response.status(404).end()
	}
})
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running in port ${PORT}`)
})