"use client";

import { useState } from "react";
import { Image, Container, Badge } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const merchantPage = () => {
  const { isNightMode } = useTheme();


  return (
    <div className="merchantPage">
      <Container>
        <span className="heading txt-gry addbok">Merchants</span>
        <div className="mer-set-bot">
          <Link href="/" className="set-bot-y mt-2">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/v.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <span className="sub-head">Venkee</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-1">
              <Badge bg="success" className="mb-2 d-flex align-items-center">
                <span className="green-dot me-1"></span>
                Active
              </Badge>

              <FontAwesomeIcon
                icon={faChevronRight}
                className="facheriticon txt-gry"
              />
            </div>
          </Link>
          <Link href="/" className="set-bot-y">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-wallet.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p>Total Turnover</p>
                <span className="sub-head">₹1,000,000</span>
              </div>
            </div>
            <div className="mer-verticalline"></div>
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-graph.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p>Today’s Income</p>
                <span className="sub-head">₹25,430</span>
              </div>
            </div>
          </Link>

        </div>
        <div className="mer-set-bot">
          <Link href="/" className="set-bot-y mt-2">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/r.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <span className="sub-head">Roshini</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-1">
              <Badge bg="warning" className="mb-2 d-flex align-items-center">
                <span className="warning-dot me-1"></span>
                Active
              </Badge>

              <FontAwesomeIcon
                icon={faChevronRight}
                className="facheriticon txt-gry"
              />
            </div>
          </Link>
          <Link href="/" className="set-bot-y">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-wallet.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p>Total Turnover</p>
                <span className="sub-head">₹1,000,000</span>
              </div>
            </div>
            <div className="mer-verticalline"></div>
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-graph.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p>Today’s Income</p>
                <span className="sub-head">₹25,430</span>
              </div>
            </div>
          </Link>

        </div>
        <div className="mer-set-bot">
          <Link href="/" className="set-bot-y mt-2">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/s.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <span className="sub-head">Sabari Vasan</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-1">
              <Badge bg="success" className="mb-2 d-flex align-items-center">
                <span className="green-dot me-1"></span>
                Active
              </Badge>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="facheriticon txt-gry"
              />
            </div>
          </Link>
          <Link href="/" className="set-bot-y">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-wallet.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p>Total Turnover</p>
                <span className="sub-head">₹1,000,000</span>
              </div>
            </div>
            <div className="mer-verticalline"></div>
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-graph.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p>Today’s Income</p>
                <span className="sub-head">₹25,430</span>
              </div>
            </div>
          </Link>

        </div>
        <div className="mer-set-bot">
          <Link href="/" className="set-bot-y mt-2">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/b.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <span className="sub-head">Roshini</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-1">
              <Badge bg="warning" className="mb-2 d-flex align-items-center">
                <span className="warning-dot me-1"></span>
                Active
              </Badge>

              <FontAwesomeIcon
                icon={faChevronRight}
                className="facheriticon txt-gry"
              />
            </div>
          </Link>
          <Link href="/" className="set-bot-y">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-wallet.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p>Total Turnover</p>
                <span className="sub-head">₹1,000,000</span>
              </div>
            </div>
            <div className="mer-verticalline"></div>
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-graph.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p>Today’s Income</p>
                <span className="sub-head">₹25,430</span>
              </div>
            </div>
          </Link>
        </div>
      </Container>
      <Userfooter />
    </div>
  );
};

export default merchantPage;