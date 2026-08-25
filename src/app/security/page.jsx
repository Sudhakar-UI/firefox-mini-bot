import React from 'react'
import { Container } from 'react-bootstrap'
import { LockIcon, PowerIcon } from '../components/Icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Security() {
    return (
        <div className='security-page'>
            <Container>
                <div className='security-cont'>
                    <Link href="/set-passcode" className='security-link'>
                        <div>
                            <LockIcon color='#fff' size='20' />
                            <h6 className='subhead mb-0'>Set Up Passcode</h6>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                    <Link href="/terminate" className='terminate-link'>
                        <div>
                            <PowerIcon color='#fff' size='18' />
                            <h6 className='subhead mb-0'>Terminate All Sessions</h6>
                        </div>
                    </Link>
                </div>
            </Container>
        </div>
    )
}
