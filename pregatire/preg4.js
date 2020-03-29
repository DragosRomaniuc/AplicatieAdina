
// duminica.js?
//default E o valoare care se adauga by default, AUTOMAT intr-un camp
// daca nu il specificam
// new AccountSchema({
//     username: 'DRAGOS',
//     password: "asd123"
// });

// {
//     username: 'DRAGOS',
//     password: "asd123",
//     createdAt: 29 martie
// }


const router = require('express-promise-router')();

// in documentul asta suntem cu orice request urmeaza moduelul
// localhost/account/
//Ruta principala

// localhost/account/getAllUser 
// localhost/account/createUser 
// localhost/account/deleteUser 






// Am dat copy paste din 
// routes/account/index.js
// GET -> presupunem ca,,, controllerul din acea ruta NU trebuie sa creeze sau modifice nimic, ci doar sa returneze ceva
// POST  -> presupunem/sau stim ca acel controller trbeuie sa creeze ceva 
// DELETE  -> sa stearga 
// PUT -> doar sa modifice /modifyUserSettings

// POST -> localhost/account/createAccount
router.post('/createAccount', (request, response, next) => {
    // request -> requestul care a venit, aici avem acces la toate datele din acel request
    // response -> un obiect care ne ajuta sa ii intoarcem raspuns requestului, sub forma response.send()
    // next -> e o functie pe care daca o apelam next() iese din acest controller si redirectioneaza
    // requestul catre URMATORUL controller care coincide

    console.log(request.body);
    
    response.send({
        status:"SUCCES",
        data: request.body
    })
});

module.exports = router;



// localhost/account/

//Destructurare
const { Account, Points } = require('../../models');
// const Account = require('../../models').Account;
// const Points = require('../../models').Points;
 //routes/account/index


 new Account({
    username: 'dragos',
    parola: 'asd123' 
 }).then(account => {

 })

 new Account().then(...ceva) e o functie asincrona
 asta inseamna ca daca ii punem .then , rezultatul primit in urma procesarii
 o sa apeleze functia dintauntru lui .then CU returnul din Account
 // .then() primeste o functie pe care o apeleaza cand termina de procesat
 // functia anterioara ASINCRONA si ii da ca parametru rezultatul ei