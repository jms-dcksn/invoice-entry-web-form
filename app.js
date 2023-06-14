const express = require('express')
const path = require('path');


const app = express()
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.render('pages/index', {title: 'Makana Health Finance Portal', message: ``})
})

app.get('/provision', (req, res) => {
    let user;
    if (req.query){
        user = req.query.email
    }
    else { user = '' }
    res.json({ message: `Success! Invoice has been submitted!`})
})

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})