var express = require('express')
var app = express()
var jsonfile = require('jsonfile')
var bodyParser = require('body-parser')

app.use('/static', express.static('dist'));

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
	console.log(req.body) // populated!
	next()
})

app.get('/', function (req, res) {
	res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/api/data', function (req, res) {
	res.sendFile( __dirname + "/" + "data.json" );
})

app.post('/api/save', function (req, res) {
	var file = './data.json'
	var obj = req.body
	
	jsonfile.writeFile(file, obj, function (err) {
		res.send({ success: true })
	})
})


var server = app.listen(3001, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("App listening at http://%s:%s", host, port)

})