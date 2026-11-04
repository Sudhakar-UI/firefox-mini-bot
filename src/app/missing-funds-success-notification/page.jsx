"use client";

import React from "react";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";

export default function MissingFundsSuccessNotificationPage() {
  const { isNightMode } = useTheme();

  return (
    <div className="missing-funds-container missing-funds-notification-page success-notification-page">
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
                <span>b9c86a83ced9d7...</span>
                <button type="button" className="detail-copy-btn" title="Copy Merchant ID">
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </span>
            </div>
            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Transaction Hash</span>
              <span className="detail-item-value d-flex align-items-center gap-1">
                <span>b9c86a83ced9d7...</span>
                <button type="button" className="detail-copy-btn" title="Copy Transaction Hash">
                  <FontAwesomeIcon icon={faCopy} />
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
                  src="/assets/images/color/btc.svg"
                  alt="BTC"
                  width={20}
                  height={20}
                  className="detail-coin-icon"
                />
                <span>BTC</span>
              </span>
            </div>
            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Network</span>
              <span className="detail-item-value">BTC</span>
            </div>
            <div className="missing-funds-detail-item">
              <span className="detail-item-label">Wallet Type</span>
              <span className="detail-item-value">Invoice</span>
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
              <span className="detail-item-value">No message provided</span>
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
                  <span className="timeline-timestamp">09/10/2026, 16:30:31</span>
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
                  <h6 className="timeline-heading m-0">Processing Remarks / Resolution Details</h6>
                </div>
                <p className="timeline-subtext m-0">Admin remarks and resolution details</p>
              </div>
            </div>

            {/* Success Notification Banner */}
            <div className="notification-status-banner notification-status-success d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="notification-banner-icon success" />
                <span className="notification-banner-text">Request processed successfully.</span>
              </div>
              <span className="notification-banner-time">09/10/2026, 16:30:31</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Userfooter Navigation Bar */}
      <Userfooter />
    </div>
  );
}
