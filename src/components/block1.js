import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import DragonImage from '../assets/img/char2.png';
import Robux from '../assets/img/RobuxIcon.svg';
import Sign from '../assets/img/Sign.svg';
import sphere from '../assets/img/sphere-one.png';
import coin from '../assets/img/04.png';
import smallcoin from '../assets/img/05.png';
import biggercoin from '../assets/img/BiggerCoin.png';
import ArrowIcon from '../assets/img/ArrowIcon.svg'; // Import the arrow icon
import Robuxmini from '../assets/img/ROBUXMINI.SVG';
import ClockIcon from '../assets/img/clock.svg';
import Star from '../assets/img/star.svg'
import AtomicSpinner from "atomic-spinner";
// Define keyframes for the fade-in and move-up animation
const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Define keyframes for the jumping animation
const jumpAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
`;

const ScrollWrapper = styled.div`
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #1a1a1a; /* Цвет фона скроллбара */
  }

  /* Цвет бегунка (ползунка) */
    &::-webkit-scrollbar-thumb {
    background-color: #90ee90; /* Светло-зелёный цвет бегунка */
    border-radius: 10px; /* Скругление краев */
  }

    &::-webkit-scrollbar-thumb:hover {
    background-color: #77dd77; /* Более насыщенный зеленый при наведении */
  }

    &::-webkit-scrollbar-track {
    background-color: #1a1a1a; /* Цвет фона */
  }
`;

const Content = styled.div`
  height: 600px; /* Пример контента, чтобы появился скроллбар */
  background-color: #2a2a2a;
  color: white;
`;

const BannerArea = styled.div`
    ${tw`relative`}
    background: rgb(11,35,22);
    padding-left: 50px;
    padding-right: 30px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        height: auto;
        padding-top: 20px;
    }
`;

const MainChar = styled.img`
    ${tw`absolute`}
    height: 600px;
    right: 0;
    z-index: 1;
    margin-top: 70px;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const TitleArea = styled.div`
    ${tw`w-full text-center mb-8`}
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const Title = styled.h2`
    ${tw`text-4xl font-bold text-white`}
    margin-bottom: 10px !important;
    font-size: 54px;
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        font-size: 36px;
        padding-top: 50px;
    }
`;

const Exchange = styled.h2`
    ${tw`text-2xl text-white`}
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    font-weight: 600;
    line-height: 1.2;
    font-size: 30px;
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Subtitle = styled.h2`
    ${tw`text-3xl font-bold text-white`}
    margin-bottom: 0px !important;
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const TitleLine = styled.div`
    ${tw`inline-block relative w-full text-center flex items-center justify-center`}
    margin: auto;
    @media (max-width: 768px) {
    flex-direction: column;
}
`;

const Word = styled.div`
    ${tw`ml-2 inline-block text-4xl font-bold`}
    transform: translate(0px, 0%);
    font-size: 54px;
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        font-size: 28px;
        margin: 0;
    }
`;

const GreenText = styled(Word)`
    ${tw`text-4xl font-bold`}
    color: #77d241;
    font-size: 54px;
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

const CurrencyIcon = styled.img`
    margin-left: 8px;
    width: 35px;
    height: 35px;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 10px;
    }
`;

const SubTitle = styled.h4`
    ${tw`text-lg font-semibold block text-white`}
    font-family: Manrope;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;
const PlaceImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;
const InfoButton = styled.div`
    ${tw`relative inline-block ml-2`}
`;

const InfoTooltip = styled.div`
    ${tw`absolute hidden text-4xl`}
    letter-spacing: 1px;
`;

const InfoIcon = styled.img`
    ${tw`ml-2 mt-4`}
    width: 18px;
    height: 18px;
`;

const NavContainer = styled.div`
    ${tw`mt-4 flex justify-center `}
    background-color: #015c2b !important;
    border-radius: 16px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 10px;
    }
`;

const NavButton = styled.button`
    ${tw`py-3 m-2 w-full text-white rounded-lg font-semibold`}
    background: ${({ active }) => (active ? '#418756' : '#015c2b')};
    cursor: pointer;
    border: none;
    border-radius: 16px;
    color: #9aa7b9;
    font-size: 14px;
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        margin: 5px 0;
        padding: 10px;
        font-size: 12px;
    }
`;

const SaleContainer = styled.div`
    ${tw`relative z-10`}
    max-width: 450px;
    width: 100%;

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 20px;
    }
`;

const PricingArea = styled.div`
    ${tw` p-6 rounded-lg shadow-lg bg-[rgb(1, 92, 43)]`}

    border: none;
    border-radius: 24px;
    min-height: 450px; /* Ensure the form maintains a static height */

    @media (max-width: 768px) {
        padding: 20px;
        min-height: auto;
    }
`;

const StepCaption = styled.div`
    ${tw`mt-3 text-white flex justify-between items-center`}
    font-size: 1.1em;

    @media (max-width: 768px) {
        font-size: 14px;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const AvailabilityText = styled.span`
    ${tw` ml-2 mb-4 font-medium`}
    margin-left: 15px;
color: rgb(119, 210, 65);
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const BuyForm = styled.div`
    ${tw`flex flex-col space-y-8`}

    @media (max-width: 768px) {
    space-y-6;
}
`;

const InputBlock = styled.div`
    ${tw`flex flex-col space-y-4`} /* Increased spacing between label and input */
    margin-bottom: 24px;

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const InputWrapper = styled.div`
    ${tw`w-full`}
`;

const StyledLabel = styled.label`
    ${tw`text-white font-semibold mb-3`}
    font-size: 1.1em;

    @media (max-width: 768px) {
        font-size: 14px;
     
    }
`;

const SecondStyledLabel = styled.label`
    ${tw`font-semibold mb-4`}
    font-size: 1.1em;
    padding-bottom: 10px;
    color: #79889c;
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const StyledInput = styled.input`
    ${tw`w-full p-4 rounded bg-gray-700 text-white border-none`}
    font-size: 1.1em;
    width: 90%;
    border-radius: 12px;
    background-color:#013d1d !important;
    filter: brightness(115%);
    padding-right: 20px;
    appearance: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    -moz-appearance: textfield;

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 14px;
    }
`;


const SecondStyledInput = styled.input`
    ${tw`w-full p-4 rounded bg-gray-700 text-white border-none mt-4`}
    font-size: 1.1em;
    width: 90%;
    border-radius: 12px;
    background-color:#013d1d!important;
    filter: brightness(115%);
    padding-right: 20px;
    appearance: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    -moz-appearance: textfield;

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 14px;
    }
`;

const BackButtonContainer = styled.div`
    ${tw`flex items-center mb-4 cursor-pointer`}

    @media (max-width: 768px) {
    margin-bottom: 10px;
}
`;

const BackButtonIcon = styled.img`
    ${tw`mr-2`}
    width: 24px;
    height: 24px;

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`;

const BackButtonText = styled.span`
    ${tw`text-white text-lg`}

    @media (max-width: 768px) {
    font-size: 14px;
}
`;

const BuyButton = styled.button`
    ${tw`bg-purple-500 text-white rounded py-3 rounded`}
    font-size: 1.1em;
    border: none;
    background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);
    border-radius: 12px;
    cursor: pointer; 
    &:disabled {

        cursor: not-allowed;
    }

    &:hover { 
        background: linear-gradient(75.7deg, rgb(45, 140, 50) 3.8%, rgb(110, 172, 27) 87.1%);
    }

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 14px;
    }
`;

const StyledPlace = styled.div`
    ${tw`flex items-center p-4 rounded-lg bg-[#2A263B] cursor-pointer transition-colors m-2`}
    &:hover {
        background-color: #6eaa5e;
    }
    background-color: rgb(1 92 43);
    display: flex;
    text-align: center;
`;

const PlaceTitle = styled.div`
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: center;
`;

const PromoLink = styled.a`
    ${tw`mt-3 text-green-300 text-center cursor-pointer`}
    font-size: 1.1em;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const PurpleLineContainer = styled.div`
    ${tw`mx-auto my-4 cursor-pointer`}
    width: 100%;
    max-width: 50px;

    @media (max-width: 768px) {
        margin: 10px auto;
    }
`;

const PurpleLine = styled.div`

    background-color: #77D241;
    ${tw`rounded h-1`}
`;


const TelegramContainer = styled.div`
    max-height: ${({ isVisible }) => (isVisible ? '60px' : '0')};
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
`;

const TelegramLink = styled.a`
    ${tw`block text-center text-white mt-4`}
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transition: opacity 0.5s ease-in-out;
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const MinRobuxText = styled.p`
    ${tw`text-white`}
    font-size: 0.9em;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Sphere = styled.img`
    width: 4%;
    position: absolute;
    left: 14%;
    bottom: 70%;
    animation: ${jumpAnimation} 18s linear infinite;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const RobuxCoin = styled.img`
    position: absolute;
    left: -24px;
    top: 40%;
    animation: jump-2 15s linear infinite;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const SmallCoin = styled.img`
    position: absolute;
    top: 12%;
    left: 27%;
    animation: jump-1 18s linear infinite;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const BiggerCoin = styled.img`
    position: absolute;
    right: 26px;
    top: 10%;
    animation: jump-2 15s linear infinite;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const LoadingSpinner = styled.div`
    ${tw`flex justify-center mt-5`}
    svg {
        width: 70px;
        height: 70px;
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

const GamePassWrapper = styled.div`
  ${tw`p-5 text-white rounded-lg max-w-md mx-auto`}
`;

const GamePassTitle = styled.h2`
  ${tw`text-2xl mb-5`}
`;

const GamePassAttention = styled.div`
  ${tw`mb-5`}
`;

const GamePassInstruction = styled.a`
  ${tw`text-blue-400 underline`}
`;

const GamePassLink = styled.a`
  ${tw`text-blue-400 underline`}
`;

const GamePassLabel = styled.label`
  ${tw`block mb-2`}
`;

const GamePassInput = styled.input`
  ${tw`w-full p-4 mb-4 rounded-lg border border-none`}
    
    &::after { 
      border-color: #013d1d;
      color: rgb(255 255 255);
  }
`;


const GamePassCheckboxContainer = styled.div`
  ${tw`mt-4 mb-6`}
`;

const GamePassButtonContainer = styled.div`
  ${tw`flex justify-between`}
`;


const courseRobuxToRubles = 0.7 

const PurchaseComponent = ({ loggedInUser, setLoggedInUser }) => {
    const [activeButton, setActiveButton] = useState('standard');
    const [rublesToPay, setRublesToPay] = useState('');
    const [robuxesCount, setRobuxesCount] = useState('');
    const [gameId, setGameId] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [buyMenu, setOpenBuyMenu] = useState(false);  
    const [searchRequest, setSearchRequest] = useState('');
    const [result, setResult] = useState(null); 
    const [error, setError] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [showLogin, setShowLogin] = useState(false);
    const [games, setGames] = useState([]);
    const [email, setEmail] = useState('');
    const [botRobuxAmount, setBotRobux] = useState(0)
    const [availabilityChecked, setChekcked] = useState(false)

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

    const handleCreateGamePass = () => {
        // Functionality for creating GamePass
        console.log('Creating GamePass...');
    };

    const handleLogin = (user) => {
        setLoggedInUser(user);
        setShowLogin(false);


        // Сохраняем информацию о пользователе в localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
    };

    const sendCheck = async () => { 
        let payload = { 
            game_id: parseInt(gameId),
            robux_amount: parseInt(robuxesCount),
            paid_amount: parseInt(rublesToPay),
            roblox_username: loggedInUser.name, 
        } 
        try {
            const response = await fetch(`${window.env.BACKEND_HOST}/api/buy_robux/check`, {method: "POST", body: JSON.stringify(payload), headers: {"Content-Type": "application/json"}});
            const data = await response.text();

            if (response.ok && Boolean(data)) {
                setChekcked(true)
                console.log(data)
            } else { 
                console.log(response)
                setError("Не ожиданная ошибка, или неправильная ссылка")
            }
        } catch (error) {
            console.log(error)
            setError('Неожиданная ошибка');
        }
    }

    const fetchGames = async () => {
        if (loggedInUser === null || loggedInUser === undefined) {return}
        setIsLoading(true); // Set loading to true when fetch starts
        setError(null); // Reset the error state in case of previous errors

        try {
            console.log(loggedInUser)
            const response = await fetch(`${window.env.BACKEND_HOST}/api/search/games?player_id=${loggedInUser.user_id}`, ); // Replace with actual API endpoint

            if (!response.ok) {
                throw new Error('Failed to fetch games'); // Handle non-200 responses
            }

            const data = await response.json(); // Parse the response data
            setGames(data); // Set the fetched games data to state

        } catch (err) {
            setError(err.message); // Catch and set any errors that occurred
        } finally {
            setIsLoading(false); // Set loading to false when fetch completes
        }
    };

    useEffect(() => { 
        (async () => {
            try { 
                let response = await fetch(`${window.env.BACKEND_HOST}/api/robux_amount`, {method: "GET"})
                if (response.status !== 200) { 
                    setError("Получение робуксов не работает")
                    setBotRobux(0)
                }
                
                let data = await response.text()
                setBotRobux(parseInt(data))
            } catch (err) { 
                console.error(err)
                setBotRobux(0)
            }
        })()
    }, [])

    // useEffect hook to fetch games when the component mounts
    useEffect(() => {
        fetchGames();
    }, [loggedInUser]); // Empty dependency array ensures it runs only once on mount

    useEffect(() => {
        console.log("multiplying robuxes to rubles")
        if (parseInt(robuxesCount) >= 210) {
            setRublesToPay(String((robuxesCount * courseRobuxToRubles).toFixed(1)))
        } else {
            setRublesToPay("")
        }
    }, [robuxesCount])

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500); // Задержка в 500 мс

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    const handlePlaceChoice = (game) => {
        setGameId(game.id); // Update the selected game ID
    };

    useEffect(() => {
        if (debouncedValue) {
            handleUserCheck(debouncedValue);
        }
    }, [debouncedValue]);

    const handlePurpleLineClick = () => {
        setIsExpanded(!isExpanded);
    };

    const sendForm = async () => { 
        let payload = { 
            game_id: parseInt(gameId),
            robux_amount: parseInt(robuxesCount),
            paid_amount: parseInt(rublesToPay),
            roblox_username: loggedInUser.name, 
        } 
        try {
            const response = await fetch(`${window.env.BACKEND_HOST}/api/buy_robux`, {method: "POST", body: JSON.stringify(payload), headers: {"Content-Type": "application/json"}});
            const data = await response.json();

            if (response.ok && data) {
                setResult(data)
                console.log(data)
            } else { 
                console.log(response)
                setError("Не ожиданная ошибка, или неправильная ссылка")
            }
        } catch (error) {
            console.log(error)
            setError('Неожиданная ошибка');
        }
    }

    const renderStandardForm = () => (
        <>
            {!buyMenu ? 
            <>
            <StepCaption>
                <StyledLabel htmlFor="robuxesCount">Получу <span style={{ color: '#77D241' }}>(R$)</span></StyledLabel>
                <AvailabilityText id="instockGamePass">
                    В наличии {botRobuxAmount}
                    <img src={Robuxmini} alt="Robux Mini Icon" style={{ marginLeft: '8px' }} />
                </AvailabilityText>

            </StepCaption>
            <BuyForm>
                <InputBlock>
                    <InputWrapper>

                        <StyledInput
                            placeholder="Получаете R$"
                            id="robuxesCount"
                            type="number"
                            value={robuxesCount}
                            onInput={(e) => {
                                setRobuxesCount(parseInt(e.target.value))
                            }}
                        />
                    </InputWrapper>
                </InputBlock>
                <InputBlock>
                <StyledLabel htmlFor="rublesToPay">Заплачу <span style={{ color: '#77D241' }}>(₽)</span></StyledLabel>
                    <InputWrapper>
                        <StyledInput
                            placeholder="Отдаёте ₽"
                            id="rublesToPay"
                            type="number"
                            value={rublesToPay}
                            onInput={(e) => { 
                                setRublesToPay(parseInt(e.target.value))
                                setRobuxesCount(Math.round(parseInt(e.target.value) / 0.7))
                            }}
                        />
                    </InputWrapper>
                </InputBlock>
                <MinRobuxText>Минимальное число робуксов: 210</MinRobuxText>
                <BuyButton onClick={() => setOpenBuyMenu(true)}>Купить</BuyButton>
                <PromoLink id="open-modal-btn">Использовать промокод</PromoLink>
            </BuyForm>
            </>
            : loggedInUser === null || loggedInUser === undefined ?
            <>
                <StepCaption style={{display: "flex"}}>
                    <BuyButton onClick={() => setOpenBuyMenu(false)}>Назад</BuyButton>
                    <StyledLabel htmlFor="robuxesCount"></StyledLabel>
                </StepCaption>
                <InputWrapper style={{marginTop: "20px"}}>
                        <StyledInput
                            placeholder="Поиск Игрока"
                            id="SearchRequest"
                            type="text"
                            value={inputValue}
                            onInput={(e ) => setInputValue(e.target.value)}
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
                    {error && <ModalText>{error}</ModalText>}
                    {!isLoading && users.length === 0 && !error && <ModalText>Данные появятся после ввода никнейма...</ModalText>}
                    <ModalButton onClick={() => handleLogin(users[0])}>Войти</ModalButton>

                    </InputWrapper>
            </>: gameId === null || gameId === undefined || gameId === "" ? <>

                        {/*<StepCaption style={{display: "flex"}}>*/}
                        {/*    <BuyButton onClick={() => setOpenBuyMenu(false)}>Назад</BuyButton>*/}
                        {/*    <StyledLabel htmlFor="robuxesCount"></StyledLabel>*/}
                        {/*</StepCaption>*/}
                        <InputWrapper style={{marginTop: "20px"}}>
                            <ScrollWrapper style={{overflowY: "scroll", height: "50vh"}}>
                                {games.map((game) => (
                                    <StyledPlace onClick={() => handlePlaceChoice(game)} style={{cursor: "pointer"}}>
                                    <PlaceImage src={game.icon_url} alt={game.name} style={{height: '180px', width: '210px'}}/>
                                    <PlaceTitle style={{marginLeft: "20px"}}>{game.name}</PlaceTitle>
                                    </StyledPlace>
                                ))}
                            </ScrollWrapper>
                        </InputWrapper>
                        {error !== '' ? <><MinRobuxText htmlFor="robuxesCount">{error}</MinRobuxText></> : null}
                    </> : <>
                        <GamePassWrapper style={{maxWidth: "100%", boxSizing: "border-box"}}>
                            <GamePassTitle>Создайте новый GamePass с ценой {Math.round(robuxesCount * 1.429)} (R$)</GamePassTitle>

                            <GamePassAttention>
                                <strong style={{}}>Внимание </strong>
                                <GamePassInstruction href="/path/to/instruction.pdf">Инструкция.pdf</GamePassInstruction>
                                <p>
                                    Обязательно каждый раз создавайте новый геймпасс. Робуксы доставляются методом Transfer в течение 5-7 дней с момента оплаты. Проверить статус робуксов можно в поле Pending Robux —{' '}
                                    <GamePassLink href="https://www.roblox.com/transactions" target="_blank" rel="noopener noreferrer">
                                        https://www.roblox.com/transactions
                                    </GamePassLink>
                                </p>
                            </GamePassAttention>

                            <div>
                                <GamePassLabel htmlFor="email">Почта</GamePassLabel>
                                <GamePassInput
                                    style={{width: "94%", color: "rgb(255 255 255 / var(--tw-text-opacity)", backgroundColor: "#013d1d"}}
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Введите свою почту"
                                />
                                <p>Вводя свою почту, вы соглашаетесь с тем, что на неё будет отправлен чек и информация о заказе.</p>
                            </div>

                            <GamePassCheckboxContainer style={{display: "flex"}}>
                                <input type="checkbox" id="agreement" />
                                <GamePassLabel htmlFor="agreement" style={{marginLeft: "10px"}}>
                                    Согласен с{' '}
                                    <GamePassLink href="/PrivacyPage">Публичной офертой</GamePassLink> и{' '}
                                    <GamePassLink href="/AgreementPage">Пользовательским соглашением</GamePassLink>
                                </GamePassLabel>
                            </GamePassCheckboxContainer>

                            <GamePassButtonContainer>
                                <ModalButton onClick={handleCreateGamePass}>Создать GamePass</ModalButton>
                                {!availabilityChecked ? <ModalButton style={{marginLeft: "100px"}} onClick={sendCheck}>Проверить</ModalButton> :  
                                    <ModalButton style={{marginLeft: "100px"}} onClick={sendForm}>Отправить</ModalButton> }
                            </GamePassButtonContainer>
                            {error !== '' ? <><MinRobuxText htmlFor="robuxesCount">{error}</MinRobuxText></> : null}
                        </GamePassWrapper>
                    </>}
        </>
    );

    const renderGiftForm = () => (
        <>
            <BackButtonContainer onClick={() => setActiveButton('standard')}>
                <BackButtonIcon src={ArrowIcon} alt="Back" />
                <BackButtonText>Подтвердите персонажа</BackButtonText>
            </BackButtonContainer>
            <SecondStyledLabel htmlFor="nickname">Введите свой никнейм</SecondStyledLabel>
            <InputWrapper>
                <SecondStyledInput
                    placeholder="Coming soon..."
                    id="nickname"
                    type="text"
                />
            </InputWrapper>
        </>
    );

    return (
        <BannerArea  style={{height: "auto", marginBottom: "20px"}}>
            <Sphere src={sphere} alt="Floating Sphere" />
            <RobuxCoin src={coin} alt="Floating Coin" />
            <SmallCoin src={smallcoin} alt="Floating Coin" />
            <BiggerCoin src={biggercoin} alt="Floating Coin" />
            <SaleContainer>
                <TitleArea>
                    <Title>Покупай</Title>
                    <Subtitle>
                        <TitleLine>
                            <GreenText>по курсу</GreenText>
                            <Word>{courseRobuxToRubles}</Word>
                            <CurrencyIcon src={Robux} alt="Robux Icon" />
                        </TitleLine>
                    </Subtitle>
                    <SubTitle>
                        <Exchange>
                            Реальный курс
                            <InfoIcon src={Sign} alt="Info Icon" />
                        </Exchange>
                        <PurpleLineContainer onClick={handlePurpleLineClick}>
                            <PurpleLine />
                        </PurpleLineContainer>
                        <TelegramContainer isVisible={isExpanded}>
                            <TelegramLink href="https://t.me/robuxio/27" isVisible={isExpanded}>
                                https://t.me/robuxio/27
                            </TelegramLink>
                        </TelegramContainer>
                    </SubTitle>
                </TitleArea>
                <NavContainer>
                    <NavButton
                        active={activeButton === 'standard'}
                        onClick={() => setActiveButton('standard')}
                    >
                        <img src={ClockIcon} alt="Clock Icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        Стандартный трансфер
                    </NavButton>
                    <NavButton
                        active={activeButton === 'instant'}
                        onClick={() => setActiveButton('instant')}
                    >
                        <img src={Star} alt="Star Icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        Моментальный гифт
                    </NavButton>
                </NavContainer>
                <PricingArea>
                    {activeButton === 'standard' ? renderStandardForm() : renderGiftForm()}
                </PricingArea>
            </SaleContainer>
            <MainChar src={DragonImage} alt="Dragon Character" />
        </BannerArea>
    );

};

export default PurchaseComponent;
