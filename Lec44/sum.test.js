let sum = jest.fn(); //function mocking ----> create a new function that mocks the sum function.
//By default it returns undefined. U set its return value

// sum.mockReturnValue(5);
sum.mockReturnValueOnce(5);

test("sum of 2 and 3 is 5", () => {
  expect(sum(2, 3)).toBe(5);
});

test("sum of 3 and 4 is 7", () => {
  sum.mockReturnValueOnce(7);
  expect(sum(3, 4)).toBe(7);
});
