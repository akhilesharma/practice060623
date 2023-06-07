const express=require("express")
const database=require("./config/configDb")
const route=require("./route/todoRoute")
const validationErrorMiddleware = require('./middlewares/validationErrorMiddleware');
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.use(route)

app.use(validationErrorMiddleware);


app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });