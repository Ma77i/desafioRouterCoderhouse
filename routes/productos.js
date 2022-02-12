const express = require('express')
const { Router } = express;

const path = require('path')

const router = Router()
const Contenedor = require(path.join(__dirname, "../public/js/contenedor.js"));

const products = new Contenedor(path.join(__dirname, "../public/data.json"))

/* const products = [{
        id: 1,
        title: "Hardrock A1",
        price: 765,
        thumbnail: "https://assets.specialized.com/i/specialized/121879?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto"
    },
    {
        id: 2,
        title: "Rockhopper",
        price: 965,
        thumbnail: "https://assets.specialized.com/i/specialized/91520-45_ROCKHOPPER-ELITE-29-CSTBLK-BLK_HERO"
    }
] */

router.get('/', async (req, res) => {
    const list = await products.getAll()
    res.status(200).send(list)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const getId = await products.getById(id)
    console.log(getId)

    if (!getId) {
        res.status(404).send("Product not found")
        return
    }
    res.send(getId)

/*     const prod = products.find(i => i.id == req.params.id)
    if (!prod) {
        res.status(404).send("Product not found")
        return
    }

    res.send(prod) */
})

router.post('/', (req, res) => {
/*     const {
        id,
        title,
        price,
        thumbnail
    } = req.body

    products.push({
        id,
        title,
        price,
        thumbnail
    })
    res.status(201).send(products) */
    const save = products.save(req.body)
    res.status(201).send(save)
})


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
/*     

    next()
}, (req, res) => {
    const {
        id
    } = req.params
    const {
        name
    } = req.body

    const movie = movies.find(m => m.id == id)
    if (!movie) {
        res.status(404).send("Movie not found")
        return
    }

    movie.name = name;
    res.sendStatus(200) */
})

router.delete('/:id', async (req, res) => {
/*     const { id } = req.params

    const prod = products.find(m => m.id == id)
    if (!prod) {
        res.status(404).send("Product not found")
        return
    }

    const index = products.indexOf(movie)
    movies.splice(index, 1) */



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