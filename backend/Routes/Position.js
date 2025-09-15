const { showPosition } = require("../Controllers/Position");
const express = require('express');
const router = express.Router();

router.get("/allPositions", showPosition);

module.exports = router;
