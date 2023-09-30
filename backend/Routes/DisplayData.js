const express = require("express");
const router = express.Router();
// const foodFromData=require('../db')

router.post('/foodData',(req,res)=>{
    try {
    //    console.log(global.food_category)
      res.send([global.food_items,global.food_category])
    } catch (error) {
        res.send("server eror",error)
    }
})

module.exports=router;