function subtract() {
    
    let element = document.getElementById("firstNumber").value;
    let element2 = document.getElementById("secondNumber").value;
    let result = element - element2;
    document.getElementById("result").innerText = result;
    
}