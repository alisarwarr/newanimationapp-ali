import React, { useState } from 'react';
import { Box, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';  //animated cursor
import useWebAnimations, { flash, pulse, bounce } from '@wellyshen/use-web-animations';
import classnames from 'classnames';
import { pic } from '../images';

const useStyles = makeStyles({
    container: {
        marginLeft: "2.27rem",
        marginRight: "1.1rem",
        marginTop: "-1.4rem",
        width: "40rem",
    }
})

function FirstPage() {
    const classes = useStyles();

    const [ clickedbtn, setClickedbtn ] = useState(false);

    const titleAnimation = useWebAnimations({ ...flash, timing: { duration: 9000, iterations: Infinity }});
    const imgAnimation   = useWebAnimations({ ...pulse, timing: { duration: 5000, iterations: Infinity }})
    const btnAnimation   = useWebAnimations({ ...bounce });

    return (
        <div className="firstpage">
            <Box className="firstpagebox">
                <p
                    className="firstpagebox_title"
                    ref={titleAnimation.ref}
                >
                    ultimate high quality features for awesome websites
                </p>

                <Container className={classes.container}>
                    <p className="firstpagebox_para">
                        <Typed
                            strings={[`
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software
                                like Aldus PageMaker including versions
                            `]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </p>
                </Container>
                
                <div className="firstpagebox_btn">
                    <Button
                        variant="contained"
                        size="large"
                        onBlur={() => { setClickedbtn(false) }}
                        className={classnames("btn", (clickedbtn ? "selectedbtn" : "notselectedbtn"))}
                        ref={btnAnimation.ref}
                        onClick={() => {
                            setClickedbtn(x => !x);
                            btnAnimation.getAnimation().play()                            
                        }}
                    >
                        get started <SendIcon fontSize="medium" style={{ marginLeft: 5 }}/>
                    </Button>
                </div>
            </Box>

            <figure>
                <img
                    src={pic}
                    alt=""
                    ref={imgAnimation.ref}
                    className="pic"
                />
            </figure>
        </div>
    )
}

export default FirstPage;