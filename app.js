var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
	var feed = [{tweet : "asdfasdf 1", id : 1}, {tweet : "asdfasdf 2", id : 2}];
	console.log(feed);
	res.render('home', { tweets : feed, test : "alskdfjasldkfjasdlkf", count : feed.length });
});

app.listen(3000);

