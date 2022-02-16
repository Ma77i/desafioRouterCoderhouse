const { Router } = require('express')

const router = new Router()

router.get('/', (req, res) => res.render('index'))

/* router.post('/pugAddProducts', (req, res) => res.render('agregar'))

router.get('/pugProducts', async (req, res) => {
    const list = await products.getAll()
    res.render('productos', {list})
}) */


module.exports = router