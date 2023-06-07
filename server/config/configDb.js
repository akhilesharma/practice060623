const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/todo060623")

.then(()=>console.log("database is connected"))

.catch((error)=>console.log("error in database connecting",error))