const { showHolding } = require("../Controllers/Holding");
const express = require('express');
const router = express.Router();

router.get("/allHoldings", showHolding);

module.exports = router;
