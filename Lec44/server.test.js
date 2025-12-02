const User = require("./model/user.model.js")
const request = require("supertest")
const app = require("./server.js")
jest.mock("./model/user.model")

describe("POST /api/users/register", ()=>{
    it("should return user already exist if email is tanya@gmail.com",async()=>{
        //mock return value as true
        //for async func:  resolve, sync: return
        User.findOne.mockResolvedValueOnce(true)
        let response = await request(app).post("/api/users/register").send({
            name:"Tanya",
            email:"tanya@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("user already exists")
    })


    it("should create a new user",async()=>{
        //mock both functions
        User.findOne.mockResolvedValueOnce(false)
        User.create.mockResolvedValueOnce({
            name:"Tanya",
            email:"tanya123@gmail.com",
            password:"hahahaha"
        })
        let response  =  await request(app).post("/api/users/register").send({
            name:"Tanya",
            email:"tanya23@gmail.com",
            password:"hahahaha"
        })

        expect(response.body.message).toBe("user registered successfully")
        expect(response.body.data).toEqual({
            name:"Tanya",
            email:"tanya123@gmail.com",
            password:"hahahaha"
        })
    })
})