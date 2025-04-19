function equation (){

    const firstNum = prompt("Enter first number");
    if (isNaN(Number(firstNum))) {
        alert("Its not a number :facepalm:");
        equation();
    }

    const operation = prompt("Enter operation (+ , - , * , /)");


    const secondNum = prompt("Enter second number");
    if (isNaN(Number(secondNum))) {
        alert("Its not a number :facepalm:");
        return;
    }

    let solution;

    if (operation === "+") {

        solution = firstNum + secondNum ;
    }
    else if (operation === "-") {
        solution = firstNum - secondNum ;
    }
    else if (operation === "*") {
        solution = firstNum * secondNum ;
    }
    else if (operation === "/") {
        solution = firstNum / secondNum ;
    }

    let result = (`Your result is ${solution}`);

    alert(result);



}

equation();
