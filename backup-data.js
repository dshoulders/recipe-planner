var jsonfile = require('jsonFile')
var fs = require('fs')
var pad = require('left-pad')

module.exports = function backupData(onSuccess, onError){

	var now = new Date()
	var dateTimeString = [
		now.getFullYear(), 
		now.getMonth() + 1, 
		now.getDate(), 
		now.getHours(), 
		now.getMinutes(), 
		now.getSeconds()
		].map(function(section){ 
			return pad(section, 2, 0); 
		}).join('_')		
	var file = './data.json'
	var backupFileName = './backup/' + dateTimeString + '.json'

	jsonfile.readFile(file, function(err, obj) {
		fs.writeFile(backupFileName, JSON.stringify(obj), function(err) {
			if(err){
				onError(err)
			} else {
				onSuccess()
			}	
		})
	})
}