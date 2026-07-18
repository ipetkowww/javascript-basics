function operationsBetweenNumbers(firstNum, secondNum, operator) {
    if ((operator === "/" || operator === "%") && secondNum === 0) {
        console.log(`Cannot divide ${firstNum} by zero`);
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = (firstNum / secondNum).toFixed(2);
            break;
        case "%":
            result = firstNum % secondNum;
            break
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        const parity = result % 2 === 0 ? "even" : "odd";
        console.log(`${firstNum} ${operator} ${secondNum} = ${result} - ${parity}`);
    } else {
        console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
    }
}

operationsBetweenNumbers(10, 12, "+");
operationsBetweenNumbers(123, 12, "/");
operationsBetweenNumbers(10, 3, "%");
operationsBetweenNumbers(10, 0, "%");