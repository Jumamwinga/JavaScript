// Declare variables of different data types
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
        return null;
    }
    return a / b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to display the result
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    const resultValue = document.getElementById('resultValue');
    
    if (result !== null) {
        resultValue.textContent = result;
        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('highlight');
    } else {
        resultValue.textContent = "Error";
        resultDiv.classList.remove('hidden');
        resultDiv.classList.remove('highlight');
    }
}

// Function to update the chart
function updateChart(chart, operation, value) {
    chart.data.labels.push(operation);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(value);
    });
    chart.update();
}

// Initialize the chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Operation Results',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Event listeners for buttons
document.getElementById('addButton').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = add(num1, num2);
    displayResult(result);
    updateChart(myChart, 'Add', result);
});

document.getElementById('subtractButton').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = subtract(num1, num2);
    displayResult(result);
    updateChart(myChart, 'Subtract', result);
});

document.getElementById('multiplyButton').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = multiply(num1, num2);
    displayResult(result);
    updateChart(myChart, 'Multiply', result);
});

document.getElementById('divideButton').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = divide(num1, num2);
    displayResult(result);
    updateChart(myChart, 'Divide', result);
});

// Debugging and checking initial values
console.log("String: ", myString);
console.log("Number: ", myNumber);
console.log("Boolean: ", myBoolean);
