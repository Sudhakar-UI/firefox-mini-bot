"use client";
import { Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { BookMarkCircleIcon, RecieveIcon, SendIcon, SwapIcon, TransReportIcon, DiscountIcon, ScannerIcon } from "../components/Icons";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const addtoken = () => {

  const { isNightMode } = useTheme();

  const radius = 40;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const currentStep = 1;
  const totalSteps = 4;
  const strokeDashoffset =
    circumference - (currentStep / totalSteps) * circumference;

  return (
    <>
      <div className='history-page'>
        <Container>
          <div className="d-flex justify-content-between align-items-center coin-row">
            <div className="d-flex align-items-center gap-2">
              <div className="trsicon">
                <SendIcon size={20} />
              </div>
              <div>
                <div className="coin-symbol">Widthdrawal</div>
                <div className="coin-price d-flex align-items-center gap-1">
                  <span className="txt-gry">3 apr 18.19</span>
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="sub-head t-red">- 0.05 ETH</div>
              <div className="coin-usd">$132.02</div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center coin-row">
            <div className="d-flex align-items-center gap-2">
              <div className="trsicon">
                <RecieveIcon size={20} />
              </div>
              <div>
                <div className="coin-symbol">Deposit</div>
                <div className="coin-price d-flex align-items-center gap-1">
                  <span className="txt-gry">3 apr 18.16</span>
                  {/* <span className="t-green">+2.97%</span> */}
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="sub-head t-green">+0.05ETH</div>
              <div className="coin-usd">$103.02</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default addtoken