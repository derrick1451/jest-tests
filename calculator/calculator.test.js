const calculator = require('./calculator')
describe('add two value',()=>{
    test('test two value',()=>{
        expect(calculator.add(1,2)).toEqual(3)
    })
    test('two zeros',()=>{
        expect(calculator.add(0,0)).toBe(0)
    })
    test('two and two',()=>{
        expect(calculator.add(2,2)).toBe(4)
    })
})
describe('subtract', () => {
    test('subtracts numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });
  });
  describe('multiply',()=>{
    test('multiply with 0',()=>{
        expect(calculator.multiply(1,0)).toBe(0)
    })
    test('multiply two numbers',()=>{
        expect(calculator.multiply(2,2)).toBe(4)
    })
    test('multiply with 1',()=>{
        expect(calculator.multiply(2,1)).toBe(2)
    })
  })
  describe('divide',()=>{
    test('divide two number',()=>{
        expect(calculator.divide(2,2)).toBe(1)
    })
    test('divide by 0',()=>{
        expect(calculator.divide(2,0)).toBe('error')
    })
  })