"use client";
import React, { useState, useMemo } from "react";
import { Container, Form, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faChevronRight,
  faChevronLeft, faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Userfooter from "../components/Userfooter";


const BALANCE_CARDS = [
  { key: "spot", label: "Spot", balance: "$10,000,000" },
  { key: "derivative", label: "Derivative", balance: "$10,000,000" },
  { key: "business", label: "Business", balance: "$10,000,000" },
  { key: "personal", label: "Personal", balance: "$10,000,000" },
  { key: "spotLimit", label: "Spot Limit", balance: "$10,000,000" },
  { key: "spotDerivative", label: "Spot Derivative", balance: "$10,000,000" },
];


const ASSETS_BY_TAB = {
  spot: [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      icon: "/assets/images/color/btc.svg",
      price: "$70,628.6",
      approx: "0.0001",
      amount: "0.00000001",
      lockedBalance: "0.00000001",
      avgCost: "$9,476,953.00",
      allocation: 71.1157,
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      icon: "/assets/images/color/eth.svg",
      price: "$2,063.76",
      approx: "0.0001",
      amount: "0.00000001",
      lockedBalance: "0.00000000",
      avgCost: "$2,063.76",
      allocation: 18.42,
    },
    {
      id: "ton",
      symbol: "TON",
      name: "Toncoin",
      icon: "/assets/images/color/ton.svg",
      price: "0.00000001",
      approx: "0.0001",
      amount: "0.00000001",
      lockedBalance: "0.00000000",
      avgCost: "$5.12",
      allocation: 10.46,
    },
  ],
  derivative: [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      icon: "/assets/images/color/btc.svg",
      price: "$70,910.2",
      approx: "0.0002",
      amount: "0.00000002",
      lockedBalance: "0.00000001",
      avgCost: "$8,912,340.00",
      allocation: 64.3,
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      icon: "/assets/images/color/eth.svg",
      price: "$2,071.10",
      approx: "0.0003",
      amount: "0.00000003",
      lockedBalance: "0.00000001",
      avgCost: "$3,120.55",
      allocation: 25.7,
    },
    {
      id: "ton",
      symbol: "TON",
      name: "Toncoin",
      icon: "/assets/images/color/ton.svg",
      price: "0.00000002",
      approx: "0.0001",
      amount: "0.00000001",
      lockedBalance: "0.00000000",
      avgCost: "$6.44",
      allocation: 10.0,
    },
  ],
  business: [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      icon: "/assets/images/color/btc.svg",
      price: "$70,628.6",
      approx: "0.0005",
      amount: "0.00000005",
      lockedBalance: "0.00000002",
      avgCost: "$9,003,120.00",
      allocation: 80.0,
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      icon: "/assets/images/color/eth.svg",
      price: "$2,063.76",
      approx: "0.0002",
      amount: "0.00000002",
      lockedBalance: "0.00000000",
      avgCost: "$1,980.00",
      allocation: 15.0,
    },
    {
      id: "ton",
      symbol: "TON",
      name: "Toncoin",
      icon: "/assets/images/color/ton.svg",
      price: "0.00000001",
      approx: "0.0001",
      amount: "0.00000001",
      lockedBalance: "0.00000000",
      avgCost: "$4.90",
      allocation: 5.0,
    },
  ],
  personal: [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      icon: "/assets/images/color/btc.svg",
      price: "$70,628.6",
      approx: "0.0001",
      amount: "0.00000001",
      lockedBalance: "0.00000000",
      avgCost: "$7,455,000.00",
      allocation: 55.0,
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      icon: "/assets/images/color/eth.svg",
      price: "$2,063.76",
      approx: "0.0004",
      amount: "0.00000004",
      lockedBalance: "0.00000001",
      avgCost: "$2,500.00",
      allocation: 30.0,
    },
    {
      id: "ton",
      symbol: "TON",
      name: "Toncoin",
      icon: "/assets/images/color/ton.svg",
      price: "0.00000001",
      approx: "0.0002",
      amount: "0.00000002",
      lockedBalance: "0.00000000",
      avgCost: "$6.10",
      allocation: 15.0,
    },
  ],
  spotLimit: [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      icon: "/assets/images/color/btc.svg",
      price: "$70,628.6",
      approx: "0.0001",
      amount: "0.00000001",
      lockedBalance: "0.00000001",
      avgCost: "$9,200,000.00",
      allocation: 68.5,
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      icon: "/assets/images/color/eth.svg",
      price: "$2,063.76",
      approx: "0.0002",
      amount: "0.00000002",
      lockedBalance: "0.00000001",
      avgCost: "$2,200.00",
      allocation: 21.5,
    },
    {
      id: "ton",
      symbol: "TON",
      name: "Toncoin",
      icon: "/assets/images/color/ton.svg",
      price: "0.00000001",
      approx: "0.0001",
      amount: "0.00000001",
      lockedBalance: "0.00000000",
      avgCost: "$5.60",
      allocation: 10.0,
    },
  ],
  spotDerivative: [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      icon: "/assets/images/color/btc.svg",
      price: "$70,910.2",
      approx: "0.0003",
      amount: "0.00000003",
      lockedBalance: "0.00000001",
      avgCost: "$8,750,000.00",
      allocation: 60.0,
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      icon: "/assets/images/color/eth.svg",
      price: "$2,071.10",
      approx: "0.0004",
      amount: "0.00000004",
      lockedBalance: "0.00000002",
      avgCost: "$3,400.00",
      allocation: 30.0,
    },
    {
      id: "ton",
      symbol: "TON",
      name: "Toncoin",
      icon: "/assets/images/color/ton.svg",
      price: "0.00000002",
      approx: "0.0001",
      amount: "0.00000001",
      lockedBalance: "0.00000000",
      avgCost: "$6.80",
      allocation: 10.0,
    },
  ],
};

export default function Wallet() {
  const [activeTab, setActiveTab] = useState("spot");
  const [page, setPage] = useState(0);
  const [openRow, setOpenRow] = useState("btc");
  const [search, setSearch] = useState("");


  const pages = useMemo(
    () => [BALANCE_CARDS.slice(0, 4), BALANCE_CARDS.slice(2, 6)],
    []
  );

  const togglePage = () => setPage((prev) => (prev === 0 ? 1 : 0));

  const assets = useMemo(() => {
    const list = ASSETS_BY_TAB[activeTab] || [];
    if (!search.trim()) return list;
    return list.filter(
      (a) =>
        a.symbol.toLowerCase().includes(search.toLowerCase()) ||
        a.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeTab, search]);

  return (
    <div className="wallet-page">
      <Container>
        <div className="wallet-page-cards-wrap">
          <div className="wallet-page-cards-viewport">
            <div
              className="wallet-page-cards-track"
              style={{
                width: `${pages.length * 100}%`,
                transform: `translateX(-${page * (100 / pages.length)}%)`,
              }}
            >
              {pages.map((pageCards, pageIndex) => (
                <div
                  className="wallet-page-cards-grid"
                  key={pageIndex}
                  style={{ flex: `0 0 ${100 / pages.length}%` }}
                >
                  {pageCards.map((card) => (
                    <button
                      type="button"
                      key={card.key}
                      className={`wallet-page-card ${activeTab === card.key ? "wallet-page-card-active" : ""
                        }`}
                      onClick={() => setActiveTab(card.key)}
                    >
                      <h6 className="sub-head">{card.label}</h6>
                      <p className="">Your balance</p>
                      <h6 className="wallet-page-card-balance">{card.balance}</h6>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`wallet-page-arrow-btn ${page === 0 ? "wallet-page-arrow-btn-right" : "wallet-page-arrow-btn-left"
              }`}
            onClick={togglePage}
            aria-label={page === 0 ? "Show next cards" : "Show previous cards"}
          >
            <FontAwesomeIcon icon={page === 0 ? faChevronRight : faChevronLeft} className="wal-cherit" />
          </button>
        </div>

        <div className="wallet-page-header">
          <div className="wallet-page-assets-header">
            <span className="wallet-page-assets-title">My Assets</span>
            <FontAwesomeIcon icon={faChevronRight} className="wallet-page-assets-arrow wal-cherit" />
          </div>

          <div className="supportsearch">
            <Form className="siteformbg">
              <Form.Group className="form-group mb-0">
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className="wallet-page-asset-list">
          {assets.map((asset) => {
            const isOpen = openRow === asset.id;
            return (
              <div className="wallet-page-asset-card" key={asset.id}>
                <div
                  className="wallet-page-asset-row"
                  onClick={() => setOpenRow(isOpen ? null : asset.id)}
                >
                  <div className="wallet-page-asset-left">
                    <Image
                      src={asset.icon}
                      alt={asset.symbol}
                      width={36}
                      height={36}
                      className="wallet-page-asset-icon"
                    />
                    <div>
                      <div className="sub-head">
                        {asset.symbol} ({asset.name})
                      </div>
                      <p className="">{asset.price}</p>
                    </div>
                  </div>
                  <div className="wallet-page-asset-right">
                    <div>                  
                        <div className="sub-head">≈ {asset.approx}</div>
                    <p className="wallet-page-asset-amount">{asset.amount}</p> 
                    </div>
                         
                     <FontAwesomeIcon
                    icon={isOpen ? faChevronDown : faChevronRight}
                    className="wallet-page-asset-chevron wal-cherit"
                  />
                  </div>
                </div>
                {isOpen && (
                  <div className="wallet-page-asset-details">
                    <div className="wallet-page-detail-row">
                      <div>
                        <p className="">Locked Balance</p>
                        <div className="sub-head">
                          {asset.lockedBalance}
                        </div>
                      </div>
                      <div className="wallet-page-detail-align-right">
                        <p className="">Avg Cost</p>
                        <div className="sub-head">{asset.avgCost}</div>
                      </div>
                    </div>

                    <div className="wallet-page-allocation-row">
                      <div className="sub-head">Allocation</div>
                      <span className="wallet-page-allocation-pct">
                        {asset.allocation}%
                      </span>
                    </div>
                    <div className="wallet-page-allocation-bar">
                      <div
                        className="wallet-page-allocation-fill"
                        style={{ width: `${asset.allocation}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {assets.length === 0 && (
            <div className="wallet-page-no-results">No assets found.</div>
          )}
        </div>
      </Container>
      <Userfooter />
    </div>
  );
}
