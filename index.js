const express = require('express')
const router = express.Router()


router.get('/');


router.use("/", (req, res)=>{
    res.json({message:"add new all the products"});
})

