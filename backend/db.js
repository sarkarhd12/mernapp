const mongoose=require('mongoose');


const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("connected");
        const foodSchema = new mongoose.Schema({
            _id:Number
          })
       const foods=mongoose.model("food_items",foodSchema)

          foods.find({}).
          then((data)=>{
            global.food_items=data
          }).catch(eros=>console.log(eros));


          
          const catSchema=new mongoose.Schema({
            _id:Number
        })
        const foodCat=mongoose.model("foodCategory",catSchema);
        foodCat.find({}).
        then((result)=>{
            global.food_category=result;
            }).catch(e=>console.log(e))

          
})
    .catch(err=>console.log(err))
}


module.exports=mongoDB;



