"use client";
import { useEffect, useState } from "react";
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, FormCheck, Tooltip, OverlayTrigger, Modal, Alert, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCheck, faTimes, faCopy, faUpRightFromSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon, AccountIcon, WalletIcon, LockIcon } from '../components/Icons'
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Userfooter from "../components/Userfooter";


const addtoken = () => {
    const { isNightMode } = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);
    const [timeLeft, setTimeLeft] = useState(6 * 60 * 60); // 6 hours

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");

        return { hrs, mins, secs };
    };

    const { hrs, mins, secs } = formatTime(timeLeft);

    return (
        <>
            <div className='staticwallet-page'>
                <Container>
                    <div className="text-center">
                        <p>Amount to Pay</p>
                    </div>
                    <div className="text-center mt-1">
                        <h2 className="heading">
                            <span className="amount">2 BTC</span>
                        </h2>
                    </div>
                    <div className="text-center mt-1">
                        <div className="username-crd">
                            <span>≈ $128,940.00 USD</span>
                        </div>
                    </div>
                    <div className="stc-wat-pge stt-wlt-pge mt-3">
                        <div className="text-center">
                            <p>Invoice expires in</p>
                        </div>

                        <div className="stc-timer-box">
                            <div className="stc-time">{hrs}</div>
                            <span>:</span>
                            <div className="stc-time">{mins}</div>
                            <span>:</span>
                            <div className="stc-time">{secs}</div>
                        </div>

                        <div className="stc-label-box">
                            <span>HRS</span>
                            <span>MIN</span>
                            <span>SEC</span>
                        </div>

                        <div className="stc-warning-box mt-3">
                            {isNightMode ? (
                                <Image
                                    src="/assets/images/timer-nit.svg"
                                    className="coin-iconss"
                                    alt="icon"
                                    width={20}
                                    height={20}
                                />
                            ) : (
                                <Image
                                    src="/assets/images/timer-lgt.svg"
                                    className="coin-iconss"
                                    alt="icon"
                                    width={20}
                                    height={20}
                                />
                            )}

                            <p className="mb-0">
                                After this period, the payment link will stop working
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        {isNightMode ? (
                            <Image src="assets/images/qr-code-img2.png" className="qr-imgg" alt="icon" width={100} height={100} />
                        ) : (
                            <Image src="assets/images/qr-code-img.png" className="qr-imgg" alt="icon" width={100} height={100} />
                        )}
                    </div>
                    <Form.Group className="form-group mt-4">
                        <div className="makerbg marpre">
                            <div className="d-flex mb-2">
                                <h4 className="sub-head border-0">Payment Link</h4>
                            </div>
                            <div className="makpreing mt-2">
                                <div className="lightgraybging first-box">
                                    <p>https://login.live.com/loginhttps://login.live.com/loginhttps://login.live.com/loginhttps://login.live.com/loginhttps://login.live.com/loginhttps://login.live.com/loginhttps://login.live.com/loginhttps://login.live.com/login</p>
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
                    <Form.Group className="form-group  mt-4">
                        <Button type="button" className="sitebtn btn-block" id="submitbtn" onClick={() => handleOpenDrawer(true)}><Image
                            src="/assets/images/shared-icon.svg"
                            width={100}
                            height={100}
                            alt="btc"
                            className="shared-icon"
                        />Share Invoice</Button>
                    </Form.Group>
                </Container>
                 
          

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
              </div>
              <Userfooter />
        </>
    )
}

export default addtoken