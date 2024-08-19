import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import Photo from "../assets/img/logo.svg";

const FooterContainer = styled.footer`
    ${tw`relative`}
    padding: 48px 32px;
    border-radius: 32px 32px 0 0;
    background: #1d1b29;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: rgba(135, 146, 162, .9);
`;

const FooterContent = styled.div`
    ${tw`flex justify-between w-full max-w-screen-lg`} /* Centers and limits the max width */
    flex-wrap: wrap;
    max-width: 1290px;
`;

const Column = styled.div`
    ${tw`flex flex-col mb-6`}
    flex: ${({ small }) => (small ? '0 0 auto' : '1')}; /* Smaller sections take less space */
    padding: 0 16px; /* Adds space between columns */
`;

const LogoImage = styled.img`
    ${tw`h-10`}
`;

const LogoSection = styled.div`
    ${tw`flex flex-col`}
`;

const Logo = styled.h2`
    ${tw`text-xl font-bold text-white`}
    margin-bottom: 16px;
`;

const CompanyDetails = styled.div`
    ${tw`text-sm`}
    line-height: 1.5;
    font-size: 18px; /* Increase font size */
`;

const LinksSection = styled.div`
    ${tw`flex flex-col`}
`;

const LinksTitle = styled.h3`
    ${tw`text-lg font-semibold text-white`}
    margin-bottom: 16px;
    font-size: 20px; /* Increase font size */
`;

const Link = styled.a`
    ${tw`text-sm mb-2`}
    color: rgba(135, 146, 162, .9);
    text-decoration: none;
    line-height: 28px;
    font-size: 18px; /* Increase font size */
    &:hover {
        text-decoration: underline;
    }
`;

const SocialMediaSection = styled.div`
    ${tw`flex items-center mt-4`}
`;

const IconLink = styled.a`
    ${tw`text-xl mr-4 text-white`} /* Reduced size of icons */
    
`;

const Divider = styled.div`
    ${tw`w-full mt-6 mb-6`}
    height: 1px;
    background: rgba(135, 146, 162, .3); /* Light gray line */
    max-width: 1260px; /* Limit the width to the content width */
    margin: 0 auto; /* Center the divider */
  
`;

const FooterBottomText = styled.div`
    ${tw`w-full items-start mt-6 text-xs`}
    line-height: 1.5;
    font-size: 16px; /* Increase font size */
    max-width: 1260px;
    
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Column>
                    <LogoSection>
                        <Logo>
                            <LogoImage src={Photo} alt="Robux.io" />
                        </Logo>
                        <CompanyDetails>
                            ИП Пугачев Данил Сергеевич<br />
                            ИНН 482308221255<br />
                            ОГРН 324480000026066<br />
                            EMAIL robuxiosup@gmail.com<br />
                            <br/>
                            ©2024 Robux.io
                        </CompanyDetails>
                    </LogoSection>
                </Column>
                <Column>
                    <LinksSection>
                        <LinksTitle>Документы</LinksTitle>
                        <Link href="PrivacyPage">Политика конфиденциальности</Link>
                        <Link href="#">Пользовательское соглашение</Link>
                        <Link href="#">Политика возврата средств</Link>
                        <Link href="#">Политика информационной безопасности</Link>
                        <Link href="#">Перечень предоставляемых услуг</Link>
                    </LinksSection>
                </Column>
                <Column small>
                    <SocialMediaSection>
                        <IconLink href="#"><FaDiscord /></IconLink>
                        <IconLink href="#"><FaTelegramPlane /></IconLink>
                    </SocialMediaSection>
                </Column>
            </FooterContent>
            <Divider />
            <FooterBottomText>
                Robux.io is in no way an affiliate or partner of Roblox Corporation. We are not authorized, endorsed or sponsored by Roblox Corporation. We are an independent site for the sale of game values. All Roblox trademarks remain the property of Roblox Corporation. All Roblox content used on the site is legal, unaltered Roblox content.
            </FooterBottomText>
        </FooterContainer>
    );
};

export default Footer;
