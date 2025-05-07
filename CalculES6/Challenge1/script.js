function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers";
        return;
    }
    
    let result;
    
    // Perform calculation based on selected operation
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            resultElement.textContent = "Cannot divide by zero";
            return;
        }
        result = num1 / num2;
    } else {
        resultElement.textContent = "Invalid operation";
        return;
    }
    
    // Display the result
    resultElement.textContent = "Result: " + result;
}