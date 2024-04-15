const express = require("express");
const cors = require('cors')
const router = express.Router();

const { item } = require('../controller/_index')

router.use(cors())

router.get('/list', item.get_all_items)
router.post('/create', item.create_item)
router.put('/update/:_id', item.update_item)
router.delete('/delete/:_id', item.delete_item)

module.exports = router