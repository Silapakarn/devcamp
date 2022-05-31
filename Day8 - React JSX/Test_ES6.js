/*class Employee {
    constructor(firstname, lastname, salary) {
        this.salary = salary; // simulate private variable
        this.firstname = firstname; // public property
        this.lastname = lastname; // public property
    }
    getSalary() { // simulate public method
        return this.salary;
    }
}


let dang = new Employee('Dang', 'Red', 10000);
console.log(dang.firstname);
console.log(dang.lastname);
console.log(dang.getSalary());

class CEO extends Employee {
    constructor(firstname, lastname, salary) {
        super(firstname, lastname, salary);
    }
    getSalary() { // simulate public method
        return super.getSalary() * 2;
    };
    hello() { // simulate public method
        console.log("Hi, nice to meet you. " + this.firstname + "!");
    }
}

let ceo = new CEO('Somchai', 'Sudlor', 30000);
console.log(ceo.firstname);
console.log(CEO);

console.log(ceo.getSalary());

console.log(ceo.hello());*/

class Programmer {
    constructor(firstname, lastname, salary) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
        setTimeout(function() {
            console.log(this.firstname); // Code
            console.log(this.lastname); // Camp
        }.bind(this), 1000);
    }
    getSalary() {
        return this.salary
    }

}
const Luke = new Programmer('Code', 'Camp', 20000);
console.log(Luke.salary);


class CEO extends Programmer {
    constructor(firstname, lastname, salary) {
        super(firstname, lastname, salary);
    }
    getSalary() { // simulate public method
        return super.getSalary() * 2;
    };
    hello() { // simulate public method
        console.log("Hi, nice to meet you. " + this.firstname + "!");
    }
}

let ceo = new CEO('Somchai', 'Sudlor', 30000);
console.log(ceo);
console.log('salary CEO: ' + ceo.getSalary());
console.log(ceo.hello());