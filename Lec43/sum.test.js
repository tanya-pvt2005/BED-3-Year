// jest automatically configures files that are to be run for testing: when written 
// sum.test.js

//expects needs a value, can come from any function. toBe() checks it 
const sum = require("./sum")
test("sum of 2 and 3 is 5", ()=>{
    expect(sum(2,3)).toBe(5)
})

test("sum of '2' and 3 should return all arguments must be number ",()=>{
    expect(sum("2",3)).toBe("all arguments must be number")
})

test("sum of false and 3 should return all arguments must be number ",()=>{
    expect(sum(false,3)).toBe("all arguments must be number")
})

test("sum of no argument and '3' should return all arguments must be passed ",()=>{
    expect(sum(3)).toBe("all arguments must be passed")
})

