import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';
import HalfSphere from '../assets/img/halfSphere.png';
import TinySphere from '../assets/img/TinySphere.png';
import TiniestSphere from '../assets/img/FuckingTinySphere.png';
import Pzdz from '../assets/img/PzdzSmall.png';


const PolicyContainer = styled.div`
    ${tw`bg-[#1d1b29] p-8 rounded-lg shadow-lg flex flex-col`}
    max-width: 1200px;
    width: 100%;
    height: 80vh; /* Ограничиваем высоту формы */
    margin: 0 auto;
    margin-top: 20px;
    padding: 40px;
    border-radius: 24px;
    color: white;
    overflow-y: auto; /* Добавляем скролл */

    /* Стилизация скроллбара */
    ::-webkit-scrollbar {
        width: 8px !important; /* Уменьшаем ширину скроллбара */
    }

    ::-webkit-scrollbar-thumb {
        background-color: #4a4a4a !important; /* Серый цвет скроллбара */
        border-radius: 10px !important; /* Скругляем скроллбар */
    }

    ::-webkit-scrollbar-track {
        background-color: transparent !important; /* Делаем фон трека прозрачным */
    }
`;

const Title = styled.h2`
    ${tw`text-xl font-bold mb-4`}
`;

const Section = styled.div`
    ${tw`mb-8`}
`;

const SubSection = styled.div`
    ${tw`mb-4`}
`;

const SubTitle = styled.h3`
    ${tw`text-lg font-semibold mb-2`}
`;

const Text = styled.p`
    ${tw`text-base leading-7 mb-2`}
    line-height: 1.6;
`;

const AppContainer = styled.div`
    ${tw`bg-[rgb(19, 17, 27)] min-h-screen`}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
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

const FAQTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
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
    opacity: 0;
    animation: fadeIn 0.5s forwards;
`;

const renderTitle = (text) => {
    return text.split('').map((letter, index) => (
        <LetterWrapper key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {letter}
        </LetterWrapper>
    ));
};

const PolicyPage = () => {
    return (
        <AppContainer>
            <Sphere src={HalfSphere} alt="Floating Sphere" />
            <Sphere2 src={TinySphere} alt="Floating Sphere" />
            <Sphere3 src={TiniestSphere} alt="Floating Sphere" />
            <Sphere4 src={Pzdz} alt="Floating Sphere" />
            <FAQTitleWrapper>
                <FAQTitle>
                    <FAQMainText>{renderTitle('Политика')}</FAQMainText>
                </FAQTitle>
                <FAQSubText>{renderTitle('Конфиденциальности')}</FAQSubText>
            </FAQTitleWrapper>
            <PolicyContainer className="PolicyContainer">
                <Title>НАСТОЯЩАЯ ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ ПЕРСОНАЛЬНЫХ ДАННЫХ</Title>
                <Text>
                    НАСТОЯЩАЯ ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ ПЕРСОНАЛЬНЫХ ДАННЫХ (ДАЛЕЕ – ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ) ДЕЙСТВУЕТ В ОТНОШЕНИИ ВСЕЙ ИНФОРМАЦИИ, КОТОРУЮ ИНТЕРНЕТ-МАГАЗИН «ROBUX.IO», РАСПОЛОЖЕННЫЙ НА ДОМЕННОМ ИМЕНИ WWW.ROBUX.IO , МОЖЕТ ПОЛУЧИТЬ О ПОЛЬЗОВАТЕЛЕ ВО ВРЕМЯ ИСПОЛЬЗОВАНИЯ САЙТА ИНТЕРНЕТ-МАГАЗИНА, ПРОГРАММ И ПРОДУКТОВ ИНТЕРНЕТ-МАГАЗИНА.
                </Text>
                <Section>
                    <SubTitle>1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</SubTitle>
                    <SubSection>
                        <Text>1.1. В НАСТОЯЩЕЙ ПОЛИТИКЕ КОНФИДЕНЦИАЛЬНОСТИ ИСПОЛЬЗУЮТСЯ СЛЕДУЮЩИЕ ТЕРМИНЫ:</Text>
                        <Text>1.1.1.«АДМИНИСТРАЦИЯ САЙТА ИНТЕРНЕТ-МАГАЗИНА (ДАЛЕЕ – АДМИНИСТРАЦИЯ САЙТА) » – УПОЛНОМОЧЕННЫЕ СОТРУДНИКИ НА УПРАВЛЕНИЯ САЙТОМ, ДЕЙСТВУЮЩИЕ ОТ ИМЕНИ ROBUX.IO, КОТОРЫЕ ОРГАНИЗУЮТ И (ИЛИ) ОСУЩЕСТВЛЯЮТ ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ, А ТАКЖЕ ОПРЕДЕЛЯЮТ ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ, СОСТАВ ПЕРСОНАЛЬНЫХ ДАННЫХ, ПОДЛЕЖАЩИХ ОБРАБОТКЕ, ДЕЙСТВИЯ (ОПЕРАЦИИ), СОВЕРШАЕМЫЕ С ПЕРСОНАЛЬНЫМИ ДАННЫМИ.</Text>
                        <Text>1.1.2. «ПЕРСОНАЛЬНЫЕ ДАННЫЕ» - ЛЮБАЯ ИНФОРМАЦИЯ, ОТНОСЯЩАЯСЯ К ПРЯМО ИЛИ КОСВЕННО ОПРЕДЕЛЕННОМУ ИЛИ ОПРЕДЕЛЯЕМОМУ ФИЗИЧЕСКОМУ ЛИЦУ (СУБЪЕКТУ ПЕРСОНАЛЬНЫХ ДАННЫХ).</Text>
                        <Text>1.1.3. «ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ» - ЛЮБОЕ ДЕЙСТВИЕ (ОПЕРАЦИЯ) ИЛИ СОВОКУПНОСТЬ ДЕЙСТВИЙ (ОПЕРАЦИЙ), СОВЕРШАЕМЫХ С ИСПОЛЬЗОВАНИЕМ СРЕДСТВ АВТОМАТИЗАЦИИ ИЛИ БЕЗ ИСПОЛЬЗОВАНИЯ ТАКИХ СРЕДСТВ С ПЕРСОНАЛЬНЫМИ ДАННЫМИ, ВКЛЮЧАЯ СБОР, ЗАПИСЬ, СИСТЕМАТИЗАЦИЮ, НАКОПЛЕНИЕ, ХРАНЕНИЕ, УТОЧНЕНИЕ (ОБНОВЛЕНИЕ, ИЗМЕНЕНИЕ), ИЗВЛЕЧЕНИЕ, ИСПОЛЬЗОВАНИЕ, ПЕРЕДАЧУ (РАСПРОСТРАНЕНИЕ, ПРЕДОСТАВЛЕНИЕ, ДОСТУП), ОБЕЗЛИЧИВАНИЕ, БЛОКИРОВАНИЕ, УДАЛЕНИЕ, УНИЧТОЖЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ.</Text>
                        <Text>1.1.4. «КОНФИДЕНЦИАЛЬНОСТЬ ПЕРСОНАЛЬНЫХ ДАННЫХ» - ОБЯЗАТЕЛЬНОЕ ДЛЯ СОБЛЮДЕНИЯ ОПЕРАТОРОМ ИЛИ ИНЫМ ПОЛУЧИВШИМ ДОСТУП К ПЕРСОНАЛЬНЫМ ДАННЫМ ЛИЦОМ ТРЕБОВАНИЕ НЕ ДОПУСКАТЬ ИХ РАСПРОСТРАНЕНИЯ БЕЗ СОГЛАСИЯ СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ ИЛИ НАЛИЧИЯ ИНОГО ЗАКОННОГО ОСНОВАНИЯ.</Text>
                        <Text>1.1.5. «ПОЛЬЗОВАТЕЛЬ САЙТА ИНТЕРНЕТ-МАГАЗИНА (ДАЛЕЕ ‑ ПОЛЬЗОВАТЕЛЬ)» – ЛИЦО, ИМЕЮЩЕЕ ДОСТУП К САЙТУ, ПОСРЕДСТВОМ СЕТИ ИНТЕРНЕТ И ИСПОЛЬЗУЮЩЕЕ САЙТ ИНТЕРНЕТ-МАГАЗИНА.</Text>
                        <Text>1.1.6. «COOKIES» — НЕБОЛЬШОЙ ФРАГМЕНТ ДАННЫХ, ОТПРАВЛЕННЫЙ ВЕБ-СЕРВЕРОМ И ХРАНИМЫЙ НА КОМПЬЮТЕРЕ ПОЛЬЗОВАТЕЛЯ, КОТОРЫЙ ВЕБ-КЛИЕНТ ИЛИ ВЕБ-БРАУЗЕР КАЖДЫЙ РАЗ ПЕРЕСЫЛАЕТ ВЕБ-СЕРВЕРУ В HTTP-ЗАПРОСЕ ПРИ ПОПЫТКЕ ОТКРЫТЬ СТРАНИЦУ СООТВЕТСТВУЮЩЕГО САЙТА.</Text>
                        <Text>1.1.7. «IP-АДРЕС» — УНИКАЛЬНЫЙ СЕТЕВОЙ АДРЕС УЗЛА В КОМПЬЮТЕРНОЙ СЕТИ, ПОСТРОЕННОЙ ПО ПРОТОКОЛУ IP.</Text>
                    </SubSection>
                </Section>

                {/* Добавление дополнительных разделов и текста */}

            </PolicyContainer>
        </AppContainer>
    );
};

export default PolicyPage;
