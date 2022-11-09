const example = "Hello";

const userName = 'Saúl';

console.log(userName);

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);

//const [hobby1, hobby2, ...remainingHobbies] = hobbies;

abstract class Department {
    static fiscalYear = 2022;
    //private id: string;
    //private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        //this.id = id;
        //this.name = n;
    }

    static createEmployee(name: String){
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Departement - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        
        throw new Error('No report found');
    }

    set mostRecentReport(value: string) {
        if(!value){
            throw new Error('Please pass in a valid value!');
        }
        
        this.addReport(value);
    }
    
    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(this.instance){
            return this.instance;
        }

        this.instance = new AccountingDepartment('d2', []);
        
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if(name === "Saúl") {
            return;
        }

        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

/*const accounting = new AccountingDepartment("a1", []);

accounting.mostRecentReport = "Year End Report";
console.log(accounting.mostRecentReport);*/

const it = new ITDepartment('d1', ["Saúl"]);

/*accounting.addEmployee('Saúl');
accounting.addEmployee("Enrique");

accounting.describe();*/