const express = require('express') 
const cors = require('cors')
const app = express()

const port = 3333

const data = {
    'integrantes':[
        {'nome':'Luis Felipe Rodrigues Barbosa'},
        {'nome':'Lucas Zikan da Silva Binhotti'},
        {'nome':'Luiz Otavio Amboni'},
    ],
}

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/integrantes', (req, res) => {
    res.json(data)
})

app.listen(port, () => console.log('O servidor está rodando na porta 3333'))