var path = process.cwd();

// this regex will match natural language date input in the url
var nat_lang_match = /^\/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sept?|September|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(%20)*?[0-3]?[0-9],?(%20)*?[0-9]+$/;
/* Same natural language matching regex but neater for reading I guess:
	/^\/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|
	Jul(?:y)?|Aug(?:ust)?|Sept?|September|Oct(?:ober)?|Nov(?:ember)?|
	Dec(?:ember)?)(%20)*?[0-3]?[0-9],?(%20)*?[0-9]+$/;
*/
var unix_timestamp = /^\/[+-]?[0-9]+$/;

var DateConverter = require(path + '/app/controllers/dateConverter.js');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.sendFile(path + '/public/index.html');
	});

	var dateConverter = new DateConverter();

	app.get(nat_lang_match, function(req, res) {
		dateConverter.timestampFromString(req, res);
	});

	app.get(unix_timestamp, function(req, res) {
		dateConverter.timestampFromUnix(req, res);
	});
};
