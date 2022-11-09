"use strict";
let add2;
add2 = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 24;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new Person();
//user1.name = "Enrique"; //This doesn't work as the interface defines 'name' as readonly
user1.greet('Hi there I am');
