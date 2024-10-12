import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Hat from '../assets/img/Hat.svg';
import HeadPhones from '../assets/img/HeadPhones.svg';
import ArrowUp from '../assets/img/ArrowUp.svg';
import RobuxIcon from '../assets/img/RobuxWhite.svg';
import BonusType from './BonusTypes'; // Assuming you have an enum defined elsewhere


const CardContainer = styled.div`
    ${tw`bg-[#333333] p-8 rounded-lg shadow-lg flex flex-col`}; // Change background color here
    max-width: 1070px;
    width: 100%;
    border-radius: 24px;
    z-index: 1;
    margin: 0 auto;
    margin-top: 20px;

    @media (max-width: 768px) {
        ${tw`p-4`} /* Reduce padding for mobile */
        margin-top: 10px;
        width: 350px;
    }
`;

const Title = styled.h2`
    font-weight: 500;
    font-size: 30px;
    margin: 0 0 20px;
    color: white;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 15px;
    }
`;

const WhiteText = styled.p`
    font-weight: 500 !important;
    font-size: 15px !important;
    padding-top: 0px;
    margin: 0 0 10px !important;
    color: white;

    @media (max-width: 768px) {
        font-size: 13px;
        margin-bottom: 8px;
    }
`;

const SubTitle = styled.h3`
    font-weight: 600;
    color: white;
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 15px;
    }
`;

const TaskContainer = styled.div`
    ${tw`flex`};
    gap: 10px;

    @media (max-width: 768px) {
        ${tw`flex-col`} /* Stack tasks vertically on mobile */
        gap: 15px;
    }
`;

const TaskCard = styled.div`
    ${tw`p-4 flex flex-col justify-between`};
    background-color:#313131;
    width: 150px;
    color: rgb(131, 143, 149);
    font-family: Manrope;
    font-weight: 700;
    border-radius: 12px;

    @media (max-width: 768px) {
        width: 85%;
        padding: 12px;
    }
`;

const BonusCard1 = styled.div`
    ${tw`p-4 flex flex-col justify-between`};
    background-color: #313131;
    width: 200px;
    margin-top: 20px;
    height: 50px;
    color: white;
    font-family: Manrope;
    font-weight: 700;
    border-radius: 12px;

    @media (max-width: 768px) {
        width: 90%;
        margin-top: 10px;
    }
`;

const BonusCard2 = styled.div`
    ${tw`p-4 flex flex-col justify-between`};
    background-color: #313131;
    width: 150px;
    height: 50px;
    margin-top: 20px;
    color: white;
    font-family: Manrope;
    font-weight: 700;
    border-radius: 12px;

    @media (max-width: 768px) {
        width: 90%;
        margin-top: 10px;
    }
`;

const BonusText1 = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: white;
    display: flex;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        padding-left: 5px;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const BonusText2 = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: white;
    display: flex;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        padding-left: 5px;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const GrayText = styled.p`
    color: rgb(131, 143, 149);
    font-weight: 600;
    font-size: 18px;
    font-family: Manrope;
    padding-bottom: 0;
`;

const BonusLink = styled.a`
    margin-top: 8px;
    color: rgb(149, 160, 167);
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

const TaskLink = styled.a`
    ${tw`font-bold flex items-center justify-between mb-2`};
    font-family: Manrope;
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 19px;

    &:hover {
        text-decoration: underline;
    }

    img {
        margin-left: 0;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const RobuxPoints = styled.div`
    ${tw`text-lg font-bold mt-2 flex items-center`};
    color: white;
    font-size: 24px;

    img {
        margin-left: 8px;
        width: 18px;
        height: 18px;
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const LeaveButton = styled.a`
    ${tw`font-extrabold mt-4 rounded-lg py-2 px-4`};
    color: rgb(154, 168, 229);
    font-weight: 900;
    font-size: 17px;
    line-height: 120%;
    font-family: Manrope;
    text-decoration: none;
    background: rgb(154 168 229 / 10%);
    display: inline-block;
    text-align: center;
    cursor: pointer; 

    @media (max-width: 768px) {
        font-size: 14px;
        width: 100%;
    }

    
`;

const ErrorMessage = styled.p`
    color: #ff4d4d; /* Set the color to a shade of red */
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 14px; /* Adjust font size for mobile */
    }
`;

const InviteFriendsCard = ({ loggedInUser, bonusBalance, setBonusBalance}) => {
    const [linksClicked, setLinksClicked] = useState({});
    const [taskCompletion, setTaskCompletion] = useState({
        tg: false,
        vk: false,
        ds: false,
        review: false,
        vk_reviews: false,
        ds_reviews: false
    });
    const [error, setError] = useState(null); 

    const handleLinkClick = (task) => {
        setLinksClicked(prevState => ({
            ...prevState,
            [task.type]: true
        }));
    };

    // Fetch bonuses on page load
    useEffect(() => {
        const fetchBonuses = async () => {
            if (loggedInUser) {
                try {
                    const response = await fetch(`${window.env.BACKEND_HOST}/api/bonuses/${loggedInUser.name}`);
                    
                    if (!response.ok) {
                        throw new Error(`Failed to fetch bonuses: ${response.status} ${response.statusText}`);
                    }
                    
                    const data = await response.json();
                    setBonusBalance(data.bonus || 0); // Update bonus balance

                    // Parse completed tasks (stringified JSON array)
                    const completedTasks = JSON.parse(data.completed_tasks);

                    // Update task completion state based on the completed tasks
                    setTaskCompletion({
                        tg: completedTasks.includes('tg'), // assuming "tg" is the key for Telegram
                        vk: completedTasks.includes('vk'),
                        ds: completedTasks.includes('ds'),
                        review: completedTasks.includes('review'),
                        vk_reviews: completedTasks.includes('vk_reviews'),
                        ds_reviews: completedTasks.includes('ds_reviews')
                    });

                } catch (error) {
                    console.error('Error fetching bonuses:', error);
                    setError('Не удалось загрузить бонусный баланс. Попробуйте позже.');
                }
            }
        };

        fetchBonuses();
    }, [loggedInUser]);

    const handleTaskCompletion = async (bonusType) => {
        if (loggedInUser) {
            try {
                const response = await fetch(`${window.env.BACKEND_HOST}/api/bonuse/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ type: bonusType, player_name: loggedInUser.name }),
                });

                if (!response.ok) {
                    throw new Error(`Failed to complete task: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                let temp = { ...taskCompletion }
                temp[bonusType] = true
                setBonusBalance(data['bonus'])
                setTaskCompletion(temp); // Mark task as completed
            } catch (error) {
                console.error('Error completing task:', error);
                setError('Не удалось выполнить задание. Попробуйте позже.');
            }
        }
    };

    return (
        <CardContainer>
            <Title>Приглашай друзей</Title>
            <WhiteText>Получай награды, а они получат бонус к первой покупке.</WhiteText>
            {loggedInUser && <WhiteText>Добро пожаловать, {loggedInUser.name}!</WhiteText>}

            <TaskContainer>
                <div>
                    <WhiteText>Ты получишь</WhiteText>
                    <BonusCard1>
                        <BonusText1>+20 <img src={RobuxIcon} alt="Robux Icon" /></BonusText1>
                        <BonusLink href="#">
                            С первой покупки друга
                            <img src={Hat} alt="Hat Icon" width={24} height={24} />
                        </BonusLink>
                    </BonusCard1>
                </div>
                <div>
                    <WhiteText>Друг получит</WhiteText>
                    <BonusCard2>
                        <BonusText2>+1% <img src={RobuxIcon} alt="Robux Icon" /></BonusText2>
                        <BonusLink href="#">
                            К первой покупке
                            <img src={HeadPhones} alt="HeadPhones Icon" width={24} height={24} />
                        </BonusLink>
                    </BonusCard2>
                </div>
            </TaskContainer>

            <SubTitle>Задания</SubTitle>
            <WhiteText>Бесплатные робуксы за задания</WhiteText>

            <TaskContainer>
                {[
                    { type: 'tg', label: 'Telegram канал', points: 5, link: "https://web.telegram.org" },
                    { type: 'vk', label: 'Группу ВК', points: 5, link: "https://vk.com" },
                    { type: 'ds', label: 'Discord серверу', points: 5, link: "https://discord.com" },
                    { type: 'review', label: 'TrustPilot', points: 10, link: "https://trust-pilot.com" },
                    { type: 'vk_reviews', label: 'Отзывы ВК', points: 5 , link: "https://vk-reviews.com" },
                    { type: 'ds_reviews', label: 'Отзывы Discord', points: 5, link: "https://discord.com" }
                ].map((task, index) => (
                    <TaskCard key={index}>
                        <GrayText>Подпишись на</GrayText>
                        <TaskLink 
                            href={task.link} 
                            onClick={() => handleLinkClick(task)}
                            target="_blank"
                        >
                            {task.label}
                            <img src={ArrowUp} alt="Arrow Up" width={12} height={12} />
                        </TaskLink>
                        <RobuxPoints>+{task.points} <img src={RobuxIcon} alt="Robux Icon" /></RobuxPoints>
                        {taskCompletion[task.type] ? (
                            <LeaveButton disabled>Выполнено</LeaveButton>
                        ) : linksClicked[task.type] ? (
                            <LeaveButton onClick={() => handleTaskCompletion(task.type)}>Оставил</LeaveButton>
                        ) : (
                            <LeaveButton style={{ backgroundColor: "rgba(95, 102, 135, 0.3)", cursor: "auto" }}>Оставил</LeaveButton>
                        )}
                    </TaskCard>
                ))}
            </TaskContainer>

            {error && <ErrorMessage>{error}</ErrorMessage>}
        </CardContainer>
    );
};

export default InviteFriendsCard;
