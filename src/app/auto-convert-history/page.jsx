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
  const [openRows, setOpenRows] = useState(null);
  useEffect(() => {
    document.body.classList.add("merchantview");
    return () => document.body.classList.remove("merchantview");
  }, []);

  const { isNightMode } = useTheme();

  return (
    <div className="merchantview-page auto-convert-history">
      <Container>
        <h2 className="heading">Auto Convert History</h2>
        <div className="siteformbg">
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </InputGroup.Text>
            <Form.Control placeholder="Search coin" />
          </InputGroup>
        </div>
        <div className="payment-card mt-4">
          <div
            className="payment-header"
            onClick={() => setOpenRow(openRow === "btc" ? null : "btc")}
          >
            <div className="coin-info">
              <Image src={isNightMode ? "/assets/images/color/btc.svg" : "/assets/images/color/btc.svg"} width="100" height="100" alt="user" className="merviw-icon" />
              <div>
                <h5 className="sub-head">BTC/USDT</h5>
                <p>$9.476.959</p>
              </div>
            </div>
            <div className="status-info">
              <div className="d-flex flex-column align-items-end">
                <div>
                  <p>08-Apr-2026</p>
                </div>
                <h5 className="sub-head">11:22:41</h5>
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
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2">
                  <p>From Amount</p>
                  <h6 className="sub-head">19.0000000</h6>
                </div>

                <div className="d-flex flex-column gap-2 align-items-end">
                  <p>To Amount</p>
                  <h6 className="sub-head">1655534.1385</h6>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2">
                  <p>Conversion Fee</p>
                  <h6 className="sub-head">33786.41098039</h6>
                </div>

                <div className="d-flex flex-column gap-2 align-items-end">
                  <p>Status</p>
                  <h6 className="sub-head t-green">Completed</h6>
                </div>
              </div>
              
            </div>

          )}
        </div>
        <div className="payment-card mt-2">
          <div
            className="payment-header"
            onClick={() => setOpenRow(openRow === "eth" ? null : "eth")}
          >
            <div className="coin-info">
              <Image src={isNightMode ? "/assets/images/color/eth.svg" : "/assets/images/color/eth.svg"} width="100" height="100" alt="user" className="merviw-icon" />
              <div>
                <h5 className="sub-head">ETH/USDT</h5>
                <p>$9.476.959</p>
              </div>
            </div>
            <div className="status-info">
              <div className="d-flex flex-column align-items-end">
                <div>
                  <p>08-Apr-2026</p>
                </div>
                <h5 className="sub-head">11:22:41</h5>
              </div>

              <div className="ms-3">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`angle-icon ${openRow === "usdtone" ? "rotate" : ""}`}
                />
              </div>
            </div>
          </div>
          {openRow === "eth" && (
            <div className="payment-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2">
                  <p>From Amount</p>
                  <h6 className="sub-head">19.0000000</h6>
                </div>

                <div className="d-flex flex-column gap-2 align-items-end">
                  <p>To Amount</p>
                  <h6 className="sub-head">1655534.1385</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2">
                  <p>Conversion Fee</p>
                  <h6 className="sub-head">33786.41098039</h6>
                </div>

                <div className="d-flex flex-column gap-2 align-items-end">
                  <p>Status</p>
                  <h6 className="sub-head t-green">Completed</h6>
                </div>
              </div>
            </div>

          )}
        </div>
        <div className="payment-card mt-2">
          <div
            className="payment-header"
            onClick={() => setOpenRow(openRow === "ton" ? null : "ton")}
          >
            <div className="coin-info">
              <Image src={isNightMode ? "/assets/images/color/ton.svg" : "/assets/images/color/ton.svg"} width="100" height="100" alt="user" className="merviw-icon" />
              <div>
                <h5 className="sub-head">TON/USDT</h5>
                <p>$9.476.959</p>
              </div>
            </div>
            <div className="status-info">
              <div className="d-flex flex-column align-items-end">
                <div>
                  <p>08-Apr-2026</p>
                </div>
                <h5 className="sub-head">11:22:41</h5>
              </div>

              <div className="ms-3">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`angle-icon ${openRow === "usdtone" ? "rotate" : ""}`}
                />
              </div>
            </div>
          </div>
          {openRow === "ton" && (
            <div className="payment-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2">
                  <p>From Amount</p>
                  <h6 className="sub-head">19.0000000</h6>
                </div>

                <div className="d-flex flex-column gap-2 align-items-end">
                  <p>To Amount</p>
                  <h6 className="sub-head">1655534.1385</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2">
                  <p>Conversion Fee</p>
                  <h6 className="sub-head">33786.41098039</h6>
                </div>

                <div className="d-flex flex-column gap-2 align-items-end">
                  <p>Status</p>
                  <h6 className="sub-head t-green">Completed</h6>
                </div>
              </div>
            </div>

          )}
        </div>
        <div className="payment-card mt-2">
          <div
            className="payment-header"
            onClick={() => setOpenRow(openRow === "sol" ? null : "sol")}
          >
            <div className="coin-info">
              <Image src={isNightMode ? "/assets/images/color/sol.svg" : "/assets/images/color/sol.svg"} width="100" height="100" alt="user" className="merviw-icon" />
              <div>
                <h5 className="sub-head">SOL/USDT</h5>
                <p>$9.476.959</p>
              </div>
            </div>
            <div className="status-info">
              <div className="d-flex flex-column align-items-end">
                <div>
                  <p>08-Apr-2026</p>
                </div>
                <h5 className="sub-head">11:22:41</h5>
              </div>

              <div className="ms-3">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`angle-icon ${openRow === "usdtone" ? "rotate" : ""}`}
                />
              </div>
            </div>
          </div>
          {openRow === "sol" && (
            <div className="payment-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2">
                  <p>From Amount</p>
                  <h6 className="sub-head">19.0000000</h6>
                </div>

                <div className="d-flex flex-column gap-2 align-items-end">
                  <p>To Amount</p>
                  <h6 className="sub-head">1655534.1385</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2">
                  <p>Conversion Fee</p>
                  <h6 className="sub-head">33786.41098039</h6>
                </div>

                <div className="d-flex flex-column gap-2 align-items-end">
                  <p>Status</p>
                  <h6 className="sub-head t-green">Completed</h6>
                </div>
              </div>
            </div>

          )}
        </div>
      </Container>
      <Userfooter />
    </div>

  );
}