import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Nav, Tab, InputGroup, Alert, Badge, Image, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleCheck,
    faAngleDown, faAngleUp, faTimes, faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import ChevronDown from "./ChevronDown";
import Carousel from "react-multi-carousel";

export default function OpenOrder({ bottomTab, setBottomTab, trades }) {
    const [openRow, setOpenRow] = useState(null);
    const { isNightMode } = useTheme();
    const [orderType, setOrderType] = useState("Market");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [tradeType, setTradeType] = useState("Buy");
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openDraweradd, setOpenDraweradd] = useState(false);
    const [openDrawermarket, setOpenDrawermarket] = useState(false);
    const [openDrawerlimit, setOpenDrawerlimit] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);
    const handleOpenDraweradd = () => setOpenDraweradd(true);
    const handleCloseDraweradd = () => setOpenDraweradd(false);
    const handleOpenDrawermarket = () => setOpenDrawermarket(true);
    const handleCloseDrawermarket = () => setOpenDrawermarket(false);
    const handleOpenDrawerlimit = () => setOpenDrawerlimit(true);
    const handleCloseDrawerlimit = () => setOpenDrawerlimit(false);

    const tabsRef = useRef(null);

    const scrollTabs = (direction) => {
        if (!tabsRef.current) return;

        const scrollAmount = 120;

        tabsRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    };
    return (
        <Tab.Container
            activeKey={bottomTab}
            onSelect={(k) => setBottomTab(k)}
            defaultActiveKey="open">
            <>
                <div className="bottomTabsWrapper">

                    <button
                        type="button"
                        className="bottomTabsArrow bottomTabsArrowLeft"
                        onClick={() => scrollTabs("left")}
                        aria-label="Scroll left"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <Nav
                        ref={tabsRef}
                        className="bottomTabs"
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="positions" className="bottomTab">
                                Positions
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="open" className="bottomTab">
                                Open Orders
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="history" className="bottomTab">
                                Order History
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="trades" className="bottomTab">
                                Trades
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="P&lhistory" className="bottomTab">
                                P&L History
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <button
                        type="button"
                        className="bottomTabsArrow bottomTabsArrowRight"
                        onClick={() => scrollTabs("right")}
                        aria-label="Scroll right"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="positions">
                        <>
                            <div className="tradeHistoryCard mt-2 mb-3">
                                <div
                                    className="d-flex justify-content-between align-items-center"
                                >
                                </div>
                                <div className="tradeHistoryBody">

                                    {/* Row 1 */}
                                    <div className="tradeRow tradeRowTop mb-2">

                                        <div className="tradeCol tradeColLeft pairLeft  gap-0">
                                            <Link href="/tradehistory" className="pairLink">
                                                <div className="coinIcons">
                                                    <Image
                                                        src="/assets/images/color/btc.svg"
                                                        width={26}
                                                        height={26}
                                                        alt="coin1"
                                                        className="coinicon coinicon-first"
                                                    />
                                                    <Image
                                                        src="/assets/images/color/usdt.svg"
                                                        width={26}
                                                        height={26}
                                                        alt="coin2"
                                                        className="coinicon coinicon-second"
                                                    />
                                                </div>
                                            </Link>

                                            <span className="pairName">
                                                BTC/USDT
                                            </span>
                                        </div>

                                        <div className="tradeCol tradeColCenter">
                                            <p>Cross 10X</p>
                                            <div className="sub-head">ETHUSDT</div>
                                        </div>

                                        <div className="tradeCol tradeColRight">
                                            <p>Leverage</p>
                                            <div className="sub-head">0.01 ETH</div>
                                        </div>

                                    </div>

                                    {/* Row 2 */}

                                    <div className="tradeRow mb-2">

                                        <div className="tradeCol tradeColLeft">
                                            <p>Qty</p>
                                            <div className="sub-head">0.01 ETH</div>
                                        </div>

                                        <div className="tradeCol tradeColCenter">
                                            <p>Value</p>
                                            <div className="sub-head">17.55 USDT</div>
                                        </div>

                                        <div className="tradeCol tradeColRight">
                                            <p>Entry Price</p>
                                            <div className="sub-head">1,755.60</div>
                                        </div>

                                    </div>

                                    {/* Row 3 */}

                                    <div className="tradeRow mb-2">

                                        <div className="tradeCol tradeColLeft">
                                            <p>Mark Price</p>
                                            <div className="sub-head">1,755.60</div>
                                        </div>

                                        <div className="tradeCol tradeColCenter">
                                            <p>IM</p>
                                            <div className="sub-head">1,757.53</div>
                                        </div>

                                        <div className="tradeCol tradeColRight">
                                            <p>MM</p>
                                            <div className="sub-head">1.76 USD</div>
                                        </div>

                                    </div>

                                    <Alert variant="dark" className="trade-alert">

                                        <div className="tradeRow">

                                            <div className="tradeCol tradeColLeft">
                                                <p>Unrealized P&L</p>
                                                <div className="sub-head t-green">1.76 USD</div>
                                            </div>

                                            <div className="tradeCol tradeColRight">
                                                <p>Realized P&L</p>
                                                <div className="sub-head t-red">1.76 USD</div>
                                            </div>

                                        </div>

                                    </Alert>
                                    <Alert variant="dark" className="trade-alert">

                                        <div className="tradeRow">

                                            <div className="tradeCol tradeColLeft">
                                                <p>TP/SL</p>
                                                <div className="sub-head t-green">---/---</div>

                                            </div>

                                            <div className="tradeCol tradeColRight">
                                                <Button
                                                    type="button"
                                                    id="submitbtn"
                                                    className="sitebtn btn-sm btn-width-25 mt-1"
                                                    onClick={() => handleOpenDraweradd(true)}
                                                >
                                                    + Add
                                                </Button>
                                            </div>

                                        </div>

                                    </Alert>

                                    {/* Bottom */}

                                    <div className="tradeRow mb-2">

                                        <div className="tradeCol tradeColLeft">
                                            <p>TP/SL <span className="sub-head t-red">---/---</span></p>
                                            <Button
                                                type="button"
                                                id="submitbtn"
                                                className="sitebtn btn-sm btn-width-25 mt-1"
                                                onClick={() => handleOpenDraweradd(true)}
                                            >
                                                + Add
                                            </Button>
                                        </div>

                                        <div className="tradeCol">
                                            <p>Closed By</p>

                                            <div className="d-flex gap-2 mt-1 justify-content-end">
                                                <Button
                                                    type="button"
                                                    className="sitebtn btn-sm w-50"
                                                    id="submitbtn"
                                                    onClick={() => handleOpenDrawermarket()}
                                                >
                                                    Market
                                                </Button>

                                                <Button
                                                    type="button"
                                                    className="sitebtn btn-sm w-50"
                                                    id="submitbtn"
                                                    onClick={() => handleOpenDrawerlimit()}
                                                >
                                                    Limit
                                                </Button>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </>
                    </Tab.Pane>
                    <Tab.Pane eventKey="open">
                        <>
                            <Tab.Container defaultActiveKey="openorderhistory">
                                <Nav className="historys-tabs mt-3 mb-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="executed">Buy</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="partialexecuted">Sell</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="cancel" onClick={() => handleOpenDrawer(true)} className="canel-btn">Cancel All</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content defaultActiveKey="all">
                                    <Tab.Pane eventKey="all">
                                        <div className="tradeHistoryCard">

                                            <div
                                                className="tradeHistoryHeader d-flex justify-content-between align-items-center"
                                                onClick={() =>
                                                    setOpenRow(openRow === "btc" ? null : "btc")
                                                }
                                            >

                                                <div className="tradeHistoryLeft">

                                                    <span className="tradeSell">
                                                        Sell
                                                    </span>

                                                    <span className="tradeDot">
                                                        •
                                                    </span>

                                                    <span>
                                                        Market
                                                    </span>

                                                    <span className="tradeDot">
                                                        •
                                                    </span>

                                                    <span>
                                                        100%
                                                    </span>

                                                </div>


                                                <div className="tradeHistoryRight">

                                                    <span className="tradeHistoryDate">
                                                        11 Apr 11:10
                                                    </span>

                                                    <FontAwesomeIcon
                                                        icon={
                                                            openRow === "btc"
                                                                ? faAngleUp
                                                                : faAngleDown
                                                        }
                                                        className="tradeHistoryArrow"
                                                    />

                                                </div>

                                            </div>


                                            {openRow === "btc" && (

                                                <div className="tradeHistoryBody">

                                                    <div className="tradeRow">
                                                        <span>Price per 1 TRX</span>
                                                        <strong>1400 000 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Average price</span>
                                                        <strong>0.001 ETH</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Sell</span>
                                                        <strong>0.001 ETH</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Amount</span>
                                                        <strong>140 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Filled</span>
                                                        <div className="d-flex flex-column gap-2">
                                                            <strong>0% • 0 USDT</strong>
                                                            <strong>100 ETH</strong>
                                                        </div>
                                                    </div>


                                                    <div className="tradeRow">
                                                        <span>Fee</span>
                                                        <strong>0 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Executed</span>
                                                        <strong>0 USDT</strong>
                                                    </div>

                                                    <div className="text-center mb-2">
                                                        <span className="t-red">Cancel Order</span>

                                                    </div>

                                                </div>

                                            )}

                                        </div>

                                    </Tab.Pane>

                                    <Tab.Pane eventKey="executed">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="partialexecuted">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="cancel">

                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </>

                    </Tab.Pane>
                    <Tab.Pane eventKey="history">
                        <>
                            <Tab.Container defaultActiveKey="openorderhistory">
                                <Nav className="historys-tabs mt-3 mb-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="executed">Executed</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="partialexecuted">Partial Executed</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="cancel" className="canel-btn">Cancel</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="all">
                                        <div className="tradeHistoryCard">

                                            <div
                                                className="tradeHistoryHeader d-flex justify-content-between align-items-center"
                                                onClick={() =>
                                                    setOpenRow(openRow === "btc" ? null : "btc")
                                                }
                                            >

                                                <div className="tradeHistoryLeft">

                                                    <span className="tradeSell">
                                                        Sell
                                                    </span>

                                                    <span className="tradeDot">
                                                        •
                                                    </span>

                                                    <span>
                                                        Market
                                                    </span>

                                                    <span className="tradeDot">
                                                        •
                                                    </span>

                                                    <span>
                                                        100%
                                                    </span>

                                                </div>


                                                <div className="tradeHistoryRight">

                                                    <span className="tradeHistoryDate">
                                                        11 Apr 11:10
                                                    </span>

                                                    <FontAwesomeIcon
                                                        icon={
                                                            openRow === "btc"
                                                                ? faAngleUp
                                                                : faAngleDown
                                                        }
                                                        className="tradeHistoryArrow"
                                                    />

                                                </div>

                                            </div>


                                            {openRow === "btc" && (

                                                <div className="tradeHistoryBody">

                                                    <div className="tradeRow">
                                                        <span>Price per 1 TRX</span>
                                                        <strong>Market</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Average price</span>
                                                        <strong>0.1 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Sell</span>
                                                        <strong>100 TRX</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Amount</span>
                                                        <strong>10 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Filled</span>
                                                        <div className="d-flex flex-column gap-2">
                                                            <strong>100% • 10 USDT</strong>
                                                            <strong>100 TRX</strong>
                                                        </div>
                                                    </div>


                                                    <div className="tradeRow">
                                                        <span>Fee</span>
                                                        <strong>0.075 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Executed</span>
                                                        <strong>9.925 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Executed at</span>
                                                        <strong>
                                                            11 April 2026, 11:10:55
                                                        </strong>
                                                    </div>

                                                </div>

                                            )}

                                        </div>

                                    </Tab.Pane>

                                    <Tab.Pane eventKey="executed">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="partialexecuted">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="cancel">

                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trades">
                    </Tab.Pane>
                    <Tab.Pane eventKey="P&lhistory">
                    </Tab.Pane>

                </Tab.Content>
            </>
            <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                    <Image src={isNightMode ? "/assets/images/swap-dark.gif" : "/assets/images/swap-white.gif"} alt="user" className="mobile-iconing" />
                    <h2 className="heading">Cancel Order?</h2>
                    <h2 className="sub-head">Cancel All <strong>ETH/USDT</strong>  orders</h2>
                </div>

                <div className="order-btn-yesno">
                    <div>
                        <Link href="/account-passcode">
                            <Button className="borderbtn">No</Button>
                        </Link>
                    </div>
                    <div>
                        <Link href="/account-passcode">
                            <Button className="sitebtn">Yes</Button>
                        </Link>
                    </div>

                </div>


            </div>

            <div className={`phone-draw-overlay ${openDraweradd ? 'open' : ''}`} onClick={handleCloseDraweradd}></div>
            <div className={`phone-draw ${openDraweradd ? 'open' : ''}`}>
                <div className="phone-draw-closer">
                    <div className="phone-draw-handles">Add TP/SL</div>
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDraweradd} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                </div>
                <div className="tpdrawer-content">

                    <div className="tpdrawer-summary">
                        <div className="tpdrawer-summary-item">
                            <span className="tpdrawer-label">Order Price</span>
                            <h6>64,550.07777777</h6>
                        </div>

                        <div className="tpdrawer-summary-item">
                            <span className="tpdrawer-label">Qty</span>
                            <h6>0.0180</h6>
                        </div>

                        <div className="tpdrawer-summary-item">
                            <span className="tpdrawer-label">Last Traded Price</span>
                            <h6>64,176.60000000</h6>
                        </div>
                    </div>

                    <div className="tpdrawer-field">
                        <label>Take Profit</label>

                        <div className="tpdrawer-input-wrap">
                            <input
                                type="text"
                                defaultValue="64170.93"
                                className="tpdrawer-input"
                            />

                            <span className="tpdrawer-input-tag">
                                Last Price
                            </span>
                        </div>
                    </div>

                    <div className="tpdrawer-field">
                        <label>Stop Loss</label>

                        <div className="tpdrawer-input-wrap">
                            <input
                                type="text"
                                defaultValue="64169.55"
                                className="tpdrawer-input"
                            />

                            <span className="tpdrawer-input-tag">
                                Last Price
                            </span>
                        </div>
                    </div>

                </div>
                <div className="d-flex gap-3">
                    <Link href="/" className="phone-draw-btn">
                        <Button className="borderbtn w-100">
                            Cancel
                        </Button>
                    </Link>
                    <Link href="/" className="phone-draw-btn">
                        <Button className="sitebtn w-100">
                            Continue
                        </Button>
                    </Link>
                </div>
            </div>
            <div className={`phone-draw-overlay ${openDrawermarket ? 'open' : ''}`} onClick={handleCloseDrawermarket}></div>
            <div className={`phone-draw ${openDrawermarket ? 'open' : ''}`}>
                <div className="phone-draw-closer">
                    <div className="phone-draw-handles">Add TP/SL</div>
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawermarket} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                </div>
                <div className="limitclose-content">
                    <div className="limitclose-field">
                        <label className="limitclose-label">
                            Closed Qty (BTC)
                        </label>

                        <input
                            type="text"
                            className="limitclose-input"
                            defaultValue="0.0180"
                        />
                    </div>

                    <div className="limitclose-alert">
                        contract(s) will be closed at <strong>64144.00</strong> Price
                    </div>

                </div>
                <div className="d-flex gap-3">
                    <Link href="/" className="phone-draw-btn">
                        <Button className="borderbtn w-100">
                            Cancel
                        </Button>
                    </Link>
                    <Link href="/" className="phone-draw-btn">
                        <Button className="sitebtn w-100">
                            Continue
                        </Button>
                    </Link>
                </div>
            </div>
            <div className={`phone-draw-overlay ${openDrawerlimit ? 'open' : ''}`} onClick={handleCloseDrawerlimit}></div>
            <div className={`phone-draw ${openDrawerlimit ? 'open' : ''}`}>
                <div className="phone-draw-closer">
                    <div className="phone-draw-handles">Add TP/SL</div>
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawerlimit} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                </div>
                <div className="limitclose-content">

                    <div className="limitclose-field">
                        <label className="limitclose-label">
                            Closing Price (USDT)
                        </label>

                        <input
                            type="text"
                            className="limitclose-input"
                            defaultValue="64144.00"
                        />
                    </div>

                    <div className="limitclose-field">
                        <label className="limitclose-label">
                            Closed Qty (BTC)
                        </label>

                        <input
                            type="text"
                            className="limitclose-input"
                            defaultValue="0.0180"
                        />
                    </div>

                    <div className="sub-head">
                        contract(s) will be closed at <strong>64144.00</strong> Price
                    </div>

                </div>
                <div className="d-flex gap-3">
                    <Link href="/" className="phone-draw-btn">
                        <Button className="borderbtn w-100">
                            Cancel
                        </Button>
                    </Link>
                    <Link href="/" className="phone-draw-btn">
                        <Button className="sitebtn w-100">
                            Continue
                        </Button>
                    </Link>
                </div>
            </div>
        </Tab.Container>

    );
}
