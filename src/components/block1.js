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

const courseRobuxToRubles = 0.7 

const PurchaseComponent = () => {
    const [activeButton, setActiveButton] = useState('standard');
    const [rublesToPay, setRublesToPay] = useState('');
    const [robuxesCount, setRobuxesCount] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [buyMenu, setOpenBuyMenu] = useState(false);  
    const [linkToGamepass, setLink] = useState(''); 
    const [result, setResult] = useState(null); 
    const [error, setError] = useState(''); 

    useEffect(() => {
        console.log("multiplying robuxes to rubles")
        if (parseInt(robuxesCount) >= 210) { 
        setRublesToPay(String((robuxesCount * courseRobuxToRubles).toFixed(1)))
        } else { 
            setRublesToPay("")
        }
    }, [robuxesCount])

    const handlePurpleLineClick = () => {
        setIsExpanded(!isExpanded);
    };

    const sendForm = async () => { 
        let payload = { 
            url: linkToGamepass, 
            amount: parseInt(robuxesCount), 
            roblox_username: "Username"
        } 
        try {
            const response = await fetch(`${window.env.BACKEND_HOST}/api/buy_robux/url`, {method: "POST", body: JSON.stringify(payload), headers: {"Content-Type": "application/json"}});
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
                    В наличии 13062
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
                            onChange={(e) => { 
                                setRobuxesCount(e.target.value)
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
                            onInput={(e) => setRublesToPay(e.target.value)}
                            disabled
                        />
                    </InputWrapper>
                </InputBlock>
                <MinRobuxText>Минимальное число робуксов: 210</MinRobuxText>
                <BuyButton onClick={() => setOpenBuyMenu(true)}>Купить</BuyButton>
                <PromoLink id="open-modal-btn">Использовать промокод</PromoLink>
            </BuyForm>
            </>
            :
            <>
                <StepCaption style={{display: "flex"}}>
                    <BuyButton onClick={() => setOpenBuyMenu(false)}>Назад</BuyButton>
                    <StyledLabel htmlFor="robuxesCount">Вставьте ссылку на gamepass</StyledLabel>
                </StepCaption>
                <InputWrapper style={{marginTop: "20px"}}>
                        <StyledInput
                            placeholder="Ссылка"
                            id="linkToGamepass"
                            type="text"
                            value={linkToGamepass}
                            onInput={(e) => setLink(e.target.value)}
                        />
                    </InputWrapper>
                {error !== '' ? <><MinRobuxText htmlFor="robuxesCount">{error}</MinRobuxText></> : null}
                {result !== null ? <><MinRobuxText htmlFor="robuxesCount">Ваш запрос был успешно отправлен</MinRobuxText></> : null}
                <BuyButton onClick={sendForm} disabled={result !== null}>Отправить</BuyButton>
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
        <BannerArea>
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
