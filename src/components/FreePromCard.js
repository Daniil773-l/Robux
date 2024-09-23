import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaTelegramPlane } from 'react-icons/fa';
import YoutubeIcon from '../assets/img/yt2.png';

const CardWrapper = styled.div`
    ${tw`flex justify-center mt-6`} /* Center the card horizontally and add a margin on top */
    width: 100%; /* Ensure the wrapper takes the full width */
  
`;

const Card = styled.div`
    ${tw`flex justify-between items-center p-6 rounded-lg bg-[#015c2b]`}

    max-width: 1080px;
    width: 100%;
    border-radius: 24px;
`;

const IconWrapper = styled.div`
    ${tw`flex items-center`}
`;

const Icon = styled.img`
    ${tw`w-36 h-28`}
`;

const TextWrapper = styled.div`
    ${tw`ml-4`}
`;

const Title = styled.h3`
    ${tw`text-white text-lg font-bold mb-1 flex items-center`}
    font-weight: 500;
    font-size: 20px;
`;

const Description = styled.p`
    ${tw`text-gray-400`}
    width: auto;
    color: #8990a9;
    font-weight: 500;
    font-size: 18px;
    margin-top: 0px;
`;

const ActionIcon = styled.div`
    ${tw`text-2xl py-2 px-6 text-gray-400 `}
    cursor: pointer;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #038741;
    display: flex;
    &:hover {
        color: white;
    }
`;

const VideoPromoCard = () => {
    return (
        <CardWrapper>
            <Card>
                <IconWrapper>
                    <Icon src={YoutubeIcon} alt="YouTube Icon" />
                    <TextWrapper>
                        <Title>Хочешь получить робуксы бесплатно?</Title>
                        <Description>Свяжись с нами в телеграмм и получи робуксы за видео!</Description>
                    </TextWrapper>
                </IconWrapper>
                <ActionIcon>
                    <FaTelegramPlane />
                </ActionIcon>
            </Card>
        </CardWrapper>
    );
};

export default VideoPromoCard;
