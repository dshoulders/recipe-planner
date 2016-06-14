var express = require('express')
var app = express()
var jsonfile = require('jsonfile')
var bodyParser = require('body-parser')
var crypto = require('crypto')

var isAuthenticated = function authenticated(req) {
	var authkey = 'fc6bf1640c8df14322d8cb93f60c1e53274a3bb82e5a5c4e42eff31a094e1c13'
	var pwd = req.get('pwd')	
	var hash = pwd ? crypto.createHash('sha256').update(pwd).digest('hex') : null
	
	return hash === authkey
}

app.use('/static', express.static('dist'));

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
	next()
})

app.get('/api/authcheck', function (req, res) {
	res.send({ success: isAuthenticated(req) })
})

app.get('/api/data', function (req, res) {
	res.sendFile( __dirname + "/" + "data.json" )
})

app.get('/*', function (req, res) {
	res.sendFile( __dirname + "/" + "index.html" )
})

app.post('/api/save', function (req, res) {	
	var file = './data.json'
	var obj = req.body
	
	if(isAuthenticated(req)) {
		jsonfile.writeFile(file, obj, function (err) {
			res.send({ success: true })
		})
	} else {
		res.send({ success: false })
	}
})

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3001
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
});