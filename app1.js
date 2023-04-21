function isPrime(num) {
    if(num <=1 ) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function displaySum () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    let sum = 0;
    for(let i = num1; i<= num2; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    document.getElementById("result").innerHTML = " tổng các số nguyên tố từ " + num1 +" đến " + num2 + " là: " + sum;
}