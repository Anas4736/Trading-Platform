require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel.js");
const { PositionsModel } = require("./model/PositionsModel.js");
const { OrdersModel } = require("./model/OrdersModel.js");

const UserRoute = require("./Routes/User.js");
const HoldingRoute = require("./Routes/Holding.js");
const PositionRoute = require("./Routes/Position.js");
const OrderRoute = require("./Routes/Order.js");

const PORT = process.env.PORT || 3002;
const Url = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://zerodha-frontend-n84y.onrender.com", // <-- Add your deployed frontend
      "https://zerodha-dashboard-cpj3.onrender.com" // <-- Add your deployed dashboard if needed
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use(cookieParser());

app.use(express.json());

app.use(bodyParser.json());

app.use("/", UserRoute);
app.use("/", HoldingRoute);
app.use("/", PositionRoute);
app.use("/", OrderRoute);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});

  res.json(allOrders);
});

mongoose.connect(Url)
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
  });

