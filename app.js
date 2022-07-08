const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();

const viewsPath = path.join(__dirname, 'templates/views');
const partialPath = path.join(__dirname, 'templates/partials');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

app.get('', (req, res) => {
    res.render('index');
});

// app.get('', (req, res) => {
//     res.render('index');
// }); 


app.listen(3000, () => {console.log('successful connection')});