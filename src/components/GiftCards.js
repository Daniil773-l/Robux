import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaGift, FaCoins } from 'react-icons/fa';
import RobuxIcon from '../assets/img/RobuxWhite.svg'; // Импорт иконки Robux

const CardsContainer = styled.div`
    ${tw`flex justify-center items-center space-x-8 mx-auto`} /* Расположение по центру и небольшое расстояние между карточками */
    max-width: 1400px;
    padding: 50px 20px;

    @media (max-width: 768px) {
        ${tw`flex-col space-x-0 space-y-8`} /* Вертикальная раскладка для мобильных устройств */
        padding: 20px;
        max-width: 100%; /* Максимальная ширина для мобильных */
    }
`;

const Card = styled.div`
    ${tw`flex flex-col justify-center p-10 rounded-lg text-white`} /* Увеличенный padding */
    width: 500px; /* Ширина карточек */
    border-radius: 30px;
    height: 250px; /* Высота карточек */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    background: ${({ gradient }) => gradient};

    @media (max-width: 768px) {
        width: 90%; /* Ширина карточек для мобильных устройств */
        height: auto;
        padding: 25px;
        margin: 0 auto; /* Центрируем карточки на мобильных */
    }
`;

const Title = styled.h2`
    ${tw`text-3xl font-bold mb-6`} /* Текст заголовка */
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 10px;
    }
`;

const Description = styled.div`
    ${tw`flex items-center text-xl mb-10`} /* Описание */
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 22px;
        margin-bottom: 20px;
    }
`;

const Action = styled.div`
    ${tw`flex items-center cursor-pointer text-xl`} /* Размер шрифта для действия */
    font-weight: 600;

    svg {
        ${tw`ml-2`}
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const RobuxWrapper = styled.span`
    ${tw`flex items-center ml-2`}

    img {
        ${tw`w-10 h-10 ml-2`} /* Размер иконки */
        @media (max-width: 768px) {
        ${tw`w-6 h-6`}
    }
    }
`;

const Cards = () => {
    return (
        <CardsContainer>
            <Card gradient="radial-gradient(circle at -1% 57.5%, rgb(31, 31, 31) 0%, rgb(31, 31, 31) 90%) !important;">
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
