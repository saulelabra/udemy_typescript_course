"use strict";
let user1;
user1 = {
    name: 'Saúl',
    age: 24,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there I am ');
