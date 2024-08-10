import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import DragonImage from '../assets/img/char2.png'; // Import the image

const BannerArea = styled.div`
    ${tw`relative`}
    padding-left: 50px;
    padding-right: 30px;
    z-index: 1000;
`;

const MainChar = styled.img`
    ${tw`absolute`}
    height: 600px;
    z-index: -1;
    margin-top: 70px;
`;

const TitleArea = styled.div`
    ${tw`w-full text-center`}
`;

const Title = styled.h2`
    ${tw`text-4xl font-bold`}
    opacity: 1;
    margin-bottom: 0px !important;
`;

const TitleLine = styled.div`
    ${tw`inline-block relative w-full text-center`}
`;

const Word = styled.div`
    ${tw`inline-block`}
    transform: translate(0px, 0%);
`;

const GreenText = styled(Word)`
    color: #77d241;
`;

const CurrencyIcon = styled.svg`
    margin-bottom: 5px;
`;

const SubTitle = styled.h4`
    ${tw`text-lg font-semibold block`}
    font-family: Manrope;
    letter-spacing: 1px;
`;

const InfoButton = styled.div`
    ${tw`relative`}
`;

const InfoTooltip = styled.div`
    ${tw`absolute`}
`;

const Nav = styled.nav`
    ${tw`flex justify-center mt-4`}
`;

const NavButton = styled.div`
    ${tw`px-4 py-2 m-2 bg-green-500 text-white rounded`}
    &.active {
        background-color: initial;
    }
`;

const SaleContainer = styled.div`
    padding-left: 20px;
    padding-right: 20px;
`;

const PricingArea = styled.div`
    ${tw`bg-gray-800 p-4 rounded-lg shadow-lg`}
    background: #252335;
    border: none;
`;

const StepCaption = styled.div`
    ${tw`mt-3`}
`;

const BuyForm = styled.div`
    ${tw`flex flex-col space-y-4`}
`;

const InputBlock = styled.div`
    ${tw`flex flex-col space-y-2`}
    margin-top: ${({ mt }) => mt || '0'};
`;

const InputWrapper = styled.div`
    ${tw`w-full`}
`;

const BuyButton = styled.button`
    ${tw`bg-green-500 text-white py-2 rounded`}
    border: none;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const PromoLink = styled.a`
  ${tw`mt-3 text-green-300 text-center cursor-pointer`}
`;

const PurchaseComponent = () => {
    return (
        <BannerArea>
            <MainChar src={DragonImage} alt="Dragon Character" />
            <TitleArea>
                <Title>
                    <TitleLine>
                        <Word>Покупай</Word>
                        <GreenText>по курсу</GreenText>
                        <Word>1.43</Word>
                        <CurrencyIcon xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 50 50">
                            <path d="M28.15625 0.871094C26.210938-0.289062 23.789062-0.289062 21.84375 0.871094L6.28125 10.121094C4.3125 11.3125 3.113281 13.449219 3.125 15.75L3.125 34.25C3.125 36.570312 4.328125 38.71875 6.28125 39.878906L21.84375 49.128906C23.789062 50.289062 26.210938 50.289062 28.15625 49.128906L43.71875 39.878906C45.6875 38.6875 46.886719 36.550781 46.875 34.25L46.875 15.75C46.875 13.429688 45.671875 11.28125 43.71875 10.121094ZM20.3125 17.1875C18.585938 17.1875 17.1875 18.585938 17.1875 20.3125L17.1875 29.6875C17.1875 31.414062 18.585938 32.8125 20.3125 32.8125L29.6875 32.8125C31.414062 32.8125 32.8125 31.414062 32.8125 29.6875L32.8125 20.3125C32.8125 18.585938 31.414062 17.1875 29.6875 17.1875ZM20.3125 17.1875"></path>
                        </CurrencyIcon>
                    </TitleLine>
                </Title>
                <SubTitle>
                    Реальный курс
                    <InfoButton>
                        <InfoTooltip>Мы не меняем цену на момент оплаты, вы видите честный курс</InfoTooltip>
                        <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"></path>
                        </svg>
                    </InfoButton>
                </SubTitle>
            </TitleArea>
            <Nav>
                <NavButton className="robux-nav__button--active" data-method="standart">
                    Стандартный трансфер
                </NavButton>
                <NavButton data-method="gift">
                    Моментальный гифт
                    <div className="robux-nav__button__chip">Скидка 5%</div>
                </NavButton>
            </Nav>
            <SaleContainer>
                <PricingArea>
                    <StepCaption>
                        <label htmlFor="robuxesCount">Получу (R$)</label>
                        <div className="Buy_availability__xziDL">
                            <span id="instockGamePass">В наличии</span>
                        </div>
                    </StepCaption>
                    <BuyForm>
                        <InputBlock>
                            <InputWrapper>
                                <input placeholder="Получаете R$" id="robuxesCount" type="number" value="1000" />
                            </InputWrapper>
                        </InputBlock>
                        <InputBlock mt="3">
                            <label htmlFor="rublesToPay">Заплачу (₽)</label>
                            <InputWrapper>
                                <input placeholder="Отдаёте ₽" id="rublesToPay" type="number" />
                            </InputWrapper>
                        </InputBlock>
                        <BuyButton disabled>Купить</BuyButton>
                        <PromoLink id="open-modal-btn">Использовать промокод</PromoLink>
                    </BuyForm>
                </PricingArea>
            </SaleContainer>
        </BannerArea>
    );
};

export default PurchaseComponent;
