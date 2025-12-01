//first we need app, and then a method to send post req to the api
const app = require("./index");
//to send request, we send library: supertest
const request = require("supertest");

//to put all tests in a single describe
describe("POST /sum", () => {
  it("should return addition of two numbers", async () => {
    response = await request(app).post("/sum").send({
      a: 2,
      b: 3,
    });
    expect(response.body.data).toBe(5);
  });

  //this response is an object
  /**response = {
   * body:{
   *  api response
   * }
   * } */

  it("should return all arguments must be passed",async ()=>{

    //send api req
    let response = await request(app).post("/sum").send({
        a:2
    })
    expect(response.body.message).toBe("invalid arguments")
    
  })
});
