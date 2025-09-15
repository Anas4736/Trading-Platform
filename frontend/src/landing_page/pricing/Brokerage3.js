import React from "react";
import Commodity from "./Commodity.js";
import {Link} from "react-router-dom";

function Brokerage3() {
  return (
    <div className="container my-5">
      <div className="row mx-5">
        <div className="col-1 mt-5"></div>
        <div className="col mt-5 border-bottom">
          <h1 className="fs-3">
            <Link to="/pricing/equity">Equity</Link>
          </h1>
        </div>
        <div className="col mt-5 border-bottom">
          <h1 className="fs-3">
            <Link to="/pricing/currency">Currency</Link>
          </h1>
        </div>
        <div className="col mt-5 border-bottom">
          <h1 className="fs-3">
            <Link to="/pricing/commodity">Commodity</Link>
          </h1>
        </div>
        <div className="col-5 mt-5 border-bottom"></div>
        <div className="col-1 mt-5"></div>
      </div>
      <Commodity/>
      <h5 className="text-center opacity-75 mt-3">
        <Link to="/vjhdv" style={{ textDecoration: "none" }}>
          Calculate your costs upfront
        </Link>{" "}
        using our brokerage calculator
      </h5>
    </div>
  );
}

export default Brokerage3;
