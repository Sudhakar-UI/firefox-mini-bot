"use client";
import { Image, Container, Form, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='withdraw-page'>
                <Container>
                    <div className="mt-3 text-center">
                        <p><Image
                            src="/assets/images/color/eth.svg"
                            width={35}
                            height={25}
                            alt=""
                            className="dept-qr-img me-1"
                        />Ethereum Balance</p>
                    </div>
                    <div className="mt-1 text-center">
                        <p className="witdrw">0.0003131383862983 BTC</p>
                    </div>
                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image
                                src="/assets/images/color/eth.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="loc-cury-icon me-3"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Ethereum</span>
                                <p>ERC</p>
                            </div>
                        </div>

                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="facheriticon txt-gry"
                        />
                    </Link>
                    <div className="mt-3">
                        <Row>
                            <Col xl={12}>
                                <Form className="siteformbg">
                                    <div className="supportsearch p-0">
                                        <Form.Group className="form-group mb-0">
                                            <Form.Label className="d-flex align-items-center gap-1">
                                                <span>Amount</span>
                                                <span className="d-flex align-items-center amt-value">
                                                    <FontAwesomeIcon icon={faChevronRight} className="mx-1" />
                                                    0.001
                                                </span>
                                            </Form.Label>
                                            <div className="input-wrapper">
                                                <Form.Control
                                                    placeholder="0.0003131383862983"
                                                    className="custom-input"
                                                />
                                                <div className="input-right">
                                                    <span className="coin-bt">BTC</span>
                                                    <span className="all">All</span>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-2">
                        <Row>
                            <Col xl={12}>
                                <Form className="siteformbg">
                                    <div className="supportsearch p-0">
                                        <Form.Group className="mb-0">
                                            <Form.Label>BTC Address</Form.Label>

                                            <div className="btc-address-wrap">
                                                <Form.Control
                                                    placeholder="Enter recipient address"
                                                    id="search"
                                                    className="btc-address-input"
                                                />

                                                <div className="btc-address-icons">
                                                    <span className="btc-address-iconbtn" role="button" aria-label="Scan QR">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3 3h7v7H3V3zm2 2v3h3V5H5z" fill="currentColor" />
                                                            <path d="M14 3h7v7h-7V3zm2 2v3h3V5h-3z" fill="currentColor" />
                                                            <path d="M3 14h7v7H3v-7zm2 2v3h3v-3H5z" fill="currentColor" />
                                                            <path d="M14 14h3v3h-3zM18 14h3v3h-3zM14 18h3v3h-3zM18 18h3v3h-3z" fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                    <span className="btc-address-iconbtn" role="button" aria-label="Address book">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M12 6.5C10.5 5.4 8.4 5 6 5H4v13h2c2.4 0 4.5.4 6 1.5 1.5-1.1 3.6-1.5 6-1.5h2V5h-2c-2.4 0-4.5.4-6 1.5z"
                                                                fill="currentColor"
                                                            />
                                                            <path d="M12 6.5v13" stroke="var(--btc-address-icon-cut, #1f2d3d)" strokeWidth="1.2" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-3">
                        <Link href="/widthdraw-confirmation">
                            <Button className="sitebtn">Widthdraw</Button>
                        </Link>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default addtoken