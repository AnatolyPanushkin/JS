function commonElements(array1,array2){
    
    array1.forEach(el1 => {
        array2.forEach(el2 => {
            if(el1===el2)
                console.log(el2);
        });
    });

    
}

commonElements(['h','b','c','a'],['v','c','b','b']);