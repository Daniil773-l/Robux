import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import RobuxIcon from '../assets/img/RobuxWhite.svg';
import SmallRobux from '../assets/img/SmallWhiteRobux.svg';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';
import RegSign from '../assets/img/RedSign.svg';
import ArrowUp from '../assets/img/ArrowUp.svg';
import { useNavigate } from 'react-router-dom';

const gradientPurple = 'conic-gradient(from -125deg at 50% 50%, #5c76eb 0deg, #9465ca 65deg, #6f65ca 100deg, #5c76eb 360deg)';

const CardContainer = styled.div`
    ${tw`bg-[#015c2b] p-6 rounded-lg shadow-lg flex justify-between items-center relative`};
    max-width: 1050px;
    border-radius: 24px;
    z-index: 1;
    overflow: hidden;
    padding: 40px;
    margin: 0 auto;
    margin-top: 50px;

    @media (max-width: 768px) {
        ${tw`flex-col w-full mt-24 items-center`} /* Stack content vertically on mobile */
        padding: 20px;
        width: 350px;
    }
`;

const ShadowPoint = styled.div`
    display: inline-flex;
    width: 135px;
    background-color: #00ff21;
    height: 110px;
    position: absolute;
    filter: blur(90px);
`;

const LeftSection = styled.div`
    ${tw`flex flex-col`};
    
    @media (max-width: 768px) {
        ${tw`items-start`} /* Center content on mobile */
        margin-bottom: 20px; /* Add spacing between left and right sections */
        align-items: start;
    }
`;

const LeftSectionTitle = styled.h2`
    ${tw`text-xl font-bold text-white flex items-center`};
    font-weight: 500;
    font-size: 35px;
    margin-top: -5px; /* Adjust the margin to align with "Промокод:" */

    @media (max-width: 768px) {
        font-size: 30px; /* Slightly reduce font size on mobile */
        align-items: start;
    }
`;

const RobuxIconImage = styled.img`
    ${tw`ml-2`};
    width: 32px;
    height: 30px;
    padding-top: 6px;
`;

const SmallRobuxImage = styled.img`
    ${tw`ml-2`};
    width: 14px;
    height: 18px;
`;

const LeftSectionDescription = styled.p`
    ${tw`text-sm text-white`};
    font-weight: 500;
    font-size: 15px;
    line-height: 2;
    margin-top: 1px;

    @media (max-width: 768px) {
        font-size: 14px; /* Adjust font size on mobile */
        align-items: start;
      
    }
`;

const AvailableText = styled.p`
    ${tw`text-sm text-white mt-2 font-bold`};
    font-weight: 500;
    font-size: 18px;
`;

const BalanceBlock = styled.div`
    ${tw`flex items-center mt-2`};

    @media (max-width: 768px) {
        justify-content: center; /* Center balance and button on mobile */
    }
`;

const BalanceAmount = styled.div`
    ${tw`text-2xl font-bold text-white mr-4`};
    display: flex;
    align-items: center;
`;

const WithdrawButton = styled.button`
    ${tw`text-white px-4 py-2 rounded-lg text-sm font-semibold`};
    background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);
    border: none;
    border-radius: 12px;
    cursor: pointer; 

    &:hover {   
        background: linear-gradient(75.7deg, rgb(25, 118, 24) 3.8%, rgb(80, 150, 10) 87.1%);
    }
`;

const RightSection = styled.div`
    ${tw`flex flex-col`};
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: start;
        width: 100%;
        
    }
`;

const PromoCodeTitle = styled.p`
    ${tw`text-lg font-bold text-white`};
    font-weight: 500;
    font-size: 30px;
    margin: 0 0 20px;

    @media (max-width: 768px) {
        font-size: 24px; /* Reduce font size for mobile */
        
    }
`;

const PromoCodeText = styled.p`
    ${tw`text-lg text-gray-400 mt-1 `};
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 20px;
    color: rgb(172, 191, 198);

    @media (max-width: 768px) {
        font-size: 22px; /* Reduce font size for mobile */
        margin-bottom: 10px; /* Adjust spacing on mobile */
    }
`;

const PromoDescription = styled.p`
    ${tw`text-sm text-white mt-2`};
    font-weight: 500;
    line-height: 1.5;
    font-size: 16px;

    @media (max-width: 768px) {
        margin-bottom: 20px; /* Add space before buttons */
    }
`;

const SocialButtonsWrapper = styled.div`
    ${tw`flex space-x-4 mt-2`};

    @media (max-width: 768px) {
        ${tw`flex-col space-x-0 space-y-4 w-full`}; /* Stack buttons vertically on mobile */
    }
`;

const SocialButtonContainer = styled.div`
    ${tw`flex items-center justify-center text-white font-semibold`};
    background-color: #038741;
    font-weight: 800;
    font-size: 16px;
    color: #07ff7d;
    line-height: 120%;
    text-decoration: none;
    border-radius: 12px;
    padding: 8px 12px;
    height: 35px;
    width: 240px; /* Fixed width */
    cursor: pointer; 

    @media (max-width: 768px) {
        width: 90%; /* Full width on mobile */
        
    }

    &:hover { 
        background-color: #039752;
    }
`;

const SocialIcon = styled.span`
    ${tw`mr-2`};
    font-size: 24px;
    display: flex;
    align-items: center;
`;

const ArrowUpImage = styled.img`
    ${tw`ml-2 mt-1`};
    width: 12px;
    height: 12px;
`;

const RedSignImage = styled.img`
    ${tw`ml-2`};
    width: 24px;
    height: 24px;
`;

const BonusCard = ({ loggedInUser }) => {
    const navigate = useNavigate(); // For navigation
    const [error, setError] = useState(null);
    const [bonusBalance, setBonusBalance] = useState(0);

    // 3. Fetch bonuses on page load
    useEffect(() => {
        const fetchBonuses = async () => {
            if (loggedInUser) {
                try {
                    const response = await fetch(`${window.env.BACKEND_HOST}/api/bonuses/${loggedInUser.name}`);
                    
                    // Check if response is OK
                    if (!response.ok) {
                        throw new Error(`Failed to fetch bonuses: ${response.status} ${response.statusText}`);
                    }
                    
                    const data = await response.json();
                    setBonusBalance(data.bonus || 0); // Set the bonus balance from response
                } catch (error) {
                    console.error('Error fetching bonuses:', error);
                    setError('Не удалось загрузить бонусный баланс. Попробуйте позже.'); // User-friendly error message
                }
            }
        };

        fetchBonuses();
    }, [loggedInUser]);

    // 6. Handle withdraw request
    const handleWithdraw = async () => {
        if (bonusBalance <= 1) {
            setError("Баланс должен быть больше 50")
            return
        }
        if (loggedInUser) {
            try {
                const response = await fetch(`${window.env.BACKEND_HOST}/api/activate_bonus_withdraw`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ roblox_name: loggedInUser.name }),
                });

                // Check if response is OK
                if (!response.ok) {
                    throw new Error(`Withdraw request failed: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                if (data.withdraw_id) {
                    localStorage.setItem('withdraw_id', data.withdraw_id); // Save withdraw_id to localStorage
                    navigate(`/`, {replace: true, relative: 'path', state: {withdrawId: data.withdraw_id, username: loggedInUser.name}}); // Redirect to home with withdraw_id in query
                }
            } catch (error) {
                console.error('Error during withdrawal request:', error);
                setError('Не удалось выполнить вывод средств. Попробуйте позже.'); // User-friendly error message
            }
        }
    };

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
                        {bonusBalance}
                        <SmallRobuxImage src={SmallRobux} alt="Small Robux Icon" />
                    </BalanceAmount>
                    <WithdrawButton onClick={handleWithdraw} >Вывести</WithdrawButton>
                </BalanceBlock>
                {error !== null ? <div style={{color: "white"}}>{error}</div> : null}
            </LeftSection>

            <RightSection>
                <PromoCodeTitle>Промокод:</PromoCodeTitle>
                <PromoCodeText>
                    {loggedInUser === null ? 
                    <>
                        Авторизуйтесь
                        <RedSignImage src={RegSign} alt="Red Sign" />
                    </>
                    : loggedInUser.name }
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
