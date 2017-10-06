var express = require('express');
var bodyParser = require('body-parser'); 

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

var testroutes = require('./controllers/putburger.js');


app.use('/', routes);

app.use("/", testroutes);

app.listen(port);
