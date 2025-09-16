const { PrismaClient } = require("./generated/prisma")
let prisma = new PrismaClient();
async function addUser(name, email, password) {
    let newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })

    return newUser
}

// addUser("Tanya", "tanya@123", "1234")
// .then((data)=>console.log(data))
// .catch((err)=> console.log(err))

async function addTweet(content, userId){
    await prisma.tweet.create({
        data:{
            content: content,
            userId: userId
        }
    })
}

// addTweet("my first tweet",1)
// .then(()=>console.log("tweet is created"))
// .catch((err)=> console.log(err))

async function getUserTweet(userId){
    let tweets = await prisma.tweet.findMany({
        where:{
            userId: Number(userId)
        }
    })
    return tweets
}

getUserTweet("1")
.then((data)=>console.log(data))

//user whose id is 1 wants to update his tweet --> tweet id is 1
