"use client";

import { useState } from "react";
import {
  Image,
  Container,
  Badge,
  Alert,
  Tab,
  Nav, InputGroup, Form, Button, Row, Col
} from "react-bootstrap";

import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faChevronRight,
  faAngleDown,
  faCircleCheck, faCircleExclamation, faCopy,
  faChevronDown, faMagnifyingGlass, faTimes, faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BookMarkCircleIcon, RecieveIcon, SendIcon, SwapIcon, TransReportIcon, DiscountIcon, ScannerIcon, AccountCircleIcon, } from "../components/Icons";


const merchantPage = () => {

  const { isNightMode } = useTheme();

  const [timezone, setTimezone] = useState("GMT + 05:30 Asia/Calcutta");
  const [language, setLanguage] = useState("English");
  const [isSoundOn, setIsSoundOn] = useState(true);

  const [isBtcOpen, setIsBtcOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isEthOpen, setIsEthOpen] = useState(false);
  const [isUsdtOpen, setIsUsdtOpen] = useState(false);
  const [isSolOpen, setIsSolOpen] = useState(false);
  const [isSolOpens, setIsSolOpens] = useState(false);
  const [isSolOpenss, setIsSolOpenss] = useState(false);
  const [isSolOpensss, setIsSolOpensss] = useState(false);
  const [isSolOpening, setIsSolOpening] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawerone, setOpenDrawerone] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleCloseone = () => setShowModalone(false);
  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);
  const handleOpenDrawerone = () => setOpenDrawerone(true);
  const handleCloseDrawerone = () => setOpenDrawerone(false);

  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="paymentandcommission auto-convert">
      <Container>

        <div className="d-flex justify-content-between">
          <div className="heading">Auto Convert</div>
          <div className="">
            <Button
              type="button"
              id="submitbtn"
              className="bulkapply-btn"
            >
              <Image src="/assets/images/at-cont.svg" width={18} height={18} alt="" className="" />
              <span>Auto convert History</span>
            </Button>
          </div>
        </div>
        <div className="siteformbg mt-2">
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </InputGroup.Text>
            <Form.Control placeholder="Search Coins" />
          </InputGroup>
        </div>
        <div className="expired-card">
          <div className="auto-conver-card">
            <div className="d-flex flex-coloum gap-2">
              <Image
                src={
                  isNightMode
                    ? "/assets/images/color/btc.svg"
                    : "/assets/images/color/btc.svg"
                }
                alt="BTC"
                width={45}
                height={45}
              />
              <div className="">
                <h5 className="sub-heading">BTC</h5>
                <p>Bitcoin</p>
              </div>
            </div>
            <div>
              <Image
                src={
                  isNightMode
                    ? "/assets/images/rit-arww.svg"
                    : "/assets/images/rit-arw.svg"
                }
                alt="BTC"
                width={45}
                height={45} className="rit-arrw"
              />
            </div>
            <div className="d-flex flex-coloum gap-2">
              <Image
                src={
                  isNightMode
                    ? "/assets/images/color/usdt.svg"
                    : "/assets/images/color/usdt.svg"
                }
                alt="BTC"
                width={45}
                height={45}
              />
              <div className="">
                <h5 className="sub-heading">USDT</h5>
                <p>Tether</p>
              </div>
            </div>
            {/* <div
              className={`toggle-switch ${isSoundOn ? "active" : ""}`}
              onClick={() => setIsSoundOn(!isSoundOn)}
            >
              <div className="toggle-circle"></div>
            </div> */}
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="">
              <div className="">
                <p>Conversion commission </p>
                <h5 className="sub-heading">1.000000%</h5>
              </div>
            </div>
            <div
              className={`toggle-switch ${isSoundOn ? "active" : ""}`}
              onClick={() => setIsSoundOn(!isSoundOn)}
            >
              <div className="toggle-circle"></div>
            </div>
          </div>

        </div>
        <div className="expired-card">
          <div className="auto-conver-card">
            <div className="d-flex flex-coloum gap-2">
              <Image
                src={
                  isNightMode
                    ? "/assets/images/color/eth.svg"
                    : "/assets/images/color/eth.svg"
                }
                alt="BTC"
                width={45}
                height={45}
              />
              <div className="">
                <h5 className="sub-heading">ETH</h5>
                <p>Ethereum</p>
              </div>
            </div>
            <div>
              <Image
                src={
                  isNightMode
                    ? "/assets/images/rit-arww.svg"
                    : "/assets/images/rit-arw.svg"
                }
                alt="BTC"
                width={45}
                height={45} className="rit-arrw"
              />
            </div>
            <div className="d-flex flex-coloum gap-2">
              <Image
                src={
                  isNightMode
                    ? "/assets/images/color/usdt.svg"
                    : "/assets/images/color/usdt.svg"
                }
                alt="BTC"
                width={45}
                height={45}
              />
              <div className="">
                <h5 className="sub-heading">USDT</h5>
                <p>Tether</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="">
              <div className="">
                <p>Conversion commission </p>
                <h5 className="sub-heading">1.000000%</h5>
              </div>
            </div>
            <div
              className={`toggle-switch ${isSoundOn ? "active" : ""}`}
              onClick={() => setIsSoundOn(!isSoundOn)}
            >
              <div className="toggle-circle"></div>
            </div>
          </div>

        </div>
        <div className="expired-card">
          <div className="auto-conver-card">
            <div className="d-flex flex-coloum gap-2">
              <Image
                src={
                  isNightMode
                    ? "/assets/images/color/sol.svg"
                    : "/assets/images/color/sol.svg"
                }
                alt="BTC"
                width={45}
                height={45}
              />
              <div className="">
                <h5 className="sub-heading">SOL</h5>
                <p>Solona</p>
              </div>
            </div>
            <div>
              <Image
                src={
                  isNightMode
                    ? "/assets/images/rit-arww.svg"
                    : "/assets/images/rit-arw.svg"
                }
                alt="BTC"
                width={45}
                height={45} className="rit-arrw"
              />
            </div>
            <div className="d-flex flex-coloum gap-2">
              <Image
                src={
                  isNightMode
                    ? "/assets/images/color/usdt.svg"
                    : "/assets/images/color/usdt.svg"
                }
                alt="BTC"
                width={45}
                height={45}
              />
              <div className="">
                <h5 className="sub-heading">USDT</h5>
                <p>Tether</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="">
              <div className="">
                <p>Conversion commission </p>
                <h5 className="sub-heading">1.000000%</h5>
              </div>
            </div>
            <div
              className={`toggle-switch ${isSoundOn ? "active" : ""}`}
              onClick={() => setIsSoundOn(!isSoundOn)}
            >
              <div className="toggle-circle"></div>
            </div>
          </div>

        </div>
              <div className="expired-card">
          <div className="auto-conver-card">
            <div className="d-flex flex-coloum gap-2">
              <Image
                src={
                  isNightMode
                    ? "/assets/images/color/ltc.svg"
                    : "/assets/images/color/ltc.svg"
                }
                alt="BTC"
                width={45}
                height={45} 
              />
              <div className="">
                <h5 className="sub-heading">LTC</h5>
                <p>Litecoin</p>
              </div>
            </div>
            <div>
              <Image
                src={
                  isNightMode
                    ? "/assets/images/rit-arww.svg"
                    : "/assets/images/rit-arw.svg"
                }
                alt="BTC"
                width={45}
                height={45} className="rit-arrw"
              />
            </div>
            <div className="d-flex flex-coloum gap-2">
              <Image
                src={
                  isNightMode
                    ? "/assets/images/color/usdt.svg"
                    : "/assets/images/color/usdt.svg"
                }
                alt="BTC"
                width={45}
                height={45}
              />
              <div className="">
                <h5 className="sub-heading">USDT</h5>
                <p>Tether</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="">
              <div className="">
                <p>Conversion commission </p>
                <h5 className="sub-heading">1.000000%</h5>
              </div>
            </div>
            <div
              className={`toggle-switch ${isSoundOn ? "active" : ""}`}
              onClick={() => setIsSoundOn(!isSoundOn)}
            >
              <div className="toggle-circle"></div>
            </div>
          </div>

        </div>
      </Container>
      <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
      <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
        <div className="phone-draw-handle"></div>
        <div className="text-center position-relative">
          <div className="phone-draw-close">
            <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
          <Image src={isNightMode ? "/assets/images/blk-apply-drw.svg" : "/assets/images/blk-apply-drw.svg"} alt="user" className="mobile-iconing" />
          <h2 className="heading">Bulk Apply</h2>
          <p>Apply value, discount or additional commission to multiple coins at once.</p>
        </div>
        <div className="mt-2 mb-2 px-2">
          <div className="expired-card">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-coloum gap-2">
                <Image
                  src={
                    isNightMode
                      ? "/assets/images/color/btc.svg"
                      : "/assets/images/color/btc.svg"
                  }
                  alt="BTC"
                  width={45}
                  height={45}
                />
                <div className="">
                  <h5 className="sub-heading">BTC</h5>
                  <p>Bitcoin</p>
                </div>
              </div>
              <div
                className={`toggle-switch ${isSoundOn ? "active" : ""}`}
                onClick={() => setIsSoundOn(!isSoundOn)}
              >
                <div className="toggle-circle"></div>
              </div>
            </div>
            <Tab.Container defaultActiveKey="discount">
              <Nav className="merchant-tabs coinmanagetabs mt-2 mb-2">
                <Nav.Item>
                  <Nav.Link eventKey="novalue">No Value</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="discount">Discount</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="additional">Additional</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="novalue">
                </Tab.Pane>
                <Tab.Pane eventKey="discount">
                  <div className="coin-search-wrapper">
                    <div className="coin-search-primary">
                      <div className="siteformbg">
                        <Form.Label>Discount value</Form.Label>
                        <InputGroup>
                          <Form.Control placeholder="0.6" />
                        </InputGroup>
                      </div>
                    </div>
                    <div className="coin-search-secondary">
                      <div className="siteformbg">
                        <Form.Label></Form.Label>
                        <InputGroup>
                          <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                  <Tab.Container defaultActiveKey="twentfive">
                    <Nav className="merchant-tabs coinmanagetabs mt-2 mb-2">
                      <Nav.Item>
                        <Nav.Link eventKey="five">5%</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="twentfive">25%</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifty">50%</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="seventyfive">75%</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="hunderd">100%</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Tab.Container>


                </Tab.Pane>
                <Tab.Pane eventKey="additional">
                  <div className="coin-search-wrapper">
                    <div className="coin-search-primary">
                      <div className="siteformbg">
                        <Form.Label>Additional Commission</Form.Label>
                        <InputGroup>
                          <Form.Control placeholder="0.6" />
                        </InputGroup>
                      </div>
                    </div>
                    <div className="coin-search-secondary">
                      <div className="siteformbg">
                        <Form.Label></Form.Label>
                        <InputGroup>
                          <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
        <div className="form-group d-flex mb-0 gap-2 mt-2 px-2">
          <Link href="/" className="borderbtn btn-block text-center text-decoration-none">Clear all</Link>
          <Button type="button" className="sitebtn btn-block" id="submitbtn">Apply</Button>
        </div>
      </div>
      <Userfooter />
    </div>
  );
};

export default merchantPage;