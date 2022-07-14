const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const { heartBtn, saveEmail } = require('./controller')
app.get('/api/heart', heartBtn)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})

app.post('/api/email', saveEmail)



const port = process.env.PORT ||5501

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

