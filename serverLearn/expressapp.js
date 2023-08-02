const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./blogroutes/blogRoutes')

//launching a server on port no. 3002
app.listen(3002);

//making a connection to mongoose or mongodb database
const dbUrl = "paste here your MongoDB URL"
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>console.log('connected to database')) //confirming that our database is connnected.
.catch((err)=>console.log(err)) //if it is not connected then it wil  show a error.

//settig up Ejs engine its also called view engine and then reallocating path to htmlfiles
app.set('view engine', 'ejs');
app.set('views', 'htmlfiles');

//middle-ware-> aane me middleware.md ma samjayu che
app.use(express.urlencoded({extended: true}));


//Routes
//routing our first index.ejs from client side.
app.get('/', (req,res)=>{
    res.redirect('/blogs');
})

//routing another client side file about.html.
app.get('/about', (req,res)=>{
    res.render('about')
})


//blog routes: 
app.use('/blogs', blogRoutes);

//by default page
app.use((req, res)=>{
    res.render('404');
})
