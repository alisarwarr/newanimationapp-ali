import React from 'react';
import { facebook, instagram, twitter, whatsapp } from '../images';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { animateScroll } from 'react-scroll';
import useWebAnimations, { pulse, heartBeat } from '@wellyshen/use-web-animations';

function ThirdPage() {
    const btnAnimation = useWebAnimations({ ...pulse });
    
    const btnAnimation1 = useWebAnimations({ ...heartBeat });
    const btnAnimation2 = useWebAnimations({ ...heartBeat });
    const btnAnimation3 = useWebAnimations({ ...heartBeat });
    const btnAnimation4 = useWebAnimations({ ...heartBeat });

    return (
        <div className="thirdpage">

            <div className="container">
                <div className="container-inner">
                    <footer className="footer">
                        <div className="footer_left">
                            <a aria-label="Pitch" className="logo" href="/">
                                <svg fill="none" height="23" width="66">
                                    <path d="M44.87 17.272a4.318 4.318 0 11.04-4.877l3.191-1.884a8.019 8.019 0 10-.017 8.613l-3.213-1.852zM53.662 0H49.96v22.206h3.7v-7.402a4.318 4.318 0 118.636 0v7.402h3.701v-8.122a7.3 7.3 0 00-12.336-5.282V0zM27.756 0h-3.701v17.271a5.551 5.551 0 009.201 4.183l-1.788-3.034a1.847 1.847 0 01-1.45.701h-.412a1.851 1.851 0 01-1.85-1.85v-6.168h3.7V7.402h-3.7V0zM19.74 0a2.056 2.056 0 100 4.112 2.056 2.056 0 000-4.112zM21.59 22.206V7.402h-3.7v14.804h3.7z" fill="currentColor"></path>
                                    <path clip-rule="evenodd" d="M0 22.206h3.7v-4.318h3.393A8.944 8.944 0 107.093 0H0v22.206zM3.7 3.7h3.393a5.243 5.243 0 010 10.486H3.701V3.7z" fill-rule="evenodd" fill="currentColor"></path>
                                </svg>
                            </a>
                            <p>
                                © Copyright 2020 <span id="hideon600"> Pitch Software GmbH. </span>
                                <br/> All rights reserved.
                            </p>
                        </div>
                        
                        <nav className="footer_right">
                            <div className="links company company">
                                <h5>Company</h5>
                                <a href="/">Home</a>
                                <a href="/about">About</a>
                                <a href="/blog">Blog</a>
                                <a href="/about#hiring">Jobs</a>
                                <a href="/whats-new">What's New</a>
                                <a href="/press">Press Room</a>
                            </div>
                            
                            <div className="links company legal">
                                <h5>Legal</h5>
                                <a href="/legal-notice">Legal Notice</a>
                                <a href="/privacy-policy">Privacy Policy</a>
                                <a href="/terms-of-use">Terms of Use</a>
                                <a href="/dpa">DPA</a>
                                <a href="/dmca-policy">DMCA Policy</a>
                                <a href="/erdf">ERDF Support</a>
                            </div>
                            
                            <div className="links company social-links">
                                <h5>Follow us</h5>
                                <div className="buttons-social">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <button
                                            ref={btnAnimation1.ref}
                                            onMouseOver={() => btnAnimation1.getAnimation().play()}
                                        >
                                            <input type="image" src={facebook} alt="Facebook" title="Facebook"/>
                                        </button>
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <button
                                            ref={btnAnimation2.ref}
                                            onMouseOver={() => btnAnimation2.getAnimation().play()}
                                        >
                                            <input type="image" src={instagram} alt="Instagram" title="Instagram"/>
                                        </button>
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                        <button
                                            ref={btnAnimation3.ref}
                                            onMouseOver={() => btnAnimation3.getAnimation().play()}
                                        >
                                            <input type="image" src={twitter} alt="Twitter" title="Twitter"/>
                                        </button>
                                    </a>
                                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                        <button
                                            ref={btnAnimation4.ref}
                                            onMouseOver={() => btnAnimation4.getAnimation().play()}
                                        >
                                            <input type="image" src={whatsapp} alt="WhatsApp" title="WhatsApp"/>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </footer>
                </div>
            </div>



            <AppBar position="static" className="appbarr">
                <Toolbar className="appbarr_toolbar">
                    <Button
                        onClick={() => animateScroll.scrollToTop()}
                        ref={btnAnimation.ref}
                        onMouseOver={() => btnAnimation.getAnimation().play()}
                        disableRipple
                    >
                        <ul>
                            <li> b </li> <li> a </li> <li> c </li> <li> k </li>
                            <span> <li> t </li> <li> o </li> </span>
                            <li> t </li> <li> o </li> <li> p </li>
                        </ul>
                    </Button>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default ThirdPage;