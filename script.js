a=5;
var a=90;
var sum;
console.log(a);
//let b=09;
//let b=999;
console.log(b);
{
    let b=999;
    console.log(b);
}
console.log(typeof(b));
let str="hello wrld!";
console.log(typeof(str));
var bool1=true;
console.log(typeof(bool1));
var m;
console.log(typeof(m));
var arr1=['orange',9090];
console.log(arr1[1]);
console.log(arr1.length);
arr1.push("pineapple");
console.log(arr1)
let person={
    name:"rezil",
    age:66,
    phno:76376476473
}
console.log(person.name);
let person2=[{
    name:"rezil",
    age:66,
    phno:76376476473
},
{
name:"abhishek",
age:66,
phno:76376476473
}]
console.log(person2[1].name);
function addition(x,y)
{
     sum=x+y;
    return sum;
}
console.log(b);
addition(56,99);
var s1=sum;
console.log(s1);
var s2=addition(3,5);
console.log(s2);
let c=12;
let d=++c;
console.log(d);
var e=++c;
console.log(e);
var s=10;
var t="10"
if (s>t) {
    console.log(s);
   
} 
else if(s==t)
    {
        console.log("s equal to t");
    }
else {
 console.log(t);
}

//loops

var array=[1,2,3,4,66,90]
console.log("array elements:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);  
}


console.log("person2:");
for (const key in person2) {
    console.log(person2[key]);
    
}

console.log("person1:");
for (const key in person) {
    console.log(person[key]);
    
}