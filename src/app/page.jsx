"use client";
import { Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { BookMarkCircleIcon, RecieveIcon, SendIcon, SwapIcon, TransReportIcon, DiscountIcon, ScannerIcon, AccountCircleIcon } from "./components/Icons";
import Link from "next/link";
import { useTheme } from "./context/ThemeContext";
import Carousel from "react-bootstrap/Carousel";

const addtoken = () => {

  const { isNightMode } = useTheme();

  const radius = 30;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const currentStep = 1;
  const totalSteps = 4;
  const strokeDashoffset =
    circumference - (currentStep / totalSteps) * circumference;



  return (
    <>
      <div className='main-page'>
        <Container>
          {/* <div className="scaner-y"> */}
          <Link href="/" className="scaner-y">
            <div className="username-crd d-flex align-items-center gap-1">
              <div className="send-img">
                <Image src={isNightMode ? "/assets/images/user-dark.svg" : "/assets/images/user-light.svg"} alt="user" className="user-img" />
              </div>
              <span>User Name</span>
            </div>
          </Link>

          {/* </div> */}

          <Link href="/setup-account" className="complete-link">
            <div className="cmp-crd-y mt-3">
              <div className="complete-card">
                <div className="progress-container">
                  <svg height={radius * 2} width={radius * 2}>
                    <circle
                      stroke={isNightMode ? "#314A60" : "#e6e6e6"}
                      fill="transparent"
                      strokeWidth={strokeWidth}
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                    />
                    <circle
                      stroke={isNightMode ? "#44A3DD" : "#ff4500"}
                      fill="transparent"
                      strokeWidth={strokeWidth}
                      strokeDasharray={`${circumference} ${circumference}`}
                      style={{
                        strokeDashoffset,
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                      }}
                      strokeLinecap="round"
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                    />
                  </svg>

                  <div className="progress-text">
                    {currentStep}/{totalSteps}
                  </div>
                </div>
                <div className="complete-content">
                  <h6 className="heading">Complete account</h6>
                  <p>It will take 2 minutes</p>
                </div>
                <div className="complete-arrow">
                  <FontAwesomeIcon icon={faChevronRight} className="facheriticon" />
                </div>
              </div>
            </div>
          </Link>
          <div className="text-center mt-3">
            <h2 className="heading d-flex align-items-center justify-content-center gap-2">
              <span className="dollr">$</span>

              <span className="amount">0</span>

              <FontAwesomeIcon icon={faEye} className="dollr eye-icon-y" />
            </h2>
          </div>
          <div className="text-center mt-3">
            <p>Total balance in <span className="txt-clor">USD</span></p>
          </div>
          <div className="d-flex justify-content-around mt-4">
            <Link href="/withdraw" className="d-flex flex-column align-items-center main-links">
              <div className="trsicon">
                <SendIcon size={20} />
              </div>
              <span className="txt-clor">Send</span>
            </Link>
            <Link href="/deposit-qr" className="d-flex flex-column align-items-center main-links">
              <div className="trsicon">
                <RecieveIcon size={20} />
              </div>
              <span className="txt-clor">Receive</span>
            </Link>
            <Link href="/swap" className="d-flex flex-column align-items-center main-links">
              <div className="trsicon">
                <SwapIcon size={20} />
              </div>
              <span className="txt-clor">Swap</span>
            </Link>
          </div>
          {/* <div className="blue-bg-main-y mt-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <h6 className="sub-head txt-clor">
                  All Transactions
                </h6>
                <h6 className="sub-head mb-0">
                  Your Spending and deposits
                </h6>
              </div>
              <div className="trns-report-icon">
                <TransReportIcon size={44} color={isNightMode ? "#2E536F" : "#F5CDC0"} />
              </div>
            </div>
          </div> */}
          <Carousel
            indicators={true}
            controls={false}
            interval={3000}
            className="swap-carousel mt-3"
          >
            <Carousel.Item>
          <div className="blue-bg-main-y mt-3">
            <div className="d-flex gap-3 align-items-center">
              <div>
                <Image
                  src="/assets/images/set-hand.svg"
                  width={60}
                  height={60}
                  alt="hand-icon"
                  className="hand-icon"
                />
              </div>

              <div className="d-flex flex-column">
                <h6 className="sub-head txt-clor mb-1">
                  Your account is suspended
                </h6>

                <p className="mb-0 suspend-text">
                  Your region is not supported,  Your region is not supported,
                </p>
              </div>
            </div>
          </div>
          </Carousel.Item>
               <Carousel.Item>
          <div className="blue-bg-main-y mt-3">
            <div className="d-flex gap-3 align-items-center">

              <div className="swap-icon-wrapper">
                <Image
                  src="/assets/images/swap-gif.gif"
                  width={60}
                  height={60}
                  alt="swap-icon"
                  className="swap-icongif"
                />
              </div>

              <div className="d-flex flex-column">
                <h6 className="sub-head txt-clor mb-1">
                  Your account is suspended
                </h6>

                <p className="suspend-text mb-0">
                  Your region is not supported
                </p>
              </div>

            </div>
          </div>
          </Carousel.Item>
          </Carousel>

          <div className="d-flex justify-content-between align-items-center mt-5">
            <h6 className="sub-head txt-clor">
              My Assets <FontAwesomeIcon icon={faChevronRight} className="facheriticons" />
            </h6>
            <h6 className="sub-head txt-clor">
              Hide Small Balances
            </h6>
          </div>
          <div className="d-flex justify-content-between align-items-center coin-row">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/images/color/btc.svg"
                width={50}
                height={50}
                alt="btc"
                className="coinicon"
              />
              <div>
                <div className="coin-symbol">Bitcoin</div>
                <div className="coin-price d-flex align-items-center gap-1">
                  <span className="txt-gry">$70,628.63</span>
                  <span className="t-red">-3.80%</span>
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="sub-head">0 BTC</div>
              <div className="coin-usd">$0</div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center coin-row">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/images/color/eth.svg"
                width={50}
                height={50}
                alt="btc"
                className="coinicon"
              />
              <div>
                <div className="coin-symbol">Ethereum</div>
                <div className="coin-price d-flex align-items-center gap-1">
                  <span className="txt-gry">$2,063.76</span>
                  <span className="t-green">+2.97%</span>
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="sub-head">0 BTC</div>
              <div className="coin-usd">$0</div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center coin-row">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/images/color/ltc.svg"
                width={50}
                height={50}
                alt="btc"
                className="coinicon"
              />
              <div>
                <div className="coin-symbol">Litecoin</div>
                <div className="coin-price d-flex align-items-center gap-1">
                  <span className="txt-gry">$54.4</span>
                  <span className="t-red">-2.56%</span>
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="sub-head">0 LTC</div>
              <div className="coin-usd">$0</div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center coin-row">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/images/color/trx.svg"
                width={50}
                height={50}
                alt="btc"
                className="coinicon"
              />
              <div>
                <div className="coin-symbol">Tron</div>
                <div className="coin-price d-flex align-items-center gap-1">
                  <span className="txt-gry">$0.2730</span>
                  <span className="t-green">+2.97%</span>
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="sub-head">0 TRX</div>
              <div className="coin-usd">$0</div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center coin-row">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/images/color/sol.svg"
                width={50}
                height={50}
                alt="btc"
                className="coinicon"
              />
              <div>
                <div className="coin-symbol">Solana</div>
                <div className="coin-price d-flex align-items-center gap-1">
                  <span className="txt-gry">$174.99</span>
                  <span className="t-green">+0.19%</span>
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="sub-head">0 SOL</div>
              <div className="coin-usd">$0</div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center coin-row">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/images/color/avax.svg"
                width={50}
                height={50}
                alt="btc"
                className="coinicon"
              />
              <div>
                <div className="coin-symbol">Avalanche</div>
                <div className="coin-price d-flex align-items-center gap-1">
                  <span className="txt-gry">$2.52</span>
                  <span className="t-red">-0.03%</span>
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="sub-head">0 AVAX</div>
              <div className="coin-usd">$0</div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center coin-row">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/images/color/ton.svg"
                width={50}
                height={50}
                alt="btc"
                className="coinicon"
              />
              <div>
                <div className="coin-symbol">Toncoin</div>
                <div className="coin-price d-flex align-items-center gap-1">
                  <span className="txt-gry">$0.7944</span>
                  <span className="t-green">-0.10%</span>
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="sub-head">0 TON</div>
              <div className="coin-usd">$0</div>
            </div>
          </div>
          <div className="d-flex mt-3 gap-2">
            <div className="blue-card">
              <h6 className="sub-head txt-clor">Address Book</h6>
              <div className="blue-card-img">
                <BookMarkCircleIcon size={40} />
              </div>

            </div>
            <div className="blue-card">
              <h6 className="sub-head txt-clor">Fee and Limits</h6>
              <div className="blue-card-img">
                <DiscountIcon size={40} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default addtoken