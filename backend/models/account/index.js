// aici vom creaza in baza de date 
// o tablea pentru account ce contine username, email, password, blabla
// TABELA in SQL -> SCHEMA in mongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    nume: { type: String },
    prenume: { type: String },
    email: { type: String },
    createdAt: { type: Date, default: Date.now }
})

const Account = mongoose.model('Account', AccountSchema)

module.exports = Account;