import express from "express"
const app = express()
const port = 3000;

app.get("/",(req,res) => {
    return res.send("hello world")
})

app.get("/heath",(req,res) => {
    return res.send("everything is fine")
})

app.listen(port,() => {
    console.log(`server is running at port ${port}`)
})