import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import HalfSphere from '../assets/img/halfSphere.png';
import TinySphere from '../assets/img/TinySphere.png';
import TiniestSphere from '../assets/img/FuckingTinySphere.png';
import Pzdz from '../assets/img/PzdzSmall.png';
import sphere from "../assets/img/sphere-one.png";

const revealLetter = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const FAQContainer = styled.div`
    ${tw`container mx-auto my-12 px-6 md:px-12`}
`;

const FAQTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FAQTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FAQMainText = styled.h1`
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    padding-right: 20px;
    line-height: 100%;
    letter-spacing: -2.4px;
    color: white;
    white-space: nowrap;
`;

const FAQSubText = styled.span`
    color: #5b73e8;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    margin-top: -40px;
    padding-bottom: 5%;
`;

const LetterWrapper = styled.span`
    display: inline-block;
    animation: ${revealLetter} 0.05s ease forwards;
    opacity: 0;
`;

const FAQItemWrapper = styled.div`
    ${tw`flex flex-col items-center`}
`;

const FAQItem = styled.div`
    ${tw`bg-[rgb(29,27,41)] p-6 rounded-md mb-4 cursor-pointer`}
    border: 1px solid #333;
    color: white;
    margin-bottom: 20px;
    border-radius: 16px;
    border: none;
    background: #1d1b29;
    transition: background-color 0.3s ease;
    width: 60%; /* Reduced width for FAQ items */
    max-width: 800px; /* Maximum width for larger screens */
    &:hover {
        background-color: #1d1b29;
    }
    animation: ${fadeIn} 0.8s ease forwards;
`;

const FAQQuestion = styled.div`
    ${tw`font-bold text-lg md:text-xl`}
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -0.4px;
    padding: 0 0 0 10px;
`;

const FAQAnswer = styled.div`
    ${tw`mt-2 text-sm md:text-base overflow-hidden`}
    max-height: ${(props) => (props.isOpen ? `${props.contentHeight}px` : '0')};
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    transition: max-height 0.6s ease, opacity 0.6s ease;
    padding-left: 10px;
`;

const Sphere = styled.img`
    left: -50px;
    top: 55%;
    position: absolute;
`;

const Sphere2 = styled.img`
    left: 10%;
    top: 15%;
    position: absolute;
`;

const Sphere3 = styled.img`
    right: 10%;
    top: 25%;
    position: absolute;
`;
const Sphere4 = styled.img`
    right: 8%;
    top: 70%;
    position: absolute;
`;


const FAQComponent = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [contentHeights, setContentHeights] = useState([]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const answerRefs = useRef([]);

    useEffect(() => {
        setContentHeights(answerRefs.current.map((ref) => ref.scrollHeight));
    }, []);

    const renderTitle = (text) => {
        return text.split('').map((letter, index) => (
            <LetterWrapper key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                {letter}
            </LetterWrapper>
        ));
    };

    return (
        <FAQContainer>
            <Sphere src={HalfSphere} alt="Floating Sphere" />
            <Sphere2 src={TinySphere} alt="Floating Sphere" />
            <Sphere3 src={TiniestSphere} alt="Floating Sphere" />
            <Sphere4 src={Pzdz} alt="Floating Sphere" />
            <FAQTitleWrapper>
                <FAQTitle>
                    <FAQMainText>{renderTitle('Частые')}</FAQMainText>
                    <FAQMainText>{renderTitle('вопросы')}</FAQMainText>
                </FAQTitle>
                <FAQSubText>{renderTitle('FAQ')}</FAQSubText>
            </FAQTitleWrapper>
            <FAQItemWrapper>
                <FAQItem onClick={() => toggleFAQ(0)}>
                    <FAQQuestion>ГДЕ МОЖНО ПРОВЕРИТЬ КУПЛЕННЫЕ РОБУКСЫ?</FAQQuestion>
                    <FAQAnswer
                        isOpen={openIndex === 0}
                        contentHeight={contentHeights[0]}
                        ref={(el) => (answerRefs.current[0] = el)}
                    >
                        Робуксы доставляются методом Transfer 5-7 дней с момента оплаты. Проверить статус робуксов можно в поле Pending Robux - <a href="https://www.roblox.com/transactions" target="_blank" rel="noopener noreferrer">https://www.roblox.com/transactions</a>
                        <br /> <br/>
                        Робуксы доставляются методом Plugin от 5 минут до 30 дней с момента оплаты. Проверить статус робуксов можно в поле Pending Robux - <a href="https://www.roblox.com/transactions" target="_blank" rel="noopener noreferrer">https://www.roblox.com/transactions</a> Робуксы обычно начисляются сразу в случае если у вас подтвержден возраст.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem onClick={() => toggleFAQ(1)}>
                    <FAQQuestion>БЕСПЛАТНЫЕ РОБУКСЫ!</FAQQuestion>
                    <FAQAnswer
                        isOpen={openIndex === 1}
                        contentHeight={contentHeights[1]}
                        ref={(el) => (answerRefs.current[1] = el)}
                    >
                        Чтобы получить робуксы бесплатно участвуйте в розыгрышах в нашем телеграмм канале или дискорде!
                    </FAQAnswer>
                </FAQItem>
                <FAQItem onClick={() => toggleFAQ(2)}>
                    <FAQQuestion>Я ПОЛУЧАЮ ОШИБКУ</FAQQuestion>
                    <FAQAnswer
                        isOpen={openIndex === 2}
                        contentHeight={contentHeights[2]}
                        ref={(el) => (answerRefs.current[2] = el)}
                    >
                        Если вы получаете ошибку "Геймпасс c ценой * R$ не найден. Или созданный вами геймпасс уже был
                        куплен ранее.", то это значит, что либо вы не создали геймпасс с нужной ценой, либо он был
                        куплен нами ранее.
                        <br/> <br/>
                        Если вы получаете данную ошибку и ранее покупали такое же кол-во робуксов, то при покупке в
                        калькуляторе просто прибавьте или убавьте пару робуксов.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem onClick={() => toggleFAQ(3)}>
                    <FAQQuestion>МНЕ НЕ ОТВЕЧАЮТ В ПОДДЕРЖКЕ!</FAQQuestion>
                    <FAQAnswer
                        isOpen={openIndex === 3}
                        contentHeight={contentHeights[3]}
                        ref={(el) => (answerRefs.current[3] = el)}
                    >
                        Обычное время ожидания ответа в поддержке занимает 24-48ч, но в особо загруженные дни может вырасти до 7 дн.
                    </FAQAnswer>
                </FAQItem>
                {/* Additional Questions from the Image */}
                <FAQItem onClick={() => toggleFAQ(4)}>
                    <FAQQuestion>КАК КУПИТЬ РОБУКСЫ?</FAQQuestion>
                    <FAQAnswer
                        isOpen={openIndex === 4}
                        contentHeight={contentHeights[4]}
                        ref={(el) => (answerRefs.current[4] = el)}
                    >
                        На странице каждого метода есть инструкция для покупки робуксов, найти её можно после того как вы введете сумму покупки, свой ник и выберите плейс, перед оплатой.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem onClick={() => toggleFAQ(5)}>
                    <FAQQuestion>ПОЧЕМУ КУРС БОЛЬШОЙ?</FAQQuestion>
                    <FAQAnswer
                        isOpen={openIndex === 5}
                        contentHeight={contentHeights[5]}
                        ref={(el) => (answerRefs.current[5] = el)}
                    >
                        Мы стараемся продавать самые дешёвые робуксы, насколько это возможно, но не всё зависит от нас
                    </FAQAnswer>
                </FAQItem>
                <FAQItem onClick={() => toggleFAQ(6)}>
                    <FAQQuestion>МНЕ НЕ ПРИШЛИ РОБУКСЫ!</FAQQuestion>
                    <FAQAnswer
                        isOpen={openIndex === 6}
                        contentHeight={contentHeights[6]}
                        ref={(el) => (answerRefs.current[6] = el)}
                    >
                        Будьте внимательны, у каждого метода своё время ожидания робуксов, если вы всё сделали по инструкции, то вам обязательно всё придёт! Если время ожидания превысило ожидаемое, напишите в поддержку в телеграмм канале @robuxio.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem onClick={() => toggleFAQ(7)}>
                    <FAQQuestion>САЙТ ИМЕЕТ ДРУГИЕ ССЫЛКИ?</FAQQuestion>
                    <FAQAnswer
                        isOpen={openIndex === 7}
                        contentHeight={contentHeights[7]}
                        ref={(el) => (answerRefs.current[7] = el)}
                    >
                        Не попадитесь на мошенников, они делают копии нашего сайта и группы, но не выдают робуксы никогда! У нашего сайта один адрес: robux.io
                    </FAQAnswer>
                </FAQItem>
                <FAQItem onClick={() => toggleFAQ(8)}>
                    <FAQQuestion>МОЖНО ЛИ СДЕЛАТЬ НЕСКОЛЬКО ЗАКАЗОВ ПОДРЯД?</FAQQuestion>
                    <FAQAnswer
                        isOpen={openIndex === 8}
                        contentHeight={contentHeights[8]}
                        ref={(el) => (answerRefs.current[8] = el)}
                    >
                        Да. Вы можете сделать несколько заказов подряд, не дожидаясь их получения.
                    </FAQAnswer>
                </FAQItem>
            </FAQItemWrapper>
        </FAQContainer>
    );
};

export default FAQComponent;
