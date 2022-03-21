function leapYear(quantityOfDays){
    if(quantityOfDays%4==0 && quantityOfDays%100!=0 || quantityOfDays%400 == 0){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}

leapYear(2003);