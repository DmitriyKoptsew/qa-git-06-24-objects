import {calculate} from './calculate.js'

const button = document.querySelector('button')

button.addEventListener('click', function() {
  const firstElement = document.getElementById('a')
  const secondElement = document.getElementById('b')
  const operatorElement = document.getElementById('operation')

  let firstValue = firstElement.value
  let secondValue = secondElement.value
  const operator = operatorElement.value

  if(firstValue === '' || secondValue === '') {
    alert('Заполните все поля')
    return
  }

  firstValue = parseInt(firstValue)
  secondValue = parseInt(secondValue)

  calculate(firstValue, secondValue, operator)
})
