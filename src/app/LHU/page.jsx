'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Userfooter from '../components/Userfooter';


const featureCards = [
    { image: 'com-driven.svg', title: 'Community', subtitle: 'Driven', description: 'A token shaped around participation in the LHU community.' },
    { image: 'real-uility.svg', title: 'Real', subtitle: 'Utility', description: 'Use LHU across supported features in the exchange ecosystem.' },
    { image: 'trade-asset.svg', title: 'Tradeable', subtitle: 'Asset', description: 'Trade LHU through supported exchange markets.' },
];

const stepFlows = {
    claim: [
        { image: 'connect-wallet.png', title: 'Create Your', subtitle: 'Account', description: 'Set up your account to get started with LHU.' },
        { image: 'create-account.png', title: 'Deposit &', subtitle: 'Get Tokens', description: 'Deposit supported funds to receive tokens.' },
        { image: 'spin-wheel.png', title: 'Claim Your', subtitle: 'Rewards', description: 'Claim available rewards to your wallet.' },
        { image: 'cle-rew.png', title: 'Spin the', subtitle: 'Wheel', description: 'Spin the wheel to discover your reward.' },
    ],
    trade: [
        { image: 'how-lhu-1.svg', title: 'Create Your', subtitle: 'Account', description: 'Set up your account before trading.' },
        { image: 'how-lhu-2.svg', title: 'Deposit', subtitle: 'Funds', description: 'Add funds to your exchange account.' },
        { image: 'how-lhu-3.svg', title: 'Choose LHU', subtitle: 'Market', description: 'Open a supported LHU trading market.' },
        { image: 'how-lhu-4.svg', title: 'Buy or Sell', subtitle: 'LHU', description: 'Place a buy or sell order for LHU.' },
    ],
};

const whySlides = [
    {
        image: 'why-choose.svg',
        title: 'Free LHU Claim',
        points: ['Participate in Spin Wheel', 'Win and claim LHU tokens for free', 'Reward amount varies by spin result', 'Claimed LHU credited to your wallet'],
    },
    {
        image: 'trade-lhu.svg',
        title: 'Earn with LHU',
        points: ['Collect rewards from the LHU ecosystem', 'Use tokens across supported features', 'Track your rewards in one wallet', 'Keep growing your LHU balance'],
    },
    {
        image: 'lhu-wallet.svg',
        title: 'Built for the Community',
        points: ['Join a growing crypto community', 'Trade with a native exchange token', 'Access simple and useful experiences', 'Stay connected to future rewards'],
    },
];

export default function LhuPage() {
    const [activeHeroSlide, setActiveHeroSlide] = useState(0);
    const [isHeroPaused, setIsHeroPaused] = useState(false);
    const [activeStepTab, setActiveStepTab] = useState('claim');
    const [activeWhySlide, setActiveWhySlide] = useState(0);
    const [visibleWhySlides, setVisibleWhySlides] = useState(3);
    const [flippedFeatureCards, setFlippedFeatureCards] = useState({});
    const [flippedStepCards, setFlippedStepCards] = useState({});

    useEffect(() => {
        const updateVisibleSlides = () => {
            setVisibleWhySlides(window.innerWidth <= 480 ? 1 : window.innerWidth <= 767 ? 2 : 3);
        };

        updateVisibleSlides();
        window.addEventListener('resize', updateVisibleSlides);

        return () => window.removeEventListener('resize', updateVisibleSlides);
    }, []);

    useEffect(() => {
        if (isHeroPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const interval = window.setInterval(() => {
            setActiveHeroSlide((current) => (current + 1) % 3);
        }, 5000);

        return () => window.clearInterval(interval);
    }, [isHeroPaused]);

    useEffect(() => {
        if (visibleWhySlides !== 1 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const interval = window.setInterval(() => {
            setActiveWhySlide((current) => (current + 1) % whySlides.length);
        }, 4000);

        return () => window.clearInterval(interval);
    }, [visibleWhySlides]);

    const maxWhySlide = Math.max(whySlides.length - visibleWhySlides, 0);
    const whySlideOffset = Math.min(activeWhySlide, maxWhySlide);
    const activeSteps = stepFlows[activeStepTab];

    return (
        <main className="lhu-page">
            <section className="lhu-hero" aria-label="LHU promotional banners" aria-roledescription="carousel">
                <div
                    className="lhu-hero-carousel"
                    onMouseEnter={() => setIsHeroPaused(true)}
                    onMouseLeave={() => setIsHeroPaused(false)}
                >
                    <div
                        className="lhu-hero-track"
                        style={{ '--lhu-hero-slide-index': activeHeroSlide }}
                    >
                        <div className="lhc-session lhu-hero-slide lhu-image-slide" aria-hidden={activeHeroSlide !== 0} inert={activeHeroSlide !== 0}>
                            <div className="lhu-carousel-slide-copy">
                                <span className="lhu-eyebrow">TRADE LHU</span>
                                <h2 className="lhu-carousel-slide-title">Trade <strong>LHU</strong> on<br />Global Exchange</h2>
                                <Link href="/trade" className="lhu-primary-btn">Trade Now</Link>
                            </div>
                            <Image
                                src="/assets/images/homeban-lhu.svg"
                                width={126}
                                height={104}
                                alt="LHU trading on a global exchange"
                                className="lhu-carousel-slide-art lhu-art-trade"
                            />
                        </div>

                        <div className="lhc-session lhu-hero-slide lhu-image-slide" aria-hidden={activeHeroSlide !== 1} inert={activeHeroSlide !== 1}>
                            <div className="lhu-carousel-slide-copy">
                                <span className="lhu-eyebrow">FREE LHU</span>
                                <h2 className="lhu-carousel-slide-title">Get Free <strong>LHU</strong><br />Every Day</h2>
                                <Link href="/spin-wheel" className="lhu-primary-btn">Spin Now</Link>
                            </div>
                            <Image
                                src="/assets/images/homebaner-spin.svg"
                                width={126}
                                height={104}
                                alt="Spin the LHU reward wheel"
                                className="lhu-carousel-slide-art lhu-art-spin"
                            />
                        </div>

                        <div className="lhc-session lhu-hero-slide" aria-hidden={activeHeroSlide !== 2} inert={activeHeroSlide !== 2}>
                    <div className="lhu-hero-copy">
                        <span className="lhu-eyebrow">SPIN &amp; CLAIM</span>
                        <h1 id="lhu-hero-title">Spin. Claim<br />Trade <strong>LHU</strong></h1>
                        <div className="lhu-hero-actions">
                            <Link href="/spin-wheel" className="lhu-primary-btn">Spin Now</Link>
                            <Link href="/trade" className="lhu-ghost-btn">Trade LHU</Link>
                        </div>
                    </div>

                    <div className="spin-wheel-right lhu-banner-orbit lhu-hero-wheel">
                        <div className="lhu-stage-container">
                            <div className="lhu-stage-inner">

                                <img
                                    src="/assets/images/left-top.png"
                                    alt="Left Top Coin"
                                    className="lhu-satellite-coin lhu-pos-left-top"
                                />
                                <img
                                    src="/assets/images/left-bottom.png"
                                    alt="Left Bottom Coin"
                                    className="lhu-satellite-coin lhu-pos-left-bottom"
                                />
                                <img
                                    src="/assets/images/right-top.png"
                                    alt="Right Top Coin"
                                    className="lhu-satellite-coin lhu-pos-right-top"
                                />
                                <img
                                    src="/assets/images/right-bottom.png"
                                    alt="Right Bottom Coin"
                                    className="lhu-satellite-coin lhu-pos-right-bottom"
                                />

                                <div className="lhu-podium-stack">
                                    <div className="lhu-podium-ground-shadow" />
                                    <img
                                        src="/assets/images/main-center-bottom-1.png"
                                        alt="Podium Base"
                                        className="lhu-podium-layer-1"
                                    />

                                    <div className="lhu-podium-layer-2-wrapper">
                                        <img
                                            src="/assets/images/main-center-bottom-2.png"
                                            alt="Glowing Ring"
                                            className="lhu-podium-layer-2-img"
                                        />
                                        <svg
                                            viewBox="0 0 510 64"
                                            className="lhu-podium-ring-svg"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <defs>
                                                <linearGradient id="lhuBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                                                    <stop offset="35%" stopColor="#ffaa00" />
                                                    <stop offset="70%" stopColor="#ffe744" />
                                                    <stop offset="100%" stopColor="#ffffff" />
                                                </linearGradient>
                                                <filter id="lhuGlow" x="-15%" y="-40%" width="130%" height="180%">
                                                    <feGaussianBlur stdDeviation="2" result="blur" />
                                                    <feMerge>
                                                        <feMergeNode in="blur" />
                                                        <feMergeNode in="SourceGraphic" />
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                            <ellipse
                                                cx="255"
                                                cy="32"
                                                rx="250"
                                                ry="27.5"
                                                fill="none"
                                                stroke="url(#lhuBeamGrad)"
                                                strokeWidth="5"
                                                strokeLinecap="round"
                                                className="lhu-ring-beam-1"
                                                filter="url(#lhuGlow)"
                                            />
                                            <ellipse
                                                cx="255"
                                                cy="32"
                                                rx="250"
                                                ry="27.5"
                                                fill="none"
                                                stroke="url(#lhuBeamGrad)"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                className="lhu-ring-beam-2"
                                            />
                                        </svg>
                                    </div>
                                    <img
                                        src="/assets/images/main-center-bottom-3.png"
                                        alt="Upper Podium Tier"
                                        className="lhu-podium-layer-3"
                                    />
                                    <div className="lhu-main-coin-shadow" />
                                </div>

                                <div className="lhu-main-coin-wrapper">
                                    <img
                                        src="/assets/images/main-center-bottom-4.png"
                                        alt="Main Center Fox Coin"
                                        className="lhu-main-coin-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>



            </section>

            <div className="lhu-slider-dots lhu-hero-dots" role="group" aria-label="LHU hero slides">
                {['Trade LHU', 'Free LHU', 'Spin and Claim'].map((slideTitle, index) => (
                    <button
                        type="button"
                        key={slideTitle}
                        className={activeHeroSlide === index ? 'is-active' : ''}
                        aria-label={`Show ${slideTitle} slide`}
                        aria-current={activeHeroSlide === index ? 'true' : undefined}
                        onClick={() => setActiveHeroSlide(index)}
                    />
                ))}
            </div>

            <section className="lhu-card lhu-token-card" aria-labelledby="token-title">
                <h2 id="token-title">What is LHU Token?</h2>
                <p className="lhu-section-intro">LHU is the native token of our crypto exchange ecosystem.</p>
                <div className="lhu-feature-grid">
                    {featureCards.map((feature) => {
                        const featureKey = `${feature.title}-${feature.subtitle}`;
                        const isFlipped = Boolean(flippedFeatureCards[featureKey]);

                        return (
                            <div className="lhu-feature-item" key={featureKey}>
                                <button
                                    type="button"
                                    className={`lhu-feature-flip${isFlipped ? ' is-flipped' : ''}`}
                                    aria-label={`${isFlipped ? 'Show front of' : 'Show details for'} ${feature.title} ${feature.subtitle}`}
                                    aria-pressed={isFlipped}
                                    onClick={() => setFlippedFeatureCards((current) => ({
                                        ...current,
                                        [featureKey]: !current[featureKey],
                                    }))}
                                >
                                    <span className="lhu-feature-flip-inner">
                                        <span className="lhu-feature-flip-face lhu-feature-front" aria-hidden={isFlipped}>
                                            <span className="lhu-feature-image">
                                                <Image src={`/assets/images/${feature.image}`} width={70} height={70} alt="" />
                                            </span>
                                            <span className="lhu-feature-label">{feature.title}<br />{feature.subtitle}</span>
                                        </span>
                                        <span className="lhu-feature-flip-face lhu-feature-back" aria-hidden={!isFlipped}>
                                            <strong>{feature.title} {feature.subtitle}</strong>
                                            <span>{feature.description}</span>
                                        </span>
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="lhu-card lhu-why-card" aria-labelledby="why-title">
                <h2 id="why-title">Why Choose LHU?</h2>
                <p className="lhu-section-intro">LHU offers multiple ways to earn, trade and use within our exchange ecosystem.</p>
                <div className="lhu-carousel" aria-roledescription="carousel" aria-label="Why choose LHU">
                    <div className="lhu-carousel-window">
                        <div
                            className="lhu-carousel-track"
                            style={{ '--lhu-slide-index': whySlideOffset, '--lhu-visible-slides': visibleWhySlides }}
                        >
                            {whySlides.map((slide, index) => (
                                <div
                                    className={`lhu-carousel-slide${activeWhySlide === index ? ' is-active' : ''}`}
                                    key={slide.title}
                                >
                                    <div className="lhu-claim-box">
                                        <Image src={`/assets/images/${slide.image}`} width={486} height={552} alt="" className="lhu-claim-image" />
                                        <h3>{slide.title}</h3>
                                        <ul>
                                            {slide.points.map((point) => <li key={point}>{point}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lhu-slider-dots lhu-carousel-dots" aria-label="Why choose LHU slides">
                    {whySlides.map((slide, index) => (
                        <button
                            type="button"
                            key={slide.title}
                            className={activeWhySlide === index ? 'is-active' : ''}
                            aria-label={`Show ${slide.title}`}
                            aria-current={activeWhySlide === index ? 'true' : undefined}
                            onClick={() => setActiveWhySlide(index)}
                        />
                    ))}
                </div>
            </section>

            <section className="lhu-card lhu-steps-card" aria-labelledby="steps-title">
                <h2 id="steps-title">Simple Steps to Get Started</h2>
                <div className="lhu-step-tabs" role="tablist" aria-label="Getting started flows">
                    <button
                        type="button"
                        role="tab"
                        id="lhu-claim-tab"
                        aria-selected={activeStepTab === 'claim'}
                        aria-controls="lhu-steps-panel"
                        tabIndex={activeStepTab === 'claim' ? 0 : -1}
                        className={activeStepTab === 'claim' ? 'is-active' : ''}
                        onClick={() => setActiveStepTab('claim')}
                    >
                        Spin &amp; Claim Now
                    </button>
                    <button
                        type="button"
                        role="tab"
                        id="lhu-trade-tab"
                        aria-selected={activeStepTab === 'trade'}
                        aria-controls="lhu-steps-panel"
                        tabIndex={activeStepTab === 'trade' ? 0 : -1}
                        className={activeStepTab === 'trade' ? 'is-active' : ''}
                        onClick={() => setActiveStepTab('trade')}
                    >
                        Trading Flow
                    </button>
                </div>
                <div
                    className="lhu-steps-grid"
                    id="lhu-steps-panel"
                    role="tabpanel"
                    aria-labelledby={activeStepTab === 'claim' ? 'lhu-claim-tab' : 'lhu-trade-tab'}
                >
                    {activeSteps.map((step, index) => (
                        <div className="lhu-step-item" key={`${activeStepTab}-${index}`}>
                            <button
                                type="button"
                                className={`lhu-step-flip${flippedStepCards[`${activeStepTab}-${index}`] ? ' is-flipped' : ''}`}
                                aria-label={`${flippedStepCards[`${activeStepTab}-${index}`] ? 'Show front of' : 'Show details for'} ${step.title} ${step.subtitle}`}
                                aria-pressed={Boolean(flippedStepCards[`${activeStepTab}-${index}`])}
                                onClick={() => setFlippedStepCards((current) => ({
                                    ...current,
                                    [`${activeStepTab}-${index}`]: !current[`${activeStepTab}-${index}`],
                                }))}
                            >
                                <span className="lhu-step-flip-inner">
                                    <span className="lhu-step-flip-face lhu-step-front" aria-hidden={Boolean(flippedStepCards[`${activeStepTab}-${index}`])}>
                                        <span className={`lhu-step-number step-${index + 1}`}>{index + 1}</span>
                                        <Image src={`/assets/images/${step.image}`} width={80} height={80} alt="" />
                                        <span className="lhu-step-label">{step.title}<br />{step.subtitle}</span>
                                    </span>
                                    <span className="lhu-step-flip-face lhu-step-back" aria-hidden={!flippedStepCards[`${activeStepTab}-${index}`]}>
                                        <span className={`lhu-step-number step-${index + 1}`}>{index + 1}</span>
                                        <strong>{step.title} {step.subtitle}</strong>
                                        <span>{step.description}</span>
                                    </span>
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="lhu-community-cta" aria-labelledby="lhu-community-title">
                <div className="lhu-community-cta-inner">
                    <div className="lhu-community-cta-copy">
                        <h2 id="lhu-community-title">Join the LHU Community Today</h2>
                        <p>Spin, claim, trade and be part of a growing ecosystem.</p>
                        <div className="lhu-community-cta-actions">
                            <Link href="/signin" className="lhu-community-cta-primary">
                                Get Started Now <span aria-hidden="true">&gt;</span>
                            </Link>
                            <Link href="/lhu-terms" className="lhu-community-cta-secondary">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="lhu-community-cta-art">
                        <Image
                            src="/assets/images/join-lhu.svg"
                            width={100}
                            height={100}
                            alt="LHU community token"
                        />
                    </div>
                </div>
            </section>

            <Userfooter />
        </main>
    );
}
