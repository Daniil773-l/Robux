import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import RobuxIcon from '../assets/img/RobuxWhite.svg';
import SmallRobux from '../assets/img/SmallWhiteRobux.svg';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';
import RegSign from '../assets/img/RedSign.svg';
import ArrowUp from '../assets/img/ArrowUp.svg';

const gradientPurple = 'conic-gradient(from -125deg at 50% 50%, #5c76eb 0deg, #9465ca 65deg, #6f65ca 100deg, #5c76eb 360deg)';

// Контейнер карточки
const CardContainer = styled.div`
    ${tw`bg-[#1d1b29] p-6 rounded-lg shadow-lg flex justify-between items-center relative`}
    max-width: 1050px;
    border-radius: 24px;
    z-index: 1;
    overflow: hidden;
    padding: 40px;
    margin: 0 auto;
    margin-top: 20px;
`;

// Элемент для эффекта тени
const ShadowPoint = styled.div`
    display: inline-flex;
    width: 135px;
   
    background-color: #0730eb;
    height: 110px;
    position: absolute;
    filter: blur(90px);
`;

// Секция для левой части карточки
const LeftSection = styled.div`
    ${tw`flex flex-col`}
`;

// Заголовок левой секции
const LeftSectionTitle = styled.h2`
    ${tw`text-xl font-bold text-white flex items-center`}
    font-weight: 500;
    font-size: 35px;
    margin-top: -5px; /* Adjust the margin to align with "Промокод:" */
`;

// Иконка рядом с заголовком
const RobuxIconImage = styled.img`
    ${tw`ml-2`}
    width: 32px;
    height: 30px;
    padding-top: 6px;
`;

const SmallRobuxImage = styled.img`
    ${tw`ml-2`}
    width: 14px;
    height: 18px;
`;

// Описание в левой секции
const LeftSectionDescription = styled.p`
    ${tw`text-sm text-white`}
    font-weight: 500;
    font-size: 15px;
    line-height: 2;
    margin-top: 1px;
`;

// Доступно к выводу
const AvailableText = styled.p`
    ${tw`text-sm text-white mt-2 font-bold`}
    font-weight: 500;
    font-size: 18px;
`;

// Блок с балансом и кнопкой вывода
const BalanceBlock = styled.div`
    ${tw`flex items-center mt-2`}
`;

// Блок с балансом
const BalanceAmount = styled.div`
    ${tw`text-2xl font-bold text-white mr-4`}
    display: flex;
    align-items: center;
`;

// Кнопка вывода
const WithdrawButton = styled.button`
    ${tw`text-white px-4 py-2 rounded-lg text-sm font-semibold`}
    background: ${gradientPurple};
    border: none;
    border-radius: 12px;
`;

// Секция для правой части карточки
const RightSection = styled.div`
    ${tw`flex flex-col`}
    align-items: flex-start;
`;

// Промокод заголовок
const PromoCodeTitle = styled.p`
    ${tw`text-lg font-bold text-white`}
    font-weight: 500;
    font-size: 30px;
    margin: 0 0 20px;
`;

// Промокод текст
const PromoCodeText = styled.p`
    ${tw`text-lg text-gray-400 mt-1 `}
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 20px;
    color: rgb(131, 143, 149);
`;

// Описание промокода
const PromoDescription = styled.p`
    ${tw`text-sm text-white mt-2`}
    font-weight: 500;
    line-height: 1.5;
    font-size: 16px;
`;

// Контейнер для кнопок соц. сетей
const SocialButtonsWrapper = styled.div`
    ${tw`flex space-x-4 mt-2`}
`;

// Отдельный стиль для контейнеров соцсетей
const SocialButtonContainer = styled.div`
    ${tw`flex items-center justify-center text-white font-semibold`}
    background-color: #2A263B;
    font-weight: 800;
    font-size: 16px;
    color: rgb(154, 168, 229);
    line-height: 120%;
    text-decoration: none;
    border-radius: 12px;
    padding: 8px 12px;
    height: 35px; /* Увеличена высота */
    width: 240px; /* Установлена фиксированная ширина */
`;

// Иконка соц. сети
const SocialIcon = styled.span`
    ${tw`mr-2`}
    font-size: 24px; /* Увеличен размер иконок */
    display: flex;
    align-items: center;
`;

const ArrowUpImage = styled.img`
    ${tw`ml-2 mt-1`}
    width: 12px;
    height: 12px;
`;

const RedSignImage = styled.img`
    ${tw`ml-2`}
    width: 24px;
    height: 24px;
    
`;

const BonusCard = () => {
    return (
        <CardContainer>
            {/* Элемент тени */}
            <ShadowPoint />

            <LeftSection>
                <LeftSectionTitle>
                    Бонусный баланс
                    <RobuxIconImage src={RobuxIcon} alt="Robux Icon" />
                </LeftSectionTitle>
                <LeftSectionDescription>
                    Бесплатные робуксы полученные за приглашение друзей и выполнение заданий
                </LeftSectionDescription>
                <AvailableText>
                    Доступно к выводу
                </AvailableText>
                <BalanceBlock>
                    <BalanceAmount>
                        0
                        <SmallRobuxImage src={SmallRobux} alt="Small Robux Icon" />
                    </BalanceAmount>
                    <WithdrawButton>Вывести</WithdrawButton>
                </BalanceBlock>
            </LeftSection>
            <RightSection>
                <PromoCodeTitle>Промокод:</PromoCodeTitle>
                <PromoCodeText>
                    Авторизуйтесь
                    <RedSignImage src={RegSign} alt="Red Sign" />
                </PromoCodeText>
                <PromoDescription>
                    Друзья, не использовавшие твой промокод при первой покупке, не будут засчитаны системой
                </PromoDescription>
                <SocialButtonsWrapper>
                    <SocialButtonContainer>
                        <SocialIcon>
                            <FaTelegramPlane />
                        </SocialIcon>
                        Telegram
                        <ArrowUpImage src={ArrowUp} alt="Arrow Up" />
                    </SocialButtonContainer>
                    <SocialButtonContainer>
                        <SocialIcon>
                            <FaVk />
                        </SocialIcon>
                        VK
                        <ArrowUpImage src={ArrowUp} alt="Arrow Up" />
                    </SocialButtonContainer>
                </SocialButtonsWrapper>
            </RightSection>
        </CardContainer>
    );
};

export default BonusCard;
