const express = require( 'express' );
const app = express(); // creates an instance of an express application
var http = require('http');
const nunjucks= require('nunjucks');
const routes = require('./routes');
app.use('/', routes);

app.listen(3000, function() {
    console.log("server listening on port 3000");
})

app.use(function (req,res,next) {
  console.log("request sent");
  console.log(req.path,req.method);
  next();
});

app.get('/', function (req, res) {
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
res.render( 'index', {title: 'Hall of Fame', people: people} );

});


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

