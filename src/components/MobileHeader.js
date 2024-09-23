import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import RobuxIconSrc from '../assets/img/MainRobuxIcon.svg'; // Your Robux icon
import MenuIconSrc from '../assets/img/MenuIcon.png';
import Bonus from "../assets/img/BonusIcon.svg";
import FAQ from "../assets/img/FAQIcon.svg";
import Buy from "../assets/img/BuyRobuxIcon.svg";
import Purchase from "../assets/img/MyPurchasesIcon.svg";
import AtomicSpinner from 'atomic-spinner';

const HeaderContainer = styled.header`
    ${tw`bg-[rgb(11,35,22)] py-2 top-0 w-full z-50`}
    overflow-x: hidden; 
`;

const HeaderWrapper = styled.div`
    ${tw`container mx-auto flex items-center justify-between`}
    padding-left: 1rem;
    padding-right: 1rem;
    @media (max-width: 768px) {
        ${tw`px-2 flex-row items-center justify-between`}
    }
`;

const StyledLink = styled(RouterLink)`
    ${tw`text-lg`} // You can add tw utility classes here if necessary
    color: white; // Set the default color for the link
    text-decoration: none; // Remove the underline
    &:hover {
        color: #4caf50; // Set the hover color to a different shade
    }
`;

const LogoArea = styled.div`
    ${tw`flex items-center space-x-2`}
`;

const LogoImage = styled.img`
    ${tw`h-12 ml-2`}
`;

const MenuIcon = styled.img`
    width: 26px;
    cursor: pointer;
    padding-left: 8px;
`;

const IconArea = styled.div`
    ${tw`flex items-center space-x-4 `}
    margin-right: 10%;
`;

const IconLink = styled.a`
    color: #4caf50;
    font-size: 24px;
    transition: color 0.3s ease;
    &:hover {
        color: #81c784;
    }
`;

const LoginButton = styled.button`
    ${tw`text-white px-3 py-2 rounded-md text-sm font-bold mb-4`}
    background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);
    transition: opacity 0.3s ease-in-out;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    &:hover {
        opacity: 0.9;
    }
    margin-left: 8px;

    @media (max-width: 768px) {
        ${tw`w-full mt-4`}
    }
`;

const Sidebar = styled.div`
    ${tw`z-50 bg-transparent`}
    position: fixed;
    top: 0;
    right: ${({ show }) => (show ? '0' : '-100%')};
    width: 250px;
    height: 100vh;
    overflow: hidden; 
    backdrop-filter: blur(7px);
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    transition: right 0.3s ease-in-out;
`;


const CloseButton = styled.span`
    font-size: 24px;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
`;

const NavList = styled.ul`
    ${tw`flex flex-col space-y-4 list-none mt-8`}
`;

const NavItem = styled.li`
    ${tw`relative flex flex-col items-start w-full text-white cursor-pointer`}
`;

const NavLink = styled.div`
    ${tw`flex justify-between items-center w-full text-lg py-2`}
    &:hover {
        color: #4caf50;
    }
`;

const DropdownContent = styled.ul`
    ${tw`flex flex-col w-full space-y-2 pl-4 pt-2`}
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease;
    li {
        list-style: none;
        padding-top: 8px;
    }
`;

const DropdownIcon = styled.span`
    ${tw`mr-12`}
`;

const SocialLinks = styled.div`
    ${tw`flex flex-col items-start ml-8 mt-8 w-full`}
`;

const SocialIcons = styled.div`
    ${tw`flex items-center space-x-8`}
`;

const SocialLabel = styled.span`
    ${tw`text-white text-sm`}
`;

const LoginModal = styled.div`
    ${tw`fixed inset-0 z-50`}
    display: ${({ $show }) => ($show ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5); // Ensures the modal background covers the entire screen with semi-opacity
`;

const ModalContent = styled.div`
    ${tw`rounded-lg shadow-lg relative text-white`}
    background: #015c2b; // Your modal's background color
    border-radius: 24px;
    width: auto; // Adjust width as needed
    padding: 20px; // Adjust padding as needed
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CloseModalButton = styled.button`
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
`;

const LabelText = styled.p`
    ${tw`text-sm mb-2`}
    font-weight: 500;
    color: #8990a9;
`;

const ModalInput = styled.input`
    ${tw`w-full p-3 rounded-lg border-none mt-2 text-white`}
    background-color: #038741 !important;
    width: 95%;
    font-size: 18px;
    font-weight: 500;
    height: 30px;
    border: none;
    border-radius: 12px;
    &::placeholder {
        color: #6f7489;
    }
`;

const ModalButton = styled.button`
    ${tw`w-full py-4 rounded-lg mt-5 font-bold border-none cursor-pointer`}
    background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);
    color: #fff;
    font-size: 16px;
    opacity: 0.5;
    &:hover {
        opacity: 0.9;
    }
`;

const ModalText = styled.p`
    ${tw`mt-3 text-center`}
    color: #ffffff;
    font-size: 14px;
`;

const LoadingSpinner = styled.div`
    ${tw`flex justify-center mt-5`}
    svg {
        width: 70px;
        height: 70px;
    }
`;

const MobileHeader = ({ loggedInUser, handleLogout }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [nickname, setNickname] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [dropdowns, setDropdowns] = useState({
        buy: false,
        purchase: false,
        faq: false,
        bonus: false,
    });

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleLogin = (e) => {
        if (e.target === e.currentTarget) {
            setShowLogin(!showLogin);
        }
    };

    const toggleDropdown = (item) => {
        setDropdowns({
            ...dropdowns,
            [item]: !dropdowns[item],
        });
    };

    const handleInputChange = (e) => {
        setNickname(e.target.value.trim());
    };

    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <LogoArea>
                        <StyledLink to="/"> {/* Добавляем ссылку на домашнюю страницу */}
                            <LogoImage src={RobuxIconSrc} alt="Robux Logo" />
                        </StyledLink>
                        <MenuIcon src={MenuIconSrc} alt="Menu Icon" onClick={toggleSidebar} />
                    </LogoArea>
                    <IconArea>
                        <IconLink href="#">
                            <FaDiscord />
                        </IconLink>
                        <IconLink href="#">
                            <FaTelegramPlane />
                        </IconLink>
                        <LoginButton onClick={toggleLogin}>Войти</LoginButton>
                    </IconArea>
                </HeaderWrapper>
            </HeaderContainer>

            <Sidebar show={sidebarOpen}>
                <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
                <NavList>
                    <NavItem>
                        <NavLink onClick={() => toggleDropdown('buy')}>
                            <span>
                                <img src={Buy} alt="Buy Robux" /> Покупка робуксов
                            </span>
                            <DropdownIcon>{dropdowns.buy ? <FiChevronUp /> : <FiChevronDown />}</DropdownIcon>
                        </NavLink>
                        <DropdownContent isOpen={dropdowns.buy}>
                            <li>
                                <StyledLink to="/"> {/* Ссылка на страницу покупки */}
                                    Game Pass
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/"> {/* Ссылка на страницу плагина */}
                                    Plugin Method
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/"> {/* Ссылка на страницу подарочных карт */}
                                    Gift Cards
                                </StyledLink>
                            </li>
                        </DropdownContent>
                    </NavItem>

                    <NavItem>
                        <NavLink onClick={() => toggleDropdown('purchase')}>
                            <span>
                                <img src={Purchase} alt="Мои покупки" /> Мои покупки
                            </span>
                            <DropdownIcon>{dropdowns.purchase ? <FiChevronUp /> : <FiChevronDown />}</DropdownIcon>
                        </NavLink>
                        <DropdownContent isOpen={dropdowns.purchase}>
                            <li>
                                <StyledLink to="/"> {/* Ссылка на страницу покупок */}
                                    Скоро
                                </StyledLink>
                            </li>
                        </DropdownContent>
                    </NavItem>

                    <NavItem>
                        <NavLink>
                            <StyledLink to="/faq">
                                <span>
                                    <img src={FAQ} alt="FAQ" /> FAQ
                                </span>
                            </StyledLink>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink onClick={() => toggleDropdown('bonus')}>
                            <span>
                                <img src={Bonus} alt="Бонусы" /> Бонусы
                            </span>
                            <DropdownIcon>{dropdowns.bonus ? <FiChevronUp /> : <FiChevronDown />}</DropdownIcon>
                        </NavLink>
                        <DropdownContent isOpen={dropdowns.bonus}>
                            <li>
                                <StyledLink to="/BonusPage"> {/* Ссылка на страницу бесплатных робуксов */}
                                    Бесплатные робуксы
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/promo-codes"> {/* Ссылка на страницу с промокодами */}
                                    Промокод: ROBUX10
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="https://t.me/robuxio/27"> {/* Ссылка на страницу Telegram */}
                                    Telegram
                                </StyledLink>
                            </li>
                        </DropdownContent>
                    </NavItem>
                </NavList>

                <SocialLinks>
                    <SocialIcons>
                        <IconLink href="#">
                            <FaDiscord />
                        </IconLink>
                        <IconLink href="#">
                            <FaTelegramPlane />
                        </IconLink>
                    </SocialIcons>
                    <SocialLabel>Discord | Telegram</SocialLabel>
                </SocialLinks>
            </Sidebar>

            <LoginModal $show={showLogin} onClick={toggleLogin}>
                <ModalContent onClick={(e) => e.stopPropagation()}> {/* Prevent closing on input click */}
                    <CloseModalButton onClick={toggleLogin}>&times;</CloseModalButton>
                    <ModalTitle>Войти</ModalTitle>
                    <LabelText>Введите свой никнейм</LabelText>
                    <ModalInput
                        type="text"
                        placeholder="Введите никнейм"
                        value={nickname}
                        onChange={handleInputChange}
                    />
                    {isLoading && (
                        <LoadingSpinner>
                            <AtomicSpinner />
                        </LoadingSpinner>
                    )}
                    {!isLoading && users.length > 0 && (
                        <div>
                            {users.map((user) => (
                                <div key={user.id}>
                                    <img src={`https://www.roblox.com/headshot-thumbnail/image?userId=${user.id}&width=150&height=150&format=png`} alt={user.name} />
                                    <span>{user.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    <ModalText>Данные появятся после ввода никнейма...</ModalText>
                    <ModalButton>Войти</ModalButton>
                </ModalContent>
            </LoginModal>
        </>
    );
};

export default MobileHeader;