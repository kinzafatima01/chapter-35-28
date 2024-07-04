// Number 1:

function displayCurrentDateTime() {
    const now = new Date(5,2,2024);
    const currentDateTime = now.toLocaleString();
    document.write(`Current date and time: ${currentDateTime}`);
  }


// // Number 2:

function greetUser(John, Doe) {
    const fullName = `${John} ${Doe}`;
    alert(`Hello, ${JohnDoe}!`);
  }
  
  
// Number 3:


function addTwoNumbers() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));
    const sum = num1 + num2;
    alert(`The sum is: ${sum}`);
  }
  
// Number 5:
function square(x) {
    return x * x;
  }
  
// Number 6:

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
}

  
// Number 7: