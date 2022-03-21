function operations(array){
    let sum=0;
    array.forEach(element => {
        sum +=element;
    });

    for (let i = 0; i < array.length; i++) {
        if(array[i]%2==0){
            array[i] +=i;
        }
        else{
            array[i]+=-i;
        }
    }
    
    console.log(array)
    console.log(sum);
    
    sum=0;
    
    array.forEach(element => {
        sum +=element;
    });
    
    console.log(sum)
   

}

operations([5,15,23,56,35]);