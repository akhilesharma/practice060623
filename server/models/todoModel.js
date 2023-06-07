const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        default:"default title"
    },
    desc:{
        type:String,
        default:"default desc"
    }
})

module.exports=mongoose.model("todo_database",todoSchema)