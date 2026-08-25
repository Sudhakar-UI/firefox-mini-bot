"use client";
import { useState, useEffect } from "react";
import { Image, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { SwapIcon2, WalletIcon, SwapIcon3 } from "../components/Icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const confirmswap = () => {

    const { isNightMode } = useTheme();

    const radius = 30;
    const strokeWidth = 6;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const currentStep = 1;
    const totalSteps = 4;
    const strokeDashoffset =
        circumference - (currentStep / totalSteps) * circumference;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); // simulate API load
        }, 2000);
    }, []);

    return (
        <>
            <div className='confirm-swap-page'>
                <Container>
                    <div className="message-box">
                        {/* <div className="video-wrapper">
                            <video
                                className="confirm-video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            >
                                <source src="/assets/images/confirm-swap.webm" type="video/webm" />
                            </video>
                        </div> */}
                        <div className="">
                            <Image src={isNightMode ? "/assets/images/swap-dark.gif" : "/assets/images/swap-white.gif"} alt="user" className="swap-img" />
                        </div>
                    </div>
                    <div className="me-3 text-center">
                        <p className="witdrww">
                            {loading ? <Skeleton width={150} height={20} /> : "Confirm Swap"}
                        </p>
                    </div>
                    <div className="text-center mt-2">
                        <p><span className="txt-gry">Swap ETH to USDT with 0% fee.</span></p>
                    </div>

                    {loading ? (
                        <div className="con-swp">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <Skeleton width={80} />
                                    <Skeleton width={60} />
                                </div>
                                <Skeleton circle width={50} height={50} />
                            </div>

                            <div className="swap-divider text-center my-2">
                                <Skeleton width={30} height={20} />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Skeleton width={100} />
                                    <Skeleton width={140} />
                                </div>
                                <Skeleton circle width={50} height={50} />
                            </div>
                        </div>
                    ) : (
                        <div className="con-swp">
                            <Link href="/" className="set-bot-y">
                                <div className="d-flex">
                                    <div className="d-flex flex-column">
                                        <p>You send</p>
                                        <span className="sub-head">1 ETH</span>
                                    </div>
                                </div>
                                <Image src="/assets/images/color/eth.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            </Link>

                            <div className="swap-divider">
                                <span className="line"></span>
                                <FontAwesomeIcon icon={faChevronDown} className="down-icons txt-gry" />
                                <span className="line"></span>
                            </div>

                            <Link href="/" className="set-bot-y">
                                <div className="d-flex">
                                    <div className="d-flex flex-column">
                                        <p>You receive</p>
                                        <span className="sub-head">2.186.400000 USDT</span>
                                    </div>
                                </div>
                                <Image src="/assets/images/color/usdt.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            </Link>
                        </div>
                    )}
                    {loading ? (
                        <div className="con-swpp">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Skeleton width={120} />
                                    <Skeleton width={140} />
                                </div>

                                <div className="progress-container d-flex align-items-center justify-content-center">
                                    <Skeleton circle width={60} height={60} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="con-swpp">
                            <Link href="/" className="set-bot-y">
                                <div className="d-flex">
                                    <div className="d-flex flex-column">
                                        <p>price for 1 USDT</p>
                                        <span className="sub-head">2225.69 USDT</span>
                                    </div>
                                </div>

                                <div className="progress-container">
                                    <svg height={radius * 2} width={radius * 2}>
                                        <circle
                                            stroke={isNightMode ? "#314A60" : "#e6e6e6"}
                                            fill="transparent"
                                            strokeWidth={strokeWidth}
                                            r={normalizedRadius}
                                            cx={radius}
                                            cy={radius}
                                        />
                                        <circle
                                            stroke={isNightMode ? "#44A3DD" : "#ff4500"}
                                            fill="transparent"
                                            strokeWidth={strokeWidth}
                                            strokeDasharray={`${circumference} ${circumference}`}
                                            style={{ strokeDashoffset }}
                                            strokeLinecap="round"
                                            r={normalizedRadius}
                                            cx={radius}
                                            cy={radius}
                                        />
                                    </svg>

                                    <div className="progress-text">
                                        {currentStep}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </Container>
            </div>
            <div className="mt-auto px-2">
                <Button className="swap-btn">Swap ETH to USDT</Button>
            </div>
        </>
    )
}

export default confirmswap