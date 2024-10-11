import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Обертка для всей карточки
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1f2937;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    text-align: center;
    color: white;
    //padding: 20px;
    //max-width: 800px; /* Ограничение ширины */
`;

// Секция для каждой транзакции
const TransactionSection = styled.div`
    background-color: #374151;
    padding: 16px;
    border-radius: 8px;
    margin: 8px 8px 8px 130px;
    width: 80%;
    text-align: left;
`;

// Сообщение при отсутствии транзакций
const NoTransactions = styled.div`
    background-color: #ff5050;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-top: 20px;
`;

// Сообщение об ошибке
const ErrorMessage = styled.div`
    background-color: #ff5050;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-top: 20px;
`;

// Компонент профиля
const MyTransfer = ({ logginInUser }) => {
    const [transactions, setTransactions] = useState([]); // Хранение транзакций
    const [loading, setLoading] = useState(true); // Индикатор загрузки данных

    // Проверка на вход пользователя и получение его транзакций
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(
                    `${window.env.BACKEND_HOST}/api/get_user_data?roblox_name=${logginInUser.name}`
                ); // Эндпоинт для получения данных о пользователе
                const data = await response.json();
                setTransactions(data); // Установка транзакций пользователя
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [logginInUser]);

    if (logginInUser === null || logginInUser === undefined) {
        return (
            <CardWrapper>
                <ErrorMessage>Пользователь не авторизован. Пожалуйста, войдите в систему.</ErrorMessage>
            </CardWrapper>
        );
    }

    if (loading) {
        return <p>Загрузка...</p>; // Отображение индикатора загрузки
    }

    return (
        <CardWrapper>
            <h2>Профиль пользователя</h2>
            <h3>Ваши транзакции:</h3>
            {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                    <TransactionSection key={index}>
                        <p>
                            <strong>Транзакция #{index + 1}:</strong> <br />
                            Количество: {transaction.amount} <br />
                            Robux: {transaction.robux_amount} <br />
                            Игра: {transaction.game_id} <br />
                            Email: {transaction.email} <br />
                            Статус: {transaction.status} <br />
                            Имя пользователя: {transaction.roblox_username}
                        </p>
                    </TransactionSection>
                ))
            ) : (
                <NoTransactions>
                    <h3>Упс-с-с</h3>
                    <p>Мы не смогли найти транзакции, связанные с вашим аккаунтом.</p>
                </NoTransactions>
            )}
        </CardWrapper>
    );
};

export default MyTransfer;
