const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { createItems } = require("../controllers/storage");

router.post("/",uploadMiddleware.single("myfile"), createItems);
module.exports = router;