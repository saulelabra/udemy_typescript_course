interface AddFn {
    (a: number, b: number): number;
}

let add2: AddFn;

add2 = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named { 
    readonly name?: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 24;

    constructor(n?: string){
        if(n) {
            this.name = n;
        }
    }

    greet(phrase: string){
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }else{
            console.log('Hi!')
        }
    }
}

let user1: Greetable;

user1 = new Person();
//user1.name = "Enrique"; //This doesn't work as the interface defines 'name' as readonly

user1.greet('Hi there I am')