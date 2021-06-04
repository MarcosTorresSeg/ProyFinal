const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//Extra-Settings
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method')); //Enviar metodos tipo PUT/DELETE/POST ...
app.use(session({
    secret: 'coti',
    resave: true,
    saveUninitialized: true
}));

//Variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server Ready

app.listen(app.get('port'), () =>{
    console.log('Server Ready', app.get('port'));
});