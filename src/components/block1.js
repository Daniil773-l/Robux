import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
// import DragonImage from '../assets/img/char2.png';
import Robux from '../assets/img/RobuxIcon.svg';
import Sign from '../assets/img/Sign.svg';
import sphere from '../assets/img/sphere-one.png';
import coin from '../assets/img/04.png';
import smallcoin from '../assets/img/05.png';
import biggercoin from '../assets/img/BiggerCoin.png';
import ArrowIcon from '../assets/img/ArrowIcon.svg'; // Import the arrow icon
import Robuxmini from '../assets/img/ROBUXMINI.SVG';
import Search from '../assets/img/search_4270453.png';
import ClockIcon from '../assets/img/clock.svg';
import Star from '../assets/img/star.svg'
import { FaLock } from 'react-icons/fa';
import AtomicSpinner from "atomic-spinner";
import { useLocation, useParams } from 'react-router-dom';
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

// Define keyframes for the jumping animation
const jumpAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
`;

const ScrollWrapper = styled.div`
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #1a1a1a; /* Цвет фона скроллбара */
  }

  /* Цвет бегунка (ползунка) */
    &::-webkit-scrollbar-thumb {
    background-color: #1a1a1a; /* Светло-зелёный цвет бегунка */
    border-radius: 10px; /* Скругление краев */
  }

    &::-webkit-scrollbar-thumb:hover {
    background-color: #1a1a1a /* Более насыщенный зеленый при наведении */
  }

    &::-webkit-scrollbar-track {
    background-color: #1a1a1a; /* Цвет фона */
  }
`;



const Content = styled.div`
  height: 600px; /* Пример контента, чтобы появился скроллбар */
  background-color: #2a2a2a;
  color: white;
`;

const BannerArea = styled.div`
    ${tw`relative`}
    background: rgb(21, 21, 21);
    padding-left: 50px;
    padding-right: 30px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto; /* Изменено на auto */
    padding-top: 50px; /* Добавим отступ сверху для поднятия содержимого */
    padding-bottom: 20px; /* Добавлен отступ снизу */

    @media (max-width: 768px) {
        flex-direction: column; 
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 0px; /* Для мобильных уменьшаем отступ */
        height: auto;
    }
`;
// const MainChar = styled.img`
//     ${tw`absolute`}
//     height: 600px;
//     right: 0;
//     z-index: 1;
//     margin-top: 70px;
//
//     @media (max-width: 768px) {
//         @media (max-width: 768px) {
//             display: none;
//         }
// `;

const TitleArea = styled.div`
    ${tw`w-full text-center mb-8`}
    margin-top: -30px; /* Поднимаем заголовок вверх */
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        margin-top: 0; /* Убираем отрицательный отступ на мобильных */
        margin-bottom: 20px;
    }
`;
const Title = styled.h2`
    ${tw`text-4xl font-bold text-white`}
    margin-bottom: 10px !important;
    font-size: 54px;
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        font-size: 36px;
        padding-top: 20px; /* Поднимаем заголовок на мобильных */
    }
`;


const glowAnimation = keyframes`
    0% {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3);
    }
    50% {
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.7), 0 0 45px rgba(255, 255, 255, 0.5);
    }
    100% {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3);
    }
`;

const Exchange = styled.h2`
  ${tw`text-2xl text-white`}
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 1.2;
  font-size: 30px;
  animation: ${glowAnimation} 2s infinite ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.h2`
    ${tw`text-3xl font-bold text-white`}
    margin-bottom: 0px !important;
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-top: 10px;
    }
`;

const TitleLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row; /* Явно указываем горизонтальное размещение */
    margin: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 20px;
    }
`;

const Word = styled.div`
    ${tw`inline-block text-4xl font-bold`}
    margin-right: 10px; /* Отступ справа для иконки */
    font-size: 54px;
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        font-size: 28px;
        margin: 0;
    }
`;

const CurrencyIcon = styled.img`
    width: 35px;
    height: 35px;
    display: inline-block; /* Убедимся, что элемент в одном ряду */
    margin-left: 8px; /* Добавляем отступ слева для иконки */

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 10px;
    }
`;

const GreenText = styled.div`
    color: #7c7a7a;
    font-size: 54px;
    animation: ${fadeInUp} 1.2s ease-out;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;


const SubTitle = styled.h4`
    ${tw`text-lg font-semibold block text-white`}
    font-family: Manrope;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;
const PlaceImage = styled.img`
    max-width: 90px;
    max-height: 90px;
    
    border-radius: 8px;
`;
const InfoButton = styled.div`
    ${tw`relative inline-block ml-2`}
`;

const InfoTooltip = styled.div`
    ${tw`absolute hidden text-4xl`}
    letter-spacing: 1px;
`;

const InfoIcon = styled.img`
    ${tw`ml-2 mt-4`}
    width: 18px;
    height: 18px;
`;

const NavContainer = styled.div`
    ${tw`mt-4 flex justify-center `}
    background-color: #333 !important; // Change from #222 to #333
    border-radius: 16px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 10px;
    }
`;

const NavButton = styled.button`
    ${tw`py-3 m-2 w-full text-white rounded-lg font-semibold`}
    background: ${({ active }) => (active ? '#1a1a1a' : '#222')};
    cursor: pointer;
    border: none;
    border-radius: 16px;
    color: #9aa7b9;
    font-size: 14px;
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        margin: 5px 0;
        padding: 10px;
        font-size: 12px;
    }
`;

const SaleContainer = styled.div`
    ${tw`relative z-10`}
    max-width: 450px;
    width: 100%;

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 20px;
    }
`;

const PricingArea = styled.div`
    ${tw` p-6 rounded-lg shadow-lg bg-[rgb(1, 92, 43)]`}
    background-color: #333; // Change this to your desired color


    border: none;
    border-radius: 24px;
    min-height: 450px; /* Ensure the form maintains a static height */

    @media (max-width: 768px) {
        padding: 20px;
        min-height: auto;
    }
`;

const StepCaption = styled.div`
    ${tw`mt-3 text-white items-center`}
    
    font-size: 1.1em;

    @media (max-width: 768px) {
        font-size: 14px;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const AvailabilityText = styled.span`
    ${tw` ml-2 mb-4 font-medium`}
    margin-left: 170px;
    color: rgb(255, 255, 255);
    @media (max-width: 768px) {
        margin-left: 80px;
    }
`;

const BuyForm = styled.div`
    ${tw`flex flex-col space-y-8`}

    @media (max-width: 768px) {
    space-y-6;
}
`;

const StyledLabel = styled.label`
    ${tw`text-white font-semibold mb-3`}
    font-size: 1.1em;

    @media (max-width: 768px) {
        font-size: 14px;
     
    }
`;

const SecondStyledLabel = styled.label`
    ${tw`font-semibold mb-4`}
    font-size: 1.1em;
    padding-bottom: 10px;
    color: #79889c;
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const InputBlockContainer = styled.div`
    ${tw`flex flex-col space-y-4`} /* Основной контейнер для input и кнопок */
`;

const InputBlock = styled.div`
    ${tw`flex items-center space-y-4`} /* Flex контейнер для input и иконки */
    border-radius: 12px; /* Округленные края */
    border: 1px solid #1B1B1B; /* Общий бордер для input и иконки */
    background-color: #313131; /* Фон для общего контейнера */
    padding-right: 12px; /* Отступ справа для иконки */
    width: 100%; /* Общая ширина */

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const InputWrapper = styled.div`
    ${tw`w-full flex items-center `} /* Flex-контейнер для выравнивания иконки */
    border-radius: 24px;
    
`;

const StyledInput = styled.input`
    ${tw`w-full p-4 text-white border-none`} /* Убираем бордер у самого input */
    font-size: 1.1em;
    
    background: transparent;
    appearance: none;
    border-radius: 20px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    -moz-appearance: textfield;

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 14px;
    }
`;

const SSecondStyledInput = styled.input`
    ${tw`w-full p-4 text-white border-none`} /* Убираем бордер у самого input */
    font-size: 1.1em;
    
    background: #262626;
    appearance: none;
    border-radius: 20px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    -moz-appearance: textfield;

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 14px;
    }
`;


const IconWrapper = styled.div`
    ${tw`flex items-center justify-center mb-3`} /* Центрирование иконки */
    width: 40px; /* Ширина для иконки */
    height: 100%; /* Высота контейнера совпадает с высотой input */
    display: flex; /* Убедимся, что flex работает для центрирования */
    align-items: center; /* Выровняем иконку по вертикали */
    justify-content: center; /* Выровняем иконку по горизонтали */
    pointer-events: none; /* Иконка не блокирует ввод */
`;

const RubleIcon = styled.svg`
    width: 24px; /* Ширина иконки */
    height: 24px; /* Высота иконки */
    fill: #ffffff; /* Цвет иконки */
    padding-bottom: 20px;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const StyledButtonForMoney = styled.button`
    padding: 8px 16px; /* Уменьшил размеры кнопки */
    font-size: 16px; /* Уменьшил размер шрифта */
    background-color: #333;
    border: 2px solid #6a0dad;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #6a0dad;
    }

    &:focus {
        outline: none;
    }
`;

const StyledScroll = styled.input.attrs({ type: 'range' })`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    margin-top: 20px;
    background: linear-gradient(
    to right,
    #fbbf24 ${(props) => (props.value - props.min) / (props.max - props.min) * 100}%,
    #3a3a3a ${(props) => (props.value - props.min) / (props.max - props.min) * 100}%
    );
    border-radius: 12px;
    outline: none;
    cursor: pointer;
    position: relative;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 80px;
        height: 9px;
        background: #fbbf24;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: black;
        font-size: 1em;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
        position: relative;
        //top: -16px; /* Корректируем положение бегунка */
        //padding-left: 10px; /* Дополнительный отступ для выравнивания текста */
    }

    &::-moz-range-thumb {
        width: 80px;
        height: 9px;
        background: #fbbf24;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: black;
        font-size: 1em;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
        position: relative;
        //top: -16px; /* Корректируем положение бегунка */
        //padding-left: 10px; /* Дополнительный отступ для выравнивания текста */
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 8px;
        background: transparent;
        border-radius: 12px;
    }
    // &::after {
    //     content: "${(props) => props.value} R$"; /* Отображаем значение внутри бегунка */
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     font-size: 1em;
    //     background-color: transparent;
    //     color: black;
    // }
`;

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
`;

const SecondStyledInput = styled.input`
    ${tw`w-full p-4 rounded bg-gray-700 text-white border-none mt-4`}
    font-size: 1.1em;
    width: 90%;
    border-radius: 12px;
    background-color: #013d1d !important;
    filter: brightness(115%);
    padding-right: 20px;
    appearance: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    -moz-appearance: textfield;

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 14px;
    }
`;

const BackButtonContainer = styled.div`
    ${tw`flex items-center mb-4 cursor-pointer`}

    @media (max-width: 768px) {
    margin-bottom: 10px;
}
`;

const BackButtonIcon = styled.img`
    ${tw`mr-2`}
    width: 24px;
    height: 24px;

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`;

const BackButtonText = styled.span`
    ${tw`text-white text-lg`}

    @media (max-width: 768px) {
    font-size: 14px;
}
`;

const BuyButton = styled.button`
    ${tw`bg-purple-500 text-white rounded py-3 rounded`}
    font-size: 1.1em;
    border: none;
    background: linear-gradient(to right, rgb(108, 99, 163), rgba(59, 130, 246, 0.5));
    border-radius: 12px;
    cursor: pointer; 
    &:disabled {

        cursor: not-allowed;
    }

    &:hover {
        background: linear-gradient(to right, rgb(108, 99, 163), rgba(59, 130, 246, 0.5));
    }
`;
const StyledPlace = styled.div`
    ${tw`flex items-center p-4 rounded-lg bg-[#2A263B] cursor-pointer transition-colors m-2`}
    &:hover {
        background-color: #333; // Change from #222 to #333
    }
    background-color: #333; // Change from #222 to #333
    display: flex;
    text-align: center;
`;

const PlaceTitle = styled.div`
    margin-top: 10px;
    font-size: 16px;
    padding-left: 20px;
    font-weight: bold;
    color: #fff;
    text-align: center;
`;

const PromoLink = styled.a`
    ${tw`mt-3 text-white text-center cursor-pointer`}
    font-size: 1.1em;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const PurpleLineContainer = styled.div`
    ${tw`mx-auto my-4 cursor-pointer`}
    width: 100%;
    max-width: 50px;

    @media (max-width: 768px) {
        margin: 10px auto;
    }
`;

const PurpleLine = styled.div`

    background-color: #3a3939;
    ${tw`rounded h-1`}
`;


const TelegramContainer = styled.div`
    max-height: ${({ isVisible }) => (isVisible ? '60px' : '0')};
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
`;

const TelegramLink = styled.a`
    ${tw`block text-center text-white mt-4`}
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transition: opacity 0.5s ease-in-out;
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const MinRobuxText = styled.p`
    ${tw`text-white`}
    font-size: 0.9em;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Sphere = styled.img`
    width: 4%;
    position: absolute;
    left: 14%;
    bottom: 70%;
    animation: ${jumpAnimation} 18s linear infinite;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const RobuxCoin = styled.img`
    position: absolute;
    left: -24px;
    top: 40%;
    animation: jump-2 15s linear infinite;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const SmallCoin = styled.img`
    position: absolute;
    top: 12%;
    left: 27%;
    animation: jump-1 18s linear infinite;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const BiggerCoin = styled.img`
    position: absolute;
    right: 26px;
    top: 10%;
    animation: jump-2 15s linear infinite;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const LoadingSpinner = styled.div`
    ${tw`flex justify-center mt-5`}
    svg {
        width: 70px;
        height: 70px;
    }
`;

const ModalText = styled.p`
    ${tw`mt-3 text-center`}
    color: #ffffff;
    font-size: 14px;
`;
const ModalButton = styled.button`
    ${tw`w-full py-4 rounded-lg mt-5 font-bold border-none cursor-pointer`}
    background: linear-gradient(to right, rgb(108, 99, 163), rgba(59, 130, 246, 0.5));
    color: #fff;
    font-size: 16px;
    opacity: 0.5;
    &:hover {
        opacity: 0.9;
    }
    &[disabled]:hover {
        opacity: 0.3;
    }
    &[disabled] { 
        opacity: 0.3; 
    }
`;

const ModalLink = styled.a`
    ${tw`w-full py-4 rounded-lg mt-5 font-bold border-none cursor-pointer`}
    background: linear-gradient(to right, rgb(108, 99, 163), rgba(59, 130, 246, 0.5));
    color: #fff;
    font-size: 16px;
    opacity: 0.5;
    text-decoration: none; 
    text-align: center; 
    &:hover {
        opacity: 0.9;
    }
`;

const UserCardContainer = styled.div`
    ${tw`flex flex-wrap justify-center mt-4`};
    max-height: 200px; /* Ограничиваем высоту контейнера карточек */
    overflow-y: auto; /* Включаем вертикальную прокрутку */
    overflow-x: visible;
    padding-right: 8px; /* Добавляем отступ для скролла */
    width: 100%; /* Для адаптивности */
    margin-top: 20px; /* Добавим отступ сверху */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const UserCard = styled.div`
    ${tw`flex items-center p-4 rounded-lg bg-[#2A263B] cursor-pointer transition-colors m-2`};
    width: 250px; /* Увеличиваем ширину карточки */
    text-align: left; /* Текст выровнен по левому краю */
    border-radius: 20%;
    //box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    overflow: visible; /* Избегаем обрезки */
    &:hover {
        background-color: #3C3555;  
    }
`;

const UserAvatar = styled.img`
    ${tw`w-12 h-12 rounded-full`}
    margin-right: 8px;
`;

const UserInfo = styled.div`
    ${tw`flex flex-col`}
    justify-content: center;
    text-align: center;
`;

const UserName = styled.span`
    ${tw`text-white text-sm font-bold`}
`;

const UserUsername = styled.span`
    ${tw`text-gray-400 text-xs`}
`;

const GamePassWrapper = styled.div`
  ${tw`p-5 text-white rounded-lg max-w-md mx-auto`}
`;

const GamePassTitle = styled.h2`
  ${tw`text-2xl mb-5 text-white`}
`;

const GamePassAttention = styled.div`
  ${tw`mb-5 text-gray-400 `}
`;

const GamePassInstruction = styled.a`
  ${tw`text-blue-400 underline text-gray-400 `}
`;

const GamePassLink = styled.a`
  ${tw`text-blue-400 underline`}
`;

const GamePassLabel = styled.label`
  ${tw`block mb-2 text-gray-400`}
  input[type="checkbox"] {
      margin-left: 10px; /* Отступ между текстом и чекбоксом */
      width: 18px; /* Ширина чекбокса */
      height: 18px; /* Высота чекбокса */
      accent-color: #6a0dad; /* Цвет чекбокса */
  }
`;

const GamePassInput = styled.input`
  ${tw`w-full p-4 mb-4 rounded-lg border border-none`}
  background-color: #212121 !important;
    
    
    &::after { 
      border-color: #013d1d;
      color: rgb(255 255 255);
  }
`;


const GamePassCheckboxContainer = styled.div`
  ${tw`mt-4 mb-6`}
    
    input {
      width: 25px;
      height: 25px;
  }
`;

const GamePassButtonContainer = styled.div`
  ${tw`flex justify-between`}
`;

const LoginModal = styled.div`
    ${tw`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
    display: ${({ $show }) => ($show ? 'flex' : 'none')};
`;

const ModalContent = styled.div`
    ${tw`p-8 rounded-lg shadow-lg text-white relative`}
    background:#313131;
    border-radius: 24px;
    width: 420px;
    max-width: 100%;
    //height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


const ModalTitle = styled.h2`
    ${tw`text-lg font-semibold mb-4`}
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 16px;
    margin-top: -12px;
`;

const LabelText = styled.p`
    ${tw`text-sm mb-2`}
    font-weight: 500;
    color: #8990a9;
`;

const ModalInput = styled.input`
    ${tw`w-full p-3 rounded-lg border-none mt-2 text-white`}
    background-color: #414141 !important;
    width: 95%;
    font-size: 18px;
    font-weight: 500;
    height: 30px;
    border: none;
    border-radius: 12px;
    filter: brightness(115%);
    &::placeholder {
        color: #6f7489;
    }
`;

////

const StepsContainer = styled.div`
    display: flex;
    flex-direction: row; /* По умолчанию расположение шагов и формы по горизонтали */
    @media (max-width: 768px) {
        flex-direction: column; /* На мобильных устройствах меняем на вертикальное расположение */
        align-items: center; /* Центрируем элементы */
    }
`;

const StepsSidebar = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    height: 230px;
    border-radius: 24px;
    background: #1b1b1b;
    padding: 15px;
    
    top: 20px; /* Чтобы оставался в видимой области экрана */

    @media (max-width: 768px) {
        flex-direction: row; /* Горизонтальное расположение шагов на мобильных */
        justify-content: space-between; /* Равномерное распределение шагов */
        align-items: center; /* Центрируем шаги */
        margin-right: 0;
        margin-top: 300px;
        position: static;
        margin-bottom: 20px;
        height: auto; /* Высота автоматически подстраивается под содержимое */
        width: 100%; /* На мобильных шаги займут всю ширину */
        padding: 0; /* Убираем внутренние отступы для мобильных */
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;

        @media (max-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
    }

    .step-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;

        @media (max-width: 768px) {
            flex-direction: row; /* Горизонтальное направление шагов */
            margin-bottom: 0;
            gap: 10px; /* Добавим отступы между шагами */
        }
    }

    .step-item.active > span {
        background: #993de1; /* Фиолетовый цвет для активного шага */
    }

    .step-item.completed > span {
        background: #993de1; /* Фиолетовый цвет для выполненного шага */
    }
`;

const StepNumber = styled.span`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #444; /* Цвет для неактивных шагов */
    color: white;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    margin-bottom: 5px;

    &.completed {
        background-color: #6a0dad; /* Цвет для выполненных шагов */
    }
`;

const StepLine = styled.div`
    width: 2px;
    height: 40px; /* Высота полоски между шагами */
    background-color: #444; /* Цвет для неактивных полос */

    @media (max-width: 768px) {
        width: 60px; /* Делаем полоски длиннее на мобильных устройствах */
        padding-left: 50px;
        height: 2px; /* Горизонтальное расположение полос */
    }

    &.active-line {
        background-color: #6a0dad; /* Цвет для активных полос */
    }
`;

const StepForm = styled.div`
    display: flex;
    padding: 20px;
    z-index: 20;
    width: 535px;
    border-radius: 24px;
    height: 100%;
    flex-direction: column;
    background: #1b1b1b;

    @media (max-width: 768px) {
        width: 90%; /* Уменьшаем ширину формы на мобильных устройствах */
        padding: 15px; /* Уменьшаем отступы */
       
    }

    h2 {
        font-size: 20px;
        margin-bottom: 10px;

        @media (max-width: 768px) {
            font-size: 18px; /* Уменьшаем размер шрифта заголовка */
        }
    }

    input {
        padding: 10px;
        margin-bottom: 20px;
        width: 460px;

        @media (max-width: 768px) {
            width: 100%; /* Ширина input теперь 100% на мобильных */
        }
    }

    label {
        margin-bottom: 20px;

        @media (max-width: 768px) {
            font-size: 14px; /* Уменьшаем размер шрифта на мобильных */
        }
    }
`;
const StepButton = styled.button`
    padding: 10px 20px;
    background-color: #6a0dad;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 24px;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const PurchaseContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column; /* Переходим на вертикальное расположение на мобильных */
        height: auto; /* Высота подстраивается автоматически */
    }
`;

const FormOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StepTitle = styled.h2`
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 10px;
`;

const StepSubtitle = styled.p`
    color: #a8a8a8;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
        padding-left: 10px;
    }
`;

const GrayText = styled.p`
    color: #A8A8A8; /* Светло-серый цвет текста */
    font-size: 16px; /* Размер текста */
    line-height: 24px; /* Межстрочный интервал */
    margin: 0; /* Убираем отступы */
    font-weight: 400; /* Обычный вес шрифта */

    @media (max-width: 768px) {
        font-size: 14px; /* Размер текста для мобильных устройств */
    }
`;


const StepHeader = styled.div`
    display: flex;
    align-items: center; /* Центрируем по вертикали */
    justify-content: space-between; /* Размещаем заголовок слева, кнопку закрытия справа */
    width: 100%; /* Заголовок и кнопка занимают всю ширину */
`;

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center; /* Выровнять элементы по вертикали */
    margin-left: 10px;
    color: #A8A8A8; /* Цвет текста */

    input[type="checkbox"] {
        margin-left: 10px; /* Отступ между текстом и чекбоксом */
        width: 18px; /* Ширина чекбокса */
        height: 18px; /* Высота чекбокса */
        accent-color: #6a0dad; /* Цвет чекбокса */
    }
`;

const courseRobuxToRubles =  0.74

const PurchaseComponent = ({ loggedInUser, setLoggedInUser }) => {
    const [withdrawId, setWithdrawId] = useState(null)
    const [activeButton, setActiveButton] = useState('standard');
    const [rublesToPay, setRublesToPay] = useState('');
    const [robuxesCount, setRobuxesCount] = useState('');
    const [gameId, setGameId] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [buyMenu, setOpenBuyMenu] = useState(false);  
    const [searchRequest, setSearchRequest] = useState('');
    const [result, setResult] = useState(null); 
    const [error, setError] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [showLogin, setShowLogin] = useState(false);
    const [games, setGames] = useState([]);
    const [email, setEmail] = useState('');
    const [botRobuxAmount, setBotRobux] = useState(0)
    const [availabilityChecked, setChekcked] = useState(false); 
    const [agreement, setAgreement] = useState(false); 
    const [promocodeMenu, setPromocodeMenu] = useState(false)
    const [course, setCourse] = useState(courseRobuxToRubles)
    const [bonusBalance, setBonusBalance] = useState(0);
    const [promocode, setPromocode] = useState('')
    const [promocodeMsg, setPromocodeMsg] = useState(null)
    const [currentStep, setCurrentStep] = useState(1);


    let location = useLocation();
    let state = location.state

    // 3. Fetch bonuses on page load
    useEffect(() => {
        const fetchBonuses = async () => {
            
            if (state === null) { 
                return 
            }
            if (loggedInUser && state.withdrawId) {
                try {
                    console.log(state.withdrawId)
                    const response = await fetch(`${window.env.BACKEND_HOST}/api/bonuses/${loggedInUser.name}`);
                    
                    // Check if response is OK
                    if (!response.ok) {
                        throw new Error(`Failed to fetch bonuses: ${response.status} ${response.statusText}`);
                    }
                    
                    const data = await response.json();
                    setBonusBalance(data.bonus || 0); // Set the bonus balance from response
                    setOpenBuyMenu(true)
                    setRobuxesCount(data.bonus)
                    setRublesToPay(0)
                    setWithdrawId(state.withdrawId)
                } catch (error) {
                    console.error('Error fetching bonuses:', error);
                    setError('Не удалось загрузить бонусный баланс. Попробуйте позже.'); // User-friendly error message
                }
            }
        };

        fetchBonuses();
    }, [loggedInUser]);

    const handleChange = (e) => {
        setRobuxesCount(parseInt(e.target.value, 10) || 0); // Защита от некорректного ввода
    };

    const handlePromocode = async () => {
        if (loggedInUser) {
            try {
                const response = await fetch(`${window.env.BACKEND_HOST}/api/activate_coupon`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ 
                    player_name: promocode, 
                })});
                
                // Check if response is OK
                if (!response.ok) {
                    throw new Error(`Failed to fetch promocodes: ${response.status} ${response.statusText}`);
                }

                setPromocodeMenu(false)
                setPromocodeMsg('Промокод активирован успешно')
            } catch (error) {
                console.error('Error fetching bonuses:', error);
                setError('Не удалось загрузить купон. Попробуйте позже.'); // User-friendly error message
            }
        }     
    }


    const handleUserCheck = async (nickname) => {
        if (nickname.length < 3) return; // Проверяем, что введено хотя бы 3 символа
        setIsLoading(true);
        setError('');
        try {
            const response = await fetch(`${window.env.BACKEND_HOST}/api/search/player/${encodeURIComponent(nickname)}`);
            const data = await response.json();

            if (response.ok && data && Array.isArray(data)) {
                setUsers(data.slice(0, 10));
            } else {
                setUsers([]);
                setError('No users found or API error');
            }
        } catch (error) {
            setError('Error fetching user data');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = (user) => {
        setLoggedInUser(user);
        setShowLogin(false);


        // Сохраняем информацию о пользователе в localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
    };

    const sendCheck = async () => { 
        setIsLoading(true)
        let payload = { 
            game_id: parseInt(gameId),
            robux_amount: parseInt(robuxesCount),
            paid_amount: parseInt(rublesToPay) || 0,
            roblox_username: loggedInUser.name, 
            bonus_withdrawal_id: withdrawId,  
            bonus_username: promocode, 
        } 
        try {
            const response = await fetch(`${window.env.BACKEND_HOST}/api/buy_robux/check`, {method: "POST", body: JSON.stringify(payload), headers: {"Content-Type": "application/json"}});
            
            if (response.status === 402) { 
                setError("Создайте геймпасс с указанным количеством робуксов")
                return 
            }

            const data = await response.text();
            
            if (data === "true") {
                setChekcked(true)
                console.log(data)
            } else { 
                console.log(response)
                setError("Создайте новый геймпасс, этот геймпасс был уже куплен ботом")
            }
        } catch (error) {
            console.error(error)
            setError('Неожиданная ошибка');
        } finally { 
            setIsLoading(false)
        }
    }

    const fetchGames = async () => {
        if (loggedInUser === null || loggedInUser === undefined) {return}
        setIsLoading(true); // Set loading to true when fetch starts
        setError(null); // Reset the error state in case of previous errors

        try {
            console.log(loggedInUser)
            const response = await fetch(`${window.env.BACKEND_HOST}/api/search/games?player_id=${loggedInUser.user_id}`, ); // Replace with actual API endpoint

            if (!response.ok) {
                throw new Error('Failed to fetch games'); // Handle non-200 responses
            }

            const data = await response.json(); // Parse the response data
            setGames(data); // Set the fetched games data to state

        } catch (err) {
            setError(err.message); // Catch and set any errors that occurred
        } finally {
            setIsLoading(false); // Set loading to false when fetch completes
        }
    };

    useEffect(() => { 
        (async () => {
            try { 
                let response = await fetch(`${window.env.BACKEND_HOST}/api/robux_amount_and_course`, {method: "GET"})
                if (response.status !== 200) { 
                    setError("Получение робуксов не работает")
                    setBotRobux(0)
                }
                
                let data = await response.json()    
                setCourse(data['course'])
                setBotRobux(data['instock'])
            } catch (err) { 
                console.error(err)
                setBotRobux(0)
            }
        })()
    }, [])

    // useEffect hook to fetch games when the component mounts
    useEffect(() => {
        fetchGames();
    }, [loggedInUser]); // Empty dependency array ensures it runs only once on mount

    useEffect(() => {
        console.log("multiplying robuxes to rubles");
        if (parseInt(robuxesCount) >= 210) {
            setRublesToPay(String(Math.round(robuxesCount * course))); // Используем Math.round для округления
        } else {
            setRublesToPay("");
        }
    }, [robuxesCount]);


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500); // Задержка в 500 мс

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    const handlePlaceChoice = (game) => {
        setGameId(game.id); // Update the selected game ID
    };

    useEffect(() => {
        if (debouncedValue) {
            handleUserCheck(debouncedValue);
        }
    }, [debouncedValue]);

    const handlePurpleLineClick = () => {
        setIsExpanded(!isExpanded);
    };

    const togglePromocodeMenu = () => {
        setPromocodeMenu(!promocodeMenu);
    };

    const closeToggleMenu = (e) => {
        if (e.target === e.currentTarget) {
            togglePromocodeMenu();
        }
    };

    const sendForm = async () => { 
        setIsLoading(true)
        let payload = { 
            game_id: parseInt(gameId),
            robux_amount: parseInt(robuxesCount),
            paid_amount: parseInt(rublesToPay),
            roblox_username: loggedInUser.name, 
            email: email, 
            bonus_withdrawal_id: withdrawId,  
            bonus_username: promocode, 
        } 
        try {
            const response = await fetch(`${window.env.BACKEND_HOST}/api/buy_robux`, {method: "POST", body: JSON.stringify(payload), headers: {"Content-Type": "application/json"}});
            if (response.status === 409) { 
                setError("Геймпасс уже куплен ботом")
                return
            }
            if (response.status === 402) { 
                setError("Создайте геймпасс с указанным количеством робуксов")
                return
            }
            if (response.status === 429) { 
                setError("Остынь, слишком много запросов")
                return
            }
            const data = await response.json();

            if (response.ok && data) {
                setResult(data)
                console.log(data)
                setError("Успешно отправлен запрос о покупке")
            } else { 
                console.log(response)
                setError("Не ожиданная ошибка, или неправильная ссылка")
            }
        } catch (error) {
            console.log(error)
            setError('Неожиданная ошибка');
        } finally { 
            setIsLoading(false)
        }
    }

    const handleButtonClick = (amount) => {
        setRublesToPay(amount);
        setRobuxesCount(Math.round(amount / 0.74)); // пересчёт Robux
    };

    const handleBuyClick = () => {
        setOpenBuyMenu(true);
        setCurrentStep(1); // Переход на первый шаг (ввод никнейма)
    };

    const handleNextStep = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1); // Переход на следующий шаг
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1); // Возврат на предыдущий шаг
        }
    };


    const renderStandardForm = () => (
        <>
            {!buyMenu ? 
            <>
            <StepCaption style={{justifyContent: "space-between"}}>
                <StyledLabel htmlFor="rublesToPay">Заплачу <span style={{ color: '#ffffff' }}>(₽)</span></StyledLabel>
                <AvailabilityText id="instockGamePass">
                    В наличии {botRobuxAmount}
                    <img src={Robuxmini} alt="Robux Mini Icon" style={{ marginLeft: '8px' }} />
                </AvailabilityText>

            </StepCaption>
            <BuyForm>
                <InputBlockContainer>
                    <InputBlock>
                        <StyledInput
                            placeholder="Отдаёте ₽"
                            id="rublesToPay"
                            type="number"
                            value={rublesToPay}
                            readOnly
                        />
                        <IconWrapper>
                            <RubleIcon style={{paddingBottom: "10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M291.75,308.1a105.8,105.8,0,1,0,0-211.6H136v32h39.943V276.1H136v32h39.943V352H136v32h39.943v56h32V384H304V352H207.943V308.1ZM207.943,128.5H291.75a73.8,73.8,0,1,1,0,147.6H207.943Z"/>
                            </RubleIcon>
                        </IconWrapper>
                    </InputBlock>

                    <ButtonGroup>
                        <StyledButtonForMoney onClick={() => handleButtonClick(250)}>250₽</StyledButtonForMoney>
                        <StyledButtonForMoney onClick={() => handleButtonClick(500)}>500₽</StyledButtonForMoney>
                        <StyledButtonForMoney onClick={() => handleButtonClick(1000)}>1000₽</StyledButtonForMoney>
                    </ButtonGroup>
                </InputBlockContainer>
                {/*<InputBlock>*/}
                    <StyledLabel htmlFor="robuxesCount">Получу <span style={{ color: '#ffffff' }}>(R$)</span></StyledLabel>
                    {/*<InputWrapper>*/}
                <InputBlockContainer>
                    <InputBlock>
                        <StyledInput
                            // id="robuxesCount"
                            // type="number"
                            value={robuxesCount}
                            onChange={handleChange}
                        />
                        <IconWrapper>
                            <RubleIcon style={{paddingBottom: "10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 40">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M20.5251 0.696094C18.9688 -0.232031 17.0313 -0.232031 15.4751 0.696094L3.02507 8.09609C1.45007 9.04922 0.490693 10.7586 0.500068 12.5992V27.3992C0.500068 29.2555 1.46257 30.9742 3.02507 31.9023L15.4751 39.3023C17.0313 40.2305 18.9688 40.2305 20.5251 39.3023L32.9751 31.9023C34.5501 30.9492 35.5094 29.2398 35.5001 27.3992V12.5992C35.5001 10.743 34.5376 9.02422 32.9751 8.09609L20.5251 0.696094ZM14.2501 13.7492C12.8688 13.7492 11.7501 14.868 11.7501 16.2492V23.7492C11.7501 25.1305 12.8688 26.2492 14.2501 26.2492H21.7501C23.1313 26.2492 24.2501 25.1305 24.2501 23.7492V16.2492C24.2501 14.868 23.1313 13.7492 21.7501 13.7492H14.2501Z"
                                      fill="#FFFF"/>
                            </RubleIcon>
                        </IconWrapper>
                    </InputBlock>
                </InputBlockContainer>
                <SliderContainer>
                    <StyledScroll
                        min="210"
                        max="5000"
                        value={robuxesCount}
                        onChange={handleChange}
                    />
                    <div style={{
                        position: 'absolute',
                        left: `${(robuxesCount - 210) / (5000 - 210) * 100}%`,
                        transform: 'translateX(-50%)',
                        pointerEvents: 'none'
                    }}>
                        <div style={{
                            background: '#fbbf24',
                            borderRadius: '20px',
                            padding: '5px 10px',
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            fontSize: '1em' }}>
                            {robuxesCount}
                            <FaLock style={{ marginLeft: '5px' }} />
                        </div>
                    </div>
                </SliderContainer>
                {/*    </InputWrapper>*/}
                {/*</InputBlock>*/}
                <MinRobuxText>Минимальное число робуксов: 210</MinRobuxText>
                {promocodeMsg !== null ? <MinRobuxText>{promocodeMsg}</MinRobuxText> : null}
                <BuyButton onClick={() => {
                    if (robuxesCount !== '' && rublesToPay !== '' && parseInt(robuxesCount) >= 210) {
                        setOpenBuyMenu(true)
                    }
                }}>Купить</BuyButton>
                <PromoLink id="open-modal-btn" onClick={() => setPromocodeMenu(true)}>Использовать промокод</PromoLink>
            </BuyForm>
            <LoginModal $show={promocodeMenu} onClick={closeToggleMenu}>
                <ModalContent>
                    <CloseButton onClick={togglePromocodeMenu}>&times;</CloseButton>
                    <ModalTitle>Активация промокода</ModalTitle>
                    <LabelText>Введите промокод</LabelText>
                    <ModalInput
                        type="text"
                        placeholder="Введите промокод"
                        style={{color: "white"}}
                        value={promocode}
                        onChange={(e) => setPromocode(e.target.value)}
                    />

                    {isLoading && (
                        <LoadingSpinner>
                            <AtomicSpinner />
                        </LoadingSpinner>
                    )}
                    {error && <ModalText>{error}</ModalText>}
                    <ModalButton onClick={handlePromocode}>Активировать</ModalButton>
                </ModalContent>
            </LoginModal>
            </>
            : loggedInUser === null || loggedInUser === undefined ?
            <>
                {/*<StepCaption style={{display: "flex", marginTop: 0}} onClick={() => setOpenBuyMenu(false)}>*/}

                {/*    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" style={{color: "var(--color-body)"}}>*/}
                {/*          <g clip-path="url(#clip0_76_1619)">*/}
                {/*              <path d="M21 9.4501H3.99L9.87 3.5701L8.4 2.1001L0 10.5001L8.4 18.9001L9.87 17.4301L3.99 11.5501H21V9.4501Z" fill="currentColor"></path>*/}
                {/*          </g>*/}
                {/*          <defs>*/}
                {/*              <clipPath id="clip0_76_1619">*/}
                {/*                  <rect width="21" height="21" fill="currentColor"></rect>*/}
                {/*              </clipPath>*/}
                {/*          </defs>*/}
                {/*      </svg>*/}
                {/*    <BuyButton style={{background: "none", padding: 0, paddingLeft: "10px"}} >Назад</BuyButton>*/}
                {/*</StepCaption>*/}
                {/*<InputWrapper style={{marginTop: "20px"}}>*/}
                {/*        <StyledInput*/}
                {/*            placeholder="Поиск Игрока"*/}
                {/*            id="SearchRequest"*/}
                {/*            type="text"*/}
                {/*            value={inputValue}*/}
                {/*            onInput={(e ) => setInputValue(e.target.value)}*/}
                {/*        />*/}
                {/*    {isLoading && (*/}
                {/*        <LoadingSpinner>*/}
                {/*            <AtomicSpinner />*/}
                {/*        </LoadingSpinner>*/}
                {/*    )}*/}
                {/*    {!isLoading && users.length > 0 && (*/}
                {/*        <UserCardContainer>*/}
                {/*            {users.map((user) => (*/}
                {/*                <UserCard key={user.id} onClick={() => handleLogin(user)}>*/}
                {/*                    <UserAvatar src={user.avatar_url} alt={user.name} />*/}
                {/*                    <UserInfo>*/}
                {/*                        <UserName>{user.name.length > 8 ? user.name.slice(0, 8) + ".." : user.name}</UserName>*/}
                {/*                        <UserUsername>@{user.name.length > 8 ? user.name.slice(0, 8) + ".." : user.name}</UserUsername>*/}
                {/*                    </UserInfo>*/}
                {/*                </UserCard>*/}
                {/*            ))}*/}
                {/*        </UserCardContainer>*/}
                {/*    )}*/}
                {/*    {error && <ModalText>{error}</ModalText>}*/}
                {/*    {!isLoading && users.length === 0 && !error && <ModalText>Данные появятся после ввода никнейма...</ModalText>}*/}
                {/*    <ModalButton onClick={() => handleLogin(users[0])}>Войти</ModalButton>*/}

                {/*    </InputWrapper>*/}
            </>: gameId === null || gameId === undefined || gameId === "" ? <>

                        {/*<StepCaption style={{display: "flex"}}>*/}
                        {/*    <BuyButton onClick={() => setOpenBuyMenu(false)}>Назад</BuyButton>*/}
                        {/*    <StyledLabel htmlFor="robuxesCount"></StyledLabel>*/}
                        {/*</StepCaption>*/}
                        {/*<StepCaption style={{display: "flex", marginTop: 0}} onClick={() => {setGameId(null); setOpenBuyMenu(false)}}>*/}

                        {/*    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" style={{color: "var(--color-body)"}}>*/}
                        {/*        <g clip-path="url(#clip0_76_1619)">*/}
                        {/*            <path d="M21 9.4501H3.99L9.87 3.5701L8.4 2.1001L0 10.5001L8.4 18.9001L9.87 17.4301L3.99 11.5501H21V9.4501Z" fill="currentColor"></path>*/}
                        {/*        </g>*/}
                        {/*        <defs>*/}
                        {/*            <clipPath id="clip0_76_1619">*/}
                        {/*                <rect width="21" height="21" fill="currentColor"></rect>*/}
                        {/*            </clipPath>*/}
                        {/*        </defs>*/}
                        {/*    </svg>*/}
                        {/*    <BuyButton style={{background: "none", padding: 0, paddingLeft: "10px"}}>Назад</BuyButton>*/}
                        {/*</StepCaption>*/}
                        {/*<InputWrapper style={{marginTop: "20px"}}>*/}
                        {/*    <ScrollWrapper style={{overflowY: "scroll", height: "50vh"}}>*/}
                        {/*        {games.map((game) => (*/}
                        {/*            <StyledPlace onClick={() => handlePlaceChoice(game)} style={{cursor: "pointer"}}>*/}
                        {/*            <PlaceImage src={game.icon_url} alt={game.name} style={{height: '180px', width: '210px'}}/>*/}
                        {/*            <PlaceTitle style={{marginLeft: "20px"}}>{game.name}</PlaceTitle>*/}
                        {/*            </StyledPlace>*/}
                        {/*        ))}*/}
                        {/*    </ScrollWrapper>*/}
                        {/*</InputWrapper>*/}
                        {error !== '' ? <><MinRobuxText htmlFor="robuxesCount">{error}</MinRobuxText></> : null}
                    </> : <>
                        <GamePassWrapper style={{maxWidth: "100%", boxSizing: "border-box"}}>
                            <StepCaption style={{display: "flex", marginTop: 0}} onClick={() => setGameId(null)}>

                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" style={{color: "var(--color-body)"}}>
                                    <g clip-path="url(#clip0_76_1619)">
                                        <path d="M21 9.4501H3.99L9.87 3.5701L8.4 2.1001L0 10.5001L8.4 18.9001L9.87 17.4301L3.99 11.5501H21V9.4501Z" fill="currentColor"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_76_1619">
                                            <rect width="21" height="21" fill="currentColor"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <BuyButton style={{background: "none", padding: 0, paddingLeft: "10px"}}>Назад</BuyButton>
                            </StepCaption>

                            <GamePassTitle>Создайте новый GamePass с ценой {Math.round(robuxesCount * 1.429)} (R$)</GamePassTitle>

                            <GamePassAttention>
                                <strong style={{}}>Внимание </strong>
                                <GamePassInstruction href="/path/to/instruction.pdf">Инструкция.pdf</GamePassInstruction>
                                <p>
                                    Обязательно каждый раз создавайте новый геймпасс. Робуксы доставляются методом Transfer в течение 5-7 дней с момента оплаты. Проверить статус робуксов можно в поле Pending Robux —{' '}
                                    <GamePassLink href="https://www.roblox.com/transactions" target="_blank" rel="noopener noreferrer">
                                        https://www.roblox.com/transactions
                                    </GamePassLink>
                                </p>
                            </GamePassAttention>

                            <div>
                                <GamePassLabel htmlFor="email">Почта</GamePassLabel>
                                <GamePassInput
                                    style={{width: "94%", color: "rgb(255 255 255 / var(--tw-text-opacity)", backgroundColor: "#013d1d"}}
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Введите свою почту"
                                />
                                <p>Вводя свою почту, вы соглашаетесь с тем, что на неё будет отправлен чек и информация о заказе.</p>
                            </div>

                            <GamePassCheckboxContainer style={{display: "flex"}}>
                                <input type="checkbox" id="agreement" onChange={() => setAgreement(!agreement)}/>
                                <GamePassLabel htmlFor="agreement" style={{marginLeft: "10px"}}>
                                    Согласен с{' '}
                                    <GamePassLink href="/PrivacyPage">Публичной офертой</GamePassLink> и{' '}
                                    <GamePassLink href="/AgreementPage">Пользовательским соглашением</GamePassLink>
                                </GamePassLabel>
                            </GamePassCheckboxContainer>

                            <GamePassButtonContainer>
                                <ModalLink href={`https://create.roblox.com/dashboard/creations/experiences/${gameId}/associated-items?activeTab=Pass`}>Создать GamePass</ModalLink>
                                {!availabilityChecked ? <ModalButton style={{marginLeft: "100px"}} onClick={sendCheck} disabled={isLoading}>Проверить</ModalButton> :
                                    <ModalButton style={{marginLeft: "100px"}} onClick={sendForm} disabled={isLoading}>Отправить</ModalButton> }
                            </GamePassButtonContainer>
                            {error !== '' ? <><MinRobuxText htmlFor="robuxesCount">{error}</MinRobuxText></> : null}
                            {bonusBalance !== 0 ? <MinRobuxText htmlFor="bonusBalanceInfo">Вы выводите бонусы с своего аккаунта!</MinRobuxText> : null}
                        </GamePassWrapper>
                    </>}
        </>
    );

    const renderStepsSidebar = () => (
        <StepsSidebar>
            <ul>
                {Array.from({ length: 3 }, (_, index) => (
                    <li key={index} className={`step-item ${currentStep === index + 1 ? 'active' : ''}`}>
                        <StepNumber className={`${currentStep >= index + 1 ? 'completed' : ''}`}>{index + 1}</StepNumber>
                        {index < 2 && <StepLine className={`${currentStep > index + 1 ? 'active-line' : ''}`} />} {/* Полоска между шагами */}
                    </li>
                ))}
            </ul>
        </StepsSidebar>
    );

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <StepForm>
                        <StepCaption>
                            <StepHeader>
                                <StepTitle>Выберите ваш профиль</StepTitle>
                                <CloseButton onClick={() => setOpenBuyMenu(false)}>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <g clipPath="url(#clip0_76_1619)">
                                            <circle cx="10.5" cy="10.5" r="10.5" fill="#6a0dad" />
                                            <path d="M14 7L7 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 7L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </CloseButton>
                            </StepHeader>
                            <StepSubtitle>Чтобы продолжить, вам нужно выбрать профиль</StepSubtitle>
                        </StepCaption>
                        <InputWrapper>
                            <IconWrapper>
                                <img src={Search} alt="Search Icon" style={{ width: "24px", marginRight: "10px" }} />
                            </IconWrapper>
                            <StyledInput
                                placeholder="Введите никнейм"
                                id="SearchRequest"
                                type="text"
                                value={inputValue}
                                onInput={(e) => setInputValue(e.target.value)}
                            />
                            {/*{isLoading && <LoadingSpinner>Загрузка...</LoadingSpinner>}*/}
                        </InputWrapper>

                        {/* Перемещаем список карточек под инпут */}
                        {/* Список Игроков */}
                        {!isLoading && users.length > 0 && (
                            <UserCardContainer>
                                {users.map((user) => (
                                    <UserCard key={user.id} onClick={() => handleNextStep()}>
                                        <UserAvatar src={user.avatar_url} alt={user.name} />
                                        <UserInfo>
                                            <UserName>{user.name}</UserName>
                                            <UserUsername>@{user.username}</UserUsername>
                                        </UserInfo>
                                    </UserCard>
                                ))}
                            </UserCardContainer>
                        )}
                        {!isLoading && users.length === 0 && !error && <ModalText>Данные появятся после ввода никнейма...</ModalText>}
                        <ModalButton onClick={handleNextStep}>Далее</ModalButton>
                    </StepForm>
                );
            case 2:
                return (
                    <StepForm>
                        <StepHeader>
                            <StepTitle>Выберите ваш Place</StepTitle>
                            <CloseButton onClick={() => setOpenBuyMenu(false)}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <g clipPath="url(#clip0_76_1619)">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="#6a0dad" />
                                        <path d="M14 7L7 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </CloseButton>
                        </StepHeader>
                        <StepSubtitle>Чтобы продолжить, вам нужно выбрать имеющийся Place</StepSubtitle>
                        <InputWrapper>

                                {games.map((game) => (
                                    <StyledPlace onClick={() => handleNextStep()} style={{ cursor: "pointer" }}>
                                        <PlaceImage src={game.icon_url} alt={game.name} style={{ height: '180px', width: '210px' }} />
                                        <PlaceTitle>{game.name}</PlaceTitle>
                                    </StyledPlace>
                                ))}

                        </InputWrapper>
                        <StepButton onClick={handleNextStep}>Далее</StepButton>
                        {error !== '' && <MinRobuxText>{error}</MinRobuxText>}
                    </StepForm>
                );
            case 3:
                return (
                    <StepForm>
                        <StepCaption style={{display: "flex", marginTop: 0}} onClick={() => setGameId(null)}>

                        </StepCaption>
                        <StepHeader>
                            <GamePassTitle>Создайте новый GamePass с ценой {Math.round(robuxesCount * 1.429)} (R$)</GamePassTitle>
                            <CloseButton onClick={() => setOpenBuyMenu(false)}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <g clipPath="url(#clip0_76_1619)">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="#6a0dad" />
                                        <path d="M14 7L7 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </CloseButton>
                        </StepHeader>


                        <GamePassAttention>
                            <strong style={{}}>Внимание </strong>
                            <GamePassInstruction href="/path/to/instruction.pdf">Инструкция.pdf</GamePassInstruction>
                            <p>
                                Обязательно каждый раз создавайте новый геймпасс. Робуксы доставляются методом Transfer в течение 5-7 дней с момента оплаты. Проверить статус робуксов можно в поле Pending Robux —{' '}
                                <GamePassLink href="https://www.roblox.com/transactions" target="_blank" rel="noopener noreferrer">
                                    https://www.roblox.com/transactions
                                </GamePassLink>
                            </p>
                        </GamePassAttention>

                        <div>
                            <GamePassLabel htmlFor="email">Почта</GamePassLabel>
                            <GamePassInput
                                style={{width: "94%", color: "rgb(255 255 255 / var(--tw-text-opacity)", backgroundColor: "#013d1d"}}
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Введите свою почту"
                            />

                            <GrayText>Вводя свою почту, вы соглашаетесь с тем, что на неё будет отправлен чек и информация о заказе.</GrayText>
                        </div>

                        <GamePassCheckboxContainer style={{display: "flex"}}>

                            <GamePassLabel htmlFor="agreement">
                                Согласен с{' '}
                                <GamePassLink href="/PrivacyPage">Публичной офертой</GamePassLink> и{' '}
                                <GamePassLink href="/AgreementPage">Пользовательским соглашением</GamePassLink>
                                <input type="checkbox" id="agreement" onChange={() => setAgreement(!agreement)} />
                            </GamePassLabel>
                        </GamePassCheckboxContainer>

                        <GamePassButtonContainer>
                            <ModalLink href={`https://create.roblox.com/dashboard/creations/experiences/${gameId}/associated-items?activeTab=Pass`}>Создать GamePass</ModalLink>
                            {!availabilityChecked ? <ModalButton style={{marginLeft: "100px"}} onClick={sendCheck} disabled={isLoading}>Проверить</ModalButton> :
                                <ModalButton style={{marginLeft: "100px"}} onClick={sendForm} disabled={isLoading}>Отправить</ModalButton> }
                        </GamePassButtonContainer>
                        {error !== '' ? <><MinRobuxText htmlFor="robuxesCount">{error}</MinRobuxText></> : null}
                        {bonusBalance !== 0 ? <MinRobuxText htmlFor="bonusBalanceInfo">Вы выводите бонусы с своего аккаунта!</MinRobuxText> : null}
                    </StepForm>

                );
            default:
                return null;
        }
    };


    const renderGiftForm = () => (
        <>
            <BackButtonContainer onClick={() => setActiveButton('standard')}>
                <BackButtonIcon src={ArrowIcon} alt="Back" />
                <BackButtonText>Подтвердите персонажа</BackButtonText>
            </BackButtonContainer>
            <SecondStyledLabel htmlFor="nickname">Введите свой никнейм</SecondStyledLabel>
            <InputWrapper>
                <SecondStyledInput
                    placeholder="Coming soon..."
                    id="nickname"
                    type="text"
                />
            </InputWrapper>
        </>
    );

    return (
        <BannerArea  style={{height: "auto", marginBottom: "20px"}}>
            <Sphere src={sphere} alt="Floating Sphere" />
            <RobuxCoin src={coin} alt="Floating Coin" />
            <SmallCoin src={smallcoin} alt="Floating Coin" />
            <BiggerCoin src={biggercoin} alt="Floating Coin" />
            <SaleContainer>
                <TitleArea>
                    <Title>Покупай</Title>
                    <Subtitle>
                        <TitleLine>
                            <GreenText>по курсу</GreenText>
                            <Word>{course}</Word>
                            <CurrencyIcon src={Robux} alt="Robux Icon" />
                        </TitleLine>
                    </Subtitle>
                    <SubTitle>
                        <Exchange>
                            Лучший курс
                            <InfoIcon src={Sign} alt="Info Icon" />
                        </Exchange>
                        <PurpleLineContainer onClick={handlePurpleLineClick}>
                            <PurpleLine />
                        </PurpleLineContainer>
                    </SubTitle>
                </TitleArea>
                <NavContainer>
                    <NavButton
                        active={activeButton === 'standard'}
                        onClick={() => setActiveButton('standard')}
                    >
                        <img src={ClockIcon} alt="Clock Icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        Стандартный трансфер
                    </NavButton>

                </NavContainer>
                <PricingArea>
                    {activeButton === 'standard' ? renderStandardForm() : renderGiftForm()}
                </PricingArea>
                    {buyMenu && (
                        <FormOverlay>
                            <StepsContainer>
                                {renderStepsSidebar()}
                                {renderStepContent()}
                            </StepsContainer>
                        </FormOverlay>
                    )}
            </SaleContainer>
            {/*<MainChar src={DragonImage} alt="Dragon Character" />*/}
        </BannerArea>
    );


};

export default PurchaseComponent;
