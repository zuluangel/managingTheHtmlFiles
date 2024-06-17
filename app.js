const express = require('express')
const app = express()
const port = 8080
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send(`It's actually working`)
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/pagina1.html'))
})

app.get('/pagina2', (req, res) =>{
    const name = req.query.name
    const age = req.query.age
    res.sendFile(path.join(__dirname, '/public/pagina2.html'))
})

// app.post('/public/pagina2.html', (req, res) => {
//     const name = req.body.name
//     const age = req.body.age
//     res.redirect('/public/pagina2.html')
    
// })




app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
})



