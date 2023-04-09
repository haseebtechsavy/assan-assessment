import React from 'react';

import { InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1, 
        Column2, 
        TextWrapper, 
        TopLine, 
        Heading, 
        Subtitle, 
        ImgWrap,
        Img 
        } from './InfoElements';

const source = require('../../images/parent-communciation.png')
const Home = ({lightBg, 
                    imgStart, 
                    id, 
                    topLine, 
                    lightText, 
                    headline, 
                    darkText, 
                    description, 
                    img, 
                    alt
                    
                    }) => {
    return (
        <>
        
            <InfoContainer style={{background: 'linear-gradient(to right, #F4D03F, #16A085)', position: 'relative',}}
 id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                           
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={source} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Home
