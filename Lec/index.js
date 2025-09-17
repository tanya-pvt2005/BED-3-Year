const {PrismaClient} = require('./generated/prisma')

const prisma = new PrismaClient();

async function addUser(name, email, password){
    // models ki classes honi chahiye : jisme functions hai for crud operations
    //these are called auto generated clients

    await prisma.user.create({
        data:{
            email: email,
            name: name,
            password: password
        }
    });
}

addUser("Sehaj", "sehaj@123", "hellondjks")
.then(()=>{
    console.log("User Added")
})

async function getAllUser(){
    let allUser = await prisma.user.findMany();
    return allUser;
}

getAllUser().then((data)=> console.log(data))

