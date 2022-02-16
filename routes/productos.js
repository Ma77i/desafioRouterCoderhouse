const express = require('express')
const { Router } = express;

const path = require('path')

const router = Router()
const Contenedor = require(path.join(__dirname, "../public/js/contenedor.js"));
const products = new Contenedor(path.join(__dirname, "../public/data.json"))



//GET PRODUCTS
router.get('/', async (req, res) => {
    const list = await products.getAll()
    res.status(200).send(list)
})


//GET PRODUCT BY ID
router.get('/:id', async (req, res) => {
    const { id } = req.params

    const getId = await products.getById(id)
    console.log(getId)

    if (!getId) {
        res.status(404).send("Product not found")
        return
    }
    res.send(getId)
})

//UPDATE BY ID
router.put('/:id', async (req, res, next) => {
    const { id } = req.params
    const update = await products.getById(id)
    //console.log(update)
    if (!update) {
        res.status(404).send({
            error: "Product not found"})
        return
    }
    const obj = req.body
    products.updateById(id, obj)

    res.status(200).send(update)
})



// DELETE BY ID
router.delete('/:id', async (req, res) => {

    const { id } = req.params


    const del = await products.deleteById(id)
    //console.log(del)


    if (!del) {
        res.status(404).send("Product not found")
        return
    }

    res.send(del)
})

module.exports = router