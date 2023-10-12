//fns are objects

function greet(){
    console.log("hi");
}

greet.language="English";
console.log(greet);
console.log(greet.language);

function log(a)
{
    console.log(a);
}

var b=5;
log(b);
log(3);
log("Hello");
log({greetings:"hello"});
log(function(){
console.log("hi");
});