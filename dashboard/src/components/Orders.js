import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Sell/Buy</th>
          </tr>

          {orders.map((stock, index) => {
            const mode = stock.mode === "BUY" ? "Buy" : "Sell";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
        </div>
      </div>
    </>
  );
};

export default Orders;
