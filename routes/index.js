const { Router } = require('express')
const adventuresRouter = require('./adventures');
const usersRouter = require('./users');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
router.use('/adventures', adventuresRouter);

module.exports = router