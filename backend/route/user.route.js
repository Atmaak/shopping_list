const express = require("express");
const cors = require('cors')
const router = express.Router();

router.use(cors())
const { user } = require('../controller/_index')

router.post('/create_account', user.create_user)
router.post('/sign_in', user.sign_in)

module.exports = router