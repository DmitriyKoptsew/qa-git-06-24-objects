import { calculate } from './calculate';

describe('calculate', () => {
  test('', () => {
    const el = document.createElement('p')
    
    document.body.appendChild(el)

    el.id = 'result'

    calculate(1, 3, '+')

    expect(el.innerHTML).toBe("4")
  })
})