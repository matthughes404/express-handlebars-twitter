var express = require('express'),
    exphbs  = require('express3-handlebars'),

app = express();

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

var Twit = require('twit');

var T = new Twit({
	consumer_key:         '',
	consumer_secret:      '',
	access_token:         '',
	access_token_secret:  ''
});

app.get('/', function (req, res) {
	var user = 'GenBurnside';
	T.get('statuses/user_timeline', { screen_name: user, count: 20 }, function (err, data, response) {
		console.log('Fetched ' + data.length + ' tweets for ' + user);
		res.render('home', { tweets : data });
	});
});

app.listen(3000);
console.log('Listening on port 3000');
