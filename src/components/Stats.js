import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import RobuxIcon from '../assets/img/SmallRobuxIcon.svg';

const Container = styled.div`
    ${tw`flex flex-col space-y-4 mx-auto`}
    width: 100%;
    max-width: 1250px;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px; /* Adjust padding for mobile */
        max-width: 400px;
        width: 100%;
    }
`;
const Label = styled.div`
    color: #8990a9;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 16px; /* Adjust font size for mobile */
    }
`;

const StatsContainer = styled.div`
    ${tw`relative flex items-center overflow-hidden rounded-lg bg-[#1d1b29]`}
    padding: 16px;
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
`;

const MainText = styled.div`
    ${tw`flex items-center text-white`}
    width: 250px;
    margin-right: 32px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
`;

const Dot = styled.span`
    ${tw`inline-block w-3 h-2 mr-2 rounded-full`}
    background-color: #00ff00;
`;

const CardsWrapperContainer = styled.div`
    ${tw`overflow-hidden flex-1`}
`;

const CardsWrapper = styled.div`
    ${tw`flex`}
    transform: translateX(${(props) => props.translateValue}px);
    transition: transform 1s linear;
`;

const Card = styled.div`
    ${tw`flex flex-col justify-center items-center bg-[#2d2b3f] rounded-lg p-4`}
    width: 220px;  /* Ширина карточки */
    height: 80px;  /* Высота карточки */
    border-radius: 24px;
    margin-right: 40px;  /* Отступ между карточками */
`;

const CardText = styled.div`
    ${tw`text-white flex items-center`}
    font-size: 18px;  /* Размер шрифта */
    font-weight: 500;
`;

const UserText = styled.span`
    ${tw`mr-1`}
`;

const Amount = styled.div`
    ${tw`text-white mt-2`}
    font-size: 20px;  /* Размер шрифта суммы */
    font-weight: 600;
`;

const Icon = styled.img`
    ${tw`inline-block w-5 h-5 ml-1`}  /* Размер иконки */
`;

const Transfer = styled.div`
    ${tw`text-gray-400 text-sm`}
`;

const purchases = [
    { user: "Ma****14", amount: "450", type: "Трансфер" },
    { user: "re******57", amount: "400", type: "Трансфер" },
    { user: "Ki****03", amount: "300", type: "Трансфер" },
    { user: "le******hs", amount: "300", type: "Трансфер" },
    { user: "Ve********91", amount: "350", type: "Трансфер" },
    { user: "Su*****23", amount: "200", type: "Трансфер" },
    { user: "Lo*****12", amount: "150", type: "Трансфер" },
];

const Statistics = () => {
    const [translateValue, setTranslateValue] = useState(0);
    const cardWidth = 260; // Ширина карточки + отступ

    useEffect(() => {
        const interval = setInterval(() => {
            setTranslateValue((prevValue) => {
                const newValue = prevValue - cardWidth;
                return newValue;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [cardWidth]);

    useEffect(() => {
        if (Math.abs(translateValue) >= cardWidth * purchases.length) {
            setTranslateValue(0);
        }
    }, [translateValue, cardWidth]);

    return (
        <Container>
            <Label>Статистика</Label>
            <StatsContainer>
                <MainText>
                    <Dot />
                    Последние покупки наших клиентов
                </MainText>
                <CardsWrapperContainer>
                    <CardsWrapper translateValue={translateValue}>
                        {purchases.concat(purchases).map((purchase, index) => (
                            <Card key={index}>
                                <CardText>
                                    <UserText>{purchase.user}</UserText> купил
                                </CardText>
                                <Amount>{purchase.amount} <Icon src={RobuxIcon} alt="Robux Icon" /></Amount>
                                <Transfer>{purchase.type}</Transfer>
                            </Card>
                        ))}
                    </CardsWrapper>
                </CardsWrapperContainer>
            </StatsContainer>
        </Container>
    );
};

export default Statistics;
