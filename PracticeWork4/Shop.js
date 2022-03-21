let product = {
    name:"",
    quontity:0,

    createProduct(name, quontity){
        product.name = name;
        product.quontity = quontity;
        return product;
    }
}
function returnProducts(Availible, Order){
    let resProducts = [1,2,3,4,5,67];
    let counter=0;
    for(let i = 0; i<Availible.length;i+=2){
        resProducts[counter] = product.createProduct(Availible[i],Availible[i+1]);
        counter++;
    }
    for(let i=0;i<Order.length;i+=2){
        resProducts[counter] = product.createProduct(Order[i],Order[i+1]);
        counter++;
    }


    // for (let i = 0; i <Availible.length; i+=2) {
    //     for (let j = 0; j < Order.length; j+=2) {
    //         if(Availible[i]==Order[j]){
    //             Availible[i+1]=Order[j+1];
    //         }
    //         else{
    //         resProducts[counter]=product.createProduct(Order[j],Order[j+1]);
    //         counter++;
    //         }
    //     }
    //     resProducts[counter]=product.createProduct(Availible[i],Availible[i+1]);
    //     counter++;
    // }
   
    console.log(resProducts[3]);
}
returnProducts(['banana', '5', 'kiwi','4'], ['banana','1','orange','7'])