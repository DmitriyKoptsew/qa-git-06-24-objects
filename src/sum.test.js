import { sum } from './sum';

describe('sum', () => {
  test('sum with 1 and 2 return 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('sum with 2 and 2 not return 3', () => {
    expect(sum(2, 2)).not.toBe(3)
  })
})