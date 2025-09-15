const { showOrder,createNewOrder } = require("../Controllers/Order");
const express = require('express');
const router = express.Router();

router.get("/allOrders", showOrder);
router.post("/newOrder",createNewOrder);

module.exports = router;
