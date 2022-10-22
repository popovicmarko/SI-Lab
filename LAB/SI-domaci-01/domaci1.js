


const { response } = require("express");
let express = require("express");
const { request } = require("http");
let app = express()
app.use(express.json())
const port = 8000;

let a = [];

app.post("/postaviArtikle", (req,res)=>{
    a=req.body
    res.end()
})


app.get("/vratiCenu", (req, res)=>{
    let ukupno= {
        value: 0
    };
    a.forEach(item=>{
        ukupno.value+=item;
    })
    res.send(ukupno);
})

app.listen(port,()=>{
    console.log("Markoo")
})