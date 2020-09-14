const express = require('express')
const router = express.Router();
const {sayHi}=require('../controller/user.controller');

router.get("/", sayHi);

 module.exports = router;