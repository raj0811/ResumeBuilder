const express = require('express')
const port=8012;
const app = express()
const expressLayout=require('express-ejs-layouts');


var bodyParser = require('body-parser')

app.use(express.static('assets'));

app.set('view engine','ejs')
app.set('views', './views');


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}));

app.use(expressLayout)
app.use('/', require('./routers'));

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server');
    }
    console.log(`Server is ruuning on port ${port}`);
})