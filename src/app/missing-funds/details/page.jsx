"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, Form, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCopy,
  faCheck,
  faCircleCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";
import Userfooter from "../../components/Userfooter";

export default function MissingFundsDetailsPage() {
  const { isNightMode } = useTheme();

  const [searchId, setSearchId] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const detailsData = {
    searchId: "FF-MF-3223a70067",
    walletType: "Invoice",
    submittedDateTime: "09/10/2026, 16:30:31",
    status: "Pending",
    merchantId: "b9c86a83ced9d7e452140bb091",
    merchantIdTruncated: "b9c86a83ced9d7...",
    txHash: "b9c86a83ced9d7e452140bb091",
    txHashTruncated: "b9c86a83ced9d7...",
    depositAddress: "---",
    coin: "BTC",
    coinIcon: "/assets/images/color/btc.svg",
    network: "BTC",
    message: "No message provided",
    txHashStatus: "Accepted",
  };

  return (
    <div className="missing-funds-container missing-funds-details-page">
      <Container className="site-container">
        {/* Page Title */}
        <h2 className="heading mb-3">Missing Fund Details</h2>

        {/* Filter Controls Row */}
        <div className="missing-funds-details-filters mb-3">
          <div className="missing-funds-details-search-box">
            <InputGroup>
              <InputGroup.Text className="missing-funds-details-search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="missing-funds-details-search-input"
              />
            </InputGroup>
          </div>

          <div className="missing-funds-details-select-wrap">
            <Form.Select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="missing-funds-details-select"
            >
              <option value="All Types">All Types</option>
              <option value="Invoice">Invoice</option>
              <option value="Static Wallet">Static Wallet</option>
            </Form.Select>
          </div>

          <div className="missing-funds-details-select-wrap">
            <Form.Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="missing-funds-details-select"
            >
              <option value="All Status">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Completed">Completed</option>
              <option value="Rejected">Rejected</option>
            </Form.Select>
          </div>
        </div>

        {/* 1. Request Overview Card */}
        <div className="missing-funds-details-card mb-3">
          <div className="missing-funds-details-card-header d-flex align-items-center gap-2">
            <Image
              src="/assets/images/Request-Overview.svg"
              alt="Request Overview"
              width={22}
              height={22}
              className="missing-funds-details-header-icon"
            />
            <div>
              <h4 className="missing-funds-details-card-title m-0">Request Overview</h4>
              <p className="missing-funds-details-card-subtitle m-0">
                View transaction details and current status
              </p>
            </div>
          </div>
          <div className="missing-funds-details-card-inner">
            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Search ID</span>
              <span className="detail-item-value d-flex align-items-center gap-1">
                <span>{detailsData.searchId}</span>
                <button
                  type="button"
                  className="detail-copy-btn"
                  onClick={() => handleCopy(detailsData.searchId, "searchId")}
                  title="Copy Search ID"
                >
                  <FontAwesomeIcon
                    icon={copiedField === "searchId" ? faCheck : faCopy}
                    className={copiedField === "searchId" ? "text-success" : ""}
                  />
                </button>
              </span>
            </div>

            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Wallet Type</span>
              <span className="detail-item-value">{detailsData.walletType}</span>
            </div>

            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Submitted Date &amp; Time</span>
              <span className="detail-item-value">{detailsData.submittedDateTime}</span>
            </div>

            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Current Status</span>
              <span className="detail-item-value">
                <span className="missing-funds-pending-pill">
                  <FontAwesomeIcon icon={faClock} className="pill-icon" />
                  Pending
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* 2. Transaction Information Card */}
        <div className="missing-funds-details-card mb-3">
          <div className="missing-funds-details-card-header d-flex align-items-center gap-2">
            <Image
              src="/assets/images/Request-Overview.svg"
              alt="Transaction information"
              width={22}
              height={22}
              className="missing-funds-details-header-icon"
            />
            <h4 className="missing-funds-details-card-title m-0">Transaction information</h4>
          </div>
          <div className="missing-funds-details-card-inner">
            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Merchant ID</span>
              <span className="detail-item-value d-flex align-items-center gap-1">
                <span>{detailsData.merchantIdTruncated}</span>
                <button
                  type="button"
                  className="detail-copy-btn"
                  onClick={() => handleCopy(detailsData.merchantId, "merchantId")}
                  title="Copy Merchant ID"
                >
                  <FontAwesomeIcon
                    icon={copiedField === "merchantId" ? faCheck : faCopy}
                    className={copiedField === "merchantId" ? "text-success" : ""}
                  />
                </button>
              </span>
            </div>

            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Transaction Hash</span>
              <span className="detail-item-value d-flex align-items-center gap-1">
                <span>{detailsData.txHashTruncated}</span>
                <button
                  type="button"
                  className="detail-copy-btn"
                  onClick={() => handleCopy(detailsData.txHash, "txHash")}
                  title="Copy Transaction Hash"
                >
                  <FontAwesomeIcon
                    icon={copiedField === "txHash" ? faCheck : faCopy}
                    className={copiedField === "txHash" ? "text-success" : ""}
                  />
                </button>
              </span>
            </div>

            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Deposit Address</span>
              <span className="detail-item-value detail-value-muted">---</span>
            </div>

            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Coin</span>
              <span className="detail-item-value d-flex align-items-center gap-1">
                <Image
                  src={detailsData.coinIcon}
                  alt={detailsData.coin}
                  width={20}
                  height={20}
                  className="detail-coin-icon"
                />
                <span>{detailsData.coin}</span>
              </span>
            </div>

            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Network</span>
              <span className="detail-item-value">{detailsData.network}</span>
            </div>

            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Wallet Type</span>
              <span className="detail-item-value">{detailsData.walletType}</span>
            </div>
          </div>
        </div>

        {/* 3. Request Information Card */}
        <div className="missing-funds-details-card mb-3">
          <div className="missing-funds-details-card-header d-flex align-items-center gap-2">
            <Image
              src="/assets/images/Request-Information.svg"
              alt="Request Information"
              width={22}
              height={22}
              className="missing-funds-details-header-icon"
            />
            <h4 className="missing-funds-details-card-title m-0">Request Information</h4>
          </div>
          <div className="missing-funds-details-card-inner">
            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Message</span>
              <span className="detail-item-value">{detailsData.message}</span>
            </div>

            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Transaction Hash</span>
              <span className="detail-item-value text-success d-flex align-items-center gap-1">
                <FontAwesomeIcon icon={faCircleCheck} className="accepted-icon" />
                <span>Accepted</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4. Request Activity & Processing Card */}
        <div className="missing-funds-details-card mb-4">
          <div className="missing-funds-details-card-header d-flex align-items-center gap-2">
            <Image
              src="/assets/images/Request-Activity.svg"
              alt="Request Activity &amp; Processing"
              width={22}
              height={22}
              className="missing-funds-details-header-icon"
            />
            <h4 className="missing-funds-details-card-title m-0">Request Activity &amp; Processing</h4>
          </div>
          <div className="missing-funds-details-card-inner missing-funds-timeline-box">
            {/* Timeline Step 1 */}
            <div className="timeline-step">
              <div className="timeline-node">
                <div className="timeline-dot filled"></div>
                <div className="timeline-line dashed"></div>
              </div>
              <div className="timeline-info">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="timeline-heading m-0">Submitted Date &amp; Time</h6>
                  <span className="timeline-timestamp">09/10/2026, 16:30:31</span>
                </div>
                <p className="timeline-subtext m-0">Request was submitted by the user</p>
              </div>
            </div>

            {/* Timeline Step 2 */}
            <div className="timeline-step">
              <div className="timeline-node">
                <div className="timeline-dot filled"></div>
                <div className="timeline-line dashed"></div>
              </div>
              <div className="timeline-info">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="timeline-heading m-0">Awaiting Review</h6>
                  <span className="timeline-timestamp">---</span>
                </div>
                <p className="timeline-subtext m-0">Awaiting review by administration</p>
              </div>
            </div>

            {/* Timeline Step 3 */}
            <div className="timeline-step last">
              <div className="timeline-node">
                <div className="timeline-dot outline"></div>
              </div>
              <div className="timeline-info">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="timeline-heading m-0">Processing Remarks / Resolution Details</h6>
                </div>
                <p className="timeline-subtext m-0">Admin remarks and resolution details</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Userfooter Navigation Bar */}
      <Userfooter />
    </div>
  );
}
