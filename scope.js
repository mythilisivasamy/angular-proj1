var a = 1;
var b = 2;
var c = 25;
/*
if(a==1) {

    var a:number=11;   //the  scope is global;
    let b:number=22;  // the scope is inside the if block;
    console.log("a  = " + a);
    b=100;
    console.log("b = " + b);
    console.log("c = " + c);
    }
    console.log("a  = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
*/
function myFun() {
    var a = 20;
    var b = 30;
    a = 50;
    b = 60;
    console.log("inside function a & b " + a + b);
}
myFun();
console.log("outside function a & b " + a + b);
