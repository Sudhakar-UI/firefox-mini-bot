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
                            <Col xl={12} >
                                <Form className="siteformbg">
                                    <div className="supportsearch p-0">
                                        <Form.Group className="mb-0">
                                            <Form.Label>
                                                BTC Address
                                            </Form.Label>
                                            <Form.Control placeholder="" id="search" />
                                        </Form.Group>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-3">
                        <Link href="/">
                            <Button className="sitebtn">Widthdraw</Button>
                        </Link>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default addtoken