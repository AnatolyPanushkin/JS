function MatrixN(n){
    let s="";
    for (let i = 0; i < n; i++) {
        for (let i = 0; i < n; i++) {
           s+=n+" ";
        }
        console.log(s);
        s="";
    }
}

MatrixN(2);
MatrixN(7);