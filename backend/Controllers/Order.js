const { OrdersModel } = require("../model/OrdersModel");

module.exports.showOrder = async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
};

module.exports.createNewOrder=async(req,res)=>{
  const newOrder=new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
}