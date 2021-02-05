const normalPersn = {
    firstName: 'Rahim',
    lastName: 'uddin',
    salary: 15000,
    getFulName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
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
const heroChargeBill=normalPersn.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPersn.salary);



const friendlyChargeBill=normalPersn.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);