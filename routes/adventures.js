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
// define the post express route for a product and make it restricted
// define the put express route for a product and make it restricted
// define the delete express route for a product and make it restricted

module.exports = router