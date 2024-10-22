import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import Photo from "../assets/img/logo.svg";

const FooterContainer = styled.footer`
    ${tw`relative`}
    padding: 32px 24px;
    border-radius: 32px 32px 0 0;
    background: #151515;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: rgba(255, 255, 255, 0.9);
    width: 100%; /* Изменено на 100% */
    box-sizing: border-box; /* Добавлено свойство */

    @media (max-width: 768px) {
        padding: 24px 16px; /* Уменьшаем отступы на мобильных устройствах */
       
    }
    
`;

const FooterContent = styled.div`
    ${tw`flex justify-between w-full`}
    flex-wrap: wrap;
    max-width: 1400px;
    gap: 32px;
`;

const Column = styled.div`
    ${tw`flex flex-col mb-6`}
    flex: ${({ small }) => (small ? '0 0 auto' : '1')};
    padding: 0 20px;
    max-width: 100%; /* Ограничивает ширину столбца */
`;


const LogoImage = styled.img`
    ${tw`h-10`} /* Чуть увеличен размер логотипа */
`;

const LogoSection = styled.div`
    ${tw`flex flex-col`}
`;

const Logo = styled.h2`
    ${tw`text-xl font-bold text-white`} /* Чуть увеличен размер текста */
    margin-bottom: 16px;
`;

const CompanyDetails = styled.div`
    ${tw`text-sm`} /* Чуть увеличен размер текста */
    line-height: 1.5;
    font-size: 16px; /* Чуть увеличен размер шрифта */
    color: rgba(255, 255, 255, 0.8);
`;

const LinksSection = styled.div`
    ${tw`flex flex-col`}
`;

const LinksTitle = styled.h3`
    ${tw`text-base font-semibold text-white`} /* Увеличен размер заголовков */
    margin-bottom: 16px;
    font-size: 18px; /* Увеличен размер текста */
`;

const Link = styled.a`
    ${tw`text-sm mb-2`} /* Чуть увеличен размер текста и отступы между ссылками */
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    white-space: nowrap; /* Отключение переноса текста */
    line-height: 26px; /* Чуть увеличено расстояние между строками */
    font-size: 16px; /* Чуть увеличен размер шрифта */
    &:hover {
        text-decoration: underline;
        color: rgba(255, 255, 255, 1);
    }
`;

const SocialMediaSection = styled.div`
    ${tw`flex items-center mt-4`}
`;

const IconLink = styled.a`
    ${tw`text-2xl mr-4 text-white`} /* Размер иконок не изменён */
`;

const Divider = styled.div`
    ${tw`w-full mt-6 mb-6`} /* Чуть увеличены отступы сверху и снизу */
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    max-width: 1360px;
    margin: 0 auto;
`;

const FooterBottomText = styled.div`
    ${tw`w-full items-start mt-6 text-sm`} /* Чуть увеличен размер текста */
    line-height: 1.5;
    font-size: 16px; /* Чуть увеличен размер текста */
    max-width: 1360px;
    color: rgba(255, 255, 255, 0.8);
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Column>
                    <LogoSection>
                        <Logo>
                            <LogoImage src={Photo} alt="RBXSell" />
                        </Logo>
                        <CompanyDetails>
                            GLOGAMING LLC. Reg Number: 36-5040821<br />
                            919 North Market st., Suite 950, Wilmington, DE, 19801
                        </CompanyDetails>
                    </LogoSection>
                </Column>
                <Column>
                    <LinksSection>
                        <LinksTitle>Помощь</LinksTitle>
                        <Link href="#">Вопросы и ответы</Link>
                        <Link href="#">Пользовательское соглашение</Link>
                        <Link href="#">Политика конфиденциальности</Link>
                        <Link href="#">Контакты</Link>
                    </LinksSection>
                </Column>
                <Column>
                    <LinksSection>
                        <LinksTitle>Сообщество</LinksTitle>
                        <Link href="#">Telegram канал</Link>
                        <Link href="#">Группа ВК</Link>
                        <Link href="#">Discord сервер</Link>
                        <Link href="#">YouTube канал</Link>
                    </LinksSection>
                </Column>
                <Column small>
                    <LinksSection>
                        <LinksTitle>Сотрудничество</LinksTitle>
                        <Link href="#">Запиши видео о сайте <br/> и получи 100 робуксов</Link>
                        <Link href="#">Пишите</Link>
                    </LinksSection>
                </Column>
            </FooterContent>
            <Divider />
            <FooterBottomText>
                Покупайте робуксы по низким ценам и наслаждайтесь моментами в любимой игре.
            </FooterBottomText>
        </FooterContainer>
    );
};

export default Footer;
