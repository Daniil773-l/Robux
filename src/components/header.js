import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FaDiscord, FaVk, FaTelegramPlane } from 'react-icons/fa';
import Photo from "../assets/img/logo.svg";

const HeaderContainer = tw.header`bg-[#0b2316] py-4`;
const HeaderWrapper = styled.div`
  ${tw`container mx-auto flex items-center justify-between`}
  padding-left: 2rem;  // Adjust padding to move elements slightly inward
  padding-right: 2rem;  // Adjust padding to move elements slightly inward
`;
const LogoArea = tw.div`flex items-center gap-4`; // Reduced gap between logo and navigation
const LogoLink = styled.a`
  display: flex;
  align-items: center;
`;
const LogoImage = styled.img`
  ${tw`h-10`}
`;

const Nav = tw.nav`flex items-center`;
const NavList = tw.ul`flex space-x-6 list-none`; // Reduced space between menu items
const NavItem = styled.li`
  ${tw`relative flex items-center`}
  &:hover ul {
    display: block;
  }
`;
const NavLink = styled.a`
  ${tw`text-white flex items-center text-base hover:text-[#4caf50] cursor-pointer`}
  text-decoration: none; // Remove underline
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: 3px;  // Reduced margin between icon and text
    width: 16px;
    height: 16px;
  }
`;

const SubMenu = styled.ul`
  ${tw`absolute top-full mt-2 bg-[#0b2316] text-white list-none py-2 px-4 shadow-lg hidden`}
  left: 0;
`;
const SubMenuItem = tw.li`py-1 hover:text-[#4caf50] cursor-pointer`;

const IconArea = styled.div`
  ${tw`flex items-center space-x-3 text-lg`}
`;
const IconLink = tw.a`text-[#4caf50] hover:text-[#81c784]`;

const LoginButton = styled.button`
  ${tw`text-white px-5 py-2 rounded-md text-sm border-none cursor-pointer`}
  background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
  margin-left: 8px; // Slightly move the button to the left
`;

const ButtonArea = styled.div`
  ${tw`flex items-center space-x-4`}
`;

const copypromo = () => {
    navigator.clipboard.writeText("ROBUX10").then(() => {
        alert("Promo code copied to clipboard!");
    });
};

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <LogoArea>
                    <LogoLink href="#">
                        <LogoImage src={Photo} alt="Robux.io" />
                    </LogoLink>
                    <Nav>
                        <NavList>
                            <NavItem>
                                <NavLink href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                        <g clipPath="url(#home_svg__a)">
                                            <path fill="#60C33A" fillRule="evenodd" d="M7.678.626a1 1 0 0 0-1.356 0l-5.5 5.077a1 1 0 0 0-.322.735V13a1 1 0 0 0 1 1H5V9h4v5h3.5a1 1 0 0 0 1-1V6.438a1 1 0 0 0-.322-.735L7.678.626" clipRule="evenodd"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="home_svg__a">
                                                <path fill="#64bcfc" d="M0 0h14v14H0z"></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Покупка робуксов
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                        <g clipPath="url(#delivery_svg__a)">
                                            <path fill="#60C33A" fillRule="evenodd" d="M8.3.113a1 1 0 0 1 .893-.015l6.239 2.986a1 1 0 0 1 .568.902v8.028a1 1 0 0 1-.555.896l-6 2.985a1 1 0 0 1-.892 0l-1.875-.938a1 1 0 1 1 .894-1.789l.428.214V7.618L2.553 4.894a1 1 0 0 1-.015-1.781l5.761-3ZM10 7.617v5.768l4-1.99V5.607l-4 2.01m2.729-3.61L8.78 2.118 5.2 3.983l3.799 1.9 3.73-1.874M0 7.835a1 1 0 0 1 1-1h2.184a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1M1.816 11a1 1 0 0 1 1-1H5a1 1 0 1 1 0 2H2.816a1 1 0 0 1-1-1" clipRule="evenodd"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="delivery_svg__a">
                                                <path fill="#fff" d="M0 0h16v16H0z"></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Мои покупки
                                </NavLink>
                                <SubMenu>
                                    <SubMenuItem>
                                        <a href="#">Скоро</a>
                                    </SubMenuItem>
                                </SubMenu>
                            </NavItem>
                            <NavItem>
                                <NavLink href="faq.html">
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.481 9.64c0-1.203.71-2.046 1.52-2.836 3.474-2.835-1.853-3.617-2.308-.964L2.352 4.124C3.499 1.884 5.857 1 8.208 1c2.246 0 5.144.907 5.144 3.683 0 1.466-.852 2.472-1.877 3.356-.458.41-1.127.907-1.127 1.6H6.481zM8.415 15c-1.286 0-2.478-.92-2.478-2.314 0-1.396 1.198-2.275 2.478-2.275 1.28 0 2.478.879 2.478 2.275C10.893 14.079 9.7 15 8.415 15z" fill="#60C33A"></path>
                                    </svg>
                                    FAQ
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="bonus.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                        <path fill="#60C33A" fillRule="evenodd" d="M6.915 5a1.5 1.5 0 1 0-2.83 0h2.83M2 5h.035a3.5 3.5 0 0 1 3.45-4h.03A3.49 3.49 0 0 1 8 2.05 3.49 3.49 0 0 1 10.486 1h.028a3.5 3.5 0 0 1 3.45 4H14a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2m10-.5c0 .175-.03.344-.085.5h-2.83A1.5 1.5 0 1 1 12 4.5m-9 4h4V15H3a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1M13 15H9V8.5h4a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1" clipRule="evenodd"></path>
                                    </svg>
                                    Бонусы
                                </NavLink>
                                <SubMenu>
                                    <SubMenuItem>
                                        <a href="bonus.html">Бесплатные робуксы</a>
                                    </SubMenuItem>
                                    <SubMenuItem onClick={() => copypromo()}>
                                        Промокод: ROBUX10
                                    </SubMenuItem>
                                    <SubMenuItem>
                                        <a href="#">Telegram</a>
                                    </SubMenuItem>
                                </SubMenu>
                            </NavItem>
                        </NavList>
                    </Nav>
                </LogoArea>
                <ButtonArea>
                    <IconArea>
                        <IconLink href="#">
                            <FaDiscord />
                        </IconLink>
                        <IconLink href="#">
                            <FaVk />
                        </IconLink>
                        <IconLink href="#">
                            <FaTelegramPlane />
                        </IconLink>
                    </IconArea>
                    <LoginButton>Войти</LoginButton>
                </ButtonArea>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;
