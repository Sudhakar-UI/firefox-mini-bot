
"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faInfoCircle, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Select from "react-select";
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

  // 🔹 Grouping
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

  // 🔹 Custom Group Label
  const formatGroupLabel = (data) => (
    <div className="set-grp-label-y">
      <span className="set-grp-title-y">
        {data.label}
      </span>
      <span className="set-grp-badge-y">
        {/* {data.options.length} */}
      </span>
    </div>
  );

  // 🔹 Custom Option UI (Dropdown Items)
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

  const [singleOption, setSingleOption] = useState(null);

  const options = [
    { value: 'btc', label: 'BTC Bitcoin', image: 'assets/images/color/btc.svg', balance: 0.523 },
    { value: 'eth', label: 'ETH Ethereum', image: 'assets/images/color/eth.svg', balance: 2.51223 },
    { value: 'ltc', label: 'LTC Litecoin', image: 'assets/images/color/ltc.svg', balance: 3.723 },
  ];

  const handleSingleChange = (selected) => {
    setSingleOption(selected);
    console.log('Single Select:', selected);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
      boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        borderColor: '#4bb1d9',
      },
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
      color: '#000',
      transition: 'background-color 0.3s ease',
    }),
  };

  // Custom option label with image
  const customOptionLabel = (data) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={data.image} alt={data.label} style={{ width: 20, height: 20, marginRight: 10 }} />
        {data.label}
      </div>
      <span style={{ fontSize: '0.85em', color: '#9a9899' }}>
        {data.balance}
      </span>
    </div>
  );

  const [walletOption, setWalletOption] = useState(null);

  const optionswallet = [
    { value: 'personal wallet', label: 'Personal Wallet', balance: 0.523 },
    { value: 'business wallet', label: 'Business Wallet', balance: 0.523 }
  ];

  const handleWalletChange = (selected) => {
    setWalletOption(selected);
    console.log('Single Select:', selected);
  };

  const customStyleswallet = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
      boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        borderColor: '#4bb1d9',
      },
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
      color: '#000',
      transition: 'background-color 0.3s ease',
    }),
  };

  // Custom option label with image
  const customOptionLabelwallet = (data) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {data.label}
      </div>
      <span style={{ fontSize: '0.85em', color: '#9a9899' }}>
        {data.balance}
      </span>
    </div>
  );

  const [walletOption1, setWalletOption1] = useState(null);

  const optionswallet1 = [
    { value: 'personal wallet', label: 'Personal Wallet', balance: 0.523 },
    { value: 'business wallet', label: 'Business Wallet', balance: 0.523 }
  ];

  const handleWalletChange1 = (selected) => {
    setWalletOption1(selected);
    console.log('Single Select:', selected);
  };

  const customStyleswallet1 = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
      boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        borderColor: '#4bb1d9',
      },
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
      color: '#000',
      transition: 'background-color 0.3s ease',
    }),
  };

  // Custom option label with image
  const customOptionLabelwallet1 = (data) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {data.label}
      </div>
      <span style={{ fontSize: '0.85em', color: '#9a9899' }}>
        {data.balance}
      </span>
    </div>
  );

  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <div className="innerpagecontent">
        <Container className="site-container">
          <h2 className="heading mb-2">Transfer</h2>
        </Container>
      </div>
      <article className="gridparentbox">
        <Container className="site-container merchantlink-page">
          <div className="panelcontentbox">
            <Form className="siteformbg">
              <Row>
                <Col lg={12} md={12}>
                  <Form.Group className="form-group">
                    <Form.Label>From</Form.Label>
                    <Select classNamePrefix="wallet" options={optionswallet} id='from' placeholder="Select wallet" styles={customStyleswallet} value={walletOption}
                      onChange={handleWalletChange} getOptionLabel={customOptionLabelwallet} />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>To</Form.Label>
                    <Select classNamePrefix="wallet" options={optionswallet1} id='to' placeholder="Select wallet" styles={customStyleswallet1} value={walletOption1}
                      onChange={handleWalletChange1} getOptionLabel={customOptionLabelwallet1} />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Coin</Form.Label>
                    <Select classNamePrefix="wallet" options={options} id='currency' placeholder="Select an option" styles={customStyles} value={singleOption}
                      onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Amount to be sent</Form.Label>
                    <InputGroup>
                      <Form.Control placeholder="0.000000" id='amount' />
                      <InputGroup.Text>All</InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="form-group d-flex dflexbtn mb-0 mt-4">
                    <Button type="button" className="borderbtn btn-block me-2" id='cancelbtn'>Cancel</Button>
                    <Button type="button" className="sitebtn btn-block" id="submitbtn">Transfer</Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
          {/* <div className="panelcontentbox">
            <Form className="siteformbg">
              <Row>
                <Col lg={12} md={12}>
                  <>
                    <Form.Group className="form-group mt-1">
                      <Form.Label>From <span className="text-danger">*</span></Form.Label>
                      <Form.Select
                        className="form-control"
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                      >
                        <option value="static_wallet">Static wallet</option>
                        <option value="">Select coin</option>
                        <option value="invoice">Invoice</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="form-group mt-1">
                      <Form.Label>To <span className="text-danger">*</span></Form.Label>
                      <Form.Select
                        className="form-control"
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                      >
                        <option value="static_wallet">Static wallet</option>
                        <option value="">Select coin</option>
                        <option value="invoice">Invoice</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="form-group mt-1">
                      <Form.Label>Coin <span className="text-danger">*</span></Form.Label>
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
                    <Form.Group className="form-group mt-3">
                      <Form.Label>
                        Amount to be sent<span className="text-danger ms-1">*</span>
                      </Form.Label>

                      <InputGroup className="sendamount-group">
                        <Form.Control
                          id="amount"
                          placeholder="0.000000"
                          className="sendamount-input"
                        />

                        <InputGroup.Text className="sendamount-all">
                          All
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                  </>
                  <Form.Group className="form-group d-flex mb-0 gap-2 mt-2">
                    <Link href="/" className="borderbtn btn-block text-center text-decoration-none">Cancel</Link>
                    <Button type="button" className="sitebtn btn-block" id="submitbtn">Transfer</Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div> */}
        </Container>
        <Userfooter />
      </article>
    </div>
  );
}
export default Merchantlink