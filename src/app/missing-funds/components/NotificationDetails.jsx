"use client";

import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faCheck,
  faCircleCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";
import Userfooter from "../../components/Userfooter";

export default function NotificationDetails({ outcome = "success" }) {
  const { isNightMode } = useTheme();
  const isSuccess = outcome === "success";

  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const detailsData = {
    merchantId: "b9c86a83ced9d7e452140bb091",
    merchantIdTruncated: "b9c86a83ced9d7...",
    txHash: "b9c86a83ced9d7e452140bb091",
    txHashTruncated: "b9c86a83ced9d7...",
    depositAddress: "---",
    coin: "BTC",
    coinIcon: "/assets/images/color/btc.svg",
    network: "BTC",
    walletType: "Invoice",
    message: "No message provided",
    txHashStatus: "Accepted",
    submittedDateTime: "09/10/2026, 16:30:31",
  };

  return (
    <div
      className={`missing-funds-container missing-funds-notification-page ${
        isSuccess ? "success-notification-page" : "error-notification-page"
      }`}
    >
      <Container className="site-container pt-1">
        {/* 1. Transaction Information Card */}
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
              <span className="detail-item-value detail-value-muted">{detailsData.depositAddress}</span>
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

        {/* 2. Request Information Card */}
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
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="accepted-icon"
                />
                <span>{detailsData.txHashStatus}</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3. Request Activity & Processing Card */}
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
            {/* Timeline Step 1: Submitted Date & Time */}
            <div className="timeline-step">
              <div className="timeline-node">
                <div className="timeline-dot filled"></div>
                <div className="timeline-line dashed"></div>
              </div>
              <div className="timeline-info">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="timeline-heading m-0">Submitted Date &amp; Time</h6>
                  <span className="timeline-timestamp">{detailsData.submittedDateTime}</span>
                </div>
                <p className="timeline-subtext m-0">Request was submitted by the user</p>
              </div>
            </div>

            {/* Timeline Step 2: Awaiting Review */}
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

            {/* Timeline Step 3: Processing Remarks / Resolution Details */}
            <div className="timeline-step last mb-3">
              <div className="timeline-node">
                <div className="timeline-dot outline"></div>
              </div>
              <div className="timeline-info">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="timeline-heading m-0">
                    Processing Remarks / Resolution Details
                  </h6>
                </div>
                <p className="timeline-subtext m-0">Admin remarks and resolution details</p>
              </div>
            </div>

            {/* Notification Banner at bottom of Activity Card matching exact screenshot */}
            {isSuccess ? (
              <div className="notification-status-banner notification-status-success d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="notification-banner-icon success"
                  />
                  <span className="notification-banner-text">
                    Request processed successfully.
                  </span>
                </div>
                <span className="notification-banner-time">{detailsData.submittedDateTime}</span>
              </div>
            ) : (
              <div className="notification-status-banner notification-status-error d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="notification-banner-icon error"
                  />
                  <span className="notification-banner-text">
                    Something went wrong. Please try again.
                  </span>
                </div>
                <span className="notification-banner-time">{detailsData.submittedDateTime}</span>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Userfooter Navigation Bar */}
      <Userfooter />
    </div>
  );
}
