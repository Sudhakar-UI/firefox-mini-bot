"use client";

import { useState } from "react";
import { Image, Container, Badge, Button, Form, Row, Col, } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEye, faTrash, faCirclePlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BookMarkCircleIcon, RecieveIcon, SendIcon, SwapIcon, TransReportIcon, DiscountIcon, ScannerIcon, AccountCircleIcon } from "../components/Icons";


const merchantPage = () => {
  const { isNightMode } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawerone, setOpenDrawerone] = useState(false);
  const [openDrawertwo, setOpenDrawertwo] = useState(false);
  const [openDrawerthree, setOpenDrawerthree] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleCloseone = () => setShowModalone(false);
  const handleClosethree = () => setShowModalthree(false);
  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);
  const handleOpenDrawerone = () => setOpenDrawerone(true);
  const handleCloseDrawerone = () => setOpenDrawerone(false);
  const handleOpenDrawertwo = () => setOpenDrawertwo(true);
  const handleCloseDrawertwo = () => setOpenDrawertwo(false);
  const handleOpenDrawerthree = () => setOpenDrawerthree(true);
  const handleCloseDrawerthree = () => setOpenDrawerthree(false);

  return (
    <div className="merchantPage merchantlist">
      <Container>
        <span className="heading txt-gry addbok">Merchants</span>
        <p className="mge-all">Manage all your merchants</p>
        <div className="d-flex mt-3 mb-2 gap-2">
          <div className="blue-card">
            <div>
              <Image src="/assets/images/total-income.svg" width={50} height={50} alt="" className="loc-cury-iconing" />
            </div>
            <div>
              <p className="mge-all">Total Income</p>
              <h6 className="sub-heading">$5,932.26</h6>
            </div>
          </div>
          <div className="blue-card">
            <div>
              <Image src="/assets/images/total-turnover.svg" width={50} height={50} alt="" className="loc-cury-iconing" />
            </div>
            <div>
              <p className="mge-all">Total Turnover</p>
              <h6 className="sub-heading">$335,973.80</h6>
            </div>
          </div>
        </div>
        <Button className="setup-acc-btn mt-1 mb-2" onClick={() => handleOpenDrawer(true)}>
          <FontAwesomeIcon icon={faCirclePlus} className="wall-circle-icons me-1" />
          Create Merchant
        </Button>
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
            </div>
          </Link>
          <Link href="/" className="set-bot-y set">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-wallet.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p className="mb-1">Total Turnover</p>
                <span className="sub-head">₹1,000,000</span>
              </div>
            </div>
            <div className="mer-verticalline"></div>
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-graph.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p className="mb-1">Today’s Income</p>
                <span className="sub-head">₹25,430</span>
              </div>
            </div>
          </Link>
          <div href="/" className="set-bot-y d-flex justify-content-around">
            <div>
              <span className="sub-head buleicon">
                <FontAwesomeIcon icon={faEye} className="me-1" />
                View
              </span>
            </div>
            {/* <div>
              <span className="sub-head deleteicon" onClick={() => handleOpenDrawerone(true)}>
                <FontAwesomeIcon icon={faTrash} className="me-1" />
                Delete
              </span>
            </div> */}
          </div>
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
                New
              </Badge>
            </div>
          </Link>
          <Link href="/" className="set-bot-y set">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-wallet.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p className="mb-1">Total Turnover</p>
                <span className="sub-head">₹1,000,000</span>
              </div>
            </div>
            <div className="mer-verticalline"></div>
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-graph.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p className="mb-1">Today’s Income</p>
                <span className="sub-head">₹25,430</span>
              </div>
            </div>
          </Link>
          <div href="/" className="set-bot-y d-flex justify-content-around">
            <div>
              <span className="sub-head buleicon">
                <FontAwesomeIcon icon={faEye} className="me-1" />
                View
              </span>
            </div>
            <div>
              <span className="sub-head deleteicon" onClick={() => handleOpenDrawerone(true)}>
                <FontAwesomeIcon icon={faTrash} className="me-1" />
                Delete
              </span>
            </div>
          </div>

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

            </div>
          </Link>
          <Link href="/" className="set-bot-y set">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-wallet.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p className="mb-1">Total Turnover</p>
                <span className="sub-head">₹1,000,000</span>
              </div>
            </div>
            <div className="mer-verticalline"></div>
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-graph.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p className="mb-1">Today’s Income</p>
                <span className="sub-head">₹25,430</span>
              </div>
            </div>
          </Link>
     <div href="/" className="set-bot-y d-flex justify-content-around">
            <div>
              <span className="sub-head buleicon">
                <FontAwesomeIcon icon={faEye} className="me-1" />
                View
              </span>
            </div>
            <div>
              <span className="sub-head deleteicon" onClick={() => handleOpenDrawerone(true)}>
                <FontAwesomeIcon icon={faTrash} className="me-1" />
                Delete
              </span>
            </div>
          </div>
        </div>
        <div>
              <span className="sub-head deleteicon" onClick={() => handleOpenDrawerthree(true)}>
                <FontAwesomeIcon icon={faTrash} className="me-1" />
                Delete
              </span>
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
            </div>
          </Link>

          <Link href="/" className="set-bot-y set-bot-y set">
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-wallet.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p className="mb-1">Total Turnover</p>
                <span className="sub-head">₹1,000,000</span>
              </div>
            </div>
            <div className="mer-verticalline"></div>
            <div className="d-flex align-items-center">
              <Image src="/assets/images/mer-graph.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
              <div className="d-flex flex-column">
                <p className="mb-1">Today’s Income</p>
                <span className="sub-head">₹25,430</span>
              </div>
            </div>
          </Link>

          <div href="/" className="set-bot-y d-flex justify-content-around">
            <div>
              <span className="sub-head buleicon">
                <FontAwesomeIcon icon={faEye} className="me-1" />
                View
              </span>
            </div>
            <div>
              <span className="sub-head deleteicon" onClick={() => handleOpenDrawerone(true)}>
                <FontAwesomeIcon icon={faTrash} className="me-1" />
                Delete
              </span>
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
          <Image src={isNightMode ? "/assets/images/mer-icon-new.svg" : "/assets/images/mer-icon-new.svg"} alt="user" className="mobile-iconing" />
          <h2 className="heading">Create New Merchant</h2>
          <p>Add merchant details to get started</p>
        </div>
        <div className="mt-2 mb-2">
          <Row>
            <Col xl={12} >
              <Form className="siteformbg">
                <div className="supportsearch p-0">
                  <Form.Group className="mb-0">
                    <Form.Label>Merchant name <span className="t-red">*</span>
                    </Form.Label>
                    <Form.Control placeholder="Enter merchant name" id="search" />
                  </Form.Group>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
        <div href="/#" onClick={() => handleOpenDrawertwo(true)} className="mt-3 mb-2">
          <Button className="sitebtn">Create Merchant</Button>
        </div>
      </div>
      <div className={`phone-draw-overlay ${openDrawerthree ? 'open' : ''}`} onClick={handleCloseDrawerthree}></div>
      <div className={`phone-draw ${openDrawerthree ? 'open' : ''}`}>
        <div className="phone-draw-handle"></div>
        <div className="text-center position-relative">
          <div className="phone-draw-close">
            <Button onClick={handleCloseDrawerthree} className="phone-draw-close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
          <Image src={isNightMode ? "/assets/images/email-ver.svg" : "/assets/images/email-ver.svg"} alt="user" className="mobile-iconing" />
          <h2 className="heading">Email Verification</h2>
        </div>
        <div className="mt-2 mb-2">
          <Row>
            <Col xl={12} >
              <Form className="siteformbg">
                <div className="supportsearch p-0">
                  <Form.Group className="mb-0">
                    <Form.Label>Email<span className="t-red">*</span>
                    </Form.Label>
                    <Form.Control placeholder="Enter email code" id="search" />
                  </Form.Group>
                </div>
              </Form>
              <p className="mt-2 mb-2">Mail not received click resend link, <span className="txt-clor">Resend Code</span></p>
            </Col>
          </Row>
        </div>
        <div href="/#">
          <Button className="sitebtn">Confirm</Button>
        </div>
      </div>
      <div className={`phone-draw-overlay ${openDrawertwo ? 'open' : ''}`} onClick={handleCloseDrawertwo}></div>
      <div className={`phone-draw ${openDrawertwo ? 'open' : ''}`}>
        <div className="phone-draw-handle"></div>
        <div className="text-center position-relative">
          <div className="phone-draw-close">
            <Button onClick={handleCloseDrawertwo} className="phone-draw-close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
          <Image src={isNightMode ? "/assets/images/green-tick-icon.svg" : "/assets/images/green-tick-icon.svg"} alt="user" className="mobile-iconing" />
          <h2 className="heading">Congratulations !</h2>
          <p>You have created a new merchant shalini</p>
        </div>
        <div className="px-3 mt-3">
          <h2 className="sub-head">Pass project moderation</h2>
          <p>Get the API key. Create one-time payment links and post them anywhere or send them to each of your customers. You can also use the widget on your website.</p>
        </div>
        <div className="px-3 mt-3 mb-3">
          <h2 className="sub-head">Integrate Firefox.VIP via API</h2>
          <p>Automatically generate a payment directly on your website for your customers to see.</p>
        </div>

        <Link href="/account-passcode">
          <Button className="sitebtn mb-3 mt-2">Go To Setup</Button>
        </Link>
      </div>
      <div className={`phone-draw-overlay ${openDrawerone ? 'open' : ''}`} onClick={handleCloseDrawerone}></div>
      <div className={`phone-draw ${openDrawerone ? 'open' : ''}`}>
        <div className="phone-draw-handle"></div>
        <div className="text-center position-relative">
          <div className="phone-draw-close">
            <Button onClick={handleCloseDrawerone} className="phone-draw-close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
          <Image src={isNightMode ? "/assets/images/mer-del-icon.svg" : "/assets/images/mer-del-icon.svg"} alt="user" className="mobile-iconing" />
          <h2 className="heading del-heading">Delete Merchant</h2>
          <p className="del-text">All merchant data will be permanently deleted and can't be restored. Are you sure you want to delete this merchant?</p>
        </div>
        <div className="alert alert-danger mb-2 mt-2" role="alert">
          <div className="d-flex gap-2">
            <Image src={isNightMode ? "/assets/images/danger-icon.svg" : "/assets/images/danger-icon.svg"} alt="user" className="danger-icon" /> <p className="del-text">
              Deleting this merchant account will remove its Invoice or Static Wallet and API keys. Future deposits to the existing wallet address may not be tracked. Do not send new deposits to associated address.
            </p>
          </div>
        </div>

        <div className="remove-associated-title mb-2 mt-3">
          <h2 className="sub-head">Remove Associated</h2>
        </div>

        <div className="invoice-static-wallet mt-3 mb-3">

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="sub-head">Invoice Wallet</h2>
              <p className="del-text mb-0">Remove invoice wallet and history</p>
            </div>
            <div>
              <span className="">
                <input type="checkbox" className="merchant-checkbox" />
              </span>
            </div>

          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="sub-head">Static Wallet</h2>
              <p className="del-text">Remove static wallet and history</p>
            </div>
            <div>
              <span className="">
                <input type="checkbox" className="merchant-checkbox" />
              </span>
            </div>

          </div>

        </div>

        <div className="invoice-static-wallet wall mt-2 mb-2">

          <div className="d-flex gap-2 align-items-center">
            <div>
              <span className="">
                <input type="checkbox" className="merchant-checkbox" />
              </span>
            </div>
            <div>
              <p className="accept-all">I accept all terms and understand this action cannot be undone</p>
            </div>

          </div>
        </div>


        <Link href="/account-passcode">
          <Button className="sitebtn mt-3">
            <FontAwesomeIcon icon={faTrash} className="me-2" />
            Delete Merchant
          </Button>
        </Link>
      </div>
      <Userfooter />
    </div>
  );
};

export default merchantPage;