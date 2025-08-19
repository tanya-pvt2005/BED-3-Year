const express = require("express")
const router = express.Router()

router.post("/", )
router.get("/",)
router.get("/:id",)
//user
router.get("/:id",async(req,res)=>{
    let {id}= req.params
    let userExist= await user.findOne({_id:id}).populate("blogs")
    if(userExist){
    res.json({
        success:true,
        data:userExist
    })
  }
})


//delete blog
router.delete("/:blogId", )


module.exports=router