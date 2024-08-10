export function calculate(a, b, operator) {
  const result = document.getElementById('result')
  
  if(operator === "+") {
    result.innerHTML = a + b
  } else if (operator === "-") {
    result.innerHTML = a - b
  } else if (operator === "/") {
    result.innerHTML = a / b
  } else if (operator === "*") {
    result.innerHTML = a * b
  } else if (operator === "**") {
    result.innerHTML = a ** b
  }
}
