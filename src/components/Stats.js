import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaDiscord, FaVk, FaTelegramPlane } from 'react-icons/fa';
import AtomicSpinner from 'atomic-spinner';
import Photo from "../assets/img/logo.svg";
import Bonus from "../assets/img/BonusIcon.svg";
import FAQ from "../assets/img/FAQIcon.svg";
import Buy from "../assets/img/BuyRobuxIcon.svg";
import Purchase from "../assets/img/MyPurchasesIcon.svg";
import env from 'react-dotenv';

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
    ${tw`flex flex-wrap justify-center mt-4`}
`;

const UserCard = styled.div`
    ${tw`flex items-center p-4 rounded-lg bg-[#2A263B] cursor-pointer transition-colors m-2`}
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

const LoggedInUserInfo = styled.div`
    ${tw`flex items-center space-x-3`}
`;

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    
    const handleUserCheck = async (nickname) => {
        if (nickname.length < 3) {
            setUsers([]);
            setError('Nickname must be at least 3 characters long');
            return;
        }

        setIsLoading(true);
        setError('');
        try {
            const response = await fetch(`${window.env.BACKEND_HOST}/api/search/player/${encodeURIComponent(inputValue)}`);
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

    useEffect(() => {
      // Устанавливаем задержку перед выполнением действия
      const handler = setTimeout(() => {
        setDebouncedValue(inputValue);
      }, 500); // Задержка в 500 мс
  
      // Очищаем таймаут при изменении inputValue
      return () => {
        clearTimeout(handler);
      };
    }, [inputValue]);
  
    // Этот useEffect будет вызываться только при изменении debouncedValue
    useEffect(() => {
      if (debouncedValue) {
        console.log('Выполняем поиск по:', debouncedValue);
        handleUserCheck(debouncedValue)
      }
    }, [debouncedValue]);

    let debounceTimeout;

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    const closeLoginOnOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            toggleLogin();
        }
    };


    const handleLogin = (user) => {
        setLoggedInUser(user);
        setShowLogin(false);
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
                        {loggedInUser ? (
                            <LoggedInUserInfo>
                                <UserAvatar src={loggedInUser.avatar_url} alt={loggedInUser.name} />
                                <span style={{color: "white"}}>{loggedInUser.name}</span>

                                <div style={{
                                    backgroundColor: "#273445", 
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "10px", 
                                    borderRadius: "5px", 
                                    cursor: "pointer", 
                                }} onClick={() => { 
                                    setLoggedInUser(null)
                                }}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93499 2.48889C7.48227 1.45737 9.51467 2.40305 9.81611 4.1399H12.8333C14.2255 4.1399 15.3541 5.26852 15.3541 6.66074C15.3541 7.04043 15.0463 7.34824 14.6666 7.34824C14.2869 7.34824 13.9791 7.04043 13.9791 6.66074C13.9791 6.02791 13.4661 5.5149 12.8333 5.5149H9.85413V16.9732H12.8333C13.4661 16.9732 13.9791 16.4602 13.9791 15.8274C13.9791 15.4477 14.2869 15.1399 14.6666 15.1399C15.0463 15.1399 15.3541 15.4477 15.3541 15.8274C15.3541 17.2196 14.2255 18.3482 12.8333 18.3482H9.81611C9.51467 20.0851 7.48227 21.0308 5.93499 19.9992L4.10165 18.777C3.40036 18.3095 2.97913 17.5224 2.97913 16.6796V5.80857C2.97913 4.96573 3.40036 4.17864 4.10165 3.71111L5.93499 2.48889ZM16.0138 13.3194C15.7453 13.0509 15.7453 12.6156 16.0138 12.3471L16.6735 11.6874L11.9166 11.6874C11.5369 11.6874 11.2291 11.3796 11.2291 10.9999C11.2291 10.6202 11.5369 10.3124 11.9166 10.3124L16.6735 10.3124L16.0138 9.6527C15.7453 9.38422 15.7453 8.94891 16.0138 8.68043C16.2823 8.41194 16.7176 8.41194 16.9861 8.68043L18.1712 9.86558C18.7977 10.492 18.7977 11.5077 18.1712 12.1342L16.9861 13.3194C16.7176 13.5879 16.2823 13.5879 16.0138 13.3194Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </LoggedInUserInfo>
                        ) : (
                            <>
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
                            </>
                        )}
                    </ButtonArea>
                </HeaderWrapper>
            </HeaderContainer>
            <div style={{ height: '80px' }} />

            <LoginModal $show={showLogin} onClick={closeLoginOnOutsideClick}>
                <ModalContent>
                    <CloseButton onClick={toggleLogin}>&times;</CloseButton>
                    <ModalTitle>Войти</ModalTitle>
                    <LabelText>Введите свой никнейм</LabelText>
                    <ModalInput
                        type="text"
                        placeholder="Введите никнейм"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
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
                                        <UserName>{user.name}</UserName>
                                        <UserUsername>@{user.name}</UserUsername>
                                    </UserInfo>
                                </UserCard>
                            ))}
                        </UserCardContainer>
                    )}
                    {error && <ModalText>{error}</ModalText>}
                    {!isLoading && users.length === 0 && !error && <ModalText>Данные появятся после ввода никнейма...</ModalText>}
                    <ModalButton onClick={() => handleLogin(users[0])}>Войти</ModalButton>
                </ModalContent>
            </LoginModal>
        </>
    );
};

export default Header;
