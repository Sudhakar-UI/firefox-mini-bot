"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, Form, InputGroup, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faChevronRight,
  faCopy,
  faCheck,
  faTimes,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";

const historyData = [
  {
    id: "FF-MF-3223a70067",
    coin: "BTC",
    image: "/assets/images/color/btc.svg",
    status: "Completed",
    walletType: "Invoice",
    date: "27/08/2026, 17:18:52",
    merchantId: "0x9CcC9FF4671....",
  },
  {
    id: "FF-MF-8d0176b127",
    coin: "ETH",
    image: "/assets/images/color/eth.svg",
    status: "Pending",
    walletType: "Invoice",
    date: "26/08/2026, 12:40:18",
    merchantId: "0x8b95c2a11c....",
  },
  {
    id: "FF-MF-9a471a87c2",
    coin: "SOL",
    image: "/assets/images/color/sol.svg",
    status: "Completed",
    walletType: "Invoice",
    date: "24/08/2026, 09:15:03",
    merchantId: "5Jk8VwF2n......",
  },
  {
    id: "FF-MF-62c12e18aa",
    coin: "TON",
    image: "/assets/images/color/ton.svg",
    status: "Completed",
    walletType: "Invoice",
    date: "21/08/2026, 14:02:39",
    merchantId: "EQB3e9Qv......",
  },
];

export default function MissingFundsInvoicePage() {
  const { isNightMode } = useTheme();
  const [showDuplicateDrawer, setShowDuplicateDrawer] = useState(false);
  const [drawerCopied, setDrawerCopied] = useState(false);
  const [expandedId, setExpandedId] = useState("FF-MF-3223a70067");
  const [copiedHistoryId, setCopiedHistoryId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleCopyHistory = (text, id) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedHistoryId(id);
      setTimeout(() => setCopiedHistoryId(null), 2000);
    }
  };

  const handleCopy = (text) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setDrawerCopied(true);
      setTimeout(() => setDrawerCopied(false), 2000);
    }
  };

  return (
    <div className="missing-funds-container missingfunds-page">
      <Container className="site-container">
        {/* Page Title */}
        <h2 className="heading mb-2">Missing Funds</h2>

        {/* Navigation Tabs */}
        <nav className="merchant-tabs missing-funds-tabs mt-1 mb-3">
          <Link href="/missing-funds" className="nav-link">
            Personal
          </Link>
          <Link href="/missing-funds-invoice" className="nav-link active">
            Invoice / Static Wallet
          </Link>
        </nav>

        {/* Invoice Form Card */}
        <div className="missing-funds-form-card">
          <Form className="siteformbg">
            <Form.Group className="form-group mb-3">
              <Form.Label>
                Merchant ID<span className="t-red ms-1">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="0x9CcC9FF46716e6f573Fa375939..."
                readOnly
              />
            </Form.Group>

            <Form.Group className="form-group mb-3">
              <Form.Label>
                Transaction Hash<span className="t-red ms-1">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Oxe333741411184b642ba8ead288..."
                readOnly
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
                readOnly
              />
            </Form.Group>

            {/* Terms Checkbox */}
            <div className="missing-funds-terms-box mb-3">
              <label className="missing-funds-terms-label">
                <input
                  type="checkbox"
                  className="missing-funds-checkbox"
                  disabled
                />
                <span className="missing-funds-terms-text">
                  I have read and agreed to{" "}
                  <span className="terms-link">
                    Firefox VIP Missing Funds Terms &amp; Conditions
                  </span>
                </span>
              </label>
            </div>

            {/* Submit Button - Opens Duplicate Drawer */}
            <Button
              type="button"
              className="sitebtn w-100 missing-funds-submit-btn"
              onClick={() => setShowDuplicateDrawer(true)}
            >
              Submit
            </Button>
          </Form>
        </div>

        {/* Missing Funds History Section */}
        <div className="missing-funds-history-section d-flex justify-content-between align-items-center mb-3">
          <h3 className="missing-funds-history-title">
            Missing Funds History
          </h3>

          <Link href="#" className="missing-funds-back-btn">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Link>
        </div>

        {/* Search Box */}
        <div className="missing-funds-search-box mb-3">
          <InputGroup>
            <InputGroup.Text className="missing-funds-search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search Id here..."
              className="missing-funds-search-input"
              readOnly
            />
          </InputGroup>
        </div>

        {/* History Cards List */}
        <div className="missing-funds-history-list">
          {historyData.map((item) => {
            const isOpen = expandedId === item.id;
            return (
              <div className="missing-funds-card" key={item.id}>
                <div
                  className="missing-funds-card-header"
                  onClick={() => toggleExpand(item.id)}
                  role="button"
                  tabIndex={0}
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

                {isOpen && (
                  <div className="missing-funds-card-body">
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
                    <div className="missing-funds-detail-row">
                      <div>
                        <span>Search ID</span>
                        <strong className="missing-funds-id-copy">
                          {item.id}
                          <button
                            type="button"
                            className="missing-funds-copy-btn"
                            title="Copy Search ID"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyHistory(item.id, item.id);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={copiedHistoryId === item.id ? faCheck : faCopy}
                              className={copiedHistoryId === item.id ? "text-success" : ""}
                            />
                          </button>
                        </strong>
                      </div>
                      <div className="text-end">
                        <span>Merchant ID</span>
                        <strong>{item.merchantId}</strong>
                      </div>
                    </div>
                    <div className="missing-funds-detail-row missing-funds-action-detail-row">
                      <div></div>
                      <div className="text-end">
                        <span className="missing-funds-action-label">Action</span>
                        <Link
                          href="/missing-funds-details"
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
          })}
        </div>
      </Container>

      {/* 2. Duplicate Transaction Drawer (Invoice / Static Wallet Tab Submit) */}
      <div
        className={`phone-draw-overlay ${showDuplicateDrawer ? "open" : ""}`}
        onClick={() => setShowDuplicateDrawer(false)}
      ></div>
      <div className={`phone-draw missing-funds-drawer ${showDuplicateDrawer ? "open" : ""}`}>
        <div className="phone-draw-handle"></div>
        <div className="missing-funds-drawer-header">
          <h4 className="missing-funds-drawer-title">Duplicate Transaction Found</h4>
          <div className="phone-draw-close">
            <Button
              type="button"
              onClick={() => setShowDuplicateDrawer(false)}
              className="phone-draw-close-btn"
            >
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
            <h5 className="missing-funds-duplicate-text m-0 text-center">
              A missing fund search request already exists for this transaction hash.
            </h5>
          </div>

          <div className="missing-funds-drawer-field text-start mb-4">
            <label className="missing-funds-drawer-label">Existing Search ID</label>
            <div className="missing-funds-id-box d-flex align-items-center justify-content-between">
              <span className="missing-funds-id-text">FF-MF-8d0176b127</span>
              <button
                type="button"
                className="missing-funds-id-copy-btn"
                onClick={() => handleCopy("FF-MF-8d0176b127")}
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
        </div>
      </div>

      {/* Userfooter Navigation Bar */}
      <Userfooter />
    </div>
  );
}
