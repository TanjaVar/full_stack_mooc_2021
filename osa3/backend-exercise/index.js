// web service module
const { response } = require('express')
const express = require('express')
const app = express()

//json parser
app.use(express.json())

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
app.get('/api/notes/:id', (req, res) => {
	const id = Number(req.params.id)
	// console.log(id)
	const note = notes.find(note => note.id === id)
	// console.log(note)
	if (note) {
		res.json(note)
	} else {
		res.status(404).end()
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

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running in port ${PORT}`)
})