var path = process.cwd();

// this regex will match natural language date input in the url
var nat_lang_match = /^\/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sept?|September|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(%20)*?[0-3]?[0-9],?(%20)*?[0-9]+$/;
var unix_timestamp = /^\/[+-]?[0-9]+$/;

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.sendFile(path + '/public/index.html');
	});

	app.get(nat_lang_match, function(req, res) {
		// TODO: call date-converting controller
		res.json({dummy: 'text'});
	});

	app.get(unix_timestamp, function(req, res) {
		// TODO: call date-converting controller
		res.json({foo: 'bar'});
	});
};
