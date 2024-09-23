import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { FaTelegramPlane } from 'react-icons/fa';
import PrizeIcon from '../assets/img/robux2.png';
import YoutubeIcon from '../assets/img/yt2.png';
import RobuxIcon from '../assets/img/SmallRobuxIcon.svg';

const pulseAnimation = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    70% {
        box-shadow: 0 0 20px 20px rgba(255, 255, 255, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
`;

const DivAnimation = styled.div`
    position: absolute;
    width: 135px;
    height: 110px;
    filter: blur(15px);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    animation: ${pulseAnimation} 2s infinite;
    z-index: 0;

    @media (max-width: 768px) {
        margin-bottom: 80px;
    }
`;

const CardsContainer = styled.div`
    ${tw`flex flex-col space-y-8 mx-auto`}
    max-width: 1250px;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
        max-width: 100%;
    }
`;


const Label = styled.div`
    color: #8990a9;
    font-size: 17px;
    padding-left: 5px;
    font-weight: 500;
    margin-bottom: 4px;
`;

const Card = styled.div`
    ${tw`flex justify-between items-center p-6 rounded-lg bg-[#015c2b]`}
    min-width: 1250px;
    border-radius: 24px;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack content vertically on mobile */
        padding: 15px;
        min-width: auto; /* Remove fixed width for mobile */
        align-items: center; /* Center align items */
    }
`;


const IconWrapper = styled.div`
    ${tw`flex items-center relative`}

    @media (max-width: 768px) {
    flex-direction: column; /* Stack icon and text vertically */
    justify-content: center;
    margin-bottom: 15px; /* Add margin below the icon for spacing */
}
`;

const Icon = styled.img`
    ${tw`w-36 h-28 rounded-lg`}
    z-index: 1;
    position: relative;

    @media (max-width: 768px) {
        width: 80px;
        padding-top: 30px;
        height: 60px; /* Smaller icon size on mobile */
    }
`;

const TextWrapper = styled.div`
    ${tw`ml-4 text-center`}

    @media (max-width: 768px) {
    margin-left: 0; /* Reset margin for mobile */
    margin-bottom: 15px; /* Add space between text and button */
}
`;

const Title = styled.h3`
    ${tw`text-white text-lg font-bold mb-1`}
    font-weight: 500;
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 18px; /* Slightly smaller font on mobile */
        text-align: center; /* Center text on mobile */
    }
`;

const RobuxIconImage = styled.img`
    ${tw`ml-2 w-5 h-5 mt-2`}
`;

const Description = styled.p`
    ${tw`text-gray-400`}
    color: #8990a9;
    font-weight: 500;
    font-size: 18px;
    margin-top: 0px;

    @media (max-width: 768px) {
        text-align: center; /* Center text on mobile */
        font-size: 16px; /* Smaller font size on mobile */
    }
`;

const ActionIcon = styled.div`
    ${tw`text-2xl py-2 px-6 text-gray-400`}
    cursor: pointer;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #038741;
    display: flex;

    @media (max-width: 768px) {
        width: 280px; /* Fixed width for button */
        height: 30px; /* Adjust button height */
        justify-content: center; /* Center the icon inside the button */
        margin-top: 10px; /* Space between text and button */
    }

    &:hover {
        color: white;
    }
`;

const Cards = () => {
    return (
        <CardsContainer>
            <Label>Награды и призы</Label>
            <Card>
                <IconWrapper>
                    <DivAnimation />
                    <Icon src={PrizeIcon} alt="Prize Icon" />
                    <TextWrapper>
                        <Title>
                            Розыгрыши каждый день
                            <RobuxIconImage src={RobuxIcon} alt="Robux Icon" />
                        </Title>
                        <Description>Переходите в наш телеграм, чтобы участвовать в конкурсах</Description>
                    </TextWrapper>
                </IconWrapper>
                <ActionIcon>
                    <FaTelegramPlane />
                </ActionIcon>
            </Card>

            <Label>Сними видео про нас</Label>
            <Card>
                <IconWrapper>
                    <DivAnimation />
                    <Icon src={YoutubeIcon} alt="YouTube Icon" />
                    <TextWrapper>
                        <Title>Хочешь получить робуксы бесплатно?</Title>
                        <Description>Свяжись с нами в телеграмм и получи робуксы за видео!</Description>
                    </TextWrapper>
                </IconWrapper>
                <ActionIcon>
                    <FaTelegramPlane />
                </ActionIcon>
            </Card>
        </CardsContainer>
    );
};

export default Cards;
