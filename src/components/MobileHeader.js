import React, { useState, useEffect } from 'react';
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
import Exit from "../assets/img/Exit.svg";


const HeaderContainer = styled.header`
    background-color: #1a1a1a;
    ${tw`py-2 top-0 w-full z-50`}
`;

const HeaderWrapper = styled.div`
    ${tw`container mx-auto flex items-center justify-between`}
    padding-left: 1rem;
    padding-right: 1rem;
    @media (max-width: 768px) {
        ${tw`px-4 flex-row items-center justify-between`}
    }
`;
const StyledLink = styled(RouterLink)`
    ${tw`text-lg`}
    color: white; // Белый цвет для ссылок
    text-decoration: none;

    &:hover {
        color: #ffffff; // Цвет при наведении
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
    background: linear-gradient(to right, rgb(108, 99, 163), rgba(59, 130, 246, 0.5));
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
    ${tw`z-50`}
    position: fixed;
    top: 0;
    right: ${({ show }) => (show ? '0' : '-100%')};
    width: 80%;
    height: 100vh;
    backdrop-filter: blur(7px);
    background-color: rgba(26, 26, 26, 0.95); /* Улучшаем вид фона */
    padding: 40px 20px;
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
        color: #ffffff;
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
const IconStyle = {
    color: 'white', // Задаем цвет иконок
    fontSize: '24px', // Размер иконок, можете настроить по желанию
};

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
    background:#313131; // Your modal's background color
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
    background-color: #313131 !important;
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

const ModalButton = styled.button`
    ${tw`w-full py-4 rounded-lg mt-5 font-bold border-none cursor-pointer`}
    background: linear-gradient(to right, rgb(108, 99, 163), rgba(59, 130, 246, 0.5));
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

const HeaderUserCardContainer = styled.div`
    ${tw`flex items-center space-x-4`}; /* Контейнер для аватара и имени в хедере */
`;

const HeaderUserAvatarContainer = styled.div`
    ${tw`overflow-hidden`}; /* Стили для круглого аватара */
    width: 40px;
    height: 40px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

const HeaderUserNameContainer = styled.div`
    ${tw`flex items-center space-x-3`}; /* Добавлен space-x-3 для увеличения отступа между аватаром и именем */
`;

const HeaderExitIconContainer = styled.div`
    ${tw`flex items-center justify-center cursor-pointer`}; /* Контейнер для иконки */
    background-color: #4a4a4a; /* Цвет фона по умолчанию */
    padding: 5px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #6a6a6a; /* Цвет фона при наведении */
    }
`;

const HeaderExitIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const UserCardContainer = styled.div`
    ${tw`flex flex-wrap justify-center mt-4`};
    max-height: 300px; /* Ограничиваем высоту контейнера карточек */
    overflow-y: auto; /* Включаем вертикальную прокрутку */
    padding-right: 8px; /* Добавляем отступ для скролла */
    width: 100%; /* Для адаптивности */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const UserCard = styled.div`
    ${tw`flex items-center p-4 rounded-lg bg-[#2A263B] cursor-pointer transition-colors m-2`}
    &:hover {
        background-color: #3C3555;
    }
    width: 120px; /* Фиксируем ширину карточки */
    text-align: center;
`;

const UserAvatar = styled.img`
    ${tw`w-12 h-12 rounded-full`}
    margin-right: 8px;
`;

const UserInfo = styled.div`
    ${tw`flex flex-col`}
    justify-content: center;
    text-align: center;
`;

const UserName = styled.span`
    ${tw`text-white text-sm font-bold`}
`;

const UserUsername = styled.span`
    ${tw`text-gray-400 text-xs`}
`;

const MobileHeader = ({ handleLogout, loggedInUser, setLoggedInUser }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
    const [showLogin, setShowLogin] = useState(false); // Login modal state
    const [nickname, setNickname] = useState(''); // Nickname input state
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [users, setUsers] = useState([]); // Users data
    const [debouncedValue, setDebouncedValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const [dropdowns, setDropdowns] = useState({
        buy: false,
        purchase: false,
        faq: false,
        bonus: false,
    }); // Dropdowns state

    const handleUserCheck = async (nickname) => {
        if (nickname.length < 3) return; // Проверяем, что введено хотя бы 3 символа
        setIsLoading(true);
        setError('');
        try {
            const response = await fetch(`${window.env.BACKEND_HOST}/api/search/player/${encodeURIComponent(nickname)}`);
            const data = await response.json();

            if (response.ok && data && Array.isArray(data)) {
                setUsers(data.slice(0, 10));
            } else {
                setUsers([]);
                setError('No users found or API error');
            }
        } catch (error) {
            setError('Error fetching user data');
        } finally {
            setIsLoading(false);
        }
    };
    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogin = (user) => {
        setLoggedInUser(user);
        setShowLogin(false);

        // Сохраняем информацию о пользователе в localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
    };

    // Toggle login modal visibility
    const toggleLogin = (e) => {
        if (e.target === e.currentTarget) {
            setShowLogin(!showLogin);
        }
    };

    // Toggle dropdown visibility
    const toggleDropdown = (item) => {
        setDropdowns({
            ...dropdowns,
            [item]: !dropdowns[item],
        });
    };

    // Handle input change for nickname
    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        console.log("Current nickname: ", value); // Log the nickname
        setNickname(value);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500); // Задержка в 500 мс

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    useEffect(() => {
        if (debouncedValue) {
            handleUserCheck(debouncedValue);
        }
    }, [debouncedValue]);

    // Simulate fetching users (API call logic can be inserted here)
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/users'); // Replace with actual API endpoint
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, [nickname]);

    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <LogoArea>
                        <StyledLink to="/"> {/* Link to home page */}
                            <LogoImage src={RobuxIconSrc} alt="Robux Logo" />
                        </StyledLink>
                        <MenuIcon src={MenuIconSrc} alt="Menu Icon" onClick={toggleSidebar} />
                    </LogoArea>
                    <IconArea>
                        <IconLink href="#">
                            <FaDiscord style={IconStyle}/>
                        </IconLink>
                        <IconLink href="#">
                            <FaTelegramPlane style={IconStyle} />
                        </IconLink>
                        {loggedInUser ? (
                                <HeaderUserCardContainer>
                                    <HeaderUserAvatarContainer>
                                        <img src={loggedInUser.avatar_url} alt={loggedInUser.name} />
                                    </HeaderUserAvatarContainer>
                                    <HeaderUserNameContainer>
                                        <span style={{ color: "white", fontWeight: "bold" }}>{loggedInUser.name}</span>
                                    </HeaderUserNameContainer>
                                    <HeaderExitIconContainer onClick={() => setLoggedInUser(null)}>
                                        <HeaderExitIcon src={Exit} alt="Exit" />
                                    </HeaderExitIconContainer>
                                </HeaderUserCardContainer>
                            ) : (
                            <><LoginButton onClick={toggleLogin}>Войти</LoginButton></>)}
                    </IconArea>
                </HeaderWrapper>
            </HeaderContainer>

            {/* Sidebar */}
            <Sidebar show={sidebarOpen}>
                <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
                <NavList>
                    {/* Buy Dropdown */}
                    <NavItem>
                        <NavLink onClick={() => toggleDropdown('buy')}>
                            <span>
                                <img src={Buy} alt="Buy Robux" /> Покупка робуксов
                            </span>
                        </NavLink>

                    </NavItem>

                    {/* Purchase Dropdown */}
                    <NavItem>
                        <NavLink as={StyledLink} to="/Mytransfer" onClick={(e) => {
                            toggleDropdown('purchase');
                            e.preventDefault(); // Прекращает стандартное поведение, чтобы выполнить логику и затем перейти по ссылке
                            window.location.href = '/Mytransfer'; // Программно задаем переход
                        }}>
        <span>
            <img src={Purchase} alt="Мои покупки" /> Мои покупки
        </span>
                        </NavLink>
                    </NavItem>


                    {/* FAQ Link */}
                    <NavItem>
                        <NavLink>
                            <StyledLink to="/faq">
                                <span>
                                    <img src={FAQ} alt="FAQ" /> FAQ
                                </span>
                            </StyledLink>
                        </NavLink>
                    </NavItem>

                    {/* Bonus Dropdown */}
                    <NavItem>
                        <NavLink onClick={() => toggleDropdown('bonus')}>
                            <span>
                                <img src={Bonus} alt="Бонусы" /> Бонусы
                            </span>
                            <DropdownIcon>{dropdowns.bonus ? <FiChevronUp /> : <FiChevronDown />}</DropdownIcon>
                        </NavLink>
                        <DropdownContent isOpen={dropdowns.bonus}>
                            <li>
                                <StyledLink to="/BonusPage"> {/* Free Robux page */}
                                    Бесплатные робуксы
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="https://t.me/robuxio/27"> {/* Telegram link */}
                                    Telegram
                                </StyledLink>
                            </li>
                        </DropdownContent>
                    </NavItem>
                </NavList>

                {/* Social Links */}

            </Sidebar>

            {/* Login Modal */}
            <LoginModal $show={showLogin} onClick={toggleLogin}>
                <ModalContent onClick={(e) => e.stopPropagation()}> {/* Prevent closing on input click */}
                    <CloseModalButton onClick={toggleLogin}>&times;</CloseModalButton>
                    <ModalTitle>Войти</ModalTitle>
                    <LabelText>Введите свой никнейм</LabelText>
                    <ModalInput
                        type="text"
                        placeholder="Введите никнейм"
                        value={inputValue}
                        onChange={ (e) => setInputValue(e.target.value)}
                    />
                    {isLoading && (
                        <LoadingSpinner>
                            <AtomicSpinner />
                        </LoadingSpinner>
                    )}
                    {!isLoading && users.length > 0 && (
                        <UserCardContainer>
                            {users.map((user) => (
                                <UserCard key={user.id} onClick={() => handleLogin(user)}>
                                    <UserAvatar src={user.avatar_url} alt={user.name} />
                                    <UserInfo>
                                        <UserName>{user.name.length > 8 ? user.name.slice(0, 8) + ".." : user.name}</UserName>
                                        <UserUsername>@{user.name.length > 8 ? user.name.slice(0, 8) + ".." : user.name}</UserUsername>
                                    </UserInfo>
                                </UserCard>
                            ))}
                        </UserCardContainer>
                    )}
                    <ModalText>Данные появятся после ввода никнейма...</ModalText>
                    <ModalButton>Войти</ModalButton>
                </ModalContent>
            </LoginModal>
        </>
    );
};

export default MobileHeader;