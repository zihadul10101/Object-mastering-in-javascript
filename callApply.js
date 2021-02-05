const normalPersn = {
    firstName: 'Rahim',
    lastName: 'uddin',
    salary: 15000,
    getFulName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount,tips,tax) {
        console.log(this);
        this.salary = this.salary - amount-tips-tax;
        return this.salary;
    }
}
// normalPersn.chargeBill(150);
// normalPersn.chargeBill(3500);
// console.log(normalPersn.salary);
//console.log(normalPersn.firstName);
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Aalam',
    salary: 25000
}
//normalPersn.chargeBill();
// const heroChargeBill=normalPersn.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPersn.salary);


// const friendlyChargeBill=normalPersn.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);
// friendlyChargeBill(1500);

// normalPersn.chargeBill.call(heroPerson,900,100,10);
// normalPersn.chargeBill.call(heroPerson,3000,300,30);
// console.log(heroPerson.salary);

// normalPersn.chargeBill.call(friendlyPerson,5000,500,50);
// console.log(friendlyPerson.salary);
// console.log(normalPersn.salary);

normalPersn.chargeBill.apply(heroPerson,[3000,300,30]);
normalPersn.chargeBill.apply(heroPerson,[4000,400,40]);
console.log(heroPerson.salary);