 let express = require("express")
 let app = express()
 app.use(express.json())
const port=3000;

app.get("/Marko",(require, response)=>{
    let Marko = {
        name:"Marko",
        age: 2001
    }
    response.send(Marko)
})








app.listen(port,()=>{
    console.log("Markoo")
})