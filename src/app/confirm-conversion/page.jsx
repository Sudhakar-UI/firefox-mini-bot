"use client";
import { Image, Container, Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SwapIcon2, WalletIcon } from "../components/Icons";

const confirmConversion = () => {

    return (
        <>
            <div className='confirm-conversion-page'>
                <Container>
                    <h5 className="heading">Confirm Conversion</h5>
                    <div className="d-flex">
                        <p className="witdrww">From</p>
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
                                <span className="sub-head">ETH</span>
                            </div>
                        </div>
                        <FormControl type="number" className="dollrs" placeholder="1.00000000" />
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <p className="witdrww">To</p>
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
                                <span className="sub-head">USDT</span>
                            </div>
                        </div>
                        <FormControl type="number" className="dollrs" placeholder="2,146.00000" />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <p>Price</p>
                        <p>1 USDT = 2,146.0000 ETH</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <p>Fee</p>
                         <span className="badge">2.00%</span>
                    </div>
                </Container>
            </div>
            <div className="mt-auto px-2">
                 <Button className="swap-btn mt-4">Confirm Conversion (13s)</Button>
            </div>
        </>
    )
}

export default confirmConversion