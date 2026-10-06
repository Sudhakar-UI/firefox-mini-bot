
"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faInfoCircle, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Select from "react-select";
import Slider from "./Slider";
import Userfooter from "../components/Userfooter";

const Merchantlink = () => {

  const [paymentType, setPaymentType] = useState("");
  const [payFee, setPayFee] = useState(false);

  const [currency, setCurrency] = useState({ code: "INR", symbol: "₹" });
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const amountOptions = [
    // Crypto
    {
      value: "btc",
      label: "BTC Bitcoin",
      type: "crypto",
      image: "/assets/images/color/btc.svg",
    },
    {
      value: "eth",
      label: "ETH Ethereum",
      type: "crypto",
      image: "/assets/images/color/eth.svg",
    },

    // Fiat
    {
      value: "usd",
      label: "USD",
      type: "fiat",
      symbol: "$",
      bgColor: "#4b5563",
    },
    {
      value: "inr",
      label: "INR",
      type: "fiat",
      symbol: "₹",
      bgColor: "#4b5563",
    },
  ];


  const groupedOptions = [
    {
      label: "Crypto",
      options: amountOptions.filter((o) => o.type === "crypto"),
    },
    {
      label: "Fiat",
      options: amountOptions.filter((o) => o.type === "fiat"),
    },
  ];


  const formatGroupLabel = (data) => (
    <div className="set-grp-label-y">
      <span className="set-grp-title-y">
        {data.label}
      </span>
      <span className="set-grp-badge-y">

      </span>
    </div>
  );


  const formatOptionLabel = (option) => {
    return (
      <div className="set-option-y">
        {option.type === "crypto" && (
          <img
            src={option.image}
            alt={option.label}
            className="set-option-image-y"
          />
        )}

        {option.type === "fiat" && (
          <div
            className="set-opt-symbol-y"
            style={{ backgroundColor: option.bgColor }}
          >
            {option.symbol}
          </div>
        )}

        <span className="set-option-label-y">
          {option.label}
        </span>
      </div>
    );
  };


  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <div className="innerpagecontent">
        <Container className="site-container">
          <h2 className="heading mb-2">Create new link</h2>
        </Container>
      </div>
      <article className="gridparentbox">
        <Container className="site-container merchantlink-page">
          <div className="panelcontentbox">
            <Form className="siteformbg">
              <Row>
                <Col lg={12} md={12}>
                  <>
                    <Form.Group className="form-group mt-1">
                      <Form.Label>Select Payment Type<span className='t-red ms-1'>*</span></Form.Label>
                      <Form.Select
                        className="form-control"
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                      >
                        <option value="">Select coin</option>
                        <option value="static_wallet">Static wallet</option>
                        <option value="invoice">Invoice</option>
                      </Form.Select>
                    </Form.Group>
                    {paymentType === "static_wallet" && (
                      <Alert variant="warning" className="p-3 mt-3">
                        <FontAwesomeIcon icon={faCircleExclamation} className="me-2" />
                        A commission of 2 TRX is charged when creating a static wallet. This fee
                        covers the cost of wallet creation and is applied only once, during the
                        first transaction.
                      </Alert>
                    )}
                    {paymentType === "invoice" && (
                      <>
                        <div className="form-check mt-3">
                          <input
                            id="to-pay-fee"
                            className="form-check-input mer-lik-y"
                            type="checkbox"
                            name="to_pay_fee"
                            checked={payFee}
                            onChange={(e) => setPayFee(e.target.checked)}
                          />
                          <label htmlFor="to-pay-fee" className="form-check-label">
                            The client pays a commission
                          </label>
                        </div>
                      </>
                    )}
                  </>
                  <Form.Group className="form-group mt-3">
                    <Form.Label>Order ID <span className='t-red ms-1'>*</span></Form.Label>
                    <Form.Control placeholder="0.000000" id='orderid' />
                    {/* <small className="t-green">Specify the order number so your customer knows what they're being charged for</small> */}
                  </Form.Group>
                  <Form.Group className="form-group mt-3">
                    <Form.Label>Amount to pay <span className='t-red ms-1'>*</span></Form.Label>
                    <Form.Control placeholder="0.000000" id='orderid' />

                  </Form.Group>

                  <Form.Group className="form-group mt-3">
                    <Form.Label>Amount to be sent <span className='t-red ms-1'>*</span></Form.Label>
                    <InputGroup>
                      <Form.Control placeholder="0.000000" id='amount' />
                      <InputGroup.Text>All</InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="form-group mt-3">
                    <Form.Label >Select the expiration time of the payment</Form.Label>
                    <Slider />

                  </Form.Group>
                  <Form.Group className="form-group d-flex mb-0 gap-2 mt-2">
                    <Link href="/" className="borderbtn btn-block text-center text-decoration-none">Cancel</Link>
                    <Button type="button" className="sitebtn btn-block" id="submitbtn">Create Payment</Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
        <Userfooter />
      </article>
    </div>
  );
}
export default Merchantlink