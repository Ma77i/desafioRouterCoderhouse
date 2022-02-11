const express = require('express')
const path = require('path')
const { Router } = express

const router = Router()

const Contenedor = require(path.join(__dirname, "../public/js/contenedor.js"));

const products = new Contenedor(path.join(__dirname, "../public/data.json"))


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/addProd.html"))
})


router.post("/", (req, res) => {
    const save = products.save(req.body)
    res.status(201).send(save)
    res.redirect('/')
})




module.exports = router