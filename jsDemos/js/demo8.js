var person={};

console.log(person);

person={fname:"Alex",lname:"Summers"};
console.log(person);

var john={
    fname:"john",
    lname:"doe",
    address:{
        street:"xyz",
        city:"NY"
    }
};

console.log(john);

function greet(person)
{
    console.log("Hello "+person.fname);
}

greet(john);

greet({
    fname:"Alex",
    lname:"Summers"
});
