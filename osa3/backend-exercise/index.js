// web service module
const http = require("http")
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
		content: "GET and POST are the most important methids id HTTP protocol",
		important: true
	}
]

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>')
})

app.get('api/notes', (req, res) => {
	res.josn(notes)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)