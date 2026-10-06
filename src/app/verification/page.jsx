"use client";
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { AccountCircleIcon, AccountIcon, LocationIcon, VerifiedIcon } from '../components/Icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext';

export default function Verification() {
    const { isNightMode } = useTheme();

    return (
        <div className='verification-page'>
            <Container>
                <div className="verify-box-cont mt-4">
                    <div className='verified-img-box'>
                        <VerifiedIcon size={65} />
                    </div>
                    <h2 className='sub-head mb-0'>Verification</h2>
                    <p className='mb-0'>Unlock more features <br />
                        with enhanced verification.</p>
                </div>

                <div className="stepper-container">

                    {/* Step 1 */}
                    <div className="step-item active">
                        <div className="step-icon-container">
                            <div className="step-icon">
                                <AccountCircleIcon size={24}
                                color={isNightMode ? '#fff' : '#fff'} />
                            </div>
                            <div className="step-line"></div>
                        </div>
                        <div className="step-content">
                            <h3 className="step-title">Basic Information</h3>
                            <p className="step-subtitle">Filled 0 of 2</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step-item pending">
                        <div className="step-icon-container">
                            <div className="step-icon">
                                <AccountIcon size={22} color='#fff' />
                            </div>
                            <div className="step-line"></div>
                        </div>
                        <div className="step-content">
                            <h3 className="step-title">Identity Verification</h3>
                            <p className="step-subtitle">Verify your ID.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="step-item pending">
                        <div className="step-icon-container">
                            <div className="step-icon">
                                <LocationIcon size={22} color='#fff' />
                            </div>
                        </div>
                        <div className="step-content">
                            <h3 className="step-title">Residential Address</h3>
                            <p className="step-subtitle">Confirm your location.</p>
                        </div>
                    </div>

                </div>

                <div className="manage-info">
                    <div>
                        <h6 className='manage-head'>Manage Documents</h6>
                        <p className=''>View existing documents and upload new ones. Useful for adding specially requested files or to replace out-of-date documents.</p>
                    </div>
                    <Link href="#0">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </div>

                <Button className='provide-btn mt-4'>Provide Information</Button>
            </Container>
        </div>
    )
}
