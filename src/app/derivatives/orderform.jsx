"use client";
import ChevronDown from "./ChevronDown";
import RangeSlider from "./RangeSlider";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { Image, Button, Container, OverlayTrigger, Tooltip, Overlay, Table, Nav, Tab, Modal, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCheck, faTimes, faSquarePlus, faInfoCircle, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon, AccountIcon, WalletIcon, LockIcon } from '../components/Icons'



export default function OrderForm() {
    const { isNightMode } = useTheme();
    const [orderType, setOrderType] = useState("Market");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [tradeType, setTradeType] = useState("Buy");
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);
    const handleOpenLeverageDrawer = () => setOpenSecondDrawer(true);
    const handleCloseLeverageDrawer = () => setOpenSecondDrawer(false);
    const handleOpenLeverageDrawerThird = () => setOpenThirdDrawer(true);
    const handleCloseLeverageDrawerThird = () => setOpenThirdDrawer(false);
    const handleOpenLeverageDrawerForth = () => setOpenForthDrawer(true);
    const handleCloseLeverageDrawerForth = () => setOpenForthDrawer(false);
    const [openSecondDrawer, setOpenSecondDrawer] = useState(false);
    const [openThirdDrawer, setOpenThirdDrawer] = useState(false);
    const [openForthDrawer, setOpenForthDrawer] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [target, setTarget] = useState(null);
    return (
        <div className="leftPanel">
            <div className="buySellToggle">

                <button
                    type="button"
                    className={`buyBtn ${tradeType === "Buy" ? "activeBuyTab" : ""
                        }`}
                    onClick={() => setTradeType("Buy")}
                >
                    Buy
                </button>

                <button
                    type="button"
                    className={`sellBtn ${tradeType === "Sell" ? "activeSellTab" : ""
                        }`}
                    onClick={() => setTradeType("Sell")}
                >
                    Sell
                </button>

            </div>

            <div className="limitTopContainer">

                <div className="limitTopDropdown">

                    <button
                        type="button"
                        className="limitTopLeverageBtn"
                        onClick={() => handleOpenDrawer(true)}  >
                        <span>Cross</span>
                        <ChevronDown size={16} />
                    </button>

                </div>


                <button
                    type="button"
                    className="limitTopLeverageBtn" onClick={handleOpenLeverageDrawer}
                >
                    <span>10x</span>
                </button>

            </div>


            <div className="marketInfoRow">
                <p className="aval">
                    Available to Trade
                </p>

                <strong>
                    0.00 USDC
                </strong>
            </div>


            <div className="marketOrderValueBox">

                <input
                    type="text"
                    className="marketOrderInput"
                    placeholder="Price"
                />

            </div>


            <div className="marketOrderValueBox">

                <input
                    type="text"
                    className="marketOrderInput"
                    placeholder="Size"
                />

            </div>


            <RangeSlider />


            <div className="position-relative">
                <div className="limitCheckbox d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center gap-2">
                        <input type="checkbox" />
                        TP/SL
                    </span>
                    <div className="d-flex gap-1 align-items-center">
                        <div className="balancewlt">
                            <span className="avmodal" onClick={handleOpenLeverageDrawerThird}>
                                <FontAwesomeIcon icon={faSquarePlus} />
                            </span>
                        </div>
                        <div className="balancewlt">
                            <span className="avmodal" onClick={handleOpenLeverageDrawerForth}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </span>
                        </div>
                        {/* <ul className="ruleslist">
                        <li>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                                <FontAwesomeIcon icon={faInfoCircle} />

                                <div className="rulesnotes">
                                    <div className="tooltipRow">
                                        <span>Minimum trade amount:</span>
                                        <span>0.005 ETH</span>
                                    </div>

                                    <div className="tooltipRow">
                                        <span>Minimum price movement:</span>
                                        <span>0.1111 ETH</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul> */}
                    </div>

                </div>
            </div>


            <div className="limitInputWrapper">

                <button
                    type="button"
                    className="limitMinusBtn"
                >
                    −
                </button>

                <input
                    type="text"
                    className="limitTradeInput"
                    placeholder="TP Limit (USDT)"
                />

                <button
                    type="button"
                    className="limitPlusBtn"
                >
                    +
                </button>

            </div>


            <div className="limitInputWrapper">

                <button
                    type="button"
                    className="limitMinusBtn"
                >
                    −
                </button>

                <input
                    type="text"
                    className="limitTradeInput"
                    placeholder="SL Trigger (USDT)"
                />

                <button
                    type="button"
                    className="limitPlusBtn"
                >
                    +
                </button>

            </div>


            <div className="limitInputWrapper">

                <button
                    type="button"
                    className="limitMinusBtn"
                >
                    −
                </button>

                <input
                    type="text"
                    className="limitTradeInput"
                    placeholder="SL Limit"
                />

                <button
                    type="button"
                    className="limitPlusBtn"
                >
                    +
                </button>

            </div>


            <div className="limitBottomRow">

                <p className="aval">
                    Available to Trade
                </p>

                <strong>
                    N/A
                </strong>

            </div>


            <div className="limitBottomRow">

                <span>
                    Margin Required
                </span>

                <strong>
                    N/A
                </strong>

            </div>




            {tradeType === "Buy" ? (
                <button
                    type="button"
                    className="buySubmitBtn" onClick={() => handleOpenDrawer(true)}
                >
                    Buy BTC
                </button>
            ) : (
                <button
                    type="button"
                    className="sellSubmitBtn"
                >
                    Sell BTC
                </button>
            )}
            <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className="phone-draw-closer">
                    <div className="phone-draw-handles">Margin Mode</div>
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                </div>
                <div className="text-center">
                    <div className="phone-draw-content">
                        <label className="limitCheckbox">
                            <input
                                type="checkbox"
                            // checked={tpSl}
                            // onChange={(e) => setTpSl(e.target.checked)}
                            />
                            <h2 className="sub-head">Cross Margin Mode</h2>
                        </label>
                        <p>Share margin across all positions under the same asset, helping maximize capital efficiency and reduce the chance of liquidation.</p>
                    </div>
                    <div className="phone-draw-content">
                        <label className="limitCheckbox">
                            <input
                                type="checkbox"
                            // checked={tpSl}
                            // onChange={(e) => setTpSl(e.target.checked)}
                            />
                            <h2 className="sub-head">Isolated Margin Mode</h2>
                        </label>
                        <p>Assign margin to each position separately, giving better risk control and limiting losses to the selected position only.</p>
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
            <div
                className={`phone-draw-overlay ${openSecondDrawer ? "open" : ""}`}
                onClick={handleCloseLeverageDrawer}
            />
            <div className={`phone-draw ${openSecondDrawer ? "open" : ""}`}>
                <div className="phone-draw-closer">
                    <div className="phone-draw-handles">Adjust Leverage</div>
                    <div className="phone-draw-close">
                        <Button
                            onClick={handleCloseLeverageDrawer}
                            className="phone-draw-close-btn"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                </div>
                <div className="leverageDrawer">
                    <label className="leverageLabel">
                        Leverage
                    </label>
                    <div className="leverageBox">
                        <button
                            className="leverageActionBtn"
                        // onClick={decreaseLeverage}
                        >
                            −
                        </button>
                        <span className="leverageValue">
                            X
                        </span>
                        <button
                            className="leverageActionBtn"
                        // onClick={increaseLeverage}
                        >
                            +
                        </button>
                    </div>
                    <p className="mb-4">
                        Maximum openable position at market price with the current leverage
                        multiplier:
                        {" "}0 USDT
                    </p>
                    <p>
                        Maximum size at the current leverage :
                        2342156 USDT
                        <span className="riskLink ms-2">
                            View risk limits
                        </span>
                    </p>
                    <label className="applyLeverageCheck">
                        <input
                            type="checkbox"
                        // checked={applyAll}
                        // onChange={(e) => setApplyAll(e.target.checked)}
                        />
                        <span>
                            Apply leverage adjustment to all futures
                        </span>
                    </label>
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
            </div>
            <div className={`phone-draw ${openThirdDrawer ? "open" : ""}`}>
                <div className="phone-draw-closer">
                    <div className="phone-draw-handles">PNL Calculator (BTCUSDT)</div>
                    <div className="phone-draw-close close">
                        <Button
                            onClick={handleCloseLeverageDrawerThird}
                            className="phone-draw-close-btn"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                </div>
                <Tab.Container defaultActiveKey="buy">
                    <div className="innerpagetab historytab">
                        <Nav variant="pills" className="tabbanner">
                            <Nav.Item><Nav.Link eventKey="buy" id='pnlform'>Buy</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="sell" id='pnlform'>Sell</Nav.Link></Nav.Item>
                        </Nav>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="buy">
                                <Form.Group>
                                    <InputGroup className="mb-3 mt-3">
                                        <InputGroup.Text>
                                            <span className='adjusticon'>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </span>
                                        </InputGroup.Text>
                                        <Form.Control className="text-center" placeholder="1x" />
                                        <InputGroup.Text>
                                            <span className='adjusticon'>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <RangeSlider />
                                <p>Maximum position at current leverage : 1X</p>
                                <Form.Group className="form-group mt-2">
                                    <InputGroup>
                                        <Form.Control name="code" placeholder="Entry Price" id="entry_price" />
                                        <InputGroup.Text>USDT</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="form-group mt-2">
                                    <InputGroup>
                                        <Form.Control name="code" placeholder="Exit Price" id="exit_price" />
                                        <InputGroup.Text>USDT</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="form-group mt-2">
                                    <InputGroup>
                                        <Form.Control name="code" placeholder="Quantity" id="token_quantity" />
                                        <InputGroup.Text>BTC</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <div className="pnlcalc-results">
                                    <h6 className="sub-head">
                                        Results
                                    </h6>
                                    <div className="pnlc">
                                        <p>Initial Margin</p>
                                        <p>0 USDT</p>
                                    </div>
                                    <div className="pnlc">
                                        <p>PnL</p>
                                        <p>0 USDT</p>
                                    </div>
                                    <div className="pnlc">
                                        <p>ROI</p>
                                        <p>0 %</p>
                                    </div>
                                </div>
                                <div className="pnlcalc-results">
                                    <h6 className="sub-head">
                                        Notes
                                    </h6>
                                    <p>
                                        This PnL calculator does not include Maker
                                        fees, Taker fees, or other exchange charges.
                                        Actual profit or loss may vary depending on
                                        applicable fees and market conditions.
                                    </p>

                                </div>

                                <div className="text-center mt-2">
                                    <Button type="button" className="sitebtn w-100" id='calculate'>Calculate</Button>
                                </div>

                            </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="sell">
                                <Form.Group>
                                    <InputGroup className="mb-3 mt-3">
                                        <InputGroup.Text>
                                            <span className='adjusticon'>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </span>
                                        </InputGroup.Text>
                                        <Form.Control className="text-center" placeholder="1x" />
                                        <InputGroup.Text>
                                            <span className='adjusticon'>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <RangeSlider />
                                <p>Maximum position at current leverage : 1X</p>
                                <Form.Group className="form-group mt-2">
                                    <InputGroup>
                                        <Form.Control name="code" placeholder="Entry Price" id="entry_price" />
                                        <InputGroup.Text>USDT</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="form-group mt-2">
                                    <InputGroup>
                                        <Form.Control name="code" placeholder="Exit Price" id="exit_price" />
                                        <InputGroup.Text>USDT</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="form-group mt-2">
                                    <InputGroup>
                                        <Form.Control name="code" placeholder="Quantity" id="token_quantity" />
                                        <InputGroup.Text>BTC</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <div className="pnlcalc-results">
                                    <h6 className="sub-head">
                                        Results
                                    </h6>
                                    <div className="pnlc">
                                        <p>Initial Margin</p>
                                        <p>0 USDT</p>
                                    </div>
                                    <div className="pnlc">
                                        <p>PnL</p>
                                        <p>0 USDT</p>
                                    </div>
                                    <div className="pnlc">
                                        <p>ROI</p>
                                        <p>0 %</p>
                                    </div>
                                </div>
                                <div className="pnlcalc-results">
                                    <h6 className="sub-head">
                                        Notes
                                    </h6>
                                    <p>
                                        This PnL calculator does not include Maker
                                        fees, Taker fees, or other exchange charges.
                                        Actual profit or loss may vary depending on
                                        applicable fees and market conditions.
                                    </p>

                                </div>

                                <div className="text-center mt-2">
                                    <Button type="button" className="sitebtn w-100" id='calculate'>Calculate</Button>
                                </div>

                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
            <div className={`phone-draw ${openForthDrawer ? "open" : ""}`}>
                <div className="phone-draw-closer">
                    <div className="phone-draw-handles">PNL Calculator (BTCUSDT)</div>
                    <div className="phone-draw-close close">
                        <Button
                            onClick={handleCloseLeverageDrawerForth}
                            className="phone-draw-close-btn"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                </div>
                <div className="rulesnotesing">
                    <div className="tooltipRow">
                        <span>Minimum trade amount:</span>
                        <span>0.005 ETH</span>
                    </div>

                    <div className="tooltipRow">
                        <span>Minimum price movement:</span>
                        <span>0.1111 ETH</span>
                    </div>
                </div>

            </div>
        </div>

    );
}
