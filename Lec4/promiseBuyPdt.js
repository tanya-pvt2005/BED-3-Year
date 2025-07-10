let product=[{
    name:"samsung",
    amount:70000,
    quantity:100
},{
    name:"Iphone 16",
    amount:10000,
    quantity:0
}]

function buyProduct(product_Name){
    //do some asynchronus operation
    
    return new Promise((resolve, reject)=>{

        let isProduct = product.filter((p)=>p.name === product_Name)
        if(isProduct.length===0) reject("Product not available")
        else resolve("Product added to cart")

    })

}

buyProduct("").then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    });