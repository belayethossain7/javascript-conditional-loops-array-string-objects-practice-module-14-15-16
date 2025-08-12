/** Problem -01 ( Divide the Asset ) */

let area = 800;

let divide = (area/2);

console.log(divide);

/** Problem -02 ( Cycle or Laptop ) */

let money = 10000;

if(money>=25000){

console.log("Laptop");

}

else if(money>=10000){

console.log("Cycle");

}

else{

console.log("Chocolate");

}

/** Problem -03 ( Medicine Planner ) */

let lastday = 6;

if(lastday>=3 && lastday<=30){

for(let i = 1; i <= lastday; i++){

if(i%3==0){

console.log(i+" - medicine");

}

else{

console.log(i+" - rest");

}

}

}

/** Problem 04 - (Delete / Store) */

let fName = 'data.docx';

let f_type = fName.split('.').pop();

if(fName.startsWith('#')){

console.log('Store');

}

else if(f_type==='pdf' || f_type==='docx'){

console.log('Store');

}

else{

console.log('Delete');

}

/** Problem 05 - ( PH Email Generator ) */

let student= { name: "jhankar" ,

roll: 1014 ,

department: "cse" };


const email = student.name + student.roll + '.' + student.department+ '@ph.ac.bd';

console.log(email);

/** Problem 06 : (Current Salary ) */

let experience = 30;

let startingSalarry = 45000;

let currentSallary = startingSalarry;

for(let i = 1; i<=experience; i++){

currentSallary = currentSallary+(currentSallary*0.05);

}

let final = currentSallary.toFixed(2);

console.log(final);