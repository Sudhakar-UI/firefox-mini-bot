"use client";
import { useState, useEffect } from "react";
import { Container, Button, Image } from 'react-bootstrap'
import { LockIcon, PowerIcon, MailIcon, SettingsIcon,  WhatsappLockIcon, PasscodeRequestIcon, UpdatePasscodeIcon, PasscodeRequestIcons, RemovePasscodeIcon  } from '../components/Icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Securitypasscode() {
    const [showModal, setShowModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);
    const [openRequestDrawer, setOpenRequestDrawer] = useState(false);
    const handleOpenRequestDrawer = () => setOpenRequestDrawer(true);
    const handleCloseRequestDrawer = () => setOpenRequestDrawer(false);

    const [step, setStep] = useState(3);
    const [code, setCode] = useState(["", "", "", "", "", ""]);

    const handleClick = (num) => {
        const newCode = [...code];
        const index = newCode.findIndex((c) => c === "");
        if (index !== -1) {
            newCode[index] = num;
            setCode(newCode);
        }
    }

    const handleDelete = () => {
        const newCode = [...code];
        const index = newCode.findLastIndex((c) => c !== "");
        if (index !== -1) {
            newCode[index] = "";
            setCode(newCode);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Allow only numbers
            if (/^[0-9]$/.test(e.key)) {
                handleClick(Number(e.key));
            }

            // Handle backspace
            if (e.key === "Backspace") {
                handleDelete();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [code]);

    return (
        <>
            <div className='securitypasscode-page'>
                <Container>
                    <div className='security-cont'>
                        <h5 className="subhead txt-gry">Security</h5>
                        <Link href="/verification" className='security-link'>
                            <div>
                                <MailIcon color='#fff' size='20' />
                                <h6 className='subhead mb-0'>Backup Email</h6>
                            </div>
                                <p>sabari@mailinator.com <FontAwesomeIcon icon={faChevronRight} /></p>
                        </Link>

                        <h5 className="subhead txt-gry">Passcode</h5>
                        <div className='security-link' onClick={() =>handleOpenDrawer(true)}>
                            <div>
                              <UpdatePasscodeIcon color="#fff" size="34" />
                                <h6 className='subhead mb-0'>Edit Passcode</h6>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <div className='security-link' onClick={handleOpenRequestDrawer}>
                            <div>
                               <PasscodeRequestIcons color="#fff" size="30" />
                                <h6 className='subhead mb-0'>Passcode Request</h6>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <Link href="" className='terminate-link'>
                            <div>
                                <RemovePasscodeIcon color="#fff" height="30" width="36" />
                                <h6 className='subhead mb-0'>Remove passcode</h6>
                            </div>
                        </Link>
                        <Link href="" className='terminate-link'>
                            <div>
                                <PowerIcon color='#fff' size='18' />
                                <h6 className='subhead mb-0'>Terminate All Sessions</h6>
                            </div>
                        </Link>

                    </div>
                </Container>
            </div>
            <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className='setup-passcode-page'>
                    <Container>
                        <div className="phone-draw-handle"></div>
                        <div className="text-center">
                            <div className="phone-draw-close">
                                <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                                    <FontAwesomeIcon icon={faTimes} />
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="userprfbig">
                                <MailIcon size={65} />
                            </div>
                        </div>
                        {step === 1 && (
                            <div className="passcode-container">
                                {/* <h2 className="sub-head txt-gry">Set Up Passcode</h2> */}
                                <div className="code-boxes mt-4">
                                    {code.map((digit, i) => (
                                        <div key={i} className="box">
                                            {digit}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p>Please enter the code we just sent to<br />email:sabari@mailinator.com</p>
                                    <p className="mt-3 mb-3">Resend in 35s</p>
                                </div>
                                <div className="keypad">
                                    {[1, 2, 3].map((n) => (
                                        <button key={n} onClick={() => handleClick(n)}>{n}</button>
                                    ))}
                                    {[4, 5, 6].map((n) => (
                                        <button key={n} onClick={() => handleClick(n)}>{n}</button>
                                    ))}
                                    {[7, 8, 9].map((n) => (
                                        <button key={n} onClick={() => handleClick(n)}>{n}</button>
                                    ))}
                                    <button className="empty"></button>
                                    <button onClick={() => handleClick(0)}>0</button>
                                    <button onClick={handleDelete}>⌫</button>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <div className="passcode-container">
                                    <h2 className="heading txt-gry">Enter Backup Email</h2>
                                    <Form className="siteformbg">
                                        <div className="supportsearch p-0">
                                            <Form.Group className="form-group mb-0">
                                                <Form.Label className="text-start d-block">Email</Form.Label>
                                                <div className="input-wrapper">
                                                    <Form.Control
                                                        placeholder=""
                                                        className="custom-input"
                                                    />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </Form>
                                </div>
                                <div className="mt-3">
                                    <Link href="/">
                                        <Button className="sitebtn ">Save</Button>
                                    </Link>
                                </div>
                            </div>


                        )}
                        {step === 3 && (

                            <div className="passcode-container">
                                <div className="code-boxes mt-4">
                                    {code.map((digit, i) => (
                                        <div key={i} className="box">
                                            {digit}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p>Please enter the code we just sent to<br />email:sabari@mailinator.com</p>
                                    <p className="mt-3 mb-3">Resend in 55s</p>
                                </div>
                            </div>
                        )}
                    </Container>
                </div>
            </div>
            <div className={`phone-draw ${openRequestDrawer ? 'open' : ''}`}>
                <div className='setup-passcode-page'>
                    <Container>
                        <div className="phone-draw-handle"></div>
                        <div className="text-center">
                            <div className="phone-draw-close">
                                <Button onClick={handleCloseRequestDrawer} className="phone-draw-close-btn">
                                    <FontAwesomeIcon icon={faTimes} />
                                </Button>
                            </div>
                        </div>

                        <div className="passcode-container">
                            <div>
                                <Image
                                    src="/assets/images/dangerous-action.svg"
                                    width={100}
                                    height={100}
                                    alt="btc"
                                    className="dan-icon"
                                />
                            </div>

                            <h4 className="heading mb-3">This is a dangerous action</h4>

                            <p className="txt-gry">
                                when passcode is disabled, anyone who <br />
                                gains your telegram account can <br />
                                instanly use all your funds.<br />
                                We cannot recovery stolen funds.
                            </p>
                            <div className="blue-bg-main-y mt-3">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column">
                                        <h6 className="sub-head txt-clor">
                                            Recommendations
                                        </h6>
                                        <h6 className="sub-head mb-0">
                                            1. Enable 2FA in telegram <br />
                                            2. Dont share your telegram session <br />
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Button className="sitebtn" onClick={() => setStep(1)}>
                                    Yes I Undersytand the Risks
                                </Button>
                            </div>
                            <div className="mt-3">
                                <Button className="borderbtn" onClick={() => setStep(1)}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>

    )
}
