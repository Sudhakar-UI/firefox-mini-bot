"use client";

import { useState } from "react";
import { Image, Container, Badge, Button, Form, Row, Col, Tab, Nav, InputGroup } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEye, faTrash, faCirclePlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BookMarkCircleIcon, RecieveIcon, SendIcon, SwapIcon, TransReportIcon, DiscountIcon, ScannerIcon, AccountCircleIcon } from "../components/Icons";
import Slider from "./Slider";

const merchantPage = () => {
  const [value, setValue] = useState(1.6);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleCloseDrawer = () => setOpenDrawer(false);
  const [isChecked, setIsChecked] = useState(true);
  const { isNightMode } = useTheme();
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

  const [openDrawerone, setOpenDrawerone] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleCloseone = () => setShowModalone(false);
  const handleOpenDrawer = () => setOpenDrawer(true);

  const handleOpenDrawerone = () => setOpenDrawerone(true);
  const handleCloseDrawerone = () => setOpenDrawerone(false);


  return (
    <div className="merchant-settings-page">
      <Container>
        <span className="heading">Merchants Settings</span>
        <div className="mert-sett">
          <span className="sub-head">API Integration</span>
          <p className="mt-1">
            Leave a request for Firefox.VIP integration on your website or Telegram.
            Get an API key to replenish your merchant
          </p>
          <div className="mert-sett-steps mt-3">

            <div className="mert-sett-step">
              <div className="mert-sett-step-number mert-sett-step-active">
                1
              </div>

              <div className="mert-sett-step-content mb-3">
                <span className="sub-head">Add project URL</span>
                <p>Link to your website or Telegram bot</p>
              </div>
            </div>

            <div className="mert-sett-step-line"></div>

            <div className="mert-sett-step">
              <div className="mert-sett-step-number mert-sett-step-inactive">
                2
              </div>

              <div className="mert-sett-step-content mt-3">
                <span className="sub-head">Confirm domain</span>
                <p>Confirm your domain</p>
              </div>
            </div>

          </div>
          <button type="button" className="sitebtn">
            Leave a request
          </button>
        </div>
        <div className="mert-sett">
          <Form className="siteformbg">
            <div className="mert-sett-header">
              <Image src="/assets/images/payment-accury.svg" width={100} height={100} alt="" className="loc-cury-icon me-2" />
              <span className="sub-head">
                Payment Accuracy
              </span>
            </div>

            <div className="mert-sett-accuracy">
              <div className="mert-sett-progress-wrapper">
                <div
                  className="mert-sett-progress"
                  style={{
                    "--progress": `${(value / 5) * 100}%`,
                  }}
                >
                  <div className="mert-sett-progress-inner">
                    <span>{Math.round((value / 5) * 100)}%</span>
                  </div>
                </div>
              </div>

              <div className="mert-sett-accuracy-content">
                <p>
                  Manually set payment accuracy to suit your
                  acquiring needs and never worry about payment status
                </p>
                <div className="" onClick={() => handleOpenDrawer(true)}>
                  <button
                    type="button"
                    className="borderbtn btn-sm w-50 mt-1"
                  >
                    Manage
                  </button>
                </div>

              </div>
            </div>
            <Form.Group className="form-group mert-sett-range-group">
              <Form.Range
                min={0}
                max={5}
                step={0.1}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>
            <div className="mert-sett-divider"></div>
            <div className="mert-sett-stats">
              <div className="mert-sett-stat-card">
                <Image src="/assets/images/set-sml-icon.svg" width={100} height={100} alt="" className="loc-curyy me-3" />
                <span className="mert-sett-stat-label">
                  Enabled coins
                </span>
                <strong className="mert-sett-stat-value">
                  18
                </strong>
              </div>
              <div className="mert-sett-stat-card">
                <Image src="/assets/images/set-sml-icon.svg" width={100} height={100} alt="" className="loc-curyy me-3" />
                <span className="mert-sett-stat-label">
                  With discount
                </span>
                <strong className="mert-sett-stat-value">
                  0%
                </strong>
              </div>

              <div className="mert-sett-stat-card">
                <Image src="/assets/images/set-sml-icon.svg" width={100} height={100} alt="" className="loc-curyy me-3" />
                <span className="mert-sett-stat-label">
                  With commission
                </span>
                <strong className="mert-sett-stat-value">
                  0%
                </strong>
              </div>
            </div>

            <div className="mert-sett-bottom">
              <p>
                Enable or disable currencies. Add a discount
                or increase the commission
              </p>
              <button
                type="button"
                className="borderbtn btn-sm w-50"
              >
                Manage
              </button>
            </div>
          </Form>
        </div>
        <div className="mert-sett">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mert-sett-header mb-2">
              <Image src="/assets/images/auto-convert.svg" width={100} height={100} alt="" className="loc-cury-icon me-2" />
              <span className="sub-head">
                Auto Convert
              </span>
            </div>
            <div>
              <button
                type="button"
                className="borderbtn btn-sm w-30"
              >
                Manage
              </button>
            </div>


          </div>
          <p className="mb-1">
            Once the invoice has been paid, we will automatically convert the funds received into the coin of your choice.
          </p>

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
          <Image src={isNightMode ? "/assets/images/pay-accry.svg" : "/assets/images/pay-accry.svg"} alt="user" className="mobile-iconing" />
          <h2 className="heading">Payment Accuracy</h2>
          <p>The invoice is marked as Paid even if the client has not paid 24% of the amount.</p>
        </div>
        <Slider />
        <form action="" className='siteformbg mt-4 mb-2'>
          <Form.Group className="form-group">
            <InputGroup>
              <Form.Control type="text" id="payment-accuracy-id" placeholder="32" />
            </InputGroup>
          </Form.Group>
        </form>
        <p>Anything below this value will be marked as a
          Partially paid.</p>
        <div className="form-group mt-3">
          <Button type="button" className="sitebtn btn-block" id="submitbtn">Save</Button>
        </div>
      </div>

      <Userfooter />
    </div>
  );
};

export default merchantPage;