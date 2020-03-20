Creaza o functie care primeste ca parametru o lista si reteurneaza ultimu element din lista
Hint: .pop();

function myfunct(arrayy){
    return arrayy.pop();
}

let arrayy=[0,1,2];

myfunct(array);

let myfunct = arrayy=>arrayy.pop();

let myFunct =  item => {   Daca sunt acolade dupa => javascript cauta return,
                                daca nu, returneaza ce este imediat dupa sagetuta, fara sa mai fie nevoie de "return"
    return array.pop()
}


let myFunct = (array) => {
    
    array.push(5);
    array.push(6);             asta fara acolade da eroare
   
    return array.pop();
}


Creaza-mi o functie care primeste un obiect ca parametru si apeleaza
functia sayHello din acel obiect si returneaza rezultatul;


let myobiect = (obb) =>{
    //obb.sayHello();
    return obb.sayHello();
}

let myobiect = obb => obb.sayHello();

function myfunct(){
    return "HELLO"
}

echivalent cu <=>
let myfunct = () => "HELLO"



myObiect({
    sayHello: () => "HELLO"        echivalent cu
    sayHello2: function() {
        return "HELLO"
    }
});

let array = new List();
let array = [];


let list = [1]
list.push(2);

c++ low level 
javascript High level 

Creaza o functie care primeste ca parametru o lista de obiecte si
pentru fiecare obiect din lista adauga o noua proprietate numita 'amAdaugatAcum' : 'asta';
hint : map
let obj = {
    nume: 'dragos'
}

let array = [
    {nume: 'dragos'}, 
    {nume: 'adina'}, 
    {nume: 'gigel'}
]

let funct1 =  listob=>{
    
// listob = [
//     {nume: 'dragos'}, 
//     {nume: 'adina'}, 
//     {nume: 'gigel'}
// ]
    let customFunction = obj => {
        console.log(obj)
    }

    listob.map(customFunction);
    // customFunction({nume: 'dragos'})
    // customFunction({nume: 'adina'})
    // customFunction({nume: 'gigel'})

}


let myFunct =   item => { return item } functia e doar dupa =, si o asignam variabilei myFunct
let funct1 = listob => {
    // =>
    pentru ca nu avem nevoie sa stocam functia, doar o cream si atat.
    // item => { return item }
    // echivalent cu 
    // function asd(item) {
    //     return item
    // }
    return listob.map(item => {
        {nume: 'dragos'}
        return item.amAdaugatAcum = 'asta';
        // return {nume: 'dragos',
        // amAdaugatAcum = 'asta'
        // }
    })
            // item va fi {nume: 'dragos'}
}

map primeste o functie ca parametru
let functidetrimis = param => {
    return "HELLO";
}
map(functiedetrimis)

 <=>

function functiedetrimis(param) {
    return "HELLO";
}
map(functiedetrimis)

<=>

map(param = {
    return "HELLO"
})

https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

https://www.w3schools.com/jsref/jsref_map.asp



NODE  este environmentul in care lucram, ca python/c++, foloseste javascript
    Ca sa primesti requesturi de pe internet ai nevoie de un SERVER HTTP
    EXPRESS.JS
        Deschide un server pe IP=ul TAU si asteapta requesturi;
        Trebuie sa creezi RUTE pentru requesturi, 
                79.112.25.58/users
                 79.112.25.58/awards
                 
                Pentru aceste rute trebuie sa cream CONTROLLERE
                CONTROLLERE = niste functii care handleuiesc REQUESTUL
                
                www.mysite.com -> vrea sa creeze un user cu nume: dragos, parola: asd123 -> apasa pe buton CREATE ACCOUNT
                => REQUEST catre 79.112.25/users/createUser
                
                Serverul meu primeste in acel moment un REQUEST cu
                request: {
                    data: {
                        nume: dragos,
                        parola: asd123
                    }
                }
                
                79.112.25.58/users
                    CONTROLLERE /createUser 
                    
                    createUser = obj => {
                        BAZADEDATE . ADD NEW new document in baza de date LA USERS cu  {
                        nume: dragos,
                        parola: asd123
                    }
                    
                    PRACTIC creaza un user cu  {
                        nume: dragos,
                        parola: asd123
                    }
                    
                    Dupa ce a creat userul 
                    
                    if(userS-aCreat){
                        response.send('succes', {nume: "Dragos",
                            custom:" Bravo man, ai creat un user"
                        })
                    } else {
                        response.status(404).send("Exista deja un user cu numele Dragos");
                    }
                    
                
                    }
                    
                    isntagram: 
                        creare cont: NUme : DRAGOS,
                                    Parola: asd123,
                                    
                                    console.log(RESPONSE.message) raspuns de la server
                                    in cazu nostru "Exista deja un user cu numele Dragos";
    

Ca sa facem aplicatia:
1. Trebuie sa facem frontendul cu design si butoanele necesare care trimit requesturi catre server
2. Trebuie sa facem un server care primeste date in functie de anumite scenarii, (createUser, modifyUser, addAwardToUser,
CreateQuestion, Delete Question, CreateCategory)
3. Pe frontend trebuie sa facem intr-asa fel incat sa facem ceva cu raspunsul primit de la server dupa ce apasam pe buton de exemplu

    ex: Ai un user si vrei sa ii adaugi 100 coins
        ACUM, useru are 500coins -> Introduci o valoare de 100 intr-o casuta si apesi pe buton ADD coins
        Acum s-a facut un request catre server si BAZA DE DATE este actualizata si acum userul are 600 coins.
        In schimb pe front end, userul tau tot 500 de coins are pentru ca nu ai modificat nimic
        Ca sa modifici frontendul trebuie sa faci un nou request catre server in care sa ii ceri COINS at USERNAME Dragos
        600 coins, tu cu response 600 trebuie sa modifici HTMLU intr-asa fel incat sa apara valoarea actualizata.
        <div>
        user coins are : response.data.user.coins
        </div>

FRONT ENDU
BACKENDUL
BAZA DE DATE

