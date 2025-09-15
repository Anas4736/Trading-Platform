import React from "react";

function Charges() {
  return (
    <div className="container">
      <h1 className="fs-4 text-muted mx-5 px-5 mb-5">Charges Explained</h1>
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <h1 className="fs-6 opacity-75">
            Securities/Commodities transaction tax
          </h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy
            <br /> and sell sides when trading equity delivery. Charged only on
            selling side when trading
            <br /> intraday or on F&O.
            <br />
            <br /> When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge.
            <br /> Important to keep a tab.
            <br />
          </p>
          <br />
          <h1 className="fs-6 opacity-75">Transaction/Turnover Charges</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
            <br />
            <br />
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore
            <br /> w.e.f 01.01.2016. (XC and XD groups have been merged into a
            new group X w.e.f 01.12.2017)
            <br />
            <br />
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross
            <br /> turnover.
            <br />
            <br />
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non
            <br />
            -exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per
            crore of turnover on flat rate
            <br /> basis w.e.f. December 1, 2022.
            <br />
            <br />
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross
            <br /> turnover.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">Call & trade</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including
            <br /> auto square off orders.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">Stamp charges</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for
            <br /> transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">NRI brokerage charges</h1>
          <br />
          <span className="opacity-75" style={{ fontSize: "0.8rem" }}>
            <ul>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </span>
          <br />
          <h1 className="fs-6 opacity-75">Account with debit balance</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order
            <br /> instead of ₹20 per executed order.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h1>
          <br />
          <span className="opacity-75" style={{ fontSize: "0.8rem" }}>
            <ul>
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of
                <br /> premium for Options.
              </li>
            </ul>
          </span>
          <br />
          <h1 className="fs-6 opacity-75">Margin Trading Facility (MTF)</h1>
          <br />
          <span className="opacity-75" style={{ fontSize: "0.8rem" }}>
            <ul>
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied
                <br /> from T+1 day until the day MTF stocks are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </span>
          <br />
          <br />
        </div>
        <div className="col">
          <h1 className="fs-6 opacity-75">GST</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <br />
          <h1 className="fs-6 opacity-75">SEBI Charges</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">
            DP (Depository participant) charges
          </h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading
            <br /> account ledger when stocks are sold, irrespective of
            quantity. Female demat account holders
            <br /> (as first holder) will enjoy a discount of ₹0.25 per
            transaction on the CDSL fee.
            <br />
            <br /> Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">Pledging charges</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">AMC (Account maintenance charges)</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000.
            <br />
            <br /> To learn more about BSDA, Click here For non-BSDA demat
            accounts: ₹300/year + 18% GST charged <br />
            quarterly (90 days). To learn more about AMC, Click here
          </p>
          <br />
          <h1 className="fs-6 opacity-75">Corporate action order charges</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">Off-market transfer charges</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            ₹25 per transaction.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">Physical CMR request</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">Payment gateway charges</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <br />
          <h1 className="fs-6 opacity-75">Delayed Payment Charges</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>
          <br />
          <h1 className="fs-6 opacity-75">
            Trading using 3-in-1 account with block functionality
          </h1>
          <br />
          <span className="opacity-75" style={{ fontSize: "0.8rem" }}>
            <ul>
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </span>
          <br />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row my-2">
        <div className="col-1"></div>
        <div className="col">
          <h1 className="fs-6 opacity-75">Disclaimer</h1>
          <br />
          <p className="opacity-75" style={{ fontSize: "0.8rem" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
          <br />
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row my-5">
        <div className="col-1"></div>
        <div className="col">
          <h1 className="fs-4">Charges for account opening</h1>
          <br />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td>free</td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td>free</td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row my-5">
        <div className="col-1"></div>
        <div className="col">
          <h1 className="fs-4">Charges for account opening</h1>
          <br />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Service</th>
                <th>Billing Frquency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Charges;
