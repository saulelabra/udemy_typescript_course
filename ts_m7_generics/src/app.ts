// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

// promise.then(data => {
    
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Saúl'}, {age: 24})
console.log(mergedObj.name);

interface Lenghty {
    length: number
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if(element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    
    return [element, descriptionText]; 
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

//Will not work
//extractAndConvert({}, 'name');

//Will work
extractAndConvert({name: "Saúl"}, 'name');

//Generic classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Saúl');
textStorage.addItem('Enrique');
textStorage.removeItem('Saúl');
console.log(textStorage.getItems());

//Utilities
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description:string, date: Date) {
    return {title: title, description: description, completeUntil: }
}