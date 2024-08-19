import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import Tick from '../assets/img/TickIcon.svg';
import Money from '../assets/img/Money.svg';
import Time from '../assets/img/Time.svg';

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

const WhyUsContainer = styled.div`
    ${tw`flex flex-col items-center mx-auto`}
    max-width: 1250px;
    padding: 60px 20px;

    @media (max-width: 768px) {
        padding: 40px 10px; /* Adjust padding for mobile */
    }
`;

const Title = styled.h2`
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3em;
    letter-spacing: -1.92px;
    color: white;
    margin-bottom: 40px;
    animation: ${fadeInUp} 1.2s ease-out; /* Apply the fadeInUp animation */

    @media (max-width: 768px) {
        font-size: 32px; /* Reduce font size for mobile */
        margin-bottom: 20px; /* Adjust margin for mobile */
    }
`;

const CardsWrapper = styled.div`
    ${tw`flex justify-between space-x-8 w-full`}

    @media (max-width: 768px) {
    ${tw`flex-col space-x-0 space-y-8`} /* Stack cards vertically and adjust spacing */
}
`;

const Card = styled.div`
    z-index: 5;
    padding: 30px;
    border-radius: 16px;
    background: #1d1b29;
    ${tw`flex flex-col items-start`}

    @media (max-width: 768px) {
    padding: 20px; /* Adjust padding for mobile */
}
`;

const IconWrapper = styled.div`
    ${tw`text-4xl mb-2`} /* Reduced margin below the icon */
    color: white;

    img {
        ${tw`w-8 h-8`} /* Adjust the icon size if needed */

        @media (max-width: 768px) {
        ${tw`w-6 h-6`} /* Reduce icon size for mobile */
    }
    }
`;

const CardTitle = styled.h3`
    ${tw`text-white text-lg mb-4`} /* Reduced margin below the title */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;

    @media (max-width: 768px) {
        font-size: 18px; /* Adjust font size for mobile */
        margin-bottom: 10px; /* Adjust margin below title for mobile */
    }
`;

const CardText = styled.p`
    color: #9698a7;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 0px;

    @media (max-width: 768px) {
        font-size: 14px; /* Adjust font size for mobile */
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
