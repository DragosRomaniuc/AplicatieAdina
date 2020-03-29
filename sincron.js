// sincron
let a = 1;
let b = 2;
console.log(a);
console.log(b);


//asincron
function myLoginController(request, response, next) {
    let a = 1;
    cautaInBazaDeDate().then(function primit(rezultat){
        let b=2;
    }); // dureaza 3 secunde
    let c = 3;
    console.log(a);
    console.log(b);
    console.log(c);
}


[cautaInBazaDeDate()]

