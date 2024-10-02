import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const OuterContainer = styled.div`
  ${tw`w-full`}
  background-color: #028824; /* Зеленый фон */
  min-height: 100vh; /* Растягиваем по высоте */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;
// Стили для контейнера
const SwitcherContainer = styled.div`
     ${tw`bg-[rgb(1, 92, 43)] p-8 rounded-lg shadow-lg flex flex-col`}
    max-width: 800px; /* Увеличили ширину до 800px */
    width: 100%; /* Позволяет контейнеру растягиваться на всю ширину */
    height: 80vh;
    margin: 0 auto;
    margin-top: 20px;
    padding: 40px;
    border-radius: 24px;
    color: white;
    overflow-y: auto;

    /* Градиент от белого к зелёному */

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

// Стили для формы ввода токена и ника
const TokenInput = styled.input`
    ${tw`p-2 rounded-lg mb-4`}
    border: 2px solid #fff;
    background-color: transparent;
    color: white;
`;

const NicknameInput = styled.input`
    ${tw`p-2 rounded-lg mb-4`}
    border: 2px solid #fff;
    background-color: transparent;
    color: white;
`;

// Стили для кнопок
const Button = styled.button`
    ${tw`bg-blue-500 text-white px-4 py-2 rounded-lg m-2`}
    &:hover {
        background-color: #2563eb;
    }
`;

// Стили для элемента списка
const ListItem = styled.div`
    ${tw`bg-gray-800 p-4 rounded-lg flex justify-between items-center mb-2`}
`;

// Стили для поля изменения элемента списка
const EditInput = styled.input`
    ${tw`p-2 rounded-lg`}
    border: 2px solid #fff;
    background-color: transparent;
    color: white;
    margin-right: 8px;
`;

const BotSlot = styled.div`
  ${tw`bg-gray-900 p-6 rounded-lg mb-6 text-center`}
  border: 2px solid #fff;
`;

const SwitcherBot = () => {
    const [token, setToken] = useState('');
    const [nickname, setNickname] = useState('');
    const [currentToken, setCurrentToken] = useState(null);
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [currentBot, setCurrentBot] = useState(null); // Для хранения текущего выбранного бота

    const handleLogin = () => {
        if (token) {
            setCurrentToken(token);
            setToken('');
        }
    };

    const handleAddItem = () => {
        if (nickname && token) {
            setItems([...items, { nickname, token }]);
            setNickname('');
            setToken('');
        }
    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        // Если удаляем текущего выбранного бота, сбросить его
        if (currentBot === items[index]) {
            setCurrentBot(null);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(items[index].token);
    };

    const handleSaveEdit = () => {
        if (editValue.trim()) {
            const updatedItems = [...items];
            updatedItems[editIndex].token = editValue;
            setItems(updatedItems);
            setEditIndex(null);
            setEditValue('');
        }
    };

    const handleSelectBot = (bot) => {
        setCurrentBot(bot); // Устанавливаем текущего бота в слот
    };

    return (
        <OuterContainer>
            <SwitcherContainer>
                {!currentToken ? (
                    <>
                        <h2>Введите токен для входа:</h2>
                        <TokenInput
                            type="text"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            placeholder="Введите токен"
                        />
                        <Button onClick={handleLogin}>Войти</Button>
                    </>
                ) : (
                    <>
                        {/* Слот для текущего бота */}
                        <BotSlot>
                            {currentBot ? (
                                <>
                                    <h3>Текущий бот:</h3>
                                    <p><strong>Ник:</strong> {currentBot.nickname}</p>
                                    <p><strong>Токен:</strong> {currentBot.token}</p>
                                </>
                            ) : (
                                <p>Бот не выбран</p>
                            )}
                        </BotSlot>

                        <h3>Добавить нового бота:</h3>
                        <NicknameInput
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="Введите ник"
                        />
                        <TokenInput
                            type="text"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            placeholder="Введите токен"
                        />
                        <Button onClick={handleAddItem}>Добавить бота</Button>

                        <h3>Список ботов:</h3>
                        {items.map((item, index) => (
                            <ListItem key={index}>
                                {editIndex === index ? (
                                    <>
                                        <span>{item.nickname}:</span>
                                        <EditInput
                                            type="text"
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                        />
                                        <Button onClick={handleSaveEdit}>Сохранить</Button>
                                    </>
                                ) : (
                                    <>
                                        <span>{item.nickname}: {item.token}</span>
                                        <div>
                                            <Button onClick={() => handleEdit(index)}>Изменить</Button>
                                            <Button onClick={() => handleDelete(index)}>Удалить</Button>
                                            <Button onClick={() => handleSelectBot(item)}>Выбрать</Button> {/* Кнопка для выбора бота */}
                                        </div>
                                    </>
                                )}
                            </ListItem>
                        ))}
                    </>
                )}
            </SwitcherContainer>
        </OuterContainer>
    );
};

export default SwitcherBot;
