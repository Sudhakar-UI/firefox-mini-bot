"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, Form, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faChevronRight,
  faCopy,
  faCheck,
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

export default function MissingFundHistoryPage() {
  const { isNightMode } = useTheme();
  const [expandedId, setExpandedId] = useState("FF-MF-3223a70067"); // BTC open by default matching screenshot
  const [copiedId, setCopiedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  // Accordion toggle: click to open / collapse card
  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleCopy = (text, id) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const filteredHistory = historyData.filter((item) => {
    const matchesSearch =
      !searchTerm ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.coin.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "All Types" || item.walletType === selectedType;
    const matchesStatus =
      selectedStatus === "All Status" || item.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="missing-funds-container missing-fund-history-page">
      <Container className="site-container">
        {/* Page Title */}
        <h2 className="heading mb-3">Missing Fund History</h2>

        {/* Filter Controls Row (Search ID + All Types + All Status) */}
        <div className="missing-funds-details-filters mb-3">
          <div className="missing-funds-details-search-box">
            <InputGroup>
              <InputGroup.Text className="missing-funds-details-search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search ID"
                className="missing-funds-details-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="missing-funds-details-select-wrap">
            <Form.Select
              className="missing-funds-details-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option>All Types</option>
              <option>Personal</option>
              <option>Invoice</option>
              <option>Static Wallet</option>
            </Form.Select>
          </div>

          <div className="missing-funds-details-select-wrap">
            <Form.Select
              className="missing-funds-details-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>All Status</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Rejected</option>
            </Form.Select>
          </div>
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
                  {/* Card Header (Click to Open / Close) */}
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
                              title="Copy Search ID"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(item.id, item.id);
                              }}
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
                          <strong>{item.merchantId}</strong>
                        </div>
                      </div>

                      {/* Row 3: Action Row */}
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
            })
          )}
        </div>
      </Container>

      {/* Userfooter Navigation Bar */}
      <Userfooter />
    </div>
  );
}
