import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

// Обертка для всей страницы
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(21, 21, 21);
    border-radius: 8px;
    width: 100%;
    min-height: 100vh;
    //padding: 20px;
    color: white;

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 375px) {
        padding: 5px;
    }
`;

// Центрирование заголовков
const PageHeader = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-size: 2em;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }

    @media (max-width: 375px) {
        font-size: 1.2em;
    }
`;

const SectionHeader = styled.h3`
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1.2em;
    }

    @media (max-width: 375px) {
        font-size: 1em;
    }
`;

// Обертка для всех транзакций
const TransactionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 375px) {
        gap: 10px;
    }
`;

// Секция для каждой транзакции
const TransactionSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #313131;
    padding: 20px;
    border-radius: 12px;
    width: 280px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
    text-align: left;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 15px;
    }

    @media (max-width: 375px) {
        padding: 10px;
    }
`;

const NoTransactions = styled.div`
    background-color: #ff5050;
    padding: 20px;
    border-radius: 8px;
    color: white;
    text-align: center;

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 375px) {
        padding: 15px;
    }
`;

const ErrorMessage = styled.div`
    background-color: #ff5050;
    padding: 20px;
    border-radius: 8px;
    color: white;
    text-align: center;

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 375px) {
        padding: 15px;
    }
`;

// Компонент профиля
const MyTransfer = ({ logginInUser }) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(
                    `${window.env.BACKEND_HOST}/api/get_user_data?roblox_name=${logginInUser.name}`
                );
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [logginInUser]);

    if (!logginInUser) {
        return (
            <CardWrapper>
                <ErrorMessage>Пользователь не авторизован. Пожалуйста, войдите в систему.</ErrorMessage>
            </CardWrapper>
        );
    }

    if (loading) {
        return <p>Загрузка...</p>;
    }

    return (
        <CardWrapper>
            <PageHeader>Профиль пользователя</PageHeader>
            <SectionHeader>Ваши транзакции:</SectionHeader>
            <TransactionsContainer>
                {transactions.length > 0 ? (
                    transactions.map((transaction, index) => (
                        <TransactionSection key={index}>
                            <p>
                                <strong>Транзакция #{index + 1}:</strong> <br/>
                                Количество: {transaction.amount} <br/>
                                Robux: {transaction.robux_amount} <br/>
                                Игра: {transaction.game_id} <br/>
                                Email: {transaction.email} <br/>
                                Статус: {transaction.status} <br/>
                                Имя пользователя: {transaction.roblox_username} <br/>
                                Время покупки: {moment(transaction.created_at).format('DD/MM/YYYY HH:mm:ss')}
                            </p>
                        </TransactionSection>
                    ))
                ) : (
                    <NoTransactions>
                        <h3>Упс-с-с</h3>
                        <p>Мы не смогли найти транзакции, связанные с вашим аккаунтом.</p>
                    </NoTransactions>
                )}
            </TransactionsContainer>
        </CardWrapper>
    );
};

export default MyTransfer;
