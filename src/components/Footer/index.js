import React from 'react';
import Icon1 from '../../images/Hafeez.png';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-2.svg';
import {animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
    
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
     } 
        from './FooterElements';

import './Footer.css';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer id='about'>
            <FooterWrap>
                <h1 style={{color: '#fff',marginRight:'50px', marginBottom:'20px'}}>About</h1> {/* Add beautiful heading here */}
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Abdul Hafeez</FooterLinkTitle>
                            <div className="circular-image" style={{backgroundImage: `url(${Icon1})`}}></div>
                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Ghulam Mujtaba</FooterLinkTitle>
                            <div className="circular-image" style={{backgroundImage: `url(${Icon2})`}}></div>
                          
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Ranjeeta Lund </FooterLinkTitle>
                            <div className="circular-image" style={{backgroundImage: `url(${Icon3})`}}></div>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Assan Assessment-FYP
                        </SocialLogo>
                        <WebsiteRights>Supervised By: Dr. Ghualm Murtaza Memon</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
