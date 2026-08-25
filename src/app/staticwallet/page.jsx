"use client";
import { useState } from "react";
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, FormCheck, Tooltip, OverlayTrigger, Modal, Alert, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCheck, faTimes, faCopy, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon, AccountIcon, WalletIcon, LockIcon } from '../components/Icons'
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const addtoken = () => {
    const { isNightMode } = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);


    return (
        <>
            <div className='staticwallet-page'>
                <Container>

                    <div className="stc-wat-pge">
                        <div className="text-center">
                            <h4 className="heading static mb-1">BTC - Static <br /> Wallet</h4>
                        </div>
                        <div className="lightgraybg mt-2 d-flex gap-3 align-items-center">
                            {/* <Image
                                src="/assets/images/stawalt.svg"
                                width={50}
                                height={50}
                                alt="btc"
                                className="coinicons"
                            /> */}
                            {isNightMode ? (
                                <Image src="assets/images/stawaltt.svg" className="coinicons" alt="icon" width={50} height={50} />
                            ) : (
                                <Image src="assets/images/stawalt.svg" className="coinicons" alt="icon" width={50} height={50} />
                            )}
                            <div>
                                <p className="mb-1">You can pay to this address as many times as you want for different amounts</p>
                            </div>
                        </div>
                    </div>
                    <Form.Group className="form-group mt-4">
                        <div className="makerbg marpre">
                            <div className="d-flex mb-2">
                                <h4 className="sub-head border-0">Payment Link</h4>
                            </div>
                            <div className="makpreing mt-2">
                                <div className="lightgraybging first-box">
                                    <p>https://login.live.com/login</p>
                                    <div></div>
                                </div>

                                <div className="lightgraybging second-box">
                                    <p>
                                        <FontAwesomeIcon icon={faCopy} className="me-2" />
                                        Copy
                                    </p>
                                </div>

                                <div className="lightgraybging third-box">
                                    <p>
                                        <FontAwesomeIcon icon={faUpRightFromSquare} className="me-2" />
                                        Open
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Form.Group>
                    <div className="text-center mt-4">
                        {isNightMode ? (
                            <Image src="assets/images/qr-code-img2.png" className="qr-imgg" alt="icon" width={100} height={100} />
                        ) : (
                            <Image src="assets/images/qr-code-img.png" className="qr-imgg" alt="icon" width={100} height={100} />
                        )}
                    </div>
                    <Form.Group className="form-group  mt-4">
                        <Button type="button" className="sitebtn btn-block" id="submitbtn"><Image
                            src="/assets/images/shared-icon.svg"
                            width={100}
                            height={100}
                            alt="btc"
                            className="shared-icon"
                        />Share Invoice</Button>
                    </Form.Group>
                </Container>
            </div>

            <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="">
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                    <p className="sub-head">Share invoice</p>
                    <div className="social-icons">
                        <div className="text-center">
                            {isNightMode ? (
                                <Image src="assets/images/whatsapp.svg" className="social-ics" alt="icon" width={50} height={50} />
                            ) : (
                                <Image src="assets/images/whatsapp-icon.svg" className="social-ics" alt="icon" width={50} height={50} />
                            )}
                            <p>WhatsApp</p>
                        </div>
                        <div className="text-center">
                            {isNightMode ? (
                                <Image src="assets/images/telegram.svg" className="social-ics" alt="icon" width={50} height={50} />
                            ) : (
                                <Image src="assets/images/telegram-iocn.svg" className="social-ics" alt="icon" width={50} height={50} />
                            )}
                            <p>Telegram</p>
                        </div>
                        <div className="text-center">
                            {isNightMode ? (
                                <Image src="assets/images/mail.svg" className="social-ics" alt="icon" width={50} height={50} />
                            ) : (
                                <Image src="assets/images/mail-icon.svg" className="social-ics" alt="icon" width={50} height={50} />
                            )}
                            <p>Email</p>
                        </div>

                    </div>
                    <div className="social-icons mt-4">
                        <div className="text-center">
                            {isNightMode ? (
                                <Image src="assets/images/message.svg" className="social-ics" alt="icon" width={50} height={50} />
                            ) : (
                                <Image src="assets/images/message-icon.svg" className="social-ics" alt="icon" width={50} height={50} />
                            )}
                            <p>Messages</p>
                        </div>
                        <div className="text-center">
                      
                            {isNightMode ? (
                                <Image src="assets/images/link.svg" className="social-ics" alt="icon" width={50} height={50} />
                            ) : (
                                <Image src="assets/images/link-icon.svg" className="social-ics" alt="icon" width={50} height={50} />
                            )}
                            <p>Copy Link</p>
                        </div>
                        <div className="text-center">
                              {isNightMode ? (
                                <Image src="assets/images/more.svg" className="social-ics" alt="icon" width={50} height={50} />
                            ) : (
                                <Image src="assets/images/more-link.svg" className="social-ics" alt="icon" width={50} height={50} />
                            )}
                            <p>More</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default addtoken