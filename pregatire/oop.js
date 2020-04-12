class A {
    name = ""
    
    setName = name => {
        this.name = name;
    }

    getName = () => this.name
}




let primaInstanta = new A();
primaInstanta.setName('Dragos');

let aDouaInstanta = new A();
aDouaInstanta.setName('Adina');


console.log(primaInstanta.getName());
console.log(aDouaInstanta.getName());


