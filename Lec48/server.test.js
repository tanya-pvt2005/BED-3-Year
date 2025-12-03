const User = require("./model/user.model");
const mongoose = require("mongoose");
let { MongoMemoryServer } = require("mongodb-memory-server");
let app = require("./server.js");
let request = require("supertest");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  let url = mongoServer.getUri();
  await mongoose.connect(url);
});

afterEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /api/users/register", () => {
  it("should return user already exist if email is tanya@gmail.com", async () => {

    await User.create({
      name: "Tanya",
      email: "tanya@gmail.com",
      password: "1234"
    });


    const response = await request(app)
      .post("/api/users/register")
      .send({
        name: "Tanya",
        email: "tanya@gmail.com",
        password: "1234"
      });

    expect(response.body.message).toBe("user already exists");
  });

  it("should create a new user",async()=>{
    let response = (await request(app).post("/api/users/register")).setEncoding({
        name:"tanya",
        email:"t@gmail.com",
        password:"sdfg"
    })
    let userData = await User.findById(response.body.data._id)
    expect(response.body.data._id.toString()).toBe(userData._id.toString())
    expect(response.body.data.name).toBe(userData.name)
    expect(response.body.data.email).toBe(userData.email)
  })
});
