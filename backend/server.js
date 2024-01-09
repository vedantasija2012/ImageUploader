const app = require("./app.js")

const ConnectDB = require('./config/ConnectDB.js')

ConnectDB()

app.listen(process.env.PORT, ()=>{
    console.log(`Listening at: http://localhost:${process.env.PORT}`)
})