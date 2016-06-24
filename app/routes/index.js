var path = process.cwd();
var DateConverter = require(path + '/app/controllers/dateConverter.js');

// this regex will match natural language date input in the url
var nat_lang_match = /^\/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sept?|September|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(%20)*?[0-3]?[0-9],?(%20)*?[0-9]+$/;
// this regex will match any unix timestamp in the url, even if negative
var unix_timestamp = /^\/[+-]?[0-9]+$/;

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.sendFile(path + '/public/index.html');
	});

	var dateConverter = new DateConverter();

	// matches date strings in format "/Month DD, YYYY"
	app.get(nat_lang_match, function(req, res) {
		dateConverter.timestampFromString(req, res);
	});

	// matches unix timestamps in format "/#####..."
	app.get(unix_timestamp, function(req, res) {
		dateConverter.timestampFromUnix(req, res);
	});

	// should catch any other routes not covered
	app.get('/:anything_else', function(req, res) {
		res.json({unix: null, natural: null});
	});
};
