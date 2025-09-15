const { HoldingsModel } = require("../model/HoldingsModel");

module.exports.showHolding = async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};
    