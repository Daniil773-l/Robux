import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaDiscord, FaVk, FaTelegramPlane } from 'react-icons/fa';
import AtomicSpinner from 'atomic-spinner';
import Photo from "../assets/img/logo.svg";
import Bonus from "../assets/img/BonusIcon.svg";
import FAQ from "../assets/img/FAQIcon.svg";
import Buy from "../assets/img/BuyRobuxIcon.svg";
import Purchase from "../assets/img/MyPurchasesIcon.svg";

const gradientPurple = 'conic-gradient(from -125deg at 50% 50%, #5c76eb 0deg, #9465ca 65deg, #6f65ca 100deg, #5c76eb 360deg)';

const HeaderContainer = styled.header`
    ${tw`bg-[rgb(19, 17, 27)] py-4 fixed top-0 w-full z-50`}
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const HeaderWrapper = styled.div`
    ${tw`container mx-auto flex items-center justify-between`}
    padding-left: 2rem;
    padding-right: 2rem;
`;

const LogoArea = tw.div`flex items-center gap-5 ml-12`;
const LogoLink = styled.a`
    display: flex;
    align-items: center;
`;
const LogoImage = styled.img`
    ${tw`h-10`}
`;

const Nav = tw.nav`flex items-center`;
const NavList = tw.ul`flex space-x-6 list-none`;
const NavItem = styled.li`
    ${tw`relative flex items-center`}
    &:hover > ul,
    &:hover > div {
        display: block;
    }
`;
const NavLink = styled.a`
    ${tw`text-white flex items-center text-base hover:text-[#4caf50] cursor-pointer`}
    text-decoration: none;
    display: inline-flex;
    align-items: center;

    img {
        margin-right: 8px;
        width: 16px;
        height: 16px;
    }
`;

const SubMenu = styled.ul`
    ${tw`absolute top-full left-0 rounded mt-2 text-white list-none py-3 px-4 shadow-lg`}
    width: 200px;
    border-radius: 10px;
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;
    background: #1d1b29;
    box-shadow: 9px 9px 22px -1px rgba(0, 0, 0, 0.12);
    display: none;

    &:hover {
        display: block;
    }
`;

const SecondSubMenu = styled.ul`
    ${tw`absolute top-full left-0 rounded mt-2 text-white list-none py-3 px-4 shadow-lg`}
    width: 100px;
    border-radius: 10px;
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;
    background: #1d1b29;
    box-shadow: 9px 9px 22px -1px rgba(0, 0, 0, 0.12);
    display: none;

    &:hover {
        display: block;
    }
`;

const SubMenuItem = styled.li`
    ${tw`py-1 hover:text-[#4caf50] cursor-pointer`}
    color: #7f859e;
    text-align: left;
    font-size: 14px;
    font-weight: 600;

    a {
        color: #7f859e;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
    }
`;

const IconArea = styled.div`
    ${tw`flex items-center space-x-3 text-lg`}
`;

const IconLink = tw.a`text-[#4caf50] hover:text-[#81c784] w-8 h-6`;

const LoginButton = styled.button`
    ${tw`text-white px-5 py-3 rounded-md text-sm border-none cursor-pointer font-bold`}
    background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);
    transition: opacity 0.3s ease-in-out;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    &:hover {
        opacity: 0.9;
    }
    margin-left: 8px;
`;

const ButtonArea = styled.div`
    ${tw`flex items-center space-x-6 mr-16`}
`;

const LoginModal = styled.div`
    ${tw`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
    display: ${({ show }) => (show ? 'flex' : 'none')};
`;

const ModalContent = styled.div`
    ${tw`p-8 rounded-lg shadow-lg text-white relative`}
    background: #232030;
    border-radius: 24px;
    width: 420px;
    max-width: 100%;
`;

const CloseButton = styled.button`
    ${tw`absolute top-3 right-3 text-white`}
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;

const ModalTitle = styled.h2`
    ${tw`text-lg font-semibold mb-4`}
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 16px;
    margin-top: -12px;  /* Adjust this value to move the title upwards */
`;

const LabelText = styled.p`
    ${tw`text-sm mb-2`}
    font-weight: 500;
    color: #8990a9;
`;

const ModalInput = styled.input`
    ${tw`w-full p-3 rounded-lg border-none mt-2 text-white`}
    background-color: #2A263B !important;
    width: 95%;
    font-size: 18px;
    font-weight: 500;
    height: 30px;
    border: none;
    border-radius: 12px;
    filter: brightness(115%);
    &::placeholder {
        color: #6f7489;
    }
`;

const ModalText = styled.p`
    ${tw`mt-3 text-center`}
    color: #79889c;
    font-size: 14px;
`;

const ModalButton = styled.button`
    ${tw`w-full py-4 rounded-lg mt-5 font-bold border-none cursor-pointer`}
    background: ${gradientPurple};
    color: #fff;
    font-size: 16px;
    opacity: .5;
    &:hover {
        opacity: 0.9;
    }
`;

const LoadingSpinner = styled.div`
    ${tw`flex justify-center mt-5`}
    svg {
        width: 70px;
        height: 70px;
    }
`;

const copypromo = () => {
    navigator.clipboard.writeText("ROBUX10").then(() => {
        alert("Promo code copied to clipboard!");
    });
};


const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    const closeLoginOnOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            toggleLogin();
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setUsername(value);

        if (value.length > 2) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000); // 2 seconds delay for showing the spinner
        } else {
            setIsLoading(false);
        }
    };

    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <LogoArea>
                        <LogoLink href="/">
                            <LogoImage src={Photo} alt="Robux.io" />
                        </LogoLink>
                        <Nav>
                            <NavList>
                                <NavItem>
                                    <NavLink href="/">
                                        <img src={Buy} alt="App" />
                                        Покупка робуксов
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <img src={Purchase} alt="Мои покупки" />
                                        Мои покупки
                                    </NavLink>
                                    <SecondSubMenu>
                                        <SubMenuItem>
                                            <a href="#">Скоро</a>
                                        </SubMenuItem>
                                    </SecondSubMenu>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="faq">
                                        <img src={FAQ} alt="FAQComponent" />
                                        FAQ
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="BonusPage">
                                        <img src={Bonus} alt="Бонусы" />
                                        Бонусы
                                    </NavLink>
                                    <SubMenu>
                                        <SubMenuItem>
                                            <a href="/">Бесплатные робуксы</a>
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
                        <LoginButton onClick={toggleLogin}>Войти</LoginButton>
                    </ButtonArea>
                </HeaderWrapper>
            </HeaderContainer>
            <div style={{ height: '80px' }} /> {/* This div creates space so content below isn't hidden behind the fixed header */}

            {/* Login Modal */}
            <LoginModal show={showLogin} onClick={closeLoginOnOutsideClick}>
                <ModalContent>
                    <CloseButton onClick={toggleLogin}>&times;</CloseButton>
                    <ModalTitle>Войти</ModalTitle>
                    <LabelText>Введите свой никнейм</LabelText>
                    <ModalInput
                        type="text"
                        placeholder="Введите никнейм"
                        value={username}
                        onChange={handleInputChange}
                    />
                    {isLoading && (
                        <LoadingSpinner>
                            <AtomicSpinner />
                        </LoadingSpinner>
                    )}
                    <ModalText>{isLoading ? 'Поиск...' : 'Данные появятся после ввода никнейма...'}</ModalText>
                    <ModalButton>Войти</ModalButton>
                </ModalContent>
            </LoginModal>
        </>
    );
};

export default Header;
