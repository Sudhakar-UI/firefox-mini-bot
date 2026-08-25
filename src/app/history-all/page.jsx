"use client";

import React, { useState, useEffect } from "react";
import { Container, Form, Nav, Tab, InputGroup, Alert, Badge, Image, Row, Col } from "react-bootstrap";
import {
  faMagnifyingGlass,
  faCircleCheck,
  faAngleDown, faAngleUp, faCopy
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";
import Select from "react-select";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Merchantview() {
  const [openRow, setOpenRow] = useState(null);
  const [openRows, setOpenRows] = useState(null);
  const [openRowes, setOpenRowes] = useState(null);
  const [openRo, setOpenRo] = useState(null);
  const [paymentType, setPaymentType] = useState("");

  const [showFilter, setShowFilter] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  useEffect(() => {
    document.body.classList.add("merchantview");
    return () => document.body.classList.remove("merchantview");
  }, []);

  const { isNightMode } = useTheme();

  return (
    <div className="historyall-page">
      <Container>
        <div className="his-dropdwn">
          <div>
            <Form className="siteformbg">
              <Form.Group className="form-group mt-1">
                <Form.Select
                  className="form-control"
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                >
                  <option value="spothistory">Spot History</option>
                  <option value="derivativehistory">Derivative History</option>
                  <option value="swaphistory">Swap History</option>
                  <option value="transferhistory">Transfer History</option>
                  <option value="sendhistory">Send History</option>
                  <option value="receivehistory">Receive History</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
          <div className="hisfilter-wrapper">
            <Dropdown show={showFilter}
              onToggle={(nextShow) => setShowFilter(nextShow)}
              align="end"
            >
              <Dropdown.Toggle
                as="div"
                className="hisfilter-toggle"
              >
                <Image
                  src={
                    isNightMode
                      ? "/assets/images/filter-dark.svg"
                      : "/assets/images/filter-icon.svg"
                  }
                  alt=""
                  className="hisall-icons"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="hisfilter-menu">

                <div className="hisfilter-header">
                  <div>
                    <h5>Filter</h5>
                  </div>
                  <div>
                    <span
                      className="hisfilter-close"
                      onClick={() => setShowFilter(false)}
                    >
                      &times;
                    </span>
                  </div>

                </div>
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  placeholderText="From Date"
                  dateFormat="dd/MM/yyyy"
                  className="form-control hisfilter-input"
                  wrapperClassName="datepicker-wrapper"
                  isClearable
                />

                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  placeholderText="To Date"
                  dateFormat="dd/MM/yyyy"
                  className="form-control hisfilter-input mt-3"
                  wrapperClassName="datepicker-wrapper mt-3"
                  minDate={fromDate}
                  isClearable
                />
                <Form.Select className="hisfilter-input mt-3">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Failed</option>
                </Form.Select>

                <Form.Select className="hisfilter-input mt-3">
                  <option>All Coin</option>
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>USDT</option>
                </Form.Select>

                <div className="hisfilter-btns">
                  <Button className="hisfilter-reset">
                    Reset
                  </Button>

                  <Button className="hisfilter-search">
                    Search
                  </Button>
                </div>

              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {paymentType === "spothistory" && (
          <>
            <Tab.Container defaultActiveKey="openorderhistory">
              <Nav className="merchant-tabs hisall mt-3 mb-2">
                <Nav.Item>
                  <Nav.Link eventKey="openorderhistory">Open Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="myorderhistory">My Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="closedpl">Closed P&L</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="openorderhistory">
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">LTC/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRow === "btc" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRow === "btc" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">ETH/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">

                          <FontAwesomeIcon
                            icon={openRows === "eth" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRows === "eth" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRowes === "ton" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRo === "sol" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRo === "sol" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="myorderhistory">
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">LTC/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRow === "btc" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRow === "btc" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">ETH/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">

                          <FontAwesomeIcon
                            icon={openRows === "eth" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRows === "eth" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRowes === "ton" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRo === "sol" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRo === "sol" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>

                </Tab.Pane>
                <Tab.Pane eventKey="closedpl">
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">LTC/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRow === "btc" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRow === "btc" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">ETH/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">

                          <FontAwesomeIcon
                            icon={openRows === "eth" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRows === "eth" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRowes === "ton" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRo === "sol" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRo === "sol" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </>
        )}

        {paymentType === "derivativehistory" && (
          <>
            <Tab.Container defaultActiveKey="openorderhistory">
              <Nav className="merchant-tabs hisall mt-3 mb-2">
                <Nav.Item>
                  <Nav.Link eventKey="openorderhistory">Open Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="myorderhistory">My Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="closedpl">Closed P&L</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="openorderhistory">
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">LTC/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRow === "btc" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRow === "btc" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">ETH/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">

                          <FontAwesomeIcon
                            icon={openRows === "eth" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRows === "eth" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRowes === "ton" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRo === "sol" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRo === "sol" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="myorderhistory">
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">LTC/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRow === "btc" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRow === "btc" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">ETH/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">

                          <FontAwesomeIcon
                            icon={openRows === "eth" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRows === "eth" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRowes === "ton" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRo === "sol" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRo === "sol" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>

                </Tab.Pane>
                <Tab.Pane eventKey="closedpl">
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">LTC/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRow === "btc" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRow === "btc" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">ETH/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">

                          <FontAwesomeIcon
                            icon={openRows === "eth" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRows === "eth" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRowes === "ton" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRo === "sol" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRo === "sol" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </>
        )}

        {paymentType === "swaphistory" && (
          <>
            <Tab.Container defaultActiveKey="openorderhistory">
              <Nav className="merchant-tabs hisall mt-3 mb-2">
                <Nav.Item>
                  <Nav.Link eventKey="openorderhistory">Open Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="myorderhistory">My Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="closedpl">Closed P&L</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="openorderhistory">
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">LTC/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRow === "btc" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRow === "btc" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">ETH/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">

                          <FontAwesomeIcon
                            icon={openRows === "eth" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRows === "eth" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRowes === "ton" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRo === "sol" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRo === "sol" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="myorderhistory">
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">LTC/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRow === "btc" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRow === "btc" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">ETH/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">

                          <FontAwesomeIcon
                            icon={openRows === "eth" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRows === "eth" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRowes === "ton" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRo === "sol" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRo === "sol" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>

                </Tab.Pane>
                <Tab.Pane eventKey="closedpl">
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">LTC/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRow === "btc" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRow === "btc" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">ETH/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">

                          <FontAwesomeIcon
                            icon={openRows === "eth" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRows === "eth" && (
                      <div className="payment-body">

                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRowes === "ton" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-card mt-2">
                    <div
                      className="payment-header"
                      onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                    >
                      <div className="coin-info">
                        <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                        <div>
                          <h5 className="sub-head mb-1">TON/USDT</h5>
                          <p>$9.476.959</p>
                        </div>
                      </div>

                      <div className="status-info">
                        <div className="d-flex flex-column align-items-end">
                          <div>
                            <p>08-Apr-2026</p>
                          </div>
                          <h6 className="sub-head">11:22:41</h6>
                        </div>

                        <div className="ms-3">
                          <FontAwesomeIcon
                            icon={openRo === "sol" ? faAngleUp : faAngleDown}
                            className="angle-icon"
                          />
                        </div>
                      </div>
                    </div>

                    {openRo === "sol" && (
                      <div className="payment-body">
                        <div className="details-grids">
                          <div>
                            <h4 className="tradeHistoryType">Stop Limit / Buy</h4>
                            <p>Type</p>
                          </div>

                          <div>
                            <h4 className="sub-head">2026-06-15</h4>
                            <p>Price</p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.000000LTC</h4>
                            <p>Remaining</p>
                          </div>

                          <div>
                            <h4 className="sub-head">5.00000 LTC</h4>
                            <p>Completed</p>
                          </div>
                          <div>
                            <h4 className="sub-head">500.0000 USDT</h4>
                            <p>Total Price </p>
                          </div>

                          <div>
                            <h4 className="sub-head">0.050000 LTC</h4>
                            <p>Trade Fee</p>
                          </div>
                          <div>
                            <p>--- </p>
                            <p>Trigger Price</p>
                          </div>
                          <div>
                            <h4 className="tradeHistoryType">Completed</h4>
                            <p>Status</p>
                          </div>



                        </div>
                      </div>
                    )}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </>
        )}

        {paymentType === "transferhistory" && (
          <>
            <div>
              <div className="payment-card mt-2">
                <div
                  className="payment-header"
                  onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                >
                  <div className="coin-info">
                    <Image src="/assets/images/color/ltc.svg" width="100" height="100" alt="user" className="hisall-icon" />
                    <div>
                      <h5 className="sub-head mb-1">LTC/USDT</h5>
                      <p>$9.476.959</p>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="d-flex flex-column align-items-end">
                      <div>
                        <p>08-Apr-2026</p>
                      </div>
                      <h6 className="sub-head">11:22:41</h6>
                    </div>

                    <div className="ms-3">
                      <FontAwesomeIcon
                        icon={openRow === "btc" ? faAngleUp : faAngleDown}
                        className="angle-icon"
                      />
                    </div>
                  </div>
                </div>

                {openRow === "btc" && (
                  <div className="payment-body">

                    <div className="details-grids">
                      <div>
                        <h4 className="sub-head">Personal</h4>
                        <p>From</p>
                      </div>

                      <div>
                        <h4 className="sub-head">Bussiness</h4>
                        <p>To</p>
                      </div>

                      <div>
                        <h4 className="tradeHistoryType">Completed</h4>
                        <p>Status</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="payment-card mt-2">
                <div
                  className="payment-header"
                  onClick={() => setOpenRows(openRows === "eth" ? null : "eth")}
                >
                  <div className="coin-info">
                    <Image src="/assets/images/color/eth.svg" width="100" height="100" alt="user" className="hisall-icon" />
                    <div>
                      <h5 className="sub-head mb-1">ETH/USDT</h5>
                      <p>$9.476.959</p>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="d-flex flex-column align-items-end">
                      <div>
                        <p>08-Apr-2026</p>
                      </div>
                      <h6 className="sub-head">11:22:41</h6>
                    </div>

                    <div className="ms-3">

                      <FontAwesomeIcon
                        icon={openRows === "eth" ? faAngleUp : faAngleDown}
                        className="angle-icon"
                      />
                    </div>
                  </div>
                </div>

                {openRows === "eth" && (
                  <div className="payment-body">

                    <div className="details-grids">
                      <div>
                        <h4 className="sub-head">Personal</h4>
                        <p>From</p>
                      </div>

                      <div>
                        <h4 className="sub-head">Bussiness</h4>
                        <p>To</p>
                      </div>

                      <div>
                        <h4 className="tradeHistoryType">Completed</h4>
                        <p>Status</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="payment-card mt-2">
                <div
                  className="payment-header"
                  onClick={() => setOpenRowes(openRowes === "ton" ? null : "ton")}
                >
                  <div className="coin-info">
                    <Image src="/assets/images/color/ton.svg" width="100" height="100" alt="user" className="hisall-icon" />
                    <div>
                      <h5 className="sub-head mb-1">TON/USDT</h5>
                      <p>$9.476.959</p>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="d-flex flex-column align-items-end">
                      <div>
                        <p>08-Apr-2026</p>
                      </div>
                      <h6 className="sub-head">11:22:41</h6>
                    </div>

                    <div className="ms-3">
                      <FontAwesomeIcon
                        icon={openRowes === "ton" ? faAngleUp : faAngleDown}
                        className="angle-icon"
                      />
                    </div>
                  </div>
                </div>

                {openRowes === "ton" && (
                  <div className="payment-body">

                    <div className="details-grids">
                      <div>
                        <h4 className="sub-head">Personal</h4>
                        <p>From</p>
                      </div>

                      <div>
                        <h4 className="sub-head">Bussiness</h4>
                        <p>To</p>
                      </div>

                      <div>
                        <h4 className="tradeHistoryType">Completed</h4>
                        <p>Status</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="payment-card mt-2">
                <div
                  className="payment-header"
                  onClick={() => setOpenRo(openRo === "sol" ? null : "sol")}
                >
                  <div className="coin-info">
                    <Image src="/assets/images/color/sol.svg" width="100" height="100" alt="user" className="hisall-icon" />
                    <div>
                      <h5 className="sub-head mb-1">TON/USDT</h5>
                      <p>$9.476.959</p>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="d-flex flex-column align-items-end">
                      <div>
                        <p>08-Apr-2026</p>
                      </div>
                      <h6 className="sub-head">11:22:41</h6>
                    </div>

                    <div className="ms-3">
                      <FontAwesomeIcon
                        icon={openRo === "sol" ? faAngleUp : faAngleDown}
                        className="angle-icon"
                      />
                    </div>
                  </div>
                </div>

                {openRo === "sol" && (
                  <div className="payment-body">

                    <div className="details-grids">
                      <div>
                        <h4 className="sub-head">Personal</h4>
                        <p>From</p>
                      </div>

                      <div>
                        <h4 className="sub-head">Bussiness</h4>
                        <p>To</p>
                      </div>

                      <div>
                        <h4 className="tradeHistoryType">Completed</h4>
                        <p>Status</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {paymentType === "sendhistory" && (
          <>
            <Tab.Container defaultActiveKey="openorderhistory">
              <Nav className="merchant-tabs hisall mt-3 mb-2">
                <Nav.Item>
                  <Nav.Link eventKey="openorderhistory">Open Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="myorderhistory">My Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="closedpl">Closed P&L</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="openorderhistory">
                  <div className="tradeHistoryCard mt-2">

                    <div
                      className="tradeHistoryHeader"
                      onClick={() =>
                        setOpenRow(openRow === "btc" ? null : "btc")
                      }
                    >

                      <div className="tradeHistoryCoinInfo">

                        <Image
                          src="/assets/images/color/ltc.svg"
                          width="100"
                          height="100"
                          alt="BTC"
                          className="tradeHistoryIcon"
                        />

                        <div>
                          <h5 className="tradeHistoryTitle mb-1">
                            BTC
                          </h5>

                          <p>
                            0.00479999 BTC
                          </p>
                        </div>

                      </div>


                      <div className="tradeHistoryStatus">

                        <div className="text-end">

                          <p className="mb-1">
                            08-Apr-2026
                          </p>

                          <h6 className="tradeHistoryTime">
                            11:22:41
                          </h6>

                        </div>

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

                        {/* <div className="tradeHistoryDetails">

                          <div className="tradeHistoryDetailItem">

                            <h4 className="tradeHistoryType">
                              Commission
                            </h4>

                            <p>
                              Sent to
                            </p>

                          </div>


                          <div className="tradeHistoryDetailItem">

                            <h4 className="tradeHistoryValue">
                              0.00000001 BTC
                            </h4>

                            <div className="tradeHistoryAddressBox">
                              <p>bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p>

                              <button className="tradeHistoryCopyBtn">
                                Copy
                              </button>
                            </div>

                          </div>


                          <div className="tradeHistoryDetailItem">

                            <p>
                              Receive from
                            </p>

                          </div>


                          <div className="tradeHistoryDetailItem">

                            <div className="tradeHistoryAddressBox">
                              <p>bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p>

                              <button className="tradeHistoryCopyBtn">
                                Copy
                              </button>
                            </div>

                          </div>


                          <div className="tradeHistoryDetailItem">

                            <p>
                              Hash
                            </p>

                          </div>


                          <div className="tradeHistoryDetailItem">

                            <p>
                              ---
                            </p>

                          </div>


                          <div className="tradeHistoryDetailItem">

                            <p>
                              Transaction Date
                            </p>

                          </div>


                          <div className="tradeHistoryDetailItem">

                            <h4 className="tradeHistoryType">
                              02-07-2026 05:17:34
                            </h4>

                          </div>

                        </div> */}
                        <div className="tradeHistoryDetails">

                          <div className="tradeHistoryRow">
                            <div className="tradeHistoryLeft">
                              <h4 className="tradeHistoryType">Commission</h4>
                            </div>

                            <div className="tradeHistoryRight">
                              <h4 className="tradeHistoryValue">0.00000001 BTC</h4>
                            </div>
                          </div>

                          <div className="tradeHistoryRow">
                            <div className="tradeHistoryLeft">
                              <p>Sent to</p>
                            </div>

                            <div className="tradeHistoryRight">
                              <div className="tradeHistoryAddressBox">
                                <p>bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p>

                                <button className="tradeHistoryCopyBtn">
                                  <FontAwesomeIcon icon={faCopy} className="me-2" />
                                  Copy
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="tradeHistoryRow">
                            <div className="tradeHistoryLeft">
                              <p>Receive from</p>
                            </div>

                            <div className="tradeHistoryRight">
                              <div className="tradeHistoryAddressBox">
                                <p>1DMj1QepqUft9Vf4erxRdmwW59mS5unpPY</p>

                                <button className="tradeHistoryCopyBtn">
                                  <FontAwesomeIcon icon={faCopy} className="me-2" />
                                  Copy
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="tradeHistoryRow">
                            <div className="tradeHistoryLeft">
                              <p>Hash</p>
                            </div>

                            <div className="tradeHistoryRight">
                              <h4 className="tradeHistoryValue">---</h4>
                            </div>
                          </div>

                          <div className="tradeHistoryRow">
                            <div className="tradeHistoryLeft">
                              <p>Transaction Date</p>
                            </div>

                            <div className="tradeHistoryRight">
                              <h4 className="tradeHistoryType">
                                02-07-2026 05:17:34
                              </h4>
                            </div>
                          </div>

                        </div>
                      </div>

                    )}

                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="myorderhistory">


                </Tab.Pane>
                <Tab.Pane eventKey="closedpl">

                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </>
        )}

        {paymentType === "receivehistory" && (
          <>
            <Tab.Container defaultActiveKey="openorderhistory">
              <Nav className="merchant-tabs hisall mt-3 mb-2">
                <Nav.Item>
                  <Nav.Link eventKey="openorderhistory">Open Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="myorderhistory">My Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="closedpl">Closed P&L</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="openorderhistory">


                </Tab.Pane>

                <Tab.Pane eventKey="myorderhistory">

                </Tab.Pane>
                <Tab.Pane eventKey="closedpl">

                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </>
        )}
      </Container>
      <Userfooter />
    </div>
  );
}