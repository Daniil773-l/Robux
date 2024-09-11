import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import HalfSphere from '../assets/img/halfSphere.png';
import TinySphere from '../assets/img/TinySphere.png';
import TiniestSphere from '../assets/img/FuckingTinySphere.png';
import Pzdz from '../assets/img/PzdzSmall.png';


const PolicyContainer = styled.div`
    ${tw`bg-[rgb(1, 92, 43)] p-8 rounded-lg shadow-lg flex flex-col`}
    max-width: 1200px;
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    margin-top: 20px;
    padding: 40px;
    border-radius: 24px;
    color: white;
    overflow-y: auto;

    
    /* Custom scrollbar styles */
    &::-webkit-scrollbar {
        width: 8px;
       
    }

    &::-webkit-scrollbar-thumb {
        background-color: #4a4a4a;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
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
    ${tw`text-base leading-7 mb-2 font-bold`}
    line-height: 1.6;
    font-size: 14px;
    color: #8792a2;
    padding-left: 16px;
    
    a {
        color: #0d6efd;
    }
    
`;

const AppContainer = styled.div`
    ${tw`bg-[rgb(11,35,22)] min-h-screen`}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;

const Sphere = styled.img`
    left: -50px;
    top: 55%;
    position: absolute;
    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const Sphere2 = styled.img`
    left: 10%;
    top: 15%;
    position: absolute;
    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const Sphere3 = styled.img`
    right: 10%;
    top: 25%;
    position: absolute;
    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const Sphere4 = styled.img`
    right: 8%;
    top: 70%;
    position: absolute;
    @media (max-width: 768px) {
        @media (max-width: 768px) {
            display: none;
        }
`;

const FAQTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    z-index: 1;
    
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
    z-index: 12;
    @media (max-width: 768px) {
        ${tw`mt-4`}
        margin-top: 30%;
        font-size:40px
    }
`;

const FAQSubText = styled.span`
    color: #5b73e8;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    margin-top: -40px;
    padding-bottom: 5%;
    z-index: 2;
    @media (max-width: 768px) {
        ${tw``}
        font-size:40px
    }
`;

const LetterWrapper = styled.span`
    display: inline-block;
    animation: fadeIn 0.5s forwards;
    z-index: 3;
`;

const renderTitle = (text) => {
    return text.split('').map((letter, index) => (
        <LetterWrapper key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {letter}
        </LetterWrapper>
    ));
};

const AgreementPage = () => {
    return (
        <AppContainer>
            <Sphere src={HalfSphere} alt="Floating Sphere" />
            <Sphere2 src={TinySphere} alt="Floating Sphere" />
            <Sphere3 src={TiniestSphere} alt="Floating Sphere" />
            <Sphere4 src={Pzdz} alt="Floating Sphere" />
            <FAQTitleWrapper>
                <FAQTitle>
                    <FAQMainText>{renderTitle('Пользовательское')}</FAQMainText>
                </FAQTitle>
                <FAQSubText>{renderTitle('соглашение')}</FAQSubText>
            </FAQTitleWrapper>
            <PolicyContainer className="PolicyContainer">
                <Text>НАСТОЯЩЕЕ СОГЛАШЕНИЕ ПРИЗВАНО РЕГУЛИРОВАТЬ ОТНОШЕНИЯ МЕЖДУ ПОЛЬЗОВАТЕЛЕМ И ПРАВООБЛАДАТЕЛЕМ ИНТЕРНЕТ-ПОРТАЛА</Text>
                <Title>СОДЕРЖАНИЕ:</Title>
                <Text>1. ИСПОЛЬЗУЕМЫЕ ТЕРМИНЫ.</Text>
                <Text>2. ПРЕДМЕТ СОГЛАШЕНИЯ.</Text>
                <Text>3. ПОРЯДОК ВСТУПЛЕНИЯ СОГЛАШЕНИЯ В СИЛУ.</Text>
                <Text>4. ПРАВА И ОБЯЗАННОСТИ СТОРОН.</Text>
                <Text>4.1 ПРАВА ПОЛЬЗОВАТЕЛЯ.</Text>
                <Text>4.2 ОБЯЗАННОСТИ ПОЛЬЗОВАТЕЛЯ.</Text>
                <Text>4.3 ПОЛЬЗОВАТЕЛЬ НЕ ИМЕЕТ ПРАВА.</Text>
                <Text>4.4 ПРАВА ОПЕРАТОРА.</Text>
                <Text>4.5 ОБЯЗАННОСТИ ОПЕРАТОРА.</Text>
                <Text>4.6 ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ ОПЕРАТОРА.</Text>
                <Text>4.7 ОПЕРАТОР НЕ ГАРАНТИРУЕТ.</Text>
                <Text>5. КОНФИДЕНЦИАЛЬНОСТЬ И БЕЗОПАСНОСТЬ.</Text>
                <Text>6. ДОПОЛНИТЕЛЬНЫЕ ПЛАТНЫЕ УСЛУГИ И ПОРЯДОК ОПЛАТЫ.</Text>
                <Text>7. ОТКАЗ ОТ ПРЕДОСТАВЛЕНИЯ ГАРАНТИЙ.</Text>
                <Text>8. ДОПОЛНИТЕЛЬНЫЕ ПОЛОЖЕНИЯ.</Text>
                <Text>9. КОНТАКТНАЯ ИНФОРМАЦИЯ.</Text>
                <Section>
                    <SubTitle>1. ИСПОЛЬЗУЕМЫЕ ТЕРМИНЫ</SubTitle>
                    <SubSection>
                        <Text>«ОПЕРАТОР» - ПРАВООБЛАДАТЕЛЬ ПОРТАЛА HTTPS://ROBUX.IO, ЯВЛЯЕТСЯ СТОРОНОЙ ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ. ОПЕРАТОР ОСУЩЕСТВЛЯЕТ АДМИНИСТРИРОВАНИЕ И ОБСЛУЖИВАНИЕ, ПРЕДОСТАВЛЯЕТ ДОСТУП ПОЛЬЗОВАТЕЛЕЙ К ПОРТАЛУ, УСЛУГАМ (ТАКЖЕ ПЛАТНЫМ УСЛУГАМ), НА УСЛОВИЯХ НАСТОЯЩЕГО СОГЛАШЕНИЯ.</Text>
                        <Text>«ПОЛЬЗОВАТЕЛЬ» - ФИЗИЧЕСКОЕ ЛИЦО, ПОСЕЩАЮЩЕЕ ПОРТАЛ ИЛИ ПРИНИМАЮЩЕЕ УЧАСТИЕ В ПРОЕКТАХ ПОРТАЛА HTTPS://ROBUX.IO</Text>
                        <Text>ПОЛЬЗОВАТЕЛЬ, РАВНО КАК И ОПЕРАТОР, ЯВЛЯЕТСЯ СТОРОНОЙ СОГЛАШЕНИЯ.</Text>
                        <Text>«ПОРТАЛ» -РАЗМЕЩЕННЫЕ НА РЕСУРСАХ ОПЕРАТОРА СПЕЦИАЛЬНЫЕ ПРОГРАММНО-АППАРАТНЫЕ КОМПЛЕКСЫ. ДОСТУП ПОЛЬЗОВАТЕЛЕЙ К ПОРТАЛУ ОСУЩЕСТВЛЯЕТСЯ ТОЛЬКО ОПЕРАТОРОМ. ВСЕ ПРАВА НА ИСПОЛЬЗОВАНИЕ ДАННОГО ПОРТАЛА ПРИНАДЛЕЖАТ ИСКЛЮЧИТЕЛЬНО ОПЕРАТОРУ.</Text>
                        <Text>«САЙТ» — САЙТ, РАСПОЛОЖЕННЫЙ В СЕТИ ИНТЕРНЕТ ПО АДРЕСУ HTTPS://ROBUX.IO</Text>
                        <Text>«УСЛУГИ» — ПРЕДОСТАВЛЕНИЕ ПОЛЬЗОВАТЕЛЯМ ДОСТУПА К ПОРТАЛУ, ИСПОЛЬЗОВАНИЕ ВОЗМОЖНОСТЕЙ И СЕРВИСОВ, УЧАСТИЕ В ПРОЕКТАХ НА УСЛОВИЯХ, ОПРЕДЕЛЕННЫХ СОГЛАШЕНИЯМИ. УСЛУГИ ОПЕРАТОРА ПРЕДОСТАВЛЯЮТСЯ НА БЕЗВОЗМЕЗДНОЙ ОСНОВЕ. ИСКЛЮЧЕНИЯ СОСТАВЛЯЮТ ТОЛЬКО ДОПОЛНИТЕЛЬНЫЕ ПЛАТНЫЕ УСЛУГИ. ВСЕ УСЛУГИ ПРЕДОСТАВЛЯЮТСЯ ОПЕРАТОРОМ ТОЛЬКО ВНУТРИ ПОРТАЛА, Т.Е. ВО ВРЕМЯ ЕГО ИСПОЛЬЗОВАНИЯ ПОЛЬЗОВАТЕЛЕМ.</Text>
                        <Text>«ДОПОЛНИТЕЛЬНЫЕ ПЛАТНЫЕ УСЛУГИ» – ПРЕДОСТАВЛЕНИЕ ПОЛЬЗОВАТЕЛЮ ДОПОЛНИТЕЛЬНЫХ СПЕЦИАЛЬНЫХ ВОЗМОЖНОСТЕЙ ПОРТАЛА ЗА ПЛАТУ. ДАННЫЕ УСЛУГИ НЕ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ И ПРЕДОСТАВЛЯЮТСЯ ПО ЖЕЛАНИЮ, ЗАПРОСУ ПОЛЬЗОВАТЕЛЯ. ПЛАТНЫЕ УСЛУГИ ТАКЖЕ ПРЕДОСТАВЛЯЮТСЯ ОПЕРАТОРОМ ИСКЛЮЧИТЕЛЬНО ВНУТРИ ПОРТАЛА</Text>
                    </SubSection>
                </Section>
                <Section>
                    <SubTitle>2. ПРЕДМЕТ СОГЛАШЕНИЯ</SubTitle>
                    <SubSection>
                        <Text>2.1. ПРЕДОСТАВЛЕНИЕ ОПЕРАТОРОМ ДОСТУПА К ПОРТАЛУ (УСЛУГАМ, СЕРВИСАМ, ПЛАТНЫМ УСЛУГАМ) НЕОГРАНИЧЕННОМУ КРУГУ ЛИЦ, НА УСЛОВИЯХ ДАННОГО СОГЛАШЕНИЯ.</Text>
                        <Text>2.2. ПОЛЬЗОВАТЕЛЬ ОСОЗНАЕТ, ЧТО ОСНОВНАЯ ЦЕЛЬ ПРОЕКТОВ ПОРТАЛА HTTPS://ROBUX.IO ЗАКЛЮЧАЕТСЯ В ОРГАНИЗАЦИИ ОПЕРАТОРОМ ДОСУГА И РАЗВЛЕЧЕНИЙ, НИКОИМ ОБРАЗОМ НЕ СВЯЗАННЫХ С АЗАРТНЫМИ ИГРАМИ.</Text>
                    </SubSection>
                </Section>
                <Section>
                    <SubTitle>
                        3. ПОРЯДОК ВСТУПЛЕНИЯ СОГЛАШЕНИЯ В СИЛУ
                    </SubTitle>
                    <SubSection>
                        <Text>3.1. С МОМЕНТА ПРИНЯТИЯ ДАННОГО СОГЛАШЕНИЯ, ПОЛЬЗОВАТЕЛЬ ИМЕЕТ ПРАВА И ИСПОЛНЯЕТ ОБЯЗАННОСТИ, ОГОВОРЕННЫЕ В ТЕКСТЕ НАСТОЯЩЕГО СОГЛАШЕНИЯ.</Text>
                        <Text>3.2. ПОЛЬЗОВАТЕЛЬ ПРИНИМАЕТ И СОГЛАШАЕТСЯ С УСЛОВИЯМИ НАСТОЯЩЕГО СОГЛАШЕНИЯ ПУТЕМ РЕГИСТРАЦИИ НА САЙТЕ: HTTPS://ROBUX.IO ФАКТ ПРИНЯТИЯ ОЗНАЧАЕТ ПОЛНОЕ И БЕЗОГОВОРОЧНОЕ СОГЛАСИЕ ПОЛЬЗОВАТЕЛЯ СО ВСЕМИ УСЛОВИЯМИ И ПРИЛОЖЕНИЯМИ ДАННОГО СОГЛАШЕНИЯ.</Text>
                        <Text>3.3. ЕСЛИ ПОЛЬЗОВАТЕЛЬ ПО КАКИМ-ЛИБО ПРИЧИНАМ НЕ СОГЛАСЕН С УСЛОВИЯМИ ИЛИ ПРИЛОЖЕНИЯМИ НАСТОЯЩЕГО СОГЛАШЕНИЯ, ОН ОБЯЗАН ПРЕКРАТИТЬ ДАЛЬНЕЙШЕЕ ИСПОЛЬЗОВАНИЕ САЙТА.</Text>
                        <Text>3.4. ИСПОЛЬЗОВАТЬ САЙТ МОЖНО ТОЛЬКО ПОСЛЕ ПРИНЯТИЯ НАСТОЯЩЕГО СОГЛАШЕНИЯ ПОЛЬЗОВАТЕЛЕМ.</Text>
                        <Text>3.5. ПРИНИМАЯ НАСТОЯЩЕЕ СОГЛАШЕНИЕ, ПОЛЬЗОВАТЕЛЬ ПОДТВЕРЖДАЕТ СВОЮ ДЕЕСПОСОБНОСТЬ, ПРАВО ЗАКЛЮЧАТЬ ДАННОЕ СОГЛАШЕНИЕ. ОПЕРАТОР НЕ ОБЯЗАН ОСУЩЕСТВЛЯТЬ ПРОВЕРКУ ДАННЫХ, УКАЗАННЫХ ПОЛЬЗОВАТЕЛЕМ ПРИ РЕГИСТРАЦИИ.</Text>
                        <Text> 3.6. ЕСЛИ ДЛЯ ПОЛЬЗОВАНИЯ ИНФОРМАЦИОННО-РАЗВЛЕКАТЕЛЬНЫМ ПОРТАЛОМ HTTPS://ROBUX.IO ИЛИ УЧАСТИЯ В ПРОЕКТАХ ПОРТАЛА НЕОБХОДИМО СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ (ДАЛЕЕ “УЧЕТНАЯ ЗАПИСЬ”), ТО ПОЛЬЗОВАТЕЛЬ ДОЛЖЕН ПРОЙТИ ПРОЦЕСС РЕГИСТРАЦИИ, ПРЕДОСТАВИВ ОПЕРАТОРУ АКТУАЛЬНУЮ, ПОЛНУЮ И ТОЧНУЮ ИНФОРМАЦИЮ (ВКЛЮЧАЯ АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ) В СООТВЕТСТВУЮЩЕЙ ФОРМЕ. В СЛУЧАЕ РАЗМЕЩЕНИЯ НА ПОРТАЛЕ HTTPS://ROBUX.IO СООБЩЕНИЙ ОБ УЧАСТИИ В ПАРТНЕРСКИХ ПРОГРАММАХ, ЗАРЕГИСТРИРОВАННЫЙ ПОЛЬЗОВАТЕЛЬ ИМЕЕТ ПРАВО УЧАСТИЯ В КОНКУРСАХ, РОЗЫГРЫШАХ, СОРЕВНОВАНИЯХ НА САЙТЕ ПАРТНЕРОВ HTTPS://ROBUX.IO.</Text>

                      </SubSection>
                </Section>
                <Section>
                    <SubTitle>
                        4. ПРАВА И ОБЯЗАННОСТИ СТОРОН
                    </SubTitle>
                    <SubSection>
                        <Text>4.1. ПРАВА ПОЛЬЗОВАТЕЛЯ</Text>
                        <Text>В СООТВЕТСТВИИ С НАСТОЯЩИМ СОГЛАШЕНИЕМ ПОЛЬЗОВАТЕЛЬ ИМЕЕТ ПРАВО: </Text>
                        <Text>ИСПОЛЬЗОВАТЬ ПОРТАЛ ТОЛЬКО В ЛИЧНЫХ, НЕКОММЕРЧЕСКИХ ЦЕЛЯХ.</Text>
                        <Text>ПОЛЬЗОВАТЬСЯ ВСЕМИ СЕРВИСАМИ, РЕСУРСАМИ (ВКЛЮЧАЯ ДОПОЛНИТЕЛЬНЫЕ ПЛАТНЫЕ УСЛУГИ) ПРЕДОСТАВЛЯЕМЫЕ ОПЕРАТОРОМ.</Text>
                        <Text> ПРИ НЕОБХОДИМОСТИ ВОСПОЛЬЗОВАТЬСЯ ТЕХНИЧЕСКОЙ ПОДДЕРЖКОЙ САЙТОВ, ОБРАТИТЬСЯ ПО ВОЗНИКАЮЩИМ ВОПРОСАМ К ОПЕРАТОРУ, ЧЕРЕЗ КОНТАКТНЫЕ ДАННЫЕ ИЛИ ФОРМУ ОБРАТНОЙ СВЯЗИ.</Text>
                        <Text> БЕЗВОЗМЕЗДНО (ИСКЛЮЧАЯ ПРЕДОСТАВЛЕНИЕ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ) ИСПОЛЬЗОВАТЬ САЙТ И УЧАСТВОВАТЬ В ПРОЕКТАХ ПОРТАЛА.</Text>
                        <Text>4.2. ОБЯЗАННОСТИ ПОЛЬЗОВАТЕЛЯ</Text>
                        <Text>СОБЛЮДАЯ УСЛОВИЯ НАСТОЯЩЕГО СОГЛАШЕНИЯ, ПОЛЬЗОВАТЕЛЬ ОБЯЗАН:</Text>
                        <Text>УКАЗЫВАТЬ ДОСТОВЕРНУЮ ИНФОРМАЦИЮ ПРИ РЕГИСТРАЦИИ НА САЙТЕ.</Text>
                        <Text>САМОСТОЯТЕЛЬНО ПРИНИМАТЬ ВСЕ НЕОБХОДИМЫЕ МЕРЫ, ОБЕСПЕЧИВАЮЩИЕ ЭФФЕКТИВНУЮ БЕЗОПАСНОСТЬ ЛИЧНОЙ УЧЕТНОЙ ЗАПИСИ. НЕ ПРЕДОСТАВЛЯТЬ К НЕЙ ДОСТУП ТРЕТЬИМ ЛИЦАМ.</Text>
                        <Text>ПРИ НЕОБХОДИМОСТИ, ПО ТРЕБОВАНИЮ ОПЕРАТОРА, ПРЕДОСТАВЛЯТЬ ПОДТВЕРЖДЕНИЯ СВОИХ ПЕРСОНАЛЬНЫХ ДАННЫХ, УКАЗАННЫХ НА САЙТЕ В МОМЕНТ ПРОХОЖДЕНИЯ РЕГИСТРАЦИИ.</Text>
                        <Text>ВЫПОЛНЯТЬ УКАЗАНИЯ ОПЕРАТОРА В ПРЕДЕЛАХ ДАННОГО ПОРТАЛА.</Text>
                        <Text>НЕ НАРУШАТЬ ПРАВА АВТОРСКОЙ И ИНТЕЛЛЕКТУАЛЬНОЙ СОБСТВЕННОСТИ ОПЕРАТОРА, НАХОДЯЩИХСЯ НА ЕГО ПОРТАЛЕ.</Text>
                        <Text>СОБЛЮДАТЬ ВСЕ БЕЗ ОГРАНИЧЕНИЙ УСЛОВИЯ НАСТОЯЩЕГО СОГЛАШЕНИЯ.</Text>
                        <Text>ПОЛЬЗОВАТЕЛЬ ОБЯЗУЕТСЯ ИСПОЛЬЗОВАТЬ ПОРТАЛ ИСКЛЮЧИТЕЛЬНО В РАЗВЛЕКАТЕЛЬНЫХ ЦЕЛЯХ, НЕ ПРЕСЛЕДУЯ ПОЛУЧЕНИЕ КАКОЙ-ЛИБО ВЫГОДЫ ОТ ПОРТАЛА.</Text>
                        <Text>4.3. ПОЛЬЗОВАТЕЛЬ НЕ ИМЕЕТ ПРАВА</Text>
                        <Text>ИСПОЛЬЗУЯ ПОРТАЛ ОПЕРАТОРА, ПОЛЬЗОВАТЕЛЬ НЕ ВПРАВЕ:</Text>
                        <Text>
                            ИСПОЛЬЗОВАТЬ ОШИБКИ (БАГИ) САЙТА И СЕРВИСОВ ПОРТАЛА, НЕ САНКЦИОНИРОВАНО ПОЛУЧАТЬ ДОСТУП К ОБЩЕЙ БАЗЕ ДАННЫХ, КОМПЬЮТЕРНОЙ СИСТЕМЕ, ИЗМЕНЯТЬ ПРОГРАММНЫЙ КОД. ПОЛЬЗОВАТЕЛЮ ЗАПРЕЩАЕТСЯ ИСПОЛЬЗОВАТЬ ВРЕДОНОСНЫЕ ПРОГРАММЫ, СПОСОБНЫЕ НАНЕСТИ ВРЕД ПОРТАЛУ, А ТАКЖЕ СПЕЦИАЛЬНОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ, ДАЮЩЕЕ ЕМУ ПРЕВОСХОДСТВО ПЕРЕД ДРУГИМИ ПОЛЬЗОВАТЕЛЯМИ. ПРИ ВЫЯВЛЕНИИ ТАКИХ И ПОДОБНЫХ НАРУШЕНИЙ, ОПЕРАТОР ВПРАВЕ ПРИМЕНИТЬ К ПОЛЬЗОВАТЕЛЮ ШТРАФНЫЕ САНКЦИИ, ВКЛЮЧАЯ ЗАПРЕТ ДОСТУПА К САЙТАМ И УДАЛЕНИЕ АККАУНТА.
                        </Text>
                        <Text>ОГРАНИЧИВАТЬ ДОСТУП К САЙТАМ ДРУГИХ ПОЛЬЗОВАТЕЛЕЙ.</Text>
                        <Text>ЗАНИМАТЬСЯ МОШЕННИЧЕСТВОМ И ДРУГИМИ ПРОТИВОПРАВНЫМИ ДЕЙСТВИЯМИ.</Text>
                        <Text>РЕКЛАМИРОВАТЬ ЧТО-ЛИБО, НЕ ИМЕЮЩЕЕ ОТНОШЕНИЕ К ПОРТАЛУ БЕЗ ПИСЬМЕННОГО РАЗРЕШЕНИЯ ОПЕРАТОРА.</Text>
                        <Text>ИСПОЛЬЗОВАТЬ НЕНОРМАТИВНУЮ ЛЕКСИКУ, ВЫРАЖАТЬ УГРОЗЫ В АДРЕС ОПЕРАТОРА ИЛИ ДРУГИХ ПОЛЬЗОВАТЕЛЕЙ, РАСПРОСТРАНЯТЬ МАТЕРИАЛЫ, ПРОПАГАНДИРУЮЩИЕ НАСИЛИЕ, РАСОВУЮ НЕНАВИСТЬ, НЕПРИЯТИЕ К РЕЛИГИОЗНЫМ ВЕРОВАНИЯМ, СОДЕРЖАЩИЕ ПОРНОГРАФИЧЕСКУЮ ИНФОРМАЦИЮ, РЕКЛАМИРУЮЩИЕ НАРКОТИКИ, ПРИЗЫВАЮЩИЕ К НАСИЛЬСТВЕННОМУ СВЕРЖЕНИЮ ВЛАСТИ.</Text>
                        <Text>ПРОВОДИТЬ АНТИРЕКЛАМУ ПОРТАЛА, В ТОМ ЧИСЛЕ, ЗА ИХ ПРЕДЕЛАМИ.</Text>
                        <Text>ПОЛЬЗОВАТЕЛЬ СОГЛАШАЕТСЯ, ЧТО ЕГО ПРАВА И ОБЯЗАННОСТИ МОГУТ БЫТЬ ИЗМЕНЕНЫ/ДОПОЛНЕНЫ ОПЕРАТОРОМ, О ЧЕМ ОН УВЕДОМЛЯЕТСЯ ПО КОНТАКТНЫМ ДАННЫМ, УКАЗАННЫМ ПРИ РЕГИСТРАЦИИ (ИЛИ НА САЙТЕ)</Text>
                        <Text>4.4. ПРАВА ОПЕРАТОРА</Text>
                        <Text>НАСТОЯЩЕЕ СОГЛАШЕНИЕ ПРЕДОСТАВЛЯЕТ ОПЕРАТОРУ СЛЕДУЮЩИЕ ПРАВА:</Text>
                        <Text>В ЛЮБОЕ ВРЕМЯ, ПО СВОЕМУ УСМОТРЕНИЮ, В ОДНОСТОРОННЕМ ПОРЯДКЕ БЕЗ ПРЕДВАРИТЕЛЬНОГО УВЕДОМЛЕНИЯ ПОЛЬЗОВАТЕЛЕЙ, РАСШИРИТЬ, ИЗМЕНИТЬ, ПРЕКРАТИТЬ, ОГРАНИЧИТЬ ОКАЗАНИЕ УСЛУГ, А РАВНО И ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ</Text>
                        <Text>УПРАВЛЯТЬ ВСЕМИ ПРОЦЕССАМИ НА ПОРТАЛАХ ИСКЛЮЧИТЕЛЬНО ПО СВОЕМУ УСМОТРЕНИЮ. ПРИОСТАНАВЛИВАТЬ, ИЗМЕНЯТЬ ХОД ЛЮБЫХ ПРОЦЕССОВ, НЕ УВЕДОМЛЯЯ ПРЕДВАРИТЕЛЬНО ПОЛЬЗОВАТЕЛЯ.</Text>
                        <Text>ПРИМЕНЯТЬ К ПОЛЬЗОВАТЕЛЮ САНКЦИИ В СЛУЧАЕ ВЫЯВЛЕНИЯ НАРУШЕНИЙ ДАННОГО СОГЛАШЕНИЯ.</Text>
                        <Text>УДАЛЯТЬ/ИЗМЕНЯТЬ ИНФОРМАЦИЮ ПОЛЬЗОВАТЕЛЯ, РАЗМЕЩЕННУЮ НА ПОРТАЛАХ.</Text>
                        <Text>ОТСЛЕЖИВАТЬ, СОХРАНЯТЬ ИДЕНТИФИКАЦИОННУЮ И СТАТИСТИЧЕСКУЮ ИНФОРМАЦИЮ О ПОЛЬЗОВАТЕЛЕ.</Text>
                        <Text>РАССЫЛАТЬ ПОЛЬЗОВАТЕЛЯМ ТЕХНИЧЕСКУЮ, РЕКЛАМНУЮ И ИНУЮ ИНФОРМАЦИЮ, КАСАЮЩУЮСЯ ПОРТАЛА, УСЛУГ И ПЛАТНЫХ УСЛУГ.</Text>
                        <Text>ИНФОРМИРОВАТЬ, ПРЕДУПРЕЖДАТЬ, ДЕЛАТЬ ЗАМЕЧАНИЯ, УВЕДОМЛЯТЬ ПОЛЬЗОВАТЕЛЯ В СЛУЧАЕ НЕСОБЛЮДЕНИЯ/НАРУШЕНИЯ УСЛОВИЙ НАСТОЯЩЕГО СОГЛАШЕНИЯ. ВСЕ УКАЗАНИЯ ОПЕРАТОРА ДОЛЖНЫ НЕУКОСНИТЕЛЬНО ВЫПОЛНЯТЬСЯ.</Text>
                        <Text>ПРИНИМАТЬ ЗАКОННЫЕ МЕРЫ ДЛЯ ЗАЩИТЫ СВОЕЙ ИНТЕЛЛЕКТУАЛЬНОЙ, АВТОРСКОЙ СОБСТВЕННОСТИ.</Text>
                        <Text>МОДИФИЦИРОВАТЬ, ИЗМЕНЯТЬ, ДОПОЛНЯТЬ ПОРТАЛ ПО СВОЕМУ УСМОТРЕНИЮ, НЕ ПРЕДУПРЕЖДАЯ ЗАРАНЕЕ ПОЛЬЗОВАТЕЛЯ.</Text>
                        <Text>БЕЗДЕЙСТВИЕ ОПЕРАТОРА НА НАРУШЕНИЯ ПОЛЬЗОВАТЕЛЕМ ДАННОГО СОГЛАШЕНИЯ, НЕ ИСКЛЮЧАЮТ ПРИМЕНЕНИЯ ИМ ШТРАФНЫХ САНКЦИЙ ПОЗДНЕЕ.</Text>
                        <Text>4.5. ОБЯЗАННОСТИ ОПЕРАТОРА</Text>
                        <Text>ЯВЛЯЯСЬ СТОРОНОЙ ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ, ОПЕРАТОР ОБЯЗАН:</Text>
                        <Text>ОБЕСПЕЧИТЬ ВОЗМОЖНОСТЬ ПОЛУЧЕНИЯ ПОЛЬЗОВАТЕЛЕМ УСЛУГ ОПЕРАТОРА ВНУТРИ ДАННОГО ПОРТАЛА (ВКЛЮЧАЯ ПОЛУЧЕНИЕ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ).</Text>
                        <Text>ОТВЕЧАТЬ НА ВОПРОСЫ ПОЛЬЗОВАТЕЛЕЙ, ПРИ ВОЗНИКНОВЕНИИ СПОРНЫХ СИТУАЦИЙ ПРИНИМАТЬ ВСЕ МЕРЫ К ИХ УРЕГУЛИРОВАНИЮ.</Text>
                        <Text>4.6. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ ОПЕРАТОРА</Text>
                        <Text>В СООТВЕТСТВИИ С ДАННЫМ РАЗДЕЛОМ, ОПЕРАТОР НЕ НЕСЕТ ОТВЕТСТВЕННОСТИ ЗА:</Text>
                        <Text>ЛЮБОЙ УЩЕРБ, НАНЕСЕННЫЙ ИЛИ КОТОРЫЙ ТОЛЬКО МОЖЕТ БЫТЬ НАНЕСЕН, ПЕРСОНАЛЬНЫМ ДАННЫМ И КОМПЬЮТЕРУ ПОЛЬЗОВАТЕЛЯ В СВЯЗИ С ИСПОЛЬЗОВАНИЕМ ПОРТАЛА И САЙТА.</Text>
                        <Text>УБЫТКИ (ПРЯМЫЕ/НЕПРЯМЫЕ), ПРИЧИНЕННЫЕ ПОЛЬЗОВАТЕЛЮ В СВЯЗИ С ИСПОЛЬЗОВАНИЕМ ИЛИ НЕДОСТУПНОСТЬЮ ПОРТАЛА (НЕВОЗМОЖНОСТЬЮ ИХ ИСПОЛЬЗОВАНИЯ), ПОВЕДЕНИЕМ ТРЕТЬИХ ЛИЦ НА ПОРТАЛЕ, РАВНО КАК И ДРУГИХ УЧАСТНИКОВ ПРОЕКТОВ ПОРТАЛА, НЕСАНКЦИОНИРОВАННОГО ДОСТУПА К ПЕРСОНАЛЬНЫМ ДАННЫМ ПОЛЬЗОВАТЕЛЯ.</Text>
                        <Text> ВЫСКАЗЫВАНИЯ, РАСПРОСТРАНЯЕМУЮ ИНФОРМАЦИЮ, ЗАЯВЛЕНИЯ ПОЛЬЗОВАТЕЛЯ И ДРУГИЕ ПРОТИВОПРАВНЫЕ ДЕЙСТВИЯ, ОСУЩЕСТВЛЯЕМЫЕ ИМ НА ПОРТАЛЕ И ЗА ЕГО ПРЕДЕЛАМИ.</Text>
                        <Text>УКАЗАННУЮ ПОЛЬЗОВАТЕЛЕМ ИНФОРМАЦИЮ ПРИ РЕГИСТРАЦИИ, УТЕРЯННУЮ ВОЗМОЖНОСТЬ ДОСТУПА К ПОРТАЛУ (ЛОГИН, ПАРОЛЬ И Т.Д.)</Text>
                        <Text>УТРАТУ ПОЛЬЗОВАТЕЛЕМ ПРИОБРЕТЕННЫХ ВИРТУАЛЬНЫХ ЦЕННОСТЕЙ, В РЕЗУЛЬТАТЕ ПРЕДОСТАВЛЕНИЯ УСЛУГ И ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ ОПЕРАТОРОМ.</Text>
                        <Text>ОПЛАТУ ПОЛЬЗОВАТЕЛЕМ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ И СВЯЗАННЫХ С ЭТИМ РАСХОДОВ.</Text>
                        <Text>БЕСПЕРЕБОЙНУЮ РАБОТУ ПОРТАЛА.</Text>
                        <Text>ВОЗМОЖНОСТИ ПОЛЬЗОВАТЕЛЯ, СВЯЗАННЫЕ С ВЫХОДОМ В ИНТЕРНЕТ, СКОРОСТЬЮ ПЕРЕДАЧИ ДАННЫХ.</Text>
                        <Text>4.7. ОПЕРАТОР НЕ ГАРАНТИРУЕТ:</Text>
                        <Text>НЕПРЕРЫВНУЮ, НАДЕЖНУЮ, БЕЗ ОШИБОК РАБОТУ ПОРТАЛА, ДОСТУП К ЕГО РЕСУРСАМ, УСЛУГАМ, В ТОМ ЧИСЛЕ ДОПОЛНИТЕЛЬНЫМ ПЛАТНЫМ УСЛУГАМ.</Text>
                        <Text>ФАКТ ТОГО, ЧТО ПОРТАЛ БУДУТ ПОЛНОСТЬЮ УДОВЛЕТВОРЯТЬ ТРЕБОВАНИЯМ И ПРЕДСТАВЛЕНИЯМ ПОЛЬЗОВАТЕЛЯ.</Text>
                        <Text>СООТВЕТСТВИЕ КАЧЕСТВА ПРЕДОСТАВЛЯЕМЫХ УСЛУГ (ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ) ОЖИДАНИЯМ ПОЛЬЗОВАТЕЛЯ.</Text>
                        <Text> ОПЕРАТОР НЕ ОБЯЗАН ПО ТРЕБОВАНИЮ ПОЛЬЗОВАТЕЛЯ ПРЕДСТАВЛЯТЬ ДОКУМЕНТЫ И ДРУГИЕ ДОКАЗАТЕЛЬСТВА, СВИДЕТЕЛЬСТВУЮЩИЕ О НАРУШЕНИИ (ПОЛЬЗОВАТЕЛЕМ) НАСТОЯЩЕГО СОГЛАШЕНИЯ И ПРИМЕНЕНИЯ ПРОТИВ НЕГО ШТРАФНЫХ/ДИСЦИПЛИНАРНЫХ САНКЦИЙ.</Text>
                        <Text> ПОЛЬЗОВАТЕЛЬ ИСПОЛЬЗУЕТ ПОРТАЛ, САЙТ ОПЕРАТОРА ИСКЛЮЧИТЕЛЬНО НА СВОЙ СТРАХ И РИСК, ПО ДОБРОЙ ВОЛЕ, БЕЗ ПРИНУЖДЕНИЯ. ОН ПОНИМАЕТ О ВОЗМОЖНЫХ РИСКАХ, СВЯЗАННЫХ С ИСПОЛЬЗОВАНИЕМ РЕСУРСОВ ОПЕРАТОРА И НЕ ИМЕЕТ К ОПЕРАТОРУ ПРЕТЕНЗИЙ МАТЕРИАЛЬНОГО ХАРАКТЕРА.</Text>
                    </SubSection>
                </Section>
                <Section>
                    <SubTitle>
                        5. КОНФИДЕНЦИАЛЬНОСТЬ И БЕЗОПАСНОСТЬ
                    </SubTitle>
                    <SubSection>
                        <Text> 5.1. КОНФИДЕНЦИАЛЬНАЯ ИНФОРМАЦИЯ – ИНФОРМАЦИЯ, ПОЛУЧЕННАЯ ОПЕРАТОРОМ В ПРОЦЕССЕ РЕГИСТРАЦИИ ПОЛЬЗОВАТЕЛЯ НА САЙТЕ, А ТАКЖЕ В ХОДЕ ПОСЕЩЕНИЯ САЙТОВ/ПОРТАЛА И УЧАСТИЯ В СОБЫТИЯХ ПОРТАЛА.</Text>
                        <Text>5.2. КОНФИДЕНЦИАЛЬНАЯ ИНФОРМАЦИЯ НЕ ПОДЛЕЖИТ РАЗГЛАШЕНИЮ И ПЕРЕДАЧЕ ТРЕТЬИМ ЛИЦАМ.</Text>
                        <Text>5.3. ПЕРСОНАЛЬНЫЕ ДАННЫЕ МОГУТ БЫТЬ ПЕРЕДАНЫ ОПЕРАТОРОМ ИСКЛЮЧИТЕЛЬНО В СЛУЧАЯХ:</Text>
                        <Text>ОФИЦИАЛЬНОГО ЗАПРОСА ПРАВООХРАНИТЕЛЬНЫХ ОРГАНОВ (НАРУШЕНИЕ МЕСТНОГО И МЕЖДУНАРОДНОГО ЗАКОНОДАТЕЛЬСТВА).</Text>
                        <Text>ЛИЧНОГО ВОЛЕИЗЪЯВЛЕНИЯ ПОЛЬЗОВАТЕЛЯ.</Text>
                        <Text>НЕВОЗМОЖНОСТИ ИСПОЛЬЗОВАНИЯ УСЛУГ И ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ НА ПОРТАЛАХ (О ЧЕМ ПОЛЬЗОВАТЕЛЬ ПРЕДУПРЕЖДАЕТСЯ ЗАРАНЕЕ).</Text>
                        <Text>НАРУШЕНИЙ ПУНКТОВ ДАННОГО СОГЛАШЕНИЯ (НА УСМОТРЕНИЕ ОПЕРАТОРА).</Text>
                        <Text>5.4. ОПЕРАТОР ОБЕСПЕЧИВАЕТ БЕЗОПАСНОСТЬ ПЕРСОНАЛЬНЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЯ, ИСПОЛЬЗУЯ СПЕЦИАЛЬНОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ. В СЛУЧАЕ НЕСАНКЦИОНИРОВАННОГО ДОСТУПА К ПОРТАЛУ/САЙТУ ТРЕТЬИХ ЛИЦ, БЕЗОПАСНОСТЬ ПЕРСОНАЛЬНЫХ ДАННЫХ НЕ ГАРАНТИРУЕТСЯ.</Text>
                    </SubSection>
                </Section>
                <Section>
                    <SubTitle>
                        6. ДОПОЛНИТЕЛЬНЫЕ ПЛАТНЫЕ УСЛУГИ
                    </SubTitle>
                    <SubSection>
                        <Text> 6.1. ПО ЖЕЛАНИЮ ПОЛЬЗОВАТЕЛЯ, ОПЕРАТОР ПРЕДОСТАВЛЯЕТ ЕМУ ДОПОЛНИТЕЛЬНУЮ ПЛАТНУЮ УСЛУГУ. ОНА ПОЗВОЛЯЕТ ИСПОЛЬЗОВАТЬ РАСШИРЕННЫЕ ВОЗМОЖНОСТИ ПОРТАЛА — ПОЛУЧЕНИЕ ИГРОВОЙ ВАЛЮТЫ НА БАЛАНС СВОЕГО АККАУНТА.</Text>
                        <Text>6.2. ДОПОЛНИТЕЛЬНЫЕ ПЛАТНЫЕ УСЛУГИ НЕ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМ УСЛОВИЕМ ИСПОЛЬЗОВАНИЯ ПОРТАЛА И УЧАСТИЯ В ПРОЕКТАХ ПОРТАЛА.</Text>
                        <Text>6.3. С МОМЕНТА СПИСАНИЯ ДЕНЕЖНЫХ СРЕДСТВ ОПЕРАТОРОМ ПОРТАЛА СО СЧЕТА ПОЛЬЗОВАТЕЛЯ, ДОПОЛНИТЕЛЬНАЯ ПЛАТНАЯ УСЛУГА СЧИТАЕТСЯ ОКАЗАННОЙ В ПОЛНОМ ОБЪЕМЕ, НАДЛЕЖАЩЕГО КАЧЕСТВА.</Text>
                        <Text>6.4. ПОСЛЕ ОКАЗАНИЯ ДОПОЛНИТЕЛЬНОЙ ПЛАТНОЙ УСЛУГИ, ДЕНЬГИ, ПОТРАЧЕННЫЕ НА ЕЕ ПРИОБРЕТЕНИЕ, ВОЗВРАТУ НЕ ПОДЛЕЖАТ.</Text>
                        <Text>6.5. ПОЛЬЗОВАТЕЛЬ СОГЛАШАЕТСЯ, ЧТО ОПЕРАТОР ВПРАВЕ ХРАНИТЬ ПЕРСОНАЛЬНУЮ ИНФОРМАЦИЮ, ПОЛУЧЕННУЮ ПРИ ПОКУПКЕ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ.</Text>
                        <Text>6.6. ПЕРЕЧЕНЬ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ И ИХ СТОИМОСТЬ ПУБЛИКУЮТСЯ ТОЛЬКО ОПЕРАТОРОМ НА САЙТЕ/ПОРТАЛЕ. ЛЮБАЯ ИНФОРМАЦИЯ И ПРЕДЛОЖЕНИЯ ПОКУПКИ ДАННЫХ УСЛУГ НА СТОРОННИХ РЕСУРСАХ, СЧИТАЮТСЯ МОШЕННИЧЕСТВОМ, ЗА КОТОРОЕ ОПЕРАТОР ОТВЕТСТВЕННОСТИ НЕ НЕСЕТ.</Text>
                        <Text>6.7. СПОСОБЫ И ВОЗМОЖНОСТЬ ПРИОБРЕТЕНИЯ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ РАЗЪЯСНЯЕТСЯ ОПЕРАТОРОМ НА САЙТЕ.</Text>
                        <Text>6.8. ОПЕРАТОР НЕ ДАЕТ РАЗЪЯСНЕНИЙ ПО ВОПРОСАМ РАБОТЫ С ПЛАТЕЖНЫМИ СИСТЕМАМИ, С ПОМОЩЬЮ КОТОРЫХ ПОЛЬЗОВАТЕЛЬ РЕШИЛ ПРИОБРЕСТИ ДОПОЛНИТЕЛЬНЫЕ ПЛАТНЫЕ УСЛУГИ, А ТАКЖЕ НЕ НЕСЕТ ОТВЕТСТВЕННОСТИ ЗА ИХ КОРРЕКТНУЮ РАБОТУ.</Text>
                        <Text>6.9. В СЛУЧАЕ ТЕХНИЧЕСКОЙ НЕИСПРАВНОСТИ САЙТОВ ИЛИ НАМЕРЕННЫХ ДЕЙСТВИЙ ПОЛЬЗОВАТЕЛЯ, А РАВНО И В ДРУГИХ СЛУЧАЯХ, КОГДА ДОПОЛНИТЕЛЬНЫЕ ПЛАТНЫЕ УСЛУГИ БЫЛИ ОКАЗАНЫ БЕЗ ПОЛНОГО/ЧАСТИЧНОГО СПИСАНИЯ СРЕДСТВ СО СЧЕТА ПОЛЬЗОВАТЕЛЯ, ОН ОБЯЗАН СООБЩИТЬ О ДАННОМ ФАКТЕ ОПЕРАТОРУ. ПОСЛЕ ЭТОГО ПОЛЬЗОВАТЕЛЬ ОБЯЗАН ПОГАСИТЬ ВОЗНИКШУЮ ЗАДОЛЖЕННОСТЬ.</Text>
                        <Text>6.10. ОПЕРАТОР НЕ ВОЗМЕЩАЕТ ДЕНЕЖНЫЕ СРЕДСТВА ПОЛЬЗОВАТЕЛЮ ЗА НЕИСПОЛЬЗОВАННЫЕ (ИСПОЛЬЗОВАННЫЕ ЧАСТИЧНО) ДОПОЛНИТЕЛЬНЫЕ ПЛАТНЫЕ УСЛУГИ.</Text>
                        <Text>6.11. ПОЛЬЗОВАТЕЛЬ ЗА СВОЙ СЧЕТ, САМОСТОЯТЕЛЬНО НЕСЕТ ВСЕ ФИНАНСОВЫЕ РАСХОДЫ, СВЯЗАННЫЕ С ПРИОБРЕТЕНИЕМ (ПЕРЕЧИСЛЕНИЕМ ДЕНЕГ) ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ. В ДАННЫЙ РАЗДЕЛ ВКЛЮЧЕНЫ: КОМИССИИ, СБОРЫ И ДРУГИЕ РАСХОДЫ.</Text>
                        <Text>6.12. ПОЛЬЗОВАТЕЛЬ ГАРАНТИРУЕТ ОПЕРАТОРУ, ЧТО ИМЕЕТ ВСЕ ЗАКОННЫЕ ПОЛНОМОЧИЯ И ПРАВА НА ЗАКЛЮЧЕНИЕ НАСТОЯЩЕГО СОГЛАШЕНИЯ В ЧАСТИ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ.</Text>
                        <Text>6.13. В СЛУЧАЕ ПРИОБРЕТЕНИЯ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ ПОЛЬЗОВАТЕЛЕМ, НЕ ДОСТИГШИМ 18 ЛЕТ, ОН ОБЯЗАН ПРЕДВАРИТЕЛЬНО ПОЛУЧИТЬ СОГЛАСИЕ НА ПРОВЕДЕНИЕ ФИНАНСОВОЙ ОПЕРАЦИИ У ЗАКОННЫХ ПРЕДСТАВИТЕЛЕЙ. ФАКТ ПОКУПКИ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ, ЯВЛЯЕТСЯ ПОДТВЕРЖДЕНИЕМ ПОЛУЧЕНИЯ ТАКОГО СОГЛАСИЯ У ЗАКОННОГО ПРЕДСТАВИТЕЛЯ. ПРИ НЕОБХОДИМОСТИ, ОПЕРАТОР ИМЕЕТ ПРАВО ЗАПРОСИТЬ ПИСЬМЕННОЕ ПОДТВЕРЖДЕНИЕ ПОЛУЧЕНИЯ СОГЛАСИЯ И ПРЕДОСТАВЛЕНИЕ ПАСПОРТНЫХ ДАННЫХ ДЛЯ ОПРЕДЕЛЕНИЯ ИСТИННОГО ВОЗРАСТА ПОЛЬЗОВАТЕЛЯ.</Text>
                        <Text>6.14. ОТВЕТСТВЕННОСТЬ ЗА ПРИОБРЕТЕНИЕ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ ПОЛНОСТЬЮ ВОЗЛАГАЕТСЯ НА ПОЛЬЗОВАТЕЛЯ И ЕГО ЗАКОННЫХ ПРЕДСТАВИТЕЛЕЙ.</Text>
                        <Text>6.15. СПОРЫ ОБ ОТВЕТСТВЕННОСТИ ЗА ПОКУПКУ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ С ОПЕРАТОРОМ ПОРТАЛА НЕДОПУСТИМЫ.</Text>
                        <Text>6.16. ПОЛУЧЕНИЕ ДОПОЛНИТЕЛЬНЫХ ПЛАТНЫХ УСЛУГ ПОЛЬЗОВАТЕЛЕМ ВОЗМОЖНО ТОЛЬКО ПОСЛЕ ПОЛНОЙ ОПЛАТЫ ИХ СТОИМОСТИ.</Text>
                        <Text>6.17. ПОРЯДОК ОПЛАТЫ</Text>
                        <Text>6.17.1. К ОПЛАТЕ ПРИНИМАЮТСЯ ПЛАТЕЖНЫЕ КАРТЫ: VISA, MASTERCARD, MAESTRO, МИР. ДЛЯ ОПЛАТЫ ТОВАРА БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА В ИНТЕРНЕТ-МАГАЗИНЕ ПОЛЬЗОВАТЕКЛЬ ВЫБИРАЕТ СПОСОБ ОПЛАТЫ: БАНКОВСКОЙ КАРТОЙ. ПРИ ОПЛАТЕ ЗАКАЗА БАНКОВСКОЙ КАРТОЙ, ОБРАБОТКА ПЛАТЕЖА ПРОИСХОДИТ НА АВТОРИЗАЦИОННОЙ СТРАНИЦЕ БАНКА, ГДЕ ПОЛЬЗОВАТЕЛЮ НЕОБХОДИМО ВВЕСТИ ДАННЫЕ СВОЕЙ БАНКОВСКОЙ КАРТЫ:</Text>
                        <Text>1) ТИП КАРТЫ</Text>
                        <Text>2) НОМЕР КАРТЫ,</Text>
                        <Text>3) СРОК ДЕЙСТВИЯ КАРТЫ</Text>
                        <Text>4) ИМЯ ДЕРЖАТЕЛЯ КАРТЫ (ЛАТИНСКИМИ БУКВАМИ, ТОЧНО ТАКЖЕ КАК УКАЗАНО НА КАРТЕ)</Text>
                        <Text>5) CVC2/CVV2 КОД</Text>
                        <Text>6.17.2. ЕСЛИ КАРТА ПОЛЬЗОВАТЕЛЯ ПОДКЛЮЧЕНА К УСЛУГЕ 3D-SECURE, ОН БУДЕТ АВТОМАТИЧЕСКИ ПЕРЕАДРЕСОВАН НА СТРАНИЦУ БАНКА, ВЫПУСТИВШЕГО КАРТУ, ДЛЯ ПРОХОЖДЕНИЯ ПРОЦЕДУРЫ АУТЕНТИФИКАЦИИ. ИНФОРМАЦИЮ О ПРАВИЛАХ И МЕТОДАХ ДОПОЛНИТЕЛЬНОЙ ИДЕНТИФИКАЦИИ МОЖНО УТОЧНИТЬ В БАНКЕ, ВЫДАВШЕМ ПОЛЬЗОВАТЕЛЮ БАНКОВСКУЮ КАРТУ.</Text>

                    </SubSection>
                </Section>
                <Section>
                    <SubTitle>
                        7. ОТКАЗ ОТ ПРЕДОСТАВЛЕНИЯ ГАРАНТИЙ
                    </SubTitle>
                    <SubSection>
                        <Text>ВСЕ УСЛУГИ НА ПОРТАЛЕ ПРЕДОСТАВЛЯЮТСЯ ПОЛЬЗОВАТЕЛЯМ СОГЛАСНО УСТАНОВЛЕННОЙ КОНЦЕПЦИИ “КАК ЕСТЬ”. ПОРТАЛ ОТКАЗЫВАЕТСЯ ОТ ПРЕДОСТАВЛЕНИЯ ГАРАНТИЙ ОТНОСИТЕЛЬНО УСЛУГ ИЛИ ВИРТУАЛЬНЫХ ЦЕННОСТЕЙ.</Text>
                        <Text> ОПЕРАТОР НАСТОЯЩИМ ПРЕДУПРЕЖДАЕТ И НАПОМИНАЕТ, ЧТО ЧРЕЗМЕРНОЕ ИСПОЛЬЗОВАНИЕ ПК, ВКЛЮЧАЯ ИГРЫ НА ПК, МОЖЕТ НАНЕСТИ ВРЕД ЗДОРОВЬЮ ПОЛЬЗОВАТЕЛЯ. ПОЛЬЗОВАТЕЛЬ ИЛИ ЕГО ЗАКОННЫЕ ПРЕДСТАВИТЕЛИ, СОГЛАШАЮТСЯ САМОСТОЯТЕЛЬНО КОНТРОЛИРОВАТЬ СОСТОЯНИЕ ЗДОРОВЬЯ И НЕ ИСПОЛЬЗОВАТЬ УСЛУГИ /ОГРАНИЧИТЬ ИХ ИСПОЛЬЗОВАНИЕ ПРИ НАЛИЧИИ КАКИХ-ЛИБО ПРОТИВОПОКАЗАНИЙ.</Text>
                        <Text>ОПЕРАТОР НЕ НЕСЕТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ КОСВЕННЫЕ, СЛУЧАЙНЫЕ ИЛИ ИНЫЕ УБЫТКИ (ВКЛЮЧАЯ, ПОМИМО ПРОЧЕГО, УПУЩЕННУЮ ВЫГОДУ) В РЕЗУЛЬТАТЕ ИГРОВЫХ УСЛУГ, САЙТОВ ПОРТАЛА И / ИЛИ МАТЕРИАЛОВ НА САЙТЕ, ДЕЙСТВИЯ ТРЕТЬИХ СТОРОН, СВЯЗАННЫЕ С УСЛУГАМИ И ПОРТАЛОМ ОПЕРАТОРА И / ИЛИ МАТЕРИАЛАМИ НА САЙТЕ, ВКЛЮЧАЯ МОШЕННИЧЕСКИЕ И / ИЛИ НЕБРЕЖНЫЕ ДЕЙСТВИЯ ТРЕТЬИХ ЛИЦ.</Text>

                    </SubSection>
                </Section>
                <Section>
                    <SubTitle>
                        8. ДОПОЛНИТЕЛЬНЫЕ ПОЛОЖЕНИЯ
                    </SubTitle>
                    <SubSection>
                        <Text>8.1. ЕСЛИ ПОЛЬЗОВАТЕЛЬ НЕ ИМЕЕТ ПРАВА ИСПОЛЬЗОВАТЬ ПОРТАЛ СОГЛАСНО ЗАКОНОДАТЕЛЬСТВУ ЕГО СТРАНЫ ИЛИ СУЩЕСТВУЮТ ИНЫЕ ОГРАНИЧЕНИЯ (ДОПУСК ПО ВОЗРАСТУ И ПРОЧИЕ), ОН ОБЯЗАН БЕЗ ПРЕДУПРЕЖДЕНИЯ ОТКАЗАТЬСЯ ОТ ИСПОЛЬЗОВАНИЯ ПОРТАЛА, А РАВНО ИХ ОТДЕЛЬНО ВЗЯТЫХ УСЛУГ. ПОЛЬЗОВАТЕЛЬ БЕРЕТ НА СЕБЯ ВСЮ ОТВЕТСТВЕННОСТЬ ИСПОЛЬЗОВАНИЯ ПОРТАЛА В СВОЕЙ СТРАНЕ, ОСНОВЫВАЯСЬ НА МЕСТНЫХ ЗАКОНАХ И УЧИТЫВАЯ МЕЖДУНАРОДНОЕ ЗАКОНОДАТЕЛЬСТВО.</Text>
                        <Text>8.2. НЕДЕЙСТВИТЕЛЬНОСТЬ ОДНОГО/НЕСКОЛЬКИХ ПУНКТОВ/РАЗДЕЛОВ ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ, НЕ ВЛЕЧЕТ ЕГО НЕДЕЙСТВИТЕЛЬНОСТЬ В ЦЕЛОМ. В ЭТОМ СЛУЧАЕ СТОРОНЫ ДОЛЖНЫ ВЫПОЛНЯТЬ ВЗЯТЫЕ НА СЕБЯ ОБЯЗАТЕЛЬСТВА ПО ОСТАЛЬНЫМ ПУНКТАМ/РАЗДЕЛАМ СОГЛАШЕНИЯ.</Text>
                        <Text>8.3. СПОРЫ, ВОЗНИКАЮЩИЕ МЕЖДУ СТОРОНАМИ, ПОДЛЕЖАТ ПЕРВОНАЧАЛЬНОМУ УРЕГУЛИРОВАНИЮ В ДОСУДЕБНОМ ПОРЯДКЕ, ПУТЕМ ПЕРЕПИСКИ ОПЕРАТОРА И ПОЛЬЗОВАТЕЛЯ. В СЛУЧАЕ НЕЭФФЕКТИВНОСТИ МЕДИАТИВНОГО УРЕГУЛИРОВАНИЯ СПОРОВ, ОНИ БУДУТ РЕШАТЬСЯ В СООТВЕТСТВИИ С ЗАКОНОДАТЕЛЬСТВОМ ЭСТОНСКОЙ РЕСПУБЛИКИ.</Text>
                        <Text>8.4. НАСТОЯЩЕЕ СОГЛАШЕНИЕ МОЖЕТ ИЗМЕНЯТЬСЯ, ДОПОЛНЯТЬСЯ ОПЕРАТОРОМ БЕЗ ПРЕДВАРИТЕЛЬНОГО УВЕДОМЛЕНИЯ ПОЛЬЗОВАТЕЛЯ. ЛЮБЫЕ ИЗМЕНЕНИЯ ВСТУПАЮТ В СИЛУ СРАЗУ ПОСЛЕ ПУБЛИКАЦИИ ИЗМЕНЕННОЙ РЕДАКЦИИ СОГЛАШЕНИЯ НА САЙТЕ. ЧТОБЫ ИЗБЕЖАТЬ ВОЗНИКНОВЕНИЯ СПОРНЫХ ВОПРОСОВ, ПОЛЬЗОВАТЕЛЬ ОБЯЗУЕТСЯ САМОСТОЯТЕЛЬНО ОСУЩЕСТВЛЯТЬ ПРОВЕРКУ ТЕКСТА СОГЛАШЕНИЯ НА САЙТЕ, ГДЕ ОНО НАХОДИТСЯ В СВОБОДНОМ ДОСТУПЕ. В СЛУЧАЕ НЕВЫПОЛНЕНИЯ ПРОВЕРКИ ТЕКСТА СОГЛАШЕНИЯ СО СТОРОНЫ ПОЛЬЗОВАТЕЛЯ, ДАННЫЙ ФАКТ НЕ МОЖЕТ СЛУЖИТЬ ОСНОВАНИЕМ ДЛЯ ОТКАЗА ИСПОЛНЕНИЯ ВЗЯТЫХ НА СЕБЯ ОБЯЗАТЕЛЬСТВ. ИЗМЕНЕННАЯ РЕДАКЦИЯ СОГЛАШЕНИЯ ПОСЛЕ ПУБЛИКАЦИИ НА САЙТЕ ИМЕЕТ АНАЛОГИЧНУЮ ЮРИДИЧЕСКУЮ СИЛУ С ПЕРВОНАЧАЛЬНЫМ ТЕКСТОМ.</Text>
                    </SubSection>
                </Section>
                <Section>
                    <SubTitle>9. КОНТАКТНАЯ ИНФОРМАЦИЯ</SubTitle>
                    <SubSection>
                        <Text>
                            КОНТАКТНЫЙ EMAIL: <a>robuxiosup@gmail.com</a>
                        </Text>
                   </SubSection>
                </Section>
            </PolicyContainer>
        </AppContainer>
    );
};

export default AgreementPage;
