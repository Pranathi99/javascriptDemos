function greet(greeting){
    return function(name){
        console.log(greeting+" "+name);
    }
}

greet("Hello")("Alex");

var sayHello=greet("Hello");
sayHello("Alex");