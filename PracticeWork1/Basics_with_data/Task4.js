function Calculator(number1, sign, number2){
    if(sign==='+'){
        console.log((Math.round(number1+number2)*100)/100);
    }
    if(sign=="-"){
        console.log(Math.round(number1-number2)*100/100);
    }
}
Calculator(1,'-',4);