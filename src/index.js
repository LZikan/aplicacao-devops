const express = require('express') 
const cors = require('cors')
const app = express()

const port = 3333

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
    })

app.listen(port, () => console.log('O servidor está rodando na porta 3333'))