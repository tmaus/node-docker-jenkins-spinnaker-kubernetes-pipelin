const express = require('express')
const router = express.Router()
const mw = require('../middlewares/myMiddleware')


router.get('/listFriends', mw.findAllFriends)