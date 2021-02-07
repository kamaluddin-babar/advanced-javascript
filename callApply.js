const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
// this section shows how to access object property and object method.

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);



// this section shows how to bind method from another object.
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000,
}
// console.log(normalPerson);
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(8000);
// console.log(friendlyPerson.salary);



// this section shows how to use call to use another object's method.

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);




// this section shows how to use apply to use another object's method.

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]);
console.log(heroPerson.salary);