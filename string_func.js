/* //use of string 

//array is mutable that means changeable
let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);
arr[2]=333;
console.log(arr);



//but string is immutable that means unchangable
let str = "Dhaka";
console.log(str);
console.log(str.length);
str[0]="F";

console.log(str);
 */


const sub = "Computer";
const title = "computer";


const subject1 = "computer  ";
const subject2 = "  computer";

if(sub.toLowerCase() == title.toLowerCase()){
    console.log("Computer is essential");
}
else{
    console.log("History is essential");
}


if(subject1.trim() == subject2.trim()){
    console.log("Yeah, Computer.")
}
else{
    console.log("Ohhh,,Noooo");
}

