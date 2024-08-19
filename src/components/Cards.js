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
`;

const CardsContainer = styled.div`
    ${tw`flex flex-col space-y-8 mx-auto`}
    max-width: 1250px;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
        space-y-6;
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
    position: relative; /* Add this to position child elements like shadows correctly */

    @media (max-width: 768px) {
        flex-direction: column;
        min-width: auto;
        padding: 15px;
        align-items: center;
    }
`;

const IconWrapper = styled.div`
    ${tw`flex items-center`}
    position: relative; /* To position shadow correctly */
    @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: 15px;
    }
`;

const Icon = styled.img`
    ${tw`w-36 h-28 rounded-lg`}
    z-index: 1; /* Make sure the icon appears above the shadow */
    @media (max-width: 768px) {
        width: 80px;
        height: 60px;
    }
`;

const TextWrapper = styled.div`
    ${tw`ml-4 text-center`}
    @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 15px;
}
`;

const Title = styled.h3`
    ${tw`text-white text-lg font-bold mb-1 flex items-center`}
    font-weight: 500;
    font-size: 20px;

    @media (max-width: 768px) {
        justify-content: center;
        font-size: 18px;
    }
`;

const RobuxIconImage = styled.img`
    ${tw`ml-2 w-5 h-5 mt-2`}
`;

const Description = styled.p`
    ${tw`text-gray-400`}
    width: auto;
    color: #8990a9;
    font-weight: 500;
    font-size: 18px;
    margin-top: 0px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 16px;
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
        margin-top: 10px;
        width: 280px;
        height: 30px;
        justify-content: center;
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
