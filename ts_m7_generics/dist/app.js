"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Saúl' }, { age: 24 });
console.log(mergedObj.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Saúl" }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Saúl');
textStorage.addItem('Enrique');
textStorage.removeItem('Saúl');
console.log(textStorage.getItems());
//# sourceMappingURL=app.js.map