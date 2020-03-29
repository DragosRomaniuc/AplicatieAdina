const express = require('express'); //librarie pentru creat Server HTTP
const logger = require('morgan'); // Logs
const mongoose = require('mongoose'); // vorbit cu baza de date
const helmet = require('helmet') // protejam serverul http
const bodyparser = require('body-parser');
const createError = require('http-errors'); //librarie care ne ofera mai multe functii cu diferite erori
const routes = require('./routes');
const app = express(); //pune ce are libraria aia in variabila app;

app.use(helmet());

mongoose.connect('mongodb://localhost/aplicatieAdina', {
    useNewUrlParser: true,
    useFindAndModify: false
});

const mongooseConnection = mongoose.connection;
mongooseConnection.on('error',
    console.error.bind(console, 'MongoDB connection error:')
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);


//stim ca serverul nostru de express acum contine doar RUTA 'localhost/'
// 127.0.0.1/ == localhost/
// HTTP -> TCP 
//Daca requestul a venit pe /login, noi in server nu avem nevoie de o ruta /login si ii trimitem eroare
// POST -> localhost/account/createAccount nu mai gaseste nicio ruta si ii intoarce 404
app.use((request, response, next) => next(createError(404)));
//next Te trimite la urmatorul app.use cu ACELASI request la care am adaugat createError()
// request{
//     blabla
//     blabla
//     body: {

//     },
//     error: 404, not found route -> eroare din app.use precedent;
// }

app.use((err, request, response, next) => {
    response.send(err.status || 500);
})

module.exports = app;









