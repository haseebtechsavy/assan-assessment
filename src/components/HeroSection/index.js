import React, {useState} from 'react';

import { HeroContainer, HeroBg,  HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll';
const source = require('../../images/Background.jpg')
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    const toggleBottom = () => {
        scroll.scrollToBottom();
    };

    return (
        <HeroContainer 
          
          id='info'>
            <HeroBg style={{backgroundImage: `url(${source})`, backgroundSize: 'cover', backgroundPosition: 'center',opacity:'40%'}}>
                
            </HeroBg>
            <HeroContent >
                <HeroH1 >Effortless Assessment</HeroH1>
                <HeroP >
                Efficient Student Management, Improved Communication  and Comprehensive Assessment
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover} 
                            primary='true' 
                            dark='true' 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            onClick={toggleBottom}>
                        Scroll To Bottom {hover ? <ArrowRight /> : <ArrowForward />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
