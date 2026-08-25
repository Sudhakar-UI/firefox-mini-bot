"use client";

import { useState } from "react";
import { Image } from "react-bootstrap";
import ChevronDown from "./ChevronDown";

const sellOrders = [
    { price: "1.67", amount: "1.67" },
    { price: "1.64", amount: "1.64" },
    { price: "1.639", amount: "1.639" },
    { price: "1.638", amount: "1.638" },
    { price: "1.62", amount: "1.62" },
];

const buyOrders = [
    { price: "1.578", amount: "33.18" },
    { price: "1.575", amount: "870.03" },
    { price: "1.574", amount: "12.63" },
    { price: "1.57", amount: "3.17" },
    { price: "1.565", amount: "2.67" },
];

export default function OrderBook() {

    const [orderBookType, setOrderBookType] = useState("all");

    return (
        <div className="rightPanel">

            <div className="orderBookHeader">

                <div className="depthBars">

                    {/* ALL */}
                    <button
                        type="button"
                        className={`depthBtn ${orderBookType === "all"
                                ? "activeDepthBtn"
                                : ""
                            }`}
                        onClick={() => setOrderBookType("all")}
                    >
                        <Image
                            src="/assets/images/buysellicon.svg"
                            alt="All"
                            width={20}
                            height={20}
                        />
                    </button>


                    {/* BUY */}
                    <button
                        type="button"
                        className={`depthBtn ${orderBookType === "buy"
                                ? "activeDepthBtn"
                                : ""
                            }`}
                        onClick={() => setOrderBookType("buy")}
                    >
                        <Image
                            src="/assets/images/buyicon.svg"
                            alt="Buy"
                            width={20}
                            height={20}
                        />
                    </button>


                    {/* SELL */}
                    <button
                        type="button"
                        className={`depthBtn ${orderBookType === "sell"
                                ? "activeDepthBtn"
                                : ""
                            }`}
                        onClick={() => setOrderBookType("sell")}
                    >
                        <Image
                            src="/assets/images/sellicon.svg"
                            alt="Sell"
                            width={20}
                            height={20}
                        />
                    </button>

                </div>


                <div className="amountSelectWrapper">
                    <select className="amountSelect">
                        <option value="0.001">0.001</option>
                        <option value="0.01">0.01</option>
                        <option value="0.1">0.1</option>
                        <option value="1">1</option>
                    </select>
                </div>

            </div>


            <div className="bookColumnLabels">
                <span>Price</span>
                <span>Amount</span>
            </div>


            <div className="bookColumnLabels subLabel mt-1">
                <p className="currentPriceUsd">(USDT)</p>
                <p className="currentPriceUsd">(BTC)</p>
            </div>


            {/* SELL ORDERS */}
            {(orderBookType === "all" ||
                orderBookType === "sell") && (

                    sellOrders.map((row, i) => (
                        <div
                            className="bookRow"
                            key={`sell-${i}`}
                        >
                            <span className="priceRed">
                                {row.price}
                            </span>

                            <span className="amountText">
                                {row.amount}
                            </span>
                        </div>
                    ))

                )}


            {/* CURRENT PRICE - ALL ONLY */}
            {orderBookType === "all" && (
                <>
                    <div className="currentPriceRow">
                        <span className="currentPrice">
                            1.578516518 ▲
                        </span>
                    </div>

                    <div className="currentPriceUsd">
                        $1.57
                    </div>
                </>
            )}


            {/* BUY ORDERS */}
            {(orderBookType === "all" ||
                orderBookType === "buy") && (

                    buyOrders.map((row, i) => (
                        <div
                            className="bookRow"
                            key={`buy-${i}`}
                        >
                            <span className="priceGreen">
                                {row.price}
                            </span>

                            <span className="priceGreen">
                                {row.amount}
                            </span>
                        </div>
                    ))

                )}

        </div>
    );
}