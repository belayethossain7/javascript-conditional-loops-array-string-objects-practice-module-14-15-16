//non-primitve

/* const bottle = {
    brand: "apple",
    price: 45,
    color: white,
    isClean: false
}

const subject = {
    name: biology,
    teacher: "Alice",
    examDate: "30 feb",
    chapters: ['fist', 'secound', 'third']
} */

    const person = {
        name : "Belayet",
        age : 23,
        profession: "Student",
        id : 2222222222,
        address : "Mirpur",
        job : false,
        "fav places" : ['jamalpur', 'dhaka']
    }

    //console.log(person);
    
    console.log(person.profession);
    
    //dot notation
    //use the dot for the get the key value from object 
    //const ID = person.id;
    //console.log(ID);
    
    //bracket notation
    //use the third bracket for get the value of specific object key value
    
    console.log(person['age']);
    const job_status = person['age'];
    console.log(job_status);
    
    console.log(person['fav places']);
    
    person.id = 33333;
    person['job'] = true;
    console.log(person);
    
    const Name = 'name';
    person[Name] = "Hossain";
    
    console.log(person); 

    console.log(person.name);
