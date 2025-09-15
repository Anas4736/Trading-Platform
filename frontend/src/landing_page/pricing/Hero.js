import React from "react";

function Hero() {
  return (
    <div className="container text-center p-5">
      <h1 className="mt-5 mb-3">Charges</h1>
      <p className="fs-5 mb-5 text-muted">List of all charges and taxes</p>
      <div className="row pt-5 my-5">
        <div className="col-1 mt-5"></div>
        <div className="col mt-5">
          <img
            src="media/images/pricingEquity.svg"
            alt="Pricing Equity"
            style={{ height: "75%", width: "75%" }}
          />
          <h1 className="fs-3 mb-5">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col mt-5">
          <img
            src="media/images/intradayTrades.svg"
            alt="intradayTrades"
            style={{ height: "75%", width: "75%" }}
          />
          <h1 className="fs-3 mb-5">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col mt-5">
          <img
            src="media/images/pricing0.svg"
            alt="Pricing 0"
            style={{ height: "75%", width: "75%" }}
          />
          <h1 className="fs-3 mb-5">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
        <div className="col-1 mt-5"></div>
      </div>
    </div>
  );
}

export default Hero;
