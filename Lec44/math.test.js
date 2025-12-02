const math = require("./math")

//you can either mock each individually or mock the entire module as a whole: jest.mock("./path")
/**
 * {
 *  multiply,
 *  subtract,
 *  add,
 *  modulo
 * }
 */

jest.mock("./math") //returns an object with mocking funtion of all

/**
 * {
 *  multiply : jest.fn()
 *  sub : jest.fn()
 *  modulo : jest.fn()
 *  add : jest.fn()
 * }
 */

test("multiplication of 2 and 3 is 6",()=>{
    math.multiply.mockReturnValueOnce(6)
    expect(math.multiply(2,3)).toBe(6)
})

test("sub of 5 and 6 is -1",()=>{
    math.sub.mockReturnValueOnce(-1)
    expect(math.sub(5,6)).toBe(-1)
})

test("add of 5 and 6 is 11",()=>{
    math.sum.mockReturnValueOnce(11)
    expect(math.sum(5,6)).toBe(11)
})

