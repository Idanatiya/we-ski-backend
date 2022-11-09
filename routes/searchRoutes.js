const express = require('express')
const{setSearch}  = require('../controllers/searchController') 

const router = express.Router()


router.post('/',setSearch)


module.exports = router