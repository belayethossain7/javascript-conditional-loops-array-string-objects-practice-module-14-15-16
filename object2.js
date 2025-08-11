// const computer = {
//     brand: 'Hp',
//     price: 40000,
//     processor: 'intel',
//     hdd: '512gb'
// }


//out all keys of computer Object
// const keys = Object.keys(computer);
// console.log(keys);


//output all values of computer Objects

// const values = Object.values(computer);
// console.log(values);

const college = {
  name : 'BC',
  Class: ['11', '12'],
  event : ['science fair', 'robot', 'play football'],
  unique: {
    color: 'blue',
    result: {
      gpa: 5,
      merit: 'top'
    }
  }
    
  
}

college.event[0] = 'fair';
console.log(college.unique.result.gpa);

console.log(college);


//delete the object property
delete college.Class;
console.log(college);