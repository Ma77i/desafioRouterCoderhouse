const path = require('path')
const { Router } = require('express')

const router = new Router()
const Contenedor = require(path.join(__dirname, "../public/js/contenedor.js"));
const products = new Contenedor(path.join(__dirname, "../public/data.json"))

router.get('/', (req, res) => res.render('agregar'))



router.post('/', (req, res) => {
    const save = products.save(req.body)
    console.log(save)
    res.redirect(`/pug/result?product=${req.body.title}`)
})



module.exports = router