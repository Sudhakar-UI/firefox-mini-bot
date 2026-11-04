"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Form,
  InputGroup,
  Button,
  Nav,
  Tab,
  Image,
  Alert,
  Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faChevronRight,
  faCopy,
  faCheck,
  faCircleCheck,
  faCircleExclamation,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";

const defaultHistoryData = [
  {
    coin: "BTC",
    image: "/assets/images/color/btc.svg",
    status: "Completed",
    walletType: "Invoice",
    id: "FF-MF-3223a70067",
    date: "27/08/2026, 17:18:52",
    hash: "0x9CcC9FF4671....",
    fullHash: "0x9CcC9FF46716e6f573Fa375939...",
  },
  {
    coin: "ETH",
  
    image: "/assets/images/color/eth.svg",
    status: "Pending",
    walletType: "Invoice",
    id: "FF-MF-8d0176b127",
    date: "26/08/2026, 12:40:18",
    hash: "0x8b95c2a11c....",
    fullHash: "0x8b95c2a11c4728ef1a7263b90...",
  },
  {
    coin: "SOL",

    image: "/assets/images/color/sol.svg",
    status: "Completed",
    walletType: "Invoice",
    id: "FF-MF-9a471a87c2",
    date: "24/08/2026, 09:15:03",
    hash: "5Jk8VwF2n......",
    fullHash: "5Jk8VwF2n8734kd9f7g65s8d9f0...",
  },
  {
    coin: "TON",

    image: "/assets/images/color/ton.svg",
    status: "Completed",
    walletType: "Invoice",
    id: "FF-MF-62c12e18aa",
    date: "21/08/2026, 14:02:39",
    hash: "EQB3e9Qv......",
    fullHash: "EQB3e9Qv902834jkl234kjl8902...",
  },
];

export default function MissingFundsView({ initialTab = "personal" }) {
  const { isNightMode } = useTheme();

  const [activeTab, setActiveTab] = useState(initialTab);
  const [expandedId, setExpandedId] = useState("FF-MF-3223a70067"); // BTC expanded by default matching UI screenshot
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  // Personal form state
  const [personalForm, setPersonalForm] = useState({
    txHash: "",
    depositAddress: "",
    message: "",
    agreed: false,
  });

  // Invoice form state
  const [invoiceForm, setInvoiceForm] = useState({
    paymentLink: "",
    txHash: "",
    message: "",
    agreed: false,
  });

  const [alertInfo, setAlertInfo] = useState(null);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Drawer states
  const [openStatusDrawer, setOpenStatusDrawer] = useState(false);
  const [openDuplicateDrawer, setOpenDuplicateDrawer] = useState(false);
  const [submittedSearchId, setSubmittedSearchId] = useState("FF-MF-8d0176b127");
  const [drawerCopied, setDrawerCopied] = useState(false);

  const handleOpenStatusDrawer = () => setOpenStatusDrawer(true);
  const handleCloseStatusDrawer = () => setOpenStatusDrawer(false);
  const handleOpenDuplicateDrawer = () => setOpenDuplicateDrawer(true);
  const handleCloseDuplicateDrawer = () => setOpenDuplicateDrawer(false);

  const handleDrawerCopy = (text) => {
    if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setDrawerCopied(true);
      setTimeout(() => setDrawerCopied(false), 2000);
    }
  };

  // Accordion toggle handler
  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Copy to clipboard handler
  const handleCopy = (id) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(id);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    }
  };

  // Submit handlers
  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    setAlertInfo(null);
    setSubmittedSearchId("FF-MF-8d0176b127");
    handleOpenStatusDrawer();
  };

  const handleInvoiceSubmit = (e) => {
    e.preventDefault();
    setAlertInfo(null);
    setSubmittedSearchId("FF-MF-8d0176b127");
    handleOpenDuplicateDrawer();
  };

  // Filter history items by search query
  const filteredHistory = defaultHistoryData.filter((item) => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return true;
    return (
      item.id.toLowerCase().includes(q) ||
      item.coin.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(q) ||
      item.hash.toLowerCase().includes(q) ||
      item.status.toLowerCase().includes(q)
    );
  });

  return (
    <div className="missing-funds-container missingfunds-page">
      <Container className="site-container">
        {/* Page Title */}
        <h2 className="heading mb-2">Missing Funds</h2>

        {/* Status Alerts */}
        {alertInfo && (
          <Alert
            variant={alertInfo.variant}
            dismissible
            onClose={() => setAlertInfo(null)}
            className="mb-3 py-2 px-3 d-flex align-items-center"
          >
            <FontAwesomeIcon
              icon={alertInfo.variant === "success" ? faCircleCheck : faCircleExclamation}
              className="me-2"
            />
            <span style={{ fontSize: "13px" }}>{alertInfo.message}</span>
          </Alert>
        )}

        {/* Tab Navigation (referencing paymentandcommission merchant-tabs) */}
        <Tab.Container
          activeKey={activeTab}
          onSelect={(k) => {
            if (k) setActiveTab(k);
          }}
        >
          <Nav className="merchant-tabs missing-funds-tabs mt-1 mb-3">
            <Nav.Item>
              <Nav.Link
                eventKey="personal"
                className={activeTab === "personal" ? "active" : ""}
              >
                Personal
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="invoice"
                className={activeTab === "invoice" ? "active" : ""}
              >
                Invoice / Static Wallet
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            {/* 1. PERSONAL TAB */}
            <Tab.Pane eventKey="personal" active={activeTab === "personal"}>
              <div className="missing-funds-form-card">
                <Form onSubmit={handlePersonalSubmit} className="siteformbg">
                  <Form.Group className="form-group mb-3">
                    <Form.Label>
                      Transaction Hash<span className="t-red ms-1">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Oxe333741411184b642ba8ead288..."
                      value={personalForm.txHash}
                      onChange={(e) =>
                        setPersonalForm({ ...personalForm, txHash: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="form-group mb-3">
                    <Form.Label>
                      Deposit Address<span className="t-red ms-1">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="0x9CcC9FF46716e6f573Fa375939..."
                      value={personalForm.depositAddress}
                      onChange={(e) =>
                        setPersonalForm({
                          ...personalForm,
                          depositAddress: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="form-group mb-3">
                    <Form.Label>
                      Enter your message <span className="fw-normal">(Optional)</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="0x9CcC9FF46716e6f573Fa375939..."
                      value={personalForm.message}
                      onChange={(e) =>
                        setPersonalForm({ ...personalForm, message: e.target.value })
                      }
                    />
                  </Form.Group>

                  {/* Terms Checkbox Card */}
                  <div className="missing-funds-terms-box mb-3">
                    <label
                      htmlFor="personal-terms-checkbox"
                      className="missing-funds-terms-label"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        margin: 0,
                        padding: 0,
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="personal-terms-checkbox"
                        className="missing-funds-checkbox"
                        checked={personalForm.agreed}
                        onChange={(e) =>
                          setPersonalForm({ ...personalForm, agreed: e.target.checked })
                        }
                        style={{
                          margin: "2px 0 0 0",
                          marginLeft: 0,
                          marginRight: 0,
                          float: "none",
                          flexShrink: 0,
                        }}
                      />
                      <span className="missing-funds-terms-text">
                        I have read and agreed to{" "}
                        <span
                          className="terms-link"
                          role="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowTermsModal(true);
                          }}
                        >
                          Firefox VIP Missing Funds Terms &amp; Conditions
                        </span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="sitebtn w-100 missing-funds-submit-btn"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Tab.Pane>

            {/* 2. INVOICE / STATIC WALLET TAB */}
            <Tab.Pane eventKey="invoice" active={activeTab === "invoice"}>
              <div className="missing-funds-form-card">
                <Form onSubmit={handleInvoiceSubmit} className="siteformbg">
                  <Form.Group className="form-group mb-3">
                    <Form.Label>
                      Payment Link<span className="t-red ms-1">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="http://192.168.1.116:3000/pay/OPTGW..."
                      value={invoiceForm.paymentLink}
                      onChange={(e) =>
                        setInvoiceForm({ ...invoiceForm, paymentLink: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="form-group mb-3">
                    <Form.Label>
                      Transaction Hash<span className="t-red ms-1">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="0x9CcC9FF46716e6f..."
                      value={invoiceForm.txHash}
                      onChange={(e) =>
                        setInvoiceForm({ ...invoiceForm, txHash: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="form-group mb-3">
                    <Form.Label>
                      Enter your message <span className="fw-normal">(Optional)</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="0x9CcC9FF46716e6f573Fa375939..."
                      value={invoiceForm.message}
                      onChange={(e) =>
                        setInvoiceForm({ ...invoiceForm, message: e.target.value })
                      }
                    />
                  </Form.Group>

                  {/* Terms Checkbox Card */}
                  <div className="missing-funds-terms-box mb-3">
                    <label
                      htmlFor="invoice-terms-checkbox"
                      className="missing-funds-terms-label"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        margin: 0,
                        padding: 0,
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="invoice-terms-checkbox"
                        className="missing-funds-checkbox"
                        checked={invoiceForm.agreed}
                        onChange={(e) =>
                          setInvoiceForm({ ...invoiceForm, agreed: e.target.checked })
                        }
                        style={{
                          margin: "2px 0 0 0",
                          marginLeft: 0,
                          marginRight: 0,
                          float: "none",
                          flexShrink: 0,
                        }}
                      />
                      <span className="missing-funds-terms-text">
                        I have read and agreed to{" "}
                        <span
                          className="terms-link"
                          role="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowTermsModal(true);
                          }}
                        >
                          Firefox VIP Missing Funds Terms &amp; Conditions
                        </span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="sitebtn w-100 missing-funds-submit-btn"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        {/* Missing Funds History Section */}
        <div className="missing-funds-history-section">
          <h3 className="missing-funds-history-title">Missing Funds History</h3>

          {/* Search Box */}
          <div className="missing-funds-search-box mb-3">
            <InputGroup>
              <InputGroup.Text className="missing-funds-search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search Id here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="missing-funds-search-input"
              />
            </InputGroup>
          </div>

          {/* History Cards List */}
          <div className="missing-funds-history-list">
            {filteredHistory.length === 0 ? (
              <div className="text-center py-4 text-muted" style={{ fontSize: "13px" }}>
                No matching records found.
              </div>
            ) : (
              filteredHistory.map((item) => {
                const isOpen = expandedId === item.id;
                return (
                  <div className="missing-funds-card" key={item.id}>
                    {/* Header Row */}
                    <div
                      className="missing-funds-card-header"
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div className="missing-funds-coin-info">
                        <div className="missing-funds-coin-icon-wrapper">
                          <Image
                            src={item.image}
                            alt={item.coin}
                            width={24}
                            height={24}
                            className="missing-funds-coin-img"
                          />
                        </div>
                        <h5 className="missing-funds-coin-code">{item.coin}</h5>
                      </div>

                      <div className="missing-funds-status-box">
                        <span
                          className={`missing-funds-status ${item.status.toLowerCase()}`}
                        >
                          {item.status}
                        </span>
                        <FontAwesomeIcon
                          icon={isOpen ? faChevronDown : faChevronRight}
                          className="missing-funds-chevron"
                        />
                      </div>
                    </div>

                    {/* Accordion Expanded Body */}
                    {isOpen && (
                      <div className="missing-funds-card-body">
                        {/* Row 1: Wallet Type & Submitted On */}
                        <div className="missing-funds-detail-row">
                          <div>
                            <span>Wallet Type</span>
                            <strong>{item.walletType}</strong>
                          </div>
                          <div className="text-end">
                            <span>Submitted On</span>
                            <strong>{item.date}</strong>
                          </div>
                        </div>

                        {/* Row 2: Search ID & Merchant ID */}
                        <div className="missing-funds-detail-row">
                          <div>
                            <span>Search ID</span>
                            <strong className="missing-funds-id-copy">
                              {item.id}
                              <button
                                type="button"
                                className="missing-funds-copy-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(item.id);
                                }}
                                title="Copy Search ID"
                              >
                                <FontAwesomeIcon
                                  icon={copiedId === item.id ? faCheck : faCopy}
                                  className={copiedId === item.id ? "text-success" : ""}
                                />
                              </button>
                            </strong>
                          </div>
                          <div className="text-end">
                            <span>Merchant ID</span>
                            <strong title={item.fullHash}>{item.hash}</strong>
                          </div>
                        </div>

                        {/* Row 3: Action Row */}
                        <div className="missing-funds-detail-row missing-funds-action-detail-row">
                          <div></div>
                          <div className="text-end">
                            <span className="missing-funds-action-label">Action</span>
                            <Link
                              href="/missing-funds/details"
                              className="missing-funds-action-btn"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Container>

      {/* Terms & Conditions Modal */}
      <Modal
        show={showTermsModal}
        onHide={() => setShowTermsModal(false)}
        centered
        className="missing-funds-terms-modal"
      >
        <Modal.Header closeButton className={isNightMode ? "bg-dark text-white border-secondary" : ""}>
          <Modal.Title style={{ fontSize: "16px", fontWeight: "600" }}>
            Firefox VIP Missing Funds Terms &amp; Conditions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={isNightMode ? "bg-dark text-light" : ""}
          style={{ fontSize: "13px", lineHeight: "1.6" }}
        >
          <p>
            1. All missing funds queries are verified against the blockchain network
            using the provided transaction hash.
          </p>
          <p>
            2. Incorrect or fraudulent information may result in delays or termination
            of account privileges.
          </p>
          <p>
            3. Verification time may vary between 15 minutes to 24 hours depending on
            the network congestion and compliance checks.
          </p>
          <p>
            4. Firefox Bot will never ask for your private key, seed phrase, or account
            passcode.
          </p>
        </Modal.Body>
        <Modal.Footer className={isNightMode ? "bg-dark border-secondary" : ""}>
          <Button
            variant="primary"
            style={{ backgroundColor: "#ff3c00", borderColor: "#ff3c00", fontSize: "13px" }}
            onClick={() => {
              if (activeTab === "personal") {
                setPersonalForm((prev) => ({ ...prev, agreed: true }));
              } else {
                setInvoiceForm((prev) => ({ ...prev, agreed: true }));
              }
              setShowTermsModal(false);
            }}
          >
            I Agree
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 1. Missing Fund Status Drawer (Personal Tab Submit) */}
      <div
        className={`phone-draw-overlay ${openStatusDrawer ? "open" : ""}`}
        onClick={handleCloseStatusDrawer}
      ></div>
      <div className={`phone-draw missing-funds-drawer ${openStatusDrawer ? "open" : ""}`}>
        <div className="phone-draw-handle"></div>
        <div className="missing-funds-drawer-header">
          <h4 className="missing-funds-drawer-title">Missing fund status</h4>
          <div className="phone-draw-close">
            <Button onClick={handleCloseStatusDrawer} className="phone-draw-close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
        </div>

        <div className="missing-funds-drawer-body text-center">
          <div className="missing-funds-drawer-icon-wrap">
            <Image
              src={isNightMode ? "/assets/images/mis-statusone.png" : "/assets/images/mis-status.png"}
              alt="Missing fund status"
              width={145}
              height={145}
              className="img-fluid"
            />
          </div>

          <div className="missing-funds-status-text-wrap mb-4 text-center">
            <h5 className="missing-funds-status-highlight m-0 text-center" style={{ textAlign: "center" }}>
              Missing fund searching
            </h5>
            <h5 className="missing-funds-status-subtext m-0 text-center" style={{ textAlign: "center" }}>
              is in process.
            </h5>
          </div>

          <div className="missing-funds-drawer-field text-start mb-4">
            <label className="missing-funds-drawer-label">Search ID</label>
            <div className="missing-funds-id-box d-flex align-items-center justify-content-between">
              <span className="missing-funds-id-text">{submittedSearchId}</span>
              <button
                type="button"
                className="missing-funds-id-copy-btn"
                onClick={() => handleDrawerCopy(submittedSearchId)}
                title="Copy Search ID"
              >
                {drawerCopied ? (
                  <span className="copied-text">Copied!</span>
                ) : (
                  <FontAwesomeIcon icon={faCopy} />
                )}
              </button>
            </div>
          </div>

          <Button
            className="missing-funds-drawer-done-btn w-100"
            onClick={handleCloseStatusDrawer}
          >
            Done
          </Button>
        </div>
      </div>

      {/* 2. Duplicate Transaction Drawer (Invoice / Static Wallet Tab Submit) */}
      <div
        className={`phone-draw-overlay ${openDuplicateDrawer ? "open" : ""}`}
        onClick={handleCloseDuplicateDrawer}
      ></div>
      <div className={`phone-draw missing-funds-drawer ${openDuplicateDrawer ? "open" : ""}`}>
        <div className="phone-draw-handle"></div>
        <div className="missing-funds-drawer-header">
          <h4 className="missing-funds-drawer-title">Duplicate Transaction Found</h4>
          <div className="phone-draw-close">
            <Button onClick={handleCloseDuplicateDrawer} className="phone-draw-close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
        </div>

        <div className="missing-funds-drawer-body text-center">
          <div className="missing-funds-drawer-icon-wrap">
            <Image
              src={isNightMode ? "/assets/images/duplicateone.png" : "/assets/images/duplicate.png"}
              alt="Duplicate Transaction Found"
              width={115}
              height={115}
              className="img-fluid"
            />
          </div>

          <div className="missing-funds-status-text-wrap mb-4 px-2 text-center">
            <h5 className="missing-funds-duplicate-text m-0 text-center" style={{ textAlign: "center" }}>
              A missing fund search request already exists for this transaction hash.
            </h5>
          </div>

          <div className="missing-funds-drawer-field text-start mb-4">
            <label className="missing-funds-drawer-label">Existing Search ID</label>
            <div className="missing-funds-id-box d-flex align-items-center justify-content-between">
              <span className="missing-funds-id-text">{submittedSearchId}</span>
              <button
                type="button"
                className="missing-funds-id-copy-btn"
                onClick={() => handleDrawerCopy(submittedSearchId)}
                title="Copy Search ID"
              >
                {drawerCopied ? (
                  <span className="copied-text">Copied!</span>
                ) : (
                  <FontAwesomeIcon icon={faCopy} />
                )}
              </button>
            </div>
          </div>

          {/* <Button
            className="missing-funds-drawer-done-btn w-100"
            onClick={handleCloseDuplicateDrawer}
          >
            Done
          </Button> */}
        </div>
      </div>

      {/* Userfooter Navigation Bar */}
      <Userfooter />
    </div>
  );
}
