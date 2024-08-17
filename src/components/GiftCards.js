import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaGift, FaCoins } from 'react-icons/fa';
import RobuxIcon from '../assets/img/RobuxWhite.svg'; // Импорт иконки Robux

const CardsContainer = styled.div`
    ${tw`flex justify-center space-x-8 mx-auto`}
    max-width: 1250px;
    padding: 40px 20px;
`;

const Card = styled.div`
    ${tw`flex flex-col justify-center p-8 rounded-lg text-white`}
    width: 400px;
    border-radius: 24px;
    height: 200px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background: ${({ gradient }) => gradient};
`;

const Title = styled.h2`
    ${tw`text-2xl font-bold mb-4`}
    font-weight: 500;
    font-size: 15px;
`;

const Description = styled.div`
    ${tw`flex items-center text-lg mb-8`}
    font-weight: 500;
    font-size: 30px;
`;

const Action = styled.div`
    ${tw`flex items-center cursor-pointer text-lg`}
    font-weight: 600;

    svg {
        ${tw`ml-2`}
    }
`;

const RobuxWrapper = styled.span`
    ${tw`flex items-center ml-2`}

    img {
        ${tw`w-8 h-8 ml-1`} // Иконка Robux с отступом
    }
`;

const Cards = () => {
    return (
        <CardsContainer>
            <Card gradient="conic-gradient(from 55deg at 50% 50%, #5c76eb 3deg, #0b2edb 65deg, #3b22db 100deg, #5974ed 360deg) !important;">
                <Title>Покупайте робуксы<br/>и участвуйте в розыгрышах!</Title>
                <Description>
                    Получай <RobuxWrapper><img src={RobuxIcon} alt="Robux Icon" /> X2</RobuxWrapper>
                </Description>
                <Action>
                    К Наградам <FaGift />
                </Action>
            </Card>
            <Card gradient="background-color: rgb(29, 27, 41);">
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
