import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaTelegramPlane } from 'react-icons/fa';
import PrizeIcon from '../assets/img/robux2.png';
import YoutubeIcon from '../assets/img/yt2.png';
import RobuxIcon from '../assets/img/SmallRobuxIcon.svg';

const CardsContainer = styled.div`
    ${tw`flex flex-col space-y-8 mx-auto`} /* Reduced the space between cards */
    max-width: 1250px; /* Set the maximum width to 1250px */
    padding: 20px; /* Add some padding to the container */
`;

const Label = styled.div`
    color: #8990a9;
    font-size: 17px;
    padding-left: 5px;
    font-weight: 500;
    margin-bottom: 4px; /* Reduced space below the label */
`;

const Card = styled.div`
    ${tw`flex justify-between items-center p-6 rounded-lg bg-[#1d1b29]`}
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    min-width: 1250px;
    border-radius: 24px;
   
`;

const IconWrapper = styled.div`
    ${tw`flex items-center`}
`;

const Icon = styled.img`
    ${tw`w-36 h-28`}
`;

const TextWrapper = styled.div`
    ${tw`ml-4`}
`;

const Title = styled.h3`
    ${tw`text-white text-lg font-bold mb-1 flex items-center`} /* Added flex and items-center for aligning the icon */
    font-weight: 500;
    font-size: 20px;
`;

const RobuxIconImage = styled.img`
    ${tw`ml-2 w-5 h-5 mt-2`} /* Added styles for the Robux icon */
`;

const Description = styled.p`
    ${tw`text-gray-400`}
    width: auto;
    color: #8990a9;
    font-weight: 500;
    font-size: 18px;
    margin-top: 0px;
`;

const ActionIcon = styled.div`
    ${tw`text-2xl py-2 px-6 text-gray-400 `} /* Increased the width of the container */
    cursor: pointer;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #2d2b3f;
    display: flex;
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
                    <Icon src={PrizeIcon} alt="Prize Icon" />
                    <TextWrapper>
                        <Title>
                            Розыгрыши каждый день
                            <RobuxIconImage src={RobuxIcon} alt="Robux Icon" /> {/* Robux icon added here */}
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
