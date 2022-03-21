function Vacation (quantityPeople, typeOfGrooups, weekDay){
    //Студенты
    if(typeOfGrooups=="Student"){
        if(quantityPeople >= 30){
            if(weekDay=="Friday"){
                console.log(`Total price: ${((quantityPeople*8.45)*0.85).toFixed(2)}`);
            }
            if (weekDay=="Saturday"){
                console.log(`Total price: ${((quantityPeople*9.80)*0.85).toFixed(2)}`);
            }
            if(weekDay=="Sunday"){
                console.log(`Total price: ${((quantityPeople*10.46)*0.85).toFixed(2)}`);
            }
        }
        else{
            if(weekDay==="Friday"){
                console.log(`Total price: ${((quantityPeople*8.45)).toFixed(2)}`);
            }
            else if (weekDay==="Saturday"){
                console.log(`Total price: ${((quantityPeople*9.80)).toFixed(2)}`);
            }
            else if(weekDay==="Sunday"){
                console.log(`Total price: ${((quantityPeople*10.46)).toFixed(2)}`);
            }
        }
    }

    //Корпаративная
    else if (typeOfGrooups==="Corporate"){
        if(quantityPeople>=100){
            if(weekDay==="Friday"){
                console.log(`Total price: ${((quantityPeople-10)*10.90).toFixed(2)}`);
            }
            else if (weekDay==="Saturday"){
                console.log(`Total price: ${((quantityPeople-10)*15.60).toFixed(2)}`);
            }
            else if(weekDay==="Sunday"){
                console.log(`Total price: ${((quantityPeople-10)*16).toFixed(2)}`);
            }
        }
        else{
            if(weekDay==="Friday"){
                console.log(`Total price: ${((quantityPeople*10.90)).toFixed(2)}`);
            }
            else if (weekDay==="Saturday"){
                console.log(`Total price: ${((quantityPeople*15.60)).toFixed(2)}`);
            }
            else if(weekDay==="Sunday"){
                console.log(`Total price: ${((quantityPeople*16)).toFixed(2)}`);
            }
        }

    }

    //Обычная
    else if(typeOfGrooups==="Regular"){
        if(quantityPeople>=10 && quantityPeople <=20){
            if(weekDay==="Friday"){
                console.log(`Total price: ${((quantityPeople*15)/100*95).toFixed(2)}`);
            }
            else if (weekDay==="Saturday"){
                console.log(`Total price: ${((quantityPeople*20)/100*95).toFixed(2)}`);
            }
            else if(weekDay==="Sunday"){
                console.log(`Total price: ${((quantityPeople*22.50)/100*95).toFixed(2)}`);
            }
        }
        else{
            if(weekDay==="Friday"){
                console.log(`Total price: ${((quantityPeople*15)).toFixed(2)}`);
            }
            else if (weekDay==="Saturday"){
                console.log(`Total price: ${((quantityPeople*20)).toFixed(2)}`);
            }
            else if(weekDay==="Sunday"){
                console.log(`Total price: ${((quantityPeople*22.50)).toFixed(2)}`);
            }
        }
    }
}

Vacation(40,"Regular","Saturday");