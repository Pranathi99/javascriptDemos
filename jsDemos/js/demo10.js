console.log(this);

//fn statement
function x(){
    console.log(this);
    this.newVariable="hello";
}

x();
console.log(newVariable);

//fn expression
var b=function(){
    console.log(this);
}
b();

var c={
    name:"this new object",
    log:function(){
        console.log(this);
    }
};
c.log();