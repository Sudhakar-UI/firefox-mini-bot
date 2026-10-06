"use client";
import { Image, Container, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='deposit-currency-page'>
                <Container>
                    <span className="sub-head txt-gry">Deposit Cryptocurrency</span>
                    <div className="supportsearch">
                        <Form className="siteformbg">
                            <Form.Group className="form-group mb-0">
                                <InputGroup>
                                    <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                    <Form.Control placeholder="Search Coin" />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </div>
                    <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/btc.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Bitcoin</span>
                                <p>BTC</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/eth.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Ethereum</span>
                                <p>ETH</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/ltc.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Litecoin</span>
                                <p>LTC</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/avax.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Tron</span>
                                <p>TRX</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/sol.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Solana</span>
                                <p>SOL</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/ton.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Toncoin</span>
                                <p>TON</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>
                </Container>
            </div>
        </>
    )
}

export default addtoken