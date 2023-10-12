//IIFEs
//Immediately Invoke Function Expression

var greetfunc=function(name)
{
    console.log("hello "+name);
}

greetfunc("Alex");

var greeting=(function(name)
{
    console.log("hello "+name);
})("John");