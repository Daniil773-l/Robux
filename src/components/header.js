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
    ${tw`bg-[rgb(11,35,22)] py-4 fixed top-0 w-full z-50`}
    @media (max-width: 768px) {
    ${tw`py-3`}
}
`;

const HeaderWrapper = styled.div`
    ${tw`container mx-auto flex items-center justify-between`}
    padding-left: 2rem;
    padding-right: 2rem;

    @media (max-width: 1024px) {
        ${tw`px-4`}
    }
    @media (max-width: 768px) {
        ${tw`px-2 flex-col items-start`}
    }
`;

const LogoArea = styled.div`
    ${tw`flex items-center gap-5 ml-12`}
    @media (max-width: 768px) {
    ${tw`ml-0`}
}
`;

const LogoLink = styled.a`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    ${tw`h-10`}
    @media (max-width: 768px) {
    ${tw`h-8`}
}
`;

const Nav = styled.nav`
    ${tw`flex items-center`}
    @media (max-width: 768px) {
    ${tw`flex-col w-full mt-4`}
}
`;

const NavList = styled.ul`
    ${tw`flex space-x-6 list-none`}
    @media (max-width: 768px) {
    ${tw`space-x-0 w-full flex-col space-y-2`}
}
`;

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

    @media (max-width: 768px) {
        ${tw`text-sm justify-center w-full`}
        text-align: center;
        padding: 10px 0;
    }
`;

const IconArea = styled.div`
    ${tw`flex items-center space-x-3 text-lg`}
    @media (max-width: 768px) {
    ${tw`w-full justify-center mt-4`}
}
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

    @media (max-width: 768px) {
        ${tw`w-full mt-4`}
    }
`;

const ButtonArea = styled.div`
    ${tw`flex items-center space-x-6 mr-16`}
    @media (max-width: 768px) {
    ${tw`w-full justify-center mt-4 space-x-0 flex-col`}
}
`;

const LoginModal = styled.div`
    ${tw`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
    display: ${({ $show }) => ($show ? 'flex' : 'none')};
`;

const ModalContent = styled.div`
    ${tw`p-8 rounded-lg shadow-lg text-white relative`}
    background:#015c2b;
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
    margin-top: -12px;
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
    filter: brightness(115%);
    &::placeholder {
        color: #6f7489;
    }
`;

const ModalText = styled.p`
    ${tw`mt-3 text-center`}
    color: #ffffff;
    font-size: 14px;
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

const LoadingSpinner = styled.div`
    ${tw`flex justify-center mt-5`}
    svg {
        width: 70px;
        height: 70px;
    }
`;

const UserCardContainer = styled.div`
    ${tw`flex justify-center mt-4`}
`;

const UserCard = styled.div`
    ${tw`flex items-center p-4 rounded-lg bg-[#2A263B] cursor-pointer transition-colors`}
    margin-right: 16px;
    &:hover {
        background-color: #3C3555;
    }
`;

const UserAvatar = styled.img`
    ${tw`w-12 h-12 rounded-full`}
    margin-right: 8px;
`;

const UserInfo = styled.div`
    ${tw`flex flex-col`}
`;

const UserName = styled.span`
    ${tw`text-white text-sm font-bold`}
`;

const UserUsername = styled.span`
    ${tw`text-gray-400 text-xs`}
`;

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [nickname, setNickname] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nicknameValid, setNicknameValid] = useState(null);
    const [users, setUsers] = useState([]); // Начальное значение — пустой массив

    const cache = {}; // Кэш определен в пределах компонента

    let timeoutId;

    const apiKey = process.env.REACT_APP_API_KEY;

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    const closeLoginOnOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            toggleLogin();
        }
    };

    const handleUserCheck = async () => {
        if (!nickname || nickname.length === 0) {
            console.error('User ID is empty or invalid');
            return;
        }

        if (cache[nickname]) {
            setUsers(cache[nickname]);
            setNicknameValid(true);
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/api/proxy?user=${encodeURIComponent(nickname)}`);
            const data = await response.json();

            if (response.ok) {
                console.log('API Response:', data);
                cache[nickname] = data; // Cache the result
                setUsers([data]);
                setNicknameValid(true);
            } else {
                console.error('API Error:', data.errors || 'Unknown Error');
                setNicknameValid(false);
            }
        } catch (error) {
            console.error('Error during request:', error.message);
            setNicknameValid(false);
        }
    };

    const handleInputChange = (e) => {
        const userInput = e.target.value.trim();
        setNickname(userInput);
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            handleUserCheck(); // Запускаем проверку после задержки
        }, 500); // Debounce delay
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

            <LoginModal $show={showLogin} onClick={closeLoginOnOutsideClick}>
                <ModalContent>
                    <CloseButton onClick={toggleLogin}>&times;</CloseButton>
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
                        <UserCardContainer>
                            {users.map((user) => (
                                <UserCard key={user.id}>
                                    <UserAvatar src={`https://www.roblox.com/headshot-thumbnail/image?userId=${user.id}&width=150&height=150&format=png`} alt={user.name} />
                                    <UserInfo>
                                        <UserName>{user.name}</UserName>
                                        <UserUsername>@{user.username}</UserUsername>
                                    </UserInfo>
                                </UserCard>
                            ))}
                        </UserCardContainer>
                    )}
                    <ModalText>{isLoading ? 'Поиск...' : 'Данные появятся после ввода никнейма...'}</ModalText>
                    <ModalButton>Войти</ModalButton>
                </ModalContent>
            </LoginModal>
        </>
    );
};

export default Header;
