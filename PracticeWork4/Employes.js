let person = {
    FirstName:"NoName",
    LastName:"NoLastName"
};

person.id = () =>{
    let res=0;
    res=person.FirstName.length + person.LastName.length +1;
    return res;      
};

person.createEmploye = (FirstName,LastName) =>{
    person.FirstName=FirstName;
    person.LastName=LastName;
}

person.showListOfPerson = (EmployeArray) =>{
   for (let i = 0; i < EmployeArray.length; i++) {
        person.createEmploye(EmployeArray[i].split(" ")[0],EmployeArray[i].split(" ")[1]);
        console.log(`Name: ${person.FirstName} ${person.LastName} - Personal Number: ${person.id()}`);
    }
}

person.showListOfPerson(["Andrew Ivanov","Anton Jonson","Dmitriy Ronaldo"]);