import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FaDiscord, FaVk, FaTelegramPlane } from 'react-icons/fa';
import Photo from "../assets/img/logo.svg";
import Bonus from "../assets/img/BonusIcon.svg";
import FAQ from "../assets/img/FAQIcon.svg";
import Buy from "../assets/img/BuyRobuxIcon.svg";
import Purchase from "../assets/img/MyPurchasesIcon.svg";

const HeaderContainer = tw.header`bg-[rgb(19, 17, 27)] py-4`;
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

    img {
        margin-right: 8px;  // Adjust margin between icon and text
        width: 16px;
        height: 16px;
    }
`;

const SubMenu = styled.ul`
    ${tw`absolute top-full mt-2 bg-[rgb(19, 17, 27)] text-white list-none py-2 px-4 shadow-lg hidden`}
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
                                    <img src={Buy} alt="Покупка робуксов" />
                                    Покупка робуксов
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <img src={Purchase} alt="Мои покупки" />
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
                                    <img src={FAQ} alt="FAQ" />
                                    FAQ
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="bonus.html">
                                    <img src={Bonus} alt="Бонусы" />
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
