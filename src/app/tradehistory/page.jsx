"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Image, Container, Form, InputGroup, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEdit, faTrash, faPen, faArrowUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Userfooter from "../components/Userfooter";

const addtoken = () => {

    const pairs = [
        {
            symbol: "BTC/USDT",
            icon1: "/assets/images/color/btc.svg",
            icon2: "/assets/images/color/usdt.svg",
            price: "$70,628.63",
            amount: "0.9946",
            usd: "$0.993",
            change: "-0.53%",
            type: "danger",
        },
        {
            symbol: "SOL/USDT",
            icon1: "/assets/images/color/sol.svg",
            icon2: "/assets/images/color/usdt.svg",
            price: "$70,628.63",
            amount: "0.9946",
            usd: "$0.993",
            change: "-1.06%",
            type: "danger",
        },
        {
            symbol: "DOGE/USDT",
            icon1: "/assets/images/color/doge.svg",
            icon2: "/assets/images/color/usdt.svg",
            price: "$70,628.63",
            amount: "0.9946",
            usd: "$0.993",
            change: "-0.04%",
            type: "danger",
        },
        {
            symbol: "ETH/USDT",
            icon1: "/assets/images/color/eth.svg",
            icon2: "/assets/images/color/usdt.svg",
            price: "$70,628.63",
            amount: "0.9946",
            usd: "$0.993",
            change: "-0.16%",
            type: "success",
        },
        {
            symbol: "MATIC/USDT",
            icon1: "/assets/images/color/matic.svg",
            icon2: "/assets/images/color/usdt.svg",
            price: "$70,628.63",
            amount: "0.9946",
            usd: "$0.993",
            change: "-1.12%",
            type: "danger",
        },
        {
            symbol: "TRX/USDT",
            icon1: "/assets/images/color/trx.svg",
            icon2: "/assets/images/color/usdt.svg",
            price: "$70,628.63",
            amount: "0.9946",
            usd: "$0.993",
            change: "-2.00%",
            type: "danger",
        },
        {
            symbol: "TON/USDT",
            icon1: "/assets/images/color/ton.svg",
            icon2: "/assets/images/color/usdt.svg",
            price: "$70,628.63",
            amount: "0.9946",
            usd: "$0.993",
            change: "+0.53%",
            type: "success",
        },
        {
            symbol: "XMR/USDT",
            icon1: "/assets/images/color/xmr.svg",
            icon2: "/assets/images/color/usdt.svg",
            price: "$70,628.63",
            amount: "0.9946",
            usd: "$0.993",
            change: "-33.51%",
            type: "danger",
        },
    ];

    const [selectedPair, setSelectedPair] = useState(pairs[0]);
return (
    <>
        <div className="tradehistory-page">
            <Container>

                <span className="sub-head txt-gry">
                    Select Exchange Pair
                </span>

                <div className="supportsearch">
                    <Form className="siteformbg">
                        <Form.Group className="form-group mb-0">
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                                <Form.Control placeholder="Search Coin" />
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </div>

                {pairs.map((pair, index) => {
                    const [coin, base] = pair.symbol.split("/");

                    return (
                        <Link href="/" className="set-boted mt-2" key={index}>

                            <div className="d-flex align-items-center">

                                <div className="coinIcons">
                                    <Image
                                        src={pair.icon1}
                                        width={26}
                                        height={26}
                                        alt={coin}
                                        className="coinicon coinicon-first"
                                    />

                                    <Image
                                        src={pair.icon2}
                                        width={26}
                                        height={26}
                                        alt={base}
                                        className="coinicon coinicon-second"
                                    />
                                </div>

                                <div className="d-flex flex-column">

                                    <span className="tradePairTitle">
                                        <span className="tradePairCoin">{coin}</span>
                                        <span className="tradePairSlash"> / </span>
                                        <span className="tradePairBase">{base}</span>
                                    </span>

                                    <p className="txt-gry">{pair.price}</p>

                                </div>

                            </div>

                            <div className="d-flex justify-content-end align-items-center gap-2">

                                <div className="d-flex flex-column text-end">
                                    <span className="sub-head">{pair.amount}</span>
                                    <p>{pair.usd}</p>
                                </div>

                                <button
                                    className={
                                        pair.type === "success"
                                            ? "success-btn"
                                            : "danger-btn"
                                    }
                                >
                                    {pair.change}
                                </button>

                            </div>

                        </Link>
                    );
                })}

            </Container>

            <Userfooter />
        </div>
    </>
);
}

export default addtoken