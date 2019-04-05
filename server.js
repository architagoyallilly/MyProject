const express = require('express');
const app = express();
const expbs = require('express-handlebars');

app.engine('handlebars' , expbs());
app.set('view handlebars' , 'handlebars');
app.use('/public',express.static('public'));

app.get('/',(req, res) => {
    res.render('index.handlebars'); 
});

app.get('/about',(req, res) => {
    res.render('about.handlebars',{
        title: 'archita goyal' ,
        isDisplay: undefined
    }); 
});



app.listen(4000 , () => {
console.log("server is startiing" ,4000); 
})