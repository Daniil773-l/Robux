import React, { useState, useEffect, useRef } from 'react';
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
    background: #151515;
    color: #fff;

    @media (max-width: 768px) {
        padding: 40px 10px;
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
    border-radius: 16px;
    background: #222;
    ${tw`flex flex-col items-center`}
    min-width: 230px;
    height: 150px;
    animation: ${({ isVisible }) => (isVisible ? fadeInUp : 'none')} 1.2s ease-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 768px) {
        min-width: 100%;
        height: auto;
    }
`;

const CountWrapper = styled.div`
    ${tw`flex items-baseline`}
    height: 60px;
    width: 100px;
    display: flex;
    justify-content: center;
`;

const Count = styled.h2`
    ${tw`text-3xl font-bold mb-2`}
    font-size: 48px;
    color: #f0f0f0;

    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

const Suffix = styled.span`
    ${tw`text-lg ml-1`}
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    color:  #f0f0f0;

    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

const CardText = styled.p`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.4px;
    color: #e0e0e0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const CounterCard = ({ end, text, suffix, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return; // Запуск счетчика только при появлении карточки

        let start = 0;
        const duration = 180; // Длительность анимации
        const increment = end / duration;

        const updateCount = () => {
            start += increment;
            if (start < end) {
                setCount(Math.round(start * 10) / 10); // округление до 1 знака после запятой
            } else {
                setCount(end);
            }
        };

        const interval = setInterval(updateCount, 10);
        return () => clearInterval(interval);
    }, [end, isVisible]);

    return (
        <Card isVisible={isVisible}>
            <CountWrapper>
                <Count>{count}</Count>
                <Suffix>{suffix}</Suffix>
            </CountWrapper>
            <CardText>{text}</CardText>
        </Card>
    );
};

const StatisticsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Отключаем наблюдателя после появления
                }
            },
            {
                threshold: 0.5, // Процент видимости элемента, при котором сработает наблюдатель
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <SectionContainer ref={sectionRef}>
            <TitleText className="robuxtitle">
                Статистика нашего сайта
            </TitleText>
            <CardsWrapper>
                <CounterCard end={0.7} text="Курс за 1 рубль" suffix="" isVisible={isVisible} />
                <CounterCard end={160} text="Робуксов куплено" suffix="M+" isVisible={isVisible} />
                <CounterCard end={150} text="Покупок" suffix="K+" isVisible={isVisible} />
            </CardsWrapper>
        </SectionContainer>
    );
};

export default StatisticsSection;
