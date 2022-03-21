function RotationOfArray(array,quantityRotation){
    var buffer;
    for (let i = 0; i < quantityRotation; i++) {
        buffer = array[0];
        for (let j = 0; i < array.length; j++) {
            if(j==array.length-1){
                array[j]=buffer;
                break;
            }
            array[i]=array[i+1]; 
        }
    }
    
    console.log(array);
}

RotationOfArray([51,47,32,61,21],2);