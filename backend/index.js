import express  from "express";
import mysql from 'mysql'
import cors from 'cors'
const app = express()
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
// app.use(express.json)
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"weee"
})
app.get("/",(req,res)=>{
    res.json("hello this is backend")

})

app.get("/books",(req,res)=>{
    const qurey = "SELECT * FROM user"
    db.query(qurey,(err,data)=>{
        if(err) return res.json("Soory Something Went warong");
        else{
            return res.json(data)
        }
    })
})

app.post("/books",(req,res)=>{
    const q = "INSERT INTO user (`id`,`name`) VALUES (?) "
    const VALUES = [
        req.body.id,
        req.body.name
    ];
    console.log(req.body.name)
    // const VALUES = [565,"SIDDHARTHAN","siddharthan44@gmail.com"];
    db.query(q,[VALUES],(err,data)=>{
        if(err) return res.json(err);
        else{
            return res.json(data)
        }
    })
})

app.listen(9999,()=>{
    console.log("coected baend")
})