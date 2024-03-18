const express = require("express")
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const { validatorCreateItems, validatorGetItem } = require("../validators/tracks")
const { getItems, getItem, createItems, updateItems, deleteItems} = require("../controllers/tracks");




router.get("/", getItems)

router.get("/:id", validatorGetItem, getItem)

router.post("/", validatorCreateItems, createItems)

router.put("/:id", validatorGetItem, validatorCreateItems, updateItems)

router.delete(":/id", validatorGetItem, deleteItems)

module.exports = router