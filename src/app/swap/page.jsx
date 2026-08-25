"use client";
import { Image, Container, Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SwapIcon2, WalletIcon, SwapIcon3 } from "../components/Icons";

const addtoken = () => {

    return (
        <>
            <div className='swap-page'>
                <Container>
                    <div className="d-flex justify-content-between">
                        <p className="witdrww">You Send</p>
                        <div className="d-flex gap-2">
                            <WalletIcon size={20} color="#9A9899" />
                            <p className="txt-gry">0</p>
                            <p className="txt-clor">MAX</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="d-flex align-items-center">
                            <Image
                                src="/assets/images/color/eth.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="loc-cury-icon me-3"
                            />
                            <div className="d-flex flex-column align-items-center">
                                <span className="sub-head">TON <FontAwesomeIcon icon={faChevronRight} className="facheriticon" /></span>
                            </div>
                        </div>
                        <FormControl type="number" className="dollrs" placeholder="0" />
                    </div>
                    <div className="text-end">
                        <p className="t-red">insufficient balance <span className="txt-clor">Deposit</span></p>
                    </div>
                    <div className="swap-divider">
                        <span className="line"></span>
                        <button className="swap-icon-box">
                            <SwapIcon2 size={24} />
                        </button>

                        <span className="line"></span>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <p className="witdrww">You Receive</p>
                        <div className="d-flex gap-2">
                            <WalletIcon size={20} color="#9A9899" />
                            <p className="txt-gry">0</p>
                            <p className="txt-clor">MAX</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="d-flex align-items-center">
                            <Image
                                src="/assets/images/color/usdt.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="loc-cury-icon me-3"
                            />
                            <div className="d-flex flex-column align-items-center">
                                <span className="sub-head">USDT <FontAwesomeIcon icon={faChevronRight} className="facheriticon" /></span>
                            </div>
                        </div>
                        <FormControl type="number" className="dollrs" placeholder="0" />

                    </div>
                    <div className="text-end">
                        <p className="mb-0 d-flex align-items-center justify-content-end gap-1">

                            <span className="icon-wrapper txt-clor">
                                <SwapIcon2 size={20} />
                            </span>

                            1ETH = 2167.94 USDT
                        </p>
                    </div>

                </Container>
            </div>
            <div className="mt-4 px-2">
                <Button className="swap-btn">Continue</Button>
            </div>
        </>
    )
}

export default addtoken