const express = require('express')
const app = express();
const path = require('path');
const router = express.Router()

const port = 3000;


router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
})



app.listen(port, ()=>{
    console.log("Server has started")
})


