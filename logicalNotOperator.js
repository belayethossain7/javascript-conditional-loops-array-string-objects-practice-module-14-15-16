let isAvailable = true;
// LOGICAL NOT OPRATOR

if(isAvailable){
    console.log("this item is avilable");
}
else{
    console.log("this item is not available");
}


let value = false;

if(!value){
    console.log("value is false");
}
else{
    console.log("value is true");
}

let a = 10;

if(!!a){
    console.log("a is truthy");
}
else if(!a){
    console.log("a is falsy");
}
else{
    console.log(a);
}