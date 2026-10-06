"use client";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SettingsIcon, BookMarkIcon, BellIcon, LockIcon, CircleCheckIcon, DraftIcon, SearchDollarIcon, FaqIcon, BulbIcon, CommentIcon } from "../components/Icons";

const addtoken = () => {

    return (
        <>
            <div className='historys-page'>
                <Container>

                    <Link href="/next-page" className="settings-box">
                        <div>
                            <span className="sub-head">Spot History</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </div>
                    </Link>
                    <Link href="/next-page" className="settings-box">
                        <div>
                            <span className="sub-head">Derivative History</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </div>
                    </Link>

                    <Link href="/next-page" className="settings-box">
                        <div>
                            <span className="sub-head">Swap History</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </div>
                    </Link>
                    <Link href="/next-page" className="settings-box">
                        <div>
                            <span className="sub-head">Transfer History</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </div>
                    </Link>
                    <Link href="/next-page" className="settings-box">
                        <div>
                            <span className="sub-head">Send History</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </div>
                    </Link>
                                        <Link href="/next-page" className="settings-box">
                        <div>
                            <span className="sub-head">Receive History</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </div>
                    </Link>

                </Container>
            </div>
        </>
    )
}

export default addtoken