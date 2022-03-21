function WonderfulMatrix (matrix){
    var sum1=0;
    var sum2=0;
    var ask;
    var sum1p;
    var sum2p;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            sum1+=matrix[i][j];
            sum2+= matrix[j][i];
        }
        if(sum1 !=sum2){
            ask=false;
            break;
        }
        if(i>0){
            if(sum1 == sum2 && sum1 == sum1p && sum2 == sum2p){
                ask = true;
            }
            else{
                ask =false;
                break;
            }
        }
        sum1p = sum1;
        sum2p= sum2;
        sum1=0;
        sum2=0;
   }
   console.log(ask);
}
WonderfulMatrix([[1,0,0],
                 [0,0,1],
                 [0,1,0]]);