"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";

const tradeAllHistory = () => {
  const { isNightMode } = useTheme();
  const [activeTab, setActiveTab] = useState("spot");

  const spotHistory = [
    {
      pair: "BNB/USDT",
      type: "Stop Limit / Buy",
      date: "2026-06-15",
      time: "10:56:39 AM",
      amount: "0/0.824",
      price: "0.00 / 608.00",
      condition: ">610",
      status: "Cancelled",
    },
    {
      pair: "BTC/USDT",
      type: "Market / Sell",
      date: "2026-06-16",
      time: "09:20:10 AM",
      amount: "1/2",
      price: "108500 / 108900",
      condition: "--",
      status: "Completed",
    },
    {
      pair: "ETH/USDT",
      type: "Swap",
      date: "2026-06-17",
      time: "01:15:20 PM",
      amount: "5/5",
      price: "2500",
      condition: "--",
      status: "Pending",
    },
  ];

  const derivativeHistory = [
    {
      pair: "BNB/USDT",
      type: "Stop Limit / Buy",
      date: "2026-06-15",
      time: "10:56:39 AM",
      amount: "0/0.824",
      price: "0.00 / 608.00",
      condition: ">610",
      status: "Cancelled",
    },
    {
      pair: "BTC/USDT",
      type: "Market / Sell",
      date: "2026-06-16",
      time: "09:20:10 AM",
      amount: "1/2",
      price: "108500 / 108900",
      condition: "--",
      status: "Completed",
    },
    {
      pair: "ETH/USDT",
      type: "Swap",
      date: "2026-06-17",
      time: "01:15:20 PM",
      amount: "5/5",
      price: "2500",
      condition: "--",
      status: "Pending",
    },
  ];

  const swapHistory = [
    {
      pair: "BNB/USDT",
      type: "Stop Limit / Buy",
      date: "2026-06-15",
      time: "10:56:39 AM",
      amount: "0/0.824",
      price: "0.00 / 608.00",
      condition: ">610",
      status: "Cancelled",
    },
    {
      pair: "BTC/USDT",
      type: "Market / Sell",
      date: "2026-06-16",
      time: "09:20:10 AM",
      amount: "1/2",
      price: "108500 / 108900",
      condition: "--",
      status: "Completed",
    },
    {
      pair: "ETH/USDT",
      type: "Swap",
      date: "2026-06-17",
      time: "01:15:20 PM",
      amount: "5/5",
      price: "2500",
      condition: "--",
      status: "Pending",
    },
  ];

  const historyData =
    activeTab === "spot"
      ? spotHistory
      : activeTab === "derivative"
        ? derivativeHistory
        : swapHistory;

  return (
    <div className="tradeallHistoryPage">
      <Container>

        <div className="tradeHistoryTabs">

          <button
            className={`tradeHistoryTab ${activeTab === "spot" ? "tradeHistoryTabActive" : ""
              }`}
            onClick={() => setActiveTab("spot")}
          >
            Spot History
          </button>

          <button
            className={`tradeHistoryTab ${activeTab === "derivative" ? "tradeHistoryTabActive" : ""
              }`}
            onClick={() => setActiveTab("derivative")}
          >
            Derivative History
          </button>

          <button
            className={`tradeHistoryTab ${activeTab === "swap" ? "tradeHistoryTabActive" : ""
              }`}
            onClick={() => setActiveTab("swap")}
          >
            Swap History
          </button>

        </div>

        <div className="tradeHistoryContent">

          {historyData.map((item, index) => (

            <div
              className="tradeHistoryCard"
              key={index}
            >

              <div className="tradeHistoryTop">

                <div>

                  <h3 className="sub-head">
                    {item.pair}
                  </h3>

                  <p className="tradeHistoryType">
                    {item.type}
                  </p>

                </div>

                <div>

                  <h4 className="sub-head">
                    {item.date}
                  </h4>

                  <p>
                    {item.time}
                  </p>

                </div>

              </div>

              <div className="tradeHistoryBody">

                <div className="tradeHistoryRow">
                  <p>Amount</p>
                  <strong>{item.amount}</strong>
                </div>

                <div className="tradeHistoryRow">
                  <p>Price</p>
                  <strong>{item.price}</strong>
                </div>

                <div className="tradeHistoryRow">
                  <p>Conditions</p>
                  <strong>{item.condition}</strong>
                </div>

                <div className="tradeHistoryRow">
                  <p>Status</p>

                  <strong
                    className={`tradeHistoryStatus ${item.status === "Completed"
                      ? "tradeHistoryCompleted"
                      : item.status === "Cancelled"
                        ? "tradeHistoryCancelled"
                        : "tradeHistoryPending"
                      }`}
                  >
                    {item.status}
                  </strong>

                </div>

              </div>

            </div>


          ))}

        </div>

      </Container>
      <Userfooter />
    </div>
  );
};

export default tradeAllHistory;