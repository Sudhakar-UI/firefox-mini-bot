"use client";

import React, { useState, useEffect } from "react";
import { Container, Form, Nav, Tab, InputGroup, Alert, Badge, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";

export default function Merchantview() {
  const [openRow, setOpenRow] = useState(null);

  useEffect(() => {
    document.body.classList.add("merchantview");
    return () => document.body.classList.remove("merchantview");
  }, []);

  const { isNightMode } = useTheme();

  return (
    <div className="merchantview-page">
      <Container>
        <Tab.Container defaultActiveKey="payment">
          <Nav className="merchant-tabs mt-2 mb-2">
            <Nav.Item>
              <Nav.Link eventKey="payment">Payments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="commission">Commissions</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="payment">
              <div className="siteformbg">
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </InputGroup.Text>
                  <Form.Control placeholder="Search coin" />
                </InputGroup>
              </div>

              <div className="payment-card mt-2">
                <div
                  className="payment-header"
                  onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
                >
                  <div className="coin-info">
                    <Image src={isNightMode ? "/assets/images/payment-green-drk.svg" : "/assets/images/payment-green-wte.svg"} width="100" height="100" alt="user" className="merviw-icon" />
                    <div>
                      <h5 className="sub-head">BTC</h5>
                      <p>103.5 USDT</p>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="d-flex flex-column align-items-end">
                      <div>
                        <Badge bg="success" className="mb-2">
                          Completed
                        </Badge>
                      </div>

                      <p className="mb-0">03/04/2026 13:06:24</p>
                    </div>

                    <div className="ms-3">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`angle-icon ${openRow === "usdtone" ? "rotate" : ""}`}
                      />
                    </div>
                  </div>
                </div>

                {openRow === "btc" && (
                  <div className="payment-body">
                    <Alert variant="success">
                      <FontAwesomeIcon icon={faCircleCheck} className="cir-chk" /> Invoice has been
                      paid!
                    </Alert>

                    <div className="details-grid">
                      <div>
                        <h6 className="sub-head">Type</h6>
                        <p>Link Invoice</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Merchant</h6>
                        <p>MM</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Invoice Currency</h6>
                        <p>BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Network</h6>
                        <p>BTC</p>
                      </div>
                            <div>
                        <h6 className="sub-head">Request Amount</h6>
                        <p>1.035 BTC</p>
                      </div>
                      

                      <div>
                        <h6 className="sub-head">Received Amount</h6>
                        <p>1.035 BTC</p>
                      </div>
                                            <div>
                        <h6 className="sub-head">Commission</h6>
                        <p>0.20000 BTC</p>
                      </div>

                      <div className="full-width-mobile">
                        <h6 className="sub-head">Order Id</h6>
                        <p>ORDER040265</p>
                      </div>

                      <div className="full-width-mobile">
                        <h6 className="sub-head">Payment Id</h6>
                        <p>R3P1GK...</p>
                      </div>

                      <div className="full-width-mobile">
                        <h6 className="sub-head">From Address</h6>
                        <p>Virtual_fund</p>
                      </div>

                      <div className="full-width-mobile">
                        <h6 className="sub-head">Received Address</h6>
                        <p>TXvAT..</p>
                      </div>

                      <div className="full-width-mobile">
                        <h6 className="sub-head">Transaction hash</h6>
                        <p>Virtual_fund</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="payment-card mt-2">
                <div
                  className="payment-header"
                  onClick={() => setOpenRow(openRow === "usdt" ? null : "usdt")}
                >
                  <div className="coin-info">
                    <Image src={isNightMode ? "/assets/images/payment-block-dark.svg" : "/assets/images/payment-block-light.svg"} width="100" height="100" alt="user" className="merviw-icon" />
                    <div>
                      <h5 className="sub-head">USDT</h5>
                      <p>103.5 USDT</p>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="d-flex flex-column align-items-end">
                      <Badge bg="danger" className="mb-2">
                        Expired
                      </Badge>
                      <p className="mb-0">03/04/2026 13:06:24</p>
                    </div>

                    <div className="ms-3">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`angle-icon ${openRow === "usdtone" ? "rotate" : ""}`}
                      />
                    </div>
                  </div>
                </div>

                {openRow === "usdt" && (
                  <div className="payment-body">
                    <Alert variant="danger">
                      <FontAwesomeIcon icon={faCircleCheck} className="cir-chk" /> Invoice has been
                      paid!
                    </Alert>

                    <div className="details-grid">
                      <div>
                        <h6 className="sub-head">Type</h6>
                        <p>Link Invoice</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Merchant</h6>
                        <p>MM</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Invoice Currency</h6>
                        <p>BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Network</h6>
                        <p>BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Order Id</h6>
                        <p>ORDER040265</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Payment Id</h6>
                        <p>R3P1GK...</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Request Amount</h6>
                        <p>1.035 BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Received Amount</h6>
                        <p>1.035 BTC</p>
                      </div>
                      <div>
                        <h6 className="sub-head">Commission</h6>
                        <p>0.20000 BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">From Address</h6>
                        <p>Virtual_fund</p>
                      </div>
                      <div>
                        <h6 className="sub-head">Received Address</h6>
                        <p>TXvAT..</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Transaction hash</h6>
                        <p>Virtual_fund</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="payment-card mt-2">
                <div
                  className="payment-header"
                  onClick={() => setOpenRow(openRow === "usdtone" ? null : "usdtone")}
                >
                  <div className="coin-info">
                    <Image src={isNightMode ? "/assets/images/payment-green-drk.svg" : "/assets/images/payment-green-wte.svg"} width="100" height="100" alt="user" className="merviw-icon" />
                    <div>
                      <h5 className="sub-head">USDT</h5>
                      <p>103.5 USDT</p>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="d-flex flex-column align-items-end">
                      <Badge bg="success" className="mb-2">
                        Completed
                      </Badge>
                      <p className="mb-0">03/04/2026 13:06:24</p>
                    </div>

                    <div className="ms-3">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`angle-icon ${openRow === "usdtone" ? "rotate" : ""}`}
                      />
                    </div>
                  </div>
                </div>

                {openRow === "usdtone" && (
                  <div className="payment-body">
                    <Alert variant="success">
                      <FontAwesomeIcon icon={faCircleCheck} className="cir-chk" /> Invoice has been
                      paid!
                    </Alert>

                    <div className="details-grid">
                      <div>
                        <h6 className="sub-head">Type</h6>
                        <p>Link Invoice</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Merchant</h6>
                        <p>MM</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Invoice Currency</h6>
                        <p>BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Network</h6>
                        <p>BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Order Id</h6>
                        <p>ORDER040265</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Payment Id</h6>
                        <p>R3P1GK...</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Request Amount</h6>
                        <p>1.035 BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Received Amount</h6>
                        <p>1.035 BTC</p>
                      </div>
                      <div>
                        <h6 className="sub-head">Commission</h6>
                        <p>0.20000 BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">From Address</h6>
                        <p>Virtual_fund</p>
                      </div>
                      <div>
                        <h6 className="sub-head">Received Address</h6>
                        <p>TXvAT..</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Transaction hash</h6>
                        <p>Virtual_fund</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="payment-card mt-2">
                <div
                  className="payment-header"
                  onClick={() => setOpenRow(openRow === "usdtone" ? null : "usdtone")}
                >
                  <div className="coin-info">
                    <Image src={isNightMode ? "/assets/images/payment-yellow-drk.svg" : "/assets/images/payment-yellow-wte.svg"} width="100" height="100" alt="user" className="merviw-icon" />
                    <div>
                      <h5 className="sub-head">USDT</h5>
                      <p>103.5 USDT</p>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="d-flex flex-column align-items-end">
                      <Badge bg="primary" className="mb-2">
                        Waiting for buyer Fund
                      </Badge>
                      <p className="mb-0">03/04/2026 13:06:24</p>
                    </div>

                    <div className="ms-3">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`angle-icon ${openRow === "usdtone" ? "rotate" : ""}`}
                      />
                    </div>
                  </div>
                </div>

                {openRow === "usdtone" && (
                  <div className="payment-body">
                    <Alert variant="success">
                      <FontAwesomeIcon icon={faCircleCheck} className="cir-chk" /> Invoice has been
                      paid!
                    </Alert>

                    <div className="details-grid">
                      <div>
                        <h6 className="sub-head">Type</h6>
                        <p>Link Invoice</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Merchant</h6>
                        <p>MM</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Invoice Currency</h6>
                        <p>BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Network</h6>
                        <p>BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Order Id</h6>
                        <p>ORDER040265</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Payment Id</h6>
                        <p>R3P1GK...</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Request Amount</h6>
                        <p>1.035 BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Received Amount</h6>
                        <p>1.035 BTC</p>
                      </div>
                      <div>
                        <h6 className="sub-head">Commission</h6>
                        <p>0.20000 BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">From Address</h6>
                        <p>Virtual_fund</p>
                      </div>
                      <div>
                        <h6 className="sub-head">Received Address</h6>
                        <p>TXvAT..</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Transaction hash</h6>
                        <p>Virtual_fund</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="payment-card mt-2">
                <div
                  className="payment-header"
                  onClick={() => setOpenRow(openRow === "usdtone" ? null : "usdtone")}
                >
                  <div className="coin-info">
                    <Image src={isNightMode ? "/assets/images/payment-green-drk.svg" : "/assets/images/payment-green-wte.svg"} width="100" height="100" alt="user" className="merviw-icon" />
                    <div>
                      <h5 className="sub-head">USDT</h5>
                      <p>103.5 USDT</p>
                    </div>
                  </div>

                  <div className="status-info">
                    <div className="d-flex flex-column align-items-end">
                      <Badge bg="success" className="mb-2">
                        partially Completed
                      </Badge>
                      <p className="mb-0">03/04/2026 13:06:24</p>
                    </div>

                    <div className="ms-3">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`angle-icon ${openRow === "usdtone" ? "rotate" : ""}`}
                      />
                    </div>
                  </div>
                </div>

                {openRow === "usdtone" && (
                  <div className="payment-body">
                    <Alert variant="success">
                      <FontAwesomeIcon icon={faCircleCheck} className="cir-chk" /> Invoice has been
                      paid!
                    </Alert>

                    <div className="details-grid">
                      <div>
                        <h6 className="sub-head">Type</h6>
                        <p>Link Invoice</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Merchant</h6>
                        <p>MM</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Invoice Currency</h6>
                        <p>BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Network</h6>
                        <p>BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Order Id</h6>
                        <p>ORDER040265</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Payment Id</h6>
                        <p>R3P1GK...</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Request Amount</h6>
                        <p>1.035 BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Received Amount</h6>
                        <p>1.035 BTC</p>
                      </div>
                      <div>
                        <h6 className="sub-head">Commission</h6>
                        <p>0.20000 BTC</p>
                      </div>

                      <div>
                        <h6 className="sub-head">From Address</h6>
                        <p>Virtual_fund</p>
                      </div>
                      <div>
                        <h6 className="sub-head">Received Address</h6>
                        <p>TXvAT..</p>
                      </div>

                      <div>
                        <h6 className="sub-head">Transaction hash</h6>
                        <p>Virtual_fund</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </Tab.Pane>

            <Tab.Pane eventKey="commission">
              <div className="commission-card">
                <div
                  className="commission-header"
                  onClick={() =>
                    setOpenRow(openRow === "commission-btc" ? null : "commission-btc")
                  }
                >
                  <div className="coin-info">
                    <Image
                      src="/assets/images/color/btc.svg"
                      width={42}
                      height={42}
                      alt="btc"
                    />
                    <h5 className="sub-head">BTC</h5>
                  </div>

                  <div className="commission-info">
                    <div className="commission-box">
                      <h5 className="sub-head">Payment Commission</h5>
                      <p>2.00%</p>
                    </div>

                    <div className="commission-box">
                      <h5 className="sub-head">Fixed Withdrawal</h5>
                      <p>2.00%</p>
                    </div>

                    <div className="commission-box">
                      <h5 className="sub-head">Withdrawal Commission</h5>
                      <p>0.00</p>
                    </div>
                  </div>

                  <div className="arrow-box">
                    <FontAwesomeIcon
                      // icon={faAngleDown}
                      // className={openRow === "commission-btc" ? "rotate" : ""}
                      icon={faAngleDown}
                      className={`angle-icon ${openRow === "commission-btc" ? "rotate" : ""}`}
                    />
                  </div>
                </div>

                {openRow === "commission-btc" && (
                  <div className="commission-body">
                    <div className="commission-grid">
                      <div>
                        <h5 className="sub-head">Min. - Max.withdrawal</h5>
                        <p>0.1 - 1000000</p>
                      </div>

                      <div>
                        <h5 className="sub-head">Min. - Max.receive</h5>
                        <p>0.1 - 1000000</p>
                      </div>

                      <div>
                        <h5 className="sub-head">Confirmation Needed</h5>
                        <p>1 block</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      <Userfooter />
    </div>

  );
}