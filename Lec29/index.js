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
async function updateTweet(tweetid, userId, updatedContent){

    let tweet = await prisma.tweet.findUnique({
        where:{
            id: Number(tweetid)
        }
    })
    if(!tweet){
        return "tweet does not exist"
    }
    if(tweet.userId!=Number(userId)){
        return "user cannot update this tweet"
    }
    await prisma.tweet.update({
        where:{
            id: Number(tweetid)
        },
        data:{
            content:updatedContent
        }
    })
}

updateTweet("1","1","updated first tweet")
.then(()=>{console.log("Tweet is updated")})

async function deleteUser(userId){
    
    const deleteUser = await prisma.user.delete({
        where:{
            id:userId
        }
    })
}
deleteUser(1)
.then(()=>{console.log("User deleted successfully")})
.catch((err)=>{console.log(err)})