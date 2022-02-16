const { Router } = require('express')

const router = new Router()

router.get('/', (req, res) => res.render('../layout/main'))

module.exports = router
