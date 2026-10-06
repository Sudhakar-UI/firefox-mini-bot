"use client"
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { BellIcon, DollarIcon, GiftIcon, CampaignIcon, CommentIcon } from '../components/Icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Notifications() {

    const [open1, setOpen1] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <div className='notifications-page'>
            <Container>
                <div className='notifications-cont'>
                    <h6 className='subhead txt-gry'>Notifications</h6>

                    <div className='noti-main-card'>

                        <div className="noti-card">
                            <div className="noti-header" onClick={() => setOpen1(!open1)}>
                                <div className="noti-header-left">
                                    <div className="noti-icon-bg">
                                        <BellIcon color='#fff' className="noti-bell-icon" size='20' />
                                    </div>

                                    <div className="noti-header-text">
                                        <h5 className="noti-title">News</h5>
                                        <p className="noti-subtitle">News about Crypto Bot</p>
                                    </div>
                                </div>

                                <div className="noti-chevron-container">
                                    <FontAwesomeIcon className={`noti-chevron ${open1 ? 'noti-chevron-open' : ''}`} icon={faChevronDown} />
                                </div>
                            </div>

                            <div className={`noti-content-wrapper ${open1 ? 'noti-content-open' : 'noti-content-closed'}`}>
                                <div className="noti-content-inner">
                                    <div className="noti-sub-list">
                                        <div className="noti-divider"></div>

                                        <div className="noti-sub-item">
                                            <div
                                                className="noti-curve"
                                                style={{
                                                    left: '-40px',
                                                    width: '24px',
                                                    top: '-36px',
                                                    bottom: '50%',
                                                }}
                                            />
                                            <span className="noti-sub-title">Bot News</span>
                                            <div className="noti-sub-status-container">
                                                <select name="" id="" className='noti-sub-status'>
                                                    <option value="">On</option>
                                                    <option value="">Off</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="noti-sub-item">
                                            <div
                                                className="noti-curve"
                                                style={{
                                                    left: '-40px',
                                                    width: '24px',
                                                    top: '-84px',
                                                    bottom: '50%',
                                                }}
                                            />
                                            <span className="noti-sub-title">Marketing Mailings</span>
                                            <div className="noti-sub-status-container">
                                                <select name="" id="" className='noti-sub-status'>
                                                    <option value="">On</option>
                                                    <option value="">Off</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="noti-bottom-padding"></div>
                                </div>
                            </div>
                        </div>

                        <div className="noti-card">
                            <div className="noti-header">
                                <div className="noti-header-left">
                                    <div className="noti-icon-bg">
                                        <DollarIcon color='#fff' className="noti-bell-icon" size='20' />
                                    </div>

                                    <div className="noti-header-text">
                                        <h5 className="noti-title">Referral Program</h5>
                                        <p className="noti-subtitle">New rewards</p>
                                    </div>
                                </div>

                                <div className="noti-sub-status-container">
                                    <select name="" id="" className='noti-sub-status'>
                                        <option value="">Silent</option>
                                        <option value="">Normal</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="noti-card">
                            <div className="noti-header">
                                <div className="noti-header-left">
                                    <div className="noti-icon-bg">
                                        {/* <BellIcon color='#fff' className="noti-bell-icon" size='20' /> */}
                                        <span className='text-white'>Pay</span>
                                    </div>

                                    <div className="noti-header-text">
                                        <h5 className="noti-title">Crypto Pay</h5>
                                        <p className="noti-subtitle">Paid invoices</p>
                                    </div>
                                </div>

                                <div className="noti-sub-status-container">
                                    <select name="" id="" className='noti-sub-status'>
                                        <option value="">On</option>
                                        <option value="">Off</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="noti-card">
                            <div className="noti-header">
                                <div className="noti-header-left">
                                    <div className="noti-icon-bg">
                                        <GiftIcon color='#fff' className="noti-bell-icon" size='20' />
                                    </div>

                                    <div className="noti-header-text">
                                        <h5 className="noti-title">Giveaways</h5>
                                        <p className="noti-subtitle">Invited participants</p>
                                    </div>
                                </div>

                                <div className="noti-sub-status-container">
                                    <select name="" id="" className='noti-sub-status'>
                                        <option value="">On</option>
                                        <option value="">Off</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="noti-card">
                            <div className="noti-header" onClick={() => setOpen3  (!open3)}>
                                <div className="noti-header-left">
                                    <div className="noti-icon-bg">
                                        <CampaignIcon color='#fff' className="noti-bell-icon" size='20' />
                                    </div>

                                    <div className="noti-header-text">
                                        <h5 className="noti-title">For Subscription Creators</h5>
                                        <p className="noti-subtitle">News subscribers and renewals</p>
                                    </div>
                                </div>

                                <div className="noti-chevron-container">
                                    <FontAwesomeIcon className={`noti-chevron ${open3 ? 'noti-chevron-open' : ''}`} icon={faChevronDown} />
                                </div>
                            </div>

                            <div className={`noti-content-wrapper ${open3 ? 'noti-content-open' : 'noti-content-closed'}`}>
                                <div className="noti-content-inner">
                                    <div className="noti-sub-list">
                                        <div className="noti-divider"></div>
                                        <div className="noti-sub-item">
                                            <div
                                                className="noti-curve"
                                                style={{
                                                    left: '-40px',
                                                    width: '24px',
                                                    top: '-36px',
                                                    bottom: '50%',
                                                }}
                                            />
                                            <span className="noti-sub-title">Bot News</span>
                                            <div className="noti-sub-status-container">
                                                <select name="" id="" className='noti-sub-status'>
                                                    <option value="">On</option>
                                                    <option value="">Off</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="noti-bottom-padding"></div>
                                </div>
                            </div>
                        </div>

                        <div className="noti-card">
                            <div className="noti-header" onClick={() => setOpen4  (!open4)}>
                                <div className="noti-header-left">
                                    <div className="noti-icon-bg">
                                        <CommentIcon color='#fff' className="noti-bell-icon" size='20' />
                                    </div>

                                    <div className="noti-header-text">
                                        <h5 className="noti-title">For Subscription Creators</h5>
                                        <p className="noti-subtitle">News subscribers and renewals</p>
                                    </div>
                                </div>

                                <div className="noti-chevron-container">
                                    <FontAwesomeIcon className={`noti-chevron ${open4 ? 'noti-chevron-open' : ''}`} icon={faChevronDown} />
                                </div>
                            </div>

                            <div className={`noti-content-wrapper ${open4 ? 'noti-content-open' : 'noti-content-closed'}`}>
                                <div className="noti-content-inner">
                                    <div className="noti-sub-list">

                                        <div className="noti-divider"></div>

                                        <div className="noti-sub-item">
                                            <div
                                                className="noti-curve"
                                                style={{
                                                    left: '-40px',
                                                    width: '24px',
                                                    top: '-36px',
                                                    bottom: '50%',
                                                }}
                                            />
                                            <span className="noti-sub-title">Bot News</span>
                                            <div className="noti-sub-status-container">
                                                <select name="" id="" className='noti-sub-status'>
                                                    <option value="">On</option>
                                                    <option value="">Off</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="noti-bottom-padding"></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}
