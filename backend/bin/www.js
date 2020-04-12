const app = require('../app');
//app contine tot serverul nostru de express() + configurarile
// pe care le-am facut in app.js
const http = require('http'); //modul de nodejs, nu trebuie instalat
const port = 3000;

app.set('port', port);
// http.createServer primeste ca parametru niste configurari, in cazul nostru
// o variabila care contine un SERVER EXPRESS();
// express e o librarie care ne ajuta sa cream un server HTTP
// express practic ne usureaza modalitatea de lucru cu requesturile
//ne da acces la request.body, sau request.method sau router.get 
// daca nu aveam express trebuia sa scriem noi toate configurarile manual
// express manipuleaza requestul intr-asa fel incat sa lucram usor cu el 
// + ne da acces la functii utile
const server = http.createServer(app);
server.listen(port); //3000
// localhost/3000 serverul nostru.

// localhost:3000/accounts/createAccount
// POSTMAN 
//  sau cu un site  fetch('localhost:3000/accounts/createAccount', {username:'dragos',parola:'asd123'}).then(raspuns=>{
        // console.log(raspuns)
        // BRAVO, Ai creat accountul
        // let myResponse = raspuns;
        // alert(myResponse)
// })

server.on('error', () => {
    console.log('Am gasit o eroare la server');
})

server.on('listening', () => {
    console.log(`Serverul asculta pe port ${port}`);
});

