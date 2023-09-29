// web service module
const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method)
	console.log('Path: ', request.path)
	console.log('Body: ', request.body)
	console.log('-----')
	next()
}

app.use(cors())
//json parser
app.use(express.json())
// middleware
app.use(requestLogger)

// middleware for unknown endpoint
const unknownEndpoint = (request, response) => {
	response.status(404).send({error: 'Unknown endpoint'})
}

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

app.get('/api/notes', (request, response) => {
	response.json(notes)
})

//handles HTTP GET requests
app.get('/api/notes', (request, response) => {
	const id = Number(request.params.id)
	// console.log(id)
	const note = notes.find(note => note.id === id)
	// console.log(note)
	if (note) {
		response.json(note)
	} else {
		response.status(404).end()
	}
})

// 204 no content
app.delete('/api/notes/:id', (request, response) => {
	const id = Number(request.params.id)
	notes = notes.filter(note => note.id === id )
	response.status(204).end()
})

const generateId = () => {
	const maxId = notes.length > 0
	? Math.max(...notes.map(n => n.id))
	: 0
	return maxId + 1
}

// post data to db
app.post('/api/notes/', (req, res) => {
	const body = req.body
	
	if (!body.content) {
		return response.status(400).json(
			{ 
				error: 'content missing'
			}
		)
	}

	const note = {
		conetent: body.content,
		improtant: body.important || false,
		id: generateId()
	}

	notes = notes.concat(note)

	res.json(note)
})


// if routes give error response
app.use(unknownEndpoint)

const PORT = 3002
app.listen(PORT, () => {
	console.log(`Server running in port ${PORT}`)
})