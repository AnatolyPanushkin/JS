function ProgresBar(number){
    let s="["
    if(number%10==0){
        for (let i = 0; i < number/10; i++) {
           s+="%"; 
        }
        for (let i = 0; i < 10-(number/10); i++) {
            s+=".";
        }
        s+="]";
        if(number!= 100)
        console.log(`${number}% ${s} \nStill loading...`);
        else
        console.log(`${number}% Complete! \n${s}`);
    }
}
ProgresBar(100);