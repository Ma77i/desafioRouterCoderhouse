const path = require('path')
const { Router } = require('express')

const router = new Router()
const Contenedor = require(path.join(__dirname, "../public/js/contenedor.js"));
const products = new Contenedor(path.join(__dirname, "../public/data.json"))

router.get('/', async (req, res) => {
    const list = await products.getAll()
    res.render('productos', {list})
})


module.exports = router