class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getName() {
        return this.name;
    };
    getSurname() {
        return this.surname;
    }
}

let Person1 = new Person("Samuel", "Ramollo");
let Person2 = new Person("Peter", "Kole");

console.log(Person1.getName());
console.log(Person1.getSurname());

// example 2
// class Students {
// constructor(name, age, grade) {
//     this.myname = name;
//     this.myage = age;
//     this.mygrade = grade;
// }
// biodata() {
// console.log(`Hi, myname is ${ this.myname }.I am ${ this.myage }
//     years old and I am in grade ${ this.mygrade }
//     `)
//     }
// }
// let obj1 = new Students('Tony', 10, 3);
// let obj2 = new Students('Tumi', 18, 12);

// obj1.biodata();
// obj2.biodata();


// Second example