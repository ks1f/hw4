function equation (){

    let firstNum = prompt("Enter first number");
    firstNum = Number(firstNum);
    if (isNaN(firstNum)) {
        alert("Its not a number :facepalm:");
        equation();
        return;
    }


    const operation = prompt("Enter operation (+ , - , * , /)");


        let secondNum = prompt("Enter second number");
    secondNum = Number(secondNum);
    if (isNaN(secondNum)) {
        alert("Its not a number :facepalm:");
        equation();
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
