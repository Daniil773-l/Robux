import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import Tick from '../assets/img/TickIcon.svg';
import Money from '../assets/img/Money.svg';
import Time from '../assets/img/Time.svg';

// Анимация для плавного появления и движения вверх
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

const WhyUsContainer = styled.div`
    ${tw`flex flex-col items-center mx-auto`}
    max-width: 1250px;
    padding: 60px 20px;
    background: #151515; /* Задний фон изменен на темный #151515 */

    @media (max-width: 768px) {
        padding: 40px 10px; /* Уменьшение отступов для мобильной версии */
    }
`;

const Title = styled.h2`
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3em;
    letter-spacing: -1.92px;
    color: #ffffff; /* Белый цвет текста для заголовка */
    margin-bottom: 40px;
    animation: ${fadeInUp} 1.2s ease-out; /* Применение анимации */

    @media (max-width: 768px) {
        font-size: 32px; /* Уменьшение размера шрифта на мобильных */
        margin-bottom: 20px;
    }
`;

const CardsWrapper = styled.div`
    ${tw`flex justify-between space-x-8 w-full`}

    @media (max-width: 768px) {
    ${tw`flex-col space-x-0 space-y-8`} /* Выравнивание карточек вертикально на мобильных */
}
`;

const Card = styled.div`
    z-index: 5;
    padding: 30px;
    border-radius: 16px;
    background:#1f1f1f; /* Темно-серый фон карточек */
    ${tw`flex flex-col items-start`}

    @media (max-width: 768px) {
    padding: 20px; /* Корректировка отступов для мобильной версии */
}
`;

const IconWrapper = styled.div`
    ${tw`text-4xl mb-2`} /* Добавление отступа под иконкой */
    color: white;

    img {
        ${tw`w-8 h-8`} /* Размер иконки */
        filter: brightness(1.5); /* Увеличение яркости иконок, чтобы они лучше смотрелись на темном фоне */

        @media (max-width: 768px) {
            ${tw`w-6 h-6`} /* Изменение размера иконок на мобильных */
        }
    }
`;

const CardTitle = styled.h3`
    ${tw`text-white text-lg mb-4`} /* Белый цвет текста заголовка */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 10px;
    }
`;

const CardText = styled.p`
    color: #cfcfcf; /* Более светлый серый для текста карточек */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 0px;

    @media (max-width: 768px) {
        font-size: 14px; /* Уменьшение размера текста на мобильных */
    }
`;

const WhyUs = () => {
    return (
        <WhyUsContainer>
            <Title>Почему мы?</Title>
            <CardsWrapper>
                <Card>
                    <IconWrapper>
                        <img src={Tick} alt="Tick Icon" />
                    </IconWrapper>
                    <CardTitle>Репутация</CardTitle>
                    <CardText>
                        Имеем 1000+ положительных отзывов от своих клиентов, большой опыт в продаже робуксов.
                    </CardText>
                </Card>
                <Card>
                    <IconWrapper>
                        <img src={Money} alt="Money Icon" />
                    </IconWrapper>
                    <CardTitle>Курс валюты</CardTitle>
                    <CardText>
                        Стараемся продавать робуксы по самому выгодному курсу, проводим для вас акции.
                    </CardText>
                </Card>
                <Card>
                    <IconWrapper>
                        <img src={Time} alt="Time Icon" />
                    </IconWrapper>
                    <CardTitle>Скорость</CardTitle>
                    <CardText>
                        Начинаем трансфер робуксов вскоре после покупки. Используем для продажи лучшие способы!
                    </CardText>
                </Card>
            </CardsWrapper>
        </WhyUsContainer>
    );
};

export default WhyUs;
