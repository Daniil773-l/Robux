import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

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

const SectionContainer = styled.div`
    ${tw`flex flex-col items-center mx-auto`}
    max-width: 1250px;
    padding: 60px 20px;

    @media (max-width: 768px) {
        padding: 40px 10px; /* Adjust padding for mobile */
    }
`;

const TitleText = styled.p`
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.56px;
    color: white;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        display: none; 
    }
`;

const CardsWrapper = styled.div`
    ${tw`flex justify-between space-x-10 w-full`}

    @media (max-width: 768px) {
    ${tw`flex-col space-x-0 space-y-8`}
    margin-right: 60px;
}
`;

const Card = styled.div`
    z-index: 5;
    padding: 30px;
    border-radius: 32px;
    background: #015c2b;
    ${tw`flex flex-col items-center`}
    min-width: 230px;
    height: 150px;
    animation: ${fadeInUp} 1.2s ease-out; /* Apply the fadeInUp animation */

    @media (max-width: 768px) {
        min-width: 100%; /* Ensure full width on mobile */
        height: auto; /* Auto height for better fit */
    }
`;

const CountWrapper = styled.div`
    ${tw`flex items-baseline`}
`;

const Count = styled.h2`
    ${tw`text-3xl font-bold mb-2`}
    font-size: 48px;
    color: #03c362;

    @media (max-width: 768px) {
        font-size: 36px; /* Adjust font size for mobile */
    }
`;

const Suffix = styled.span`
    ${tw`text-lg ml-1`}
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    color:  #03c362;

    @media (max-width: 768px) {
        font-size: 36px; /* Adjust font size for mobile */
    }
`;

const CardText = styled.p`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.4px;
    color: white;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 16px; /* Adjust font size for mobile */
    }
`;

const CounterCard = ({ end, text, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 180; // Faster animation duration
        const increment = end / duration;

        const updateCount = () => {
            start += increment;
            if (start < end) {
                setCount(Math.round(start * 10) / 10); // rounding to 1 decimal place
            } else {
                setCount(end);
            }
        };

        const interval = setInterval(updateCount, 10);
        return () => clearInterval(interval);
    }, [end]);

    return (
        <Card>
            <CountWrapper>
                <Count>{count}</Count>
                <Suffix>{suffix}</Suffix>
            </CountWrapper>
            <CardText>{text}</CardText>
        </Card>
    );
};

const StatisticsSection = () => {
    return (
        <SectionContainer>
            <TitleText className="robuxtitle">
                Robux.io стремится помочь вам получить робуксы более доступным путем с конечной целью — получить хорошую незабываемые впечатления от игры в любимых режимах.
            </TitleText>
            <CardsWrapper>
                <CounterCard end={2.5} text="Проданных робуксов" suffix="M" />
                <CounterCard end={1.2} text="Довольных клиентов" suffix="K" />
                <CounterCard end={5} text="Среднее время ожидания" suffix="м" />
                <CounterCard end={2} text="Опыт продажи робуксов" suffix="года" />
            </CardsWrapper>
        </SectionContainer>
    );
};

export default StatisticsSection;
