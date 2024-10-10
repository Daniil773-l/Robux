import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaGift, FaCoins } from 'react-icons/fa';
import RobuxIcon from '../assets/img/RobuxWhite.svg'; // Импорт иконки Robux

const CardsContainer = styled.div`
    ${tw`flex justify-center space-x-8 mx-auto`}
    max-width: 1250px;
    padding: 40px 20px;

    @media (max-width: 768px) {
        ${tw`flex-col space-x-0 space-y-8 `} /* Stack cards vertically and adjust spacing */
        padding: 10px 10px; /* Adjust padding for mobile */
        max-width: 300px;
        margin-right: 55px; 
        /* Ensure the container takes full width on mobile */
    }
`;

const Card = styled.div`
    ${tw`flex flex-col justify-center p-8 rounded-lg text-white`}
    width: 400px;
    border-radius: 24px;
    height: 200px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background: ${({ gradient }) => gradient};

    @media (max-width: 768px) {
        width: 100%; /* Full width on mobile */
        height: auto; /* Adjust height to fit content */
        padding: 20px; /* Reduce padding for mobile */
    }
`;

const Title = styled.h2`
    ${tw`text-2xl font-bold mb-4`}
    font-weight: 500;
    font-size: 15px;

    @media (max-width: 768px) {
        font-size: 18px; /* Increase font size slightly for mobile */
        margin-bottom: 8px; /* Adjust spacing below the title */
    }
`;

const Description = styled.div`
    ${tw`flex items-center text-lg mb-8`}
    font-weight: 500;
    font-size: 30px;

    @media (max-width: 768px) {
        font-size: 24px; /* Adjust font size for better readability on mobile */
        margin-bottom: 16px; /* Adjust spacing below the description */
    }
`;

const Action = styled.div`
    ${tw`flex items-center cursor-pointer text-lg`}
    font-weight: 600;

    svg {
        ${tw`ml-2`}
    }

    @media (max-width: 768px) {
        font-size: 18px; /* Adjust font size for better readability on mobile */
    }
`;

const RobuxWrapper = styled.span`
    ${tw`flex items-center ml-2`}

    img {
        ${tw`w-8 h-8 ml-1`} // Иконка Robux с отступом

        @media (max-width: 768px) {
        ${tw`w-6 h-6`} /* Resize icon on mobile */
    }
    }
`;


const Cards = () => {
    return (
        <CardsContainer>
            <Card gradient=" radial-gradient(circle at -1% 57.5%, rgb(31, 31, 31) 0%, rgb(31, 31, 31) 90%) !important;">
                <Title>Покупайте робуксы<br/>и участвуйте в розыгрышах!</Title>
                <Description>
                    Получай <RobuxWrapper><img src={RobuxIcon} alt="Robux Icon" /> X2</RobuxWrapper>
                </Description>
                <Action>
                    К Наградам <FaGift />
                </Action>
            </Card>
            <Card gradient="radial-gradient(circle at -1% 57.5%, rgb(31, 31, 31) 0%, rgb(31, 31, 31) 90%) !important;">
                <Title>Есть своя игра или Накопились <br/> ненужные робуксы?</Title>
                <Description>
                    Продай <RobuxWrapper><img src={RobuxIcon} alt="Robux Icon" /></RobuxWrapper>
                </Description>
                <Action>
                    Продать робуксы <FaCoins />
                </Action>
            </Card>
        </CardsContainer>
    );
};

export default Cards;
