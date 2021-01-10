import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactPlayer from 'react-player/lazy';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';  //animated cursor
import useWebAnimations, { headShake, pulse } from '@wellyshen/use-web-animations';
import { videox, videoy } from '../images';

function SecondPage() {
    const titleAnimation1 = useWebAnimations({ ...headShake, timing: { duration: 1250, iterations: Infinity }});
    const titleAnimation2 = useWebAnimations({ ...headShake, timing: { duration: 1250, iterations: Infinity }});

    const paraAnimation1 = useWebAnimations({ ...pulse, timing: { duration: 2500, iterations: Infinity }});
    const paraAnimation2 = useWebAnimations({ ...pulse, timing: { duration: 2500, iterations: Infinity }});

    return (
        <div className="secondpage">

            <Card className="secondpagecard" square>
                <CardContent className="secondpagecard_content">
                    <ScrollAnimation animateIn="rubberBand" animateOut="rubberBand">
                        <Typography
                            variant="h3"
                            className="secondpagecard_content_title"
                            ref={titleAnimation1.ref}
                        >
                            Connected to what matters
                        </Typography>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeIn">
                        <Typography
                            className="secondpagecard_content_para"
                            ref={paraAnimation1.ref}
                        >
                            <Typed
                                strings={[`
                                    Knowledge isn’t static — why should your presentations
                                    be? We integrate with the tools you rely on every day
                                    to keep information and conversations up-to-date, turning
                                    presentations into living documents.
                                    Knowledge isn’t static — why should your presentations
                                    be? We integrate with the tools you rely on every day
                                    to keep information and conversations up-to-date, turning
                                    presentations into living documents.
                                `]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </Typography>
                    </ScrollAnimation>
                </CardContent>

                <ScrollAnimation animateIn="slideInDown" animateOut="slideInDown">
                    <ReactPlayer
                        url={videox}
                        playing
                        loop
                        className="secondpagecard_player"
                        id="first"
                    />
                </ScrollAnimation>
            </Card>



            <Card className="secondpagecard" square>
                <ScrollAnimation animateIn="slideInDown" animateOut="slideInDown">
                    <img
                        src={videoy}
                        alt=""
                        id="second"
                    />
                </ScrollAnimation>

                <CardContent className="secondpagecard_content">
                    <ScrollAnimation animateIn="rubberBand" animateOut="rubberBand">
                        <Typography
                            variant="h3"
                            className="secondpagecard_content_title"
                            ref={titleAnimation2.ref}
                        >
                            Formatting that’s effortless
                        </Typography>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeIn">
                        <Typography
                            className="secondpagecard_content_para"
                            ref={paraAnimation2.ref}
                        >
                            <Typed
                                strings={[`
                                    Work on your story — we’ll take care of the rest. Pitch’s
                                    smart formatting options turn raw ideas into stunning
                                    slides. Whether you’re a casual builder or you work on
                                    slides every day, Pitch gives your team design superpowers.
                                `]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </Typography>
                    </ScrollAnimation>
                </CardContent>
            </Card>

        </div>
    )
}

export default SecondPage;