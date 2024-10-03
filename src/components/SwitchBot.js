import React, { useState, useEffect } from 'react';
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

const SwitcherContainer = styled.div`
     ${tw`bg-[rgb(1, 92, 43)] p-8 rounded-lg shadow-lg flex flex-col`}
    max-width: 800px;
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    margin-top: 20px;
    padding: 40px;
    border-radius: 24px;
    color: white;
    overflow-y: auto;

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

const Button = styled.button`
    ${tw`bg-blue-500 text-white px-4 py-2 rounded-lg m-2`}
    &:hover {
        background-color: #2563eb;
    }
`;

const ListItem = styled.div`
    ${tw`bg-gray-800 p-4 rounded-lg flex justify-between items-center mb-2`}
`;

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
    const [currentBot, setCurrentBot] = useState(null);
    const [authToken, setAuthToken] = useState('')
    const [authorized, setAuthorized] = useState(false)
    const [loading, setLoading] = useState(false);

    // Получаем список доступных ботов с бэкенда
    useEffect(() => {
        const fetchBots = async () => {
            if (!authorized) { 
                return 
            } 
            setLoading(true);
            try {
                const response = await fetch(`${window.env.BACKEND_HOST}/api/bot/`, {headers: {
                    "token": authToken, 
                }});
                if (response.ok) {
                    const data = await response.json();
                    data.map((value) => {
                        if (value.is_selected) { 
                            setCurrentBot(value)
                        }
                    })
                    setItems(data); // Заполняем список доступных ботов
                } else {
                    alert('Ошибка при получении списка ботов');
                }
            } catch (error) {
                console.error('Ошибка при получении списка ботов:', error);
                alert('Ошибка при получении списка ботов');
            }
            setLoading(false);
        };

        fetchBots();
    }, [authorized]);

    const handleLogin = async () => {
        if (authToken) {
            setLoading(true);
            try {
                const response = await fetch(`${window.env.BACKEND_HOST}/api/auth/token?token=${authToken}`, {
                    method: 'POST',
                });
                if (response.ok) {
                    setCurrentToken(authToken);
                    setToken('');
                    setAuthorized(true)
                } else {
                    alert('Верификация токена не удалась');
                }
            } catch (error) {
                console.error('Ошибка при верификации токена:', error);
                alert('Ошибка при верификации токена');
            }
            setLoading(false);
        }
    };

    const handleAddItem = async () => {
        if (nickname && token) {
            setLoading(true);
            try {
                const response = await fetch(`${window.env.BACKEND_HOST}/api/bot/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': authToken, 
                    },
                    body: JSON.stringify({ 
                        roblox_name: nickname,
                        token: token
                    }),
                });
                if (response.ok) {
                    let data = await response.json()
                    setItems([...items, { roblox_name: nickname, id: data.id, is_active: data.is_active }]); // Не добавляем токен в список
                    setNickname('');
                    setToken('');
                } else {
                    alert('Ошибка при добавлении бота');
                }
            } catch (error) {
                console.error('Ошибка при добавлении бота:', error);
                alert('Ошибка при добавлении бота');
            }
            setLoading(false);
        }
    };

    const handleDelete = async (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        if (currentBot === items[index]) {
            setCurrentBot(null);
        }
        if (updatedItems.length == 1 && updatedItems[0].is_active) { 
            alert("В базе должно быть хотя бы один активный токен")
            return 
        }
        if (authToken) {
            try {
                const response = await fetch(`${window.env.BACKEND_HOST}/api/bot/${items[index].id}`, {
                    method: 'DELETE',
                    headers: { 
                        'token': authToken, 
                    }
                });
                if (response.ok) {
                    setCurrentToken(authToken);
                    setToken('');
                    setAuthorized(true)
                } else {
                    alert('Верификация токена не удалась');
                }
            } catch (error) {
                console.error('Ошибка при верификации токена:', error);
                alert('Ошибка при верификации токена');
            }
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(''); // Не отображаем старый токен
    };

    const handleSaveEdit = async () => {
        if (editValue === '') { 
            setEditIndex(null);
            setEditValue('');
            return 
        }
        if (editValue.trim() && editValue !== '') {
            setLoading(true);
            try {
                const updatedItems = [...items];
                const bot = updatedItems[editIndex];
                const response = await fetch(`${window.env.BACKEND_HOST}/api/bot/`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': authToken
                    },
                    body: JSON.stringify({ roblox_name: bot.roblox_name, token: editValue }),
                });
                if (response.ok) {
                    setItems(updatedItems);
                    setEditIndex(null);
                    setEditValue('');
                } else {
                    alert('Ошибка при изменении токена');
                }
            } catch (error) {
                console.error('Ошибка при изменении токена:', error);
                alert('Ошибка при изменении токена');
            }
            setLoading(false);
        }
    };

    // Отправка запроса на смену текущего бота
    const handleSelectBot = async (bot) => {
        setLoading(true);
        try {
            const response = await fetch(`${window.env.BACKEND_HOST}/api/bot/select`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': authToken
                },
                body: JSON.stringify({ bot_id: bot.id }),
            });
            if (response.ok) {
                setCurrentBot(bot); // Устанавливаем текущего бота после успешного запроса
            } else {
                alert('Ошибка при выборе бота');
            }
        } catch (error) {
            console.error('Ошибка при выборе бота:', error);
            alert('Ошибка при выборе бота');
        }
        setLoading(false);
    };

    return (
        <OuterContainer>
            <SwitcherContainer>
                {!currentToken ? (
                    <>
                        <h2>Введите токен для входа:</h2>
                        <TokenInput
                            type="text"
                            value={authToken}
                            onChange={(e) => setAuthToken(e.target.value)}
                            placeholder="Введите токен"
                        />
                        <Button onClick={handleLogin} disabled={loading}>
                            {loading ? 'Вход...' : 'Войти'}
                        </Button>
                    </>
                ) : (
                    <>
                        <BotSlot>
                            {currentBot ? (
                                <>
                                    <h3>Текущий бот:</h3>
                                    <p><strong>Ник:</strong> {currentBot.roblox_name}</p>
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
                        <Button onClick={handleAddItem} disabled={loading}>
                            {loading ? 'Добавление...' : 'Добавить бота'}
                        </Button>

                        <h3>Список ботов:</h3>
                        {items.map((item, index) => (
                            <ListItem key={index}>
                                {editIndex === index ? (
                                    <>
                                        <span>{item.roblox_name}:</span>
                                        <EditInput
                                            type="text"
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            placeholder="Введите новый токен"
                                        />
                                        <Button onClick={handleSaveEdit} disabled={loading}>
                                            {loading ? 'Сохранение...' : 'Сохранить'}
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <span>{item.roblox_name}</span> {/* Не отображаем токен */}
                                        <span>Активный: {item.is_active ? 'True' : 'False'}</span>
                                        <div>
                                            <Button onClick={() => handleEdit(index)} disabled={loading}>Изменить</Button>
                                            <Button onClick={() => handleDelete(index)} disabled={loading}>Удалить</Button>
                                            <Button onClick={() => handleSelectBot(item)} disabled={loading}>
                                                {loading ? 'Выбор...' : 'Выбрать'}
                                            </Button>
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
