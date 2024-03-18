const express = require("express");
const { encrypt, compare } = require("../utils/handlePassword")
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");
const { matchedData } = require("express-validator");
const {usersModel} = require("../models")

router.post("/register", validatorRegister, async (req, res) => {

    req = matchedData(req)
    const password = await encrypt(req.password)
    const body = {...req, password}
    const data = await usersModel.create(body)
    data.set('password', undefined, { strict: false })
    res.send({data})

});

module.exports = router;