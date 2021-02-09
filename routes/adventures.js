const { Router } = require('express')
const controllers = require('../controllers/adventures')
const restrict = require('../helpers/restrict')

const router = Router()

router.get('/', controllers.getAdventures)
router.get('/:id', controllers.getAdventure)
router.post('/', restrict, controllers.createAdventure)
router.post('/', restrict, controllers.createAdventure)
router.put('/:id', restrict, controllers.updateAdventure)
router.delete('/:id', restrict, controllers.deleteAdventure)


module.exports = router