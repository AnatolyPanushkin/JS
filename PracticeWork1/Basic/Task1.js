function AgeOfPerson(age){
    if(age>0){
    let message = (age<=2)?'младенец':(age<=13)?'ребенок':(age<=19)?'подросток':(age<=65)?'взрослый':(age>65)?'пожилой':'какой необычный возраст!';
    console.log(message);
    }
    else{
        console.log("какой необычный возраст")
    }
}
AgeOfPerson(0)