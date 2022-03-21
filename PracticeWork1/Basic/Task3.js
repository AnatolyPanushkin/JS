function Deviders(number){
    const array = [2,3,6,7,10];

    let buffer;

    for (let index = 0; index < 5; index++) {
        if(number%array[index]===0){
            buffer=array[index];
        }  
    }
    if(buffer!==undefined){
    console.log(`Число делится на ${buffer}`);
    }
    else{
        console.log('Не делится')
    }
}


Deviders(1643);