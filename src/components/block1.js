import React, { useState } from 'react';
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
    background: rgb(19, 17, 27);
    padding-left: 50px;
    padding-right: 30px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const MainChar = styled.img`
    ${tw`absolute`}
    height: 600px;
    right: 0;
    z-index: 1;
    margin-top: 70px;
`;

const TitleArea = styled.div`
    ${tw`w-full text-center mb-8`}
    animation: ${fadeInUp} 1.2s ease-out;
`;

const Title = styled.h2`
    ${tw`text-4xl font-bold text-white`}
    margin-bottom: 10px !important;
    font-size: 54px;
    animation: ${fadeInUp} 1.2s ease-out;
`;

const Exchange = styled.h2`
    ${tw`text-2xl text-white`}
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    font-weight: 600;
    line-height: 1.2;
    font-size: 30px;
    animation: ${fadeInUp} 1.2s ease-out;
`;

const Subtitle = styled.h2`
    ${tw`text-3xl font-bold text-white`}
    margin-bottom: 0px !important;
    animation: ${fadeInUp} 1.2s ease-out;
`;

const TitleLine = styled.div`
    ${tw`inline-block relative w-full text-center flex items-center justify-center`}
`;

const Word = styled.div`
    ${tw`ml-2 inline-block text-4xl font-bold`}
    transform: translate(0px, 0%);
    font-size: 54px;
    animation: ${fadeInUp} 1.2s ease-out;
`;

const GreenText = styled(Word)`
    ${tw`text-4xl font-bold`}
    color: #77d241;
    font-size: 54px;
    animation: ${fadeInUp} 1.2s ease-out;
`;

const CurrencyIcon = styled.img`
    margin-left: 8px;
    width: 35px;
    height: 35px;
`;

const SubTitle = styled.h4`
    ${tw`text-lg font-semibold block text-white`}
    font-family: Manrope;
    letter-spacing: 1px;
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
    background-color: #2A263B !important;
    border-radius: 16px;
    margin-bottom: 20px;
`;

const NavButton = styled.button`
    ${tw`py-3 m-1 w-full text-white rounded-lg font-semibold`}
    background: ${({ active }) => (active ? '#1f1b2c' : '#2A263B')};
    cursor: pointer;
    border: none;
    border-radius: 16px;
    color: #9aa7b9;
    font-size: 14px;
    transition: background-color 0.3s ease;
`;

const SaleContainer = styled.div`
    ${tw`relative z-10`}
    max-width: 450px;
    width: 100%;
`;

const PricingArea = styled.div`
    ${tw`bg-gray-800 p-6 rounded-lg shadow-lg`}
    background: #252335;
    border: none;
    border-radius: 24px;
    min-height: 450px; /* Ensure the form maintains a static height */
`;

const StepCaption = styled.div`
    ${tw`mt-3 text-white flex justify-between items-center`}
    font-size: 1.1em;
`;

const AvailabilityText = styled.span`
    ${tw`text-green-500 ml-2 mb-6`}
    margin-left: 15px;
`;

const BuyForm = styled.div`
    ${tw`flex flex-col space-y-8`}
`;

const InputBlock = styled.div`
    ${tw`flex flex-col space-y-4`} /* Increased spacing between label and input */
    margin-bottom: 24px;
`;

const InputWrapper = styled.div`
    ${tw`w-full`}
`;

const StyledLabel = styled.label`
    ${tw`text-white font-semibold mb-2`}
    font-size: 1.1em;
`;

const SecondStyledLabel = styled.label`
    ${tw`font-semibold mb-4`}
    font-size: 1.1em;
    padding-bottom: 10px;
    color: #79889c;
    font-size: 14px;
    font-weight: 500;
`;

const StyledInput = styled.input`
    ${tw`w-full p-4 rounded bg-gray-700 text-white border-none`}
    font-size: 1.1em;
    width: 90%;
    border-radius: 12px;
    background-color: #2A263B !important;
    filter: brightness(115%);
    padding-right: 20px;
    appearance: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    -moz-appearance: textfield;
`;


const SecondStyledInput = styled.input`
    ${tw`w-full p-4 rounded bg-gray-700 text-white border-none mt-4`}
    font-size: 1.1em;
    width: 90%;
    border-radius: 12px;
    background-color: #2A263B !important;
    filter: brightness(115%);
    padding-right: 20px;
    appearance: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    -moz-appearance: textfield;
`;

const BackButtonContainer = styled.div`
    ${tw`flex items-center mb-4 cursor-pointer`}
`;

const BackButtonIcon = styled.img`
    ${tw`mr-2`}
    width: 24px;
    height: 24px;
`;

const BackButtonText = styled.span`
    ${tw`text-white text-lg`}
`;

const BuyButton = styled.button`
    ${tw`bg-purple-500 text-white rounded py-3 rounded`}
    font-size: 1.1em;
    border: none;
    background-color: #5B73E8;
    border-radius: 12px;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const PromoLink = styled.a`
    ${tw`mt-3 text-green-300 text-center cursor-pointer`}
    font-size: 1.1em;
`;

const PurpleLineContainer = styled.div`
    ${tw`mx-auto my-4 cursor-pointer`}
    width: 100%;
    max-width: 50px;
`;

const PurpleLine = styled.div`
    ${tw`h-1 bg-purple-500 rounded`}
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
`;

const MinRobuxText = styled.p`
    ${tw`text-gray-500`}
    font-size: 0.9em;
`;

const Sphere = styled.img`
    width: 4%;
    position: absolute;
    left: 14%;
    bottom: 70%;
    animation: ${jumpAnimation} 18s linear infinite;
`;

const RobuxCoin = styled.img`
    position: absolute;
    left: -24px;
    top: 40%;
    animation: jump-2 15s linear infinite;
`;

const SmallCoin = styled.img`
    position: absolute;
    top: 12%;
    left: 27%;
    animation: jump-1 18s linear infinite;
`;

const BiggerCoin = styled.img`
    position: absolute;
    right: 26px;
    top: 10%;
    animation: jump-2 15s linear infinite;
`;

const PurchaseComponent = () => {
    const [activeButton, setActiveButton] = useState('standard');
    const [rublesToPay, setRublesToPay] = useState('');
    const [robuxesCount, setRobuxesCount] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePurpleLineClick = () => {
        setIsExpanded(!isExpanded);
    };

    const renderStandardForm = () => (
        <>
            <StepCaption>
                <StyledLabel htmlFor="robuxesCount">Получу <span style={{ color: '#9aa8e5' }}>(R$)</span></StyledLabel>
                <AvailabilityText id="instockGamePass">
                    В наличии 13062
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
                            onChange={(e) => setRobuxesCount(e.target.value)}
                        />
                    </InputWrapper>
                </InputBlock>
                <InputBlock>
                    <StyledLabel htmlFor="rublesToPay">Заплачу (₽)</StyledLabel>
                    <InputWrapper>
                        <StyledInput
                            placeholder="Отдаёте ₽"
                            id="rublesToPay"
                            type="number"
                            value={rublesToPay}
                            onChange={(e) => setRublesToPay(e.target.value)}
                        />
                    </InputWrapper>
                </InputBlock>
                <MinRobuxText>Минимальное число робуксов: 210</MinRobuxText>
                <BuyButton disabled>Купить</BuyButton>
                <PromoLink id="open-modal-btn">Использовать промокод</PromoLink>
            </BuyForm>
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
                    placeholder="Введите никнейм"
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
                            <Word>1.43</Word>
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
                        Стандартный трансфер
                    </NavButton>
                    <NavButton
                        active={activeButton === 'instant'}
                        onClick={() => setActiveButton('instant')}
                    >
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
