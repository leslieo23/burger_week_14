var mysql = require('mysql');
var express=require('express');
var handlebars=require('express-handlebars');
var override=require('method-override');
var bodyParser=require('body-parser');

//===========================================

var app= express();
var PORT= process.env.PORT||3001;
var staticContentFolder = __dirname + '/public'

//============================================

app.use(express.static(staticContentFolder));

//============================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//===========================================================

require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);
//===========================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});