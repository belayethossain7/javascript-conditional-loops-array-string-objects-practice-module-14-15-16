let friend = ["Harry", "Alice", "Bob", "Neymar", "Ronaldo", "Belayet"];

/* // this is the use of includes function..that include function tell us the this element have or not in an array

console.log(friend.includes("Belayet"));
console.log(friend.includes("Foden"));

if (friend.includes("Ronaldo")){
    console.log("party");
}
else{
    console.log("no food. we are fasting");
} */



//indexOf funtion ,,indexOf function tell us the inder number of element in an array

// console.log(friend.indexOf("Bob"));
// console.log(friend.indexOf("Nr"));


// isArray function tell us the is variable is array or not

const nums =["Hossain"];
const food = "Ba na na";

console.log(Array.isArray(nums));
console.log(Array.isArray(friend));
console.log(Array.isArray(food));

console.log(friend.join('+'));

console.log(friend.concat(nums));

console.log(friend.slice(2,4));