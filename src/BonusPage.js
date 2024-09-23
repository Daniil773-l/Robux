import React from 'react';
import Header from './components/Stats';
import BonusCard from './components/BalancePromoCard';
import Invite from './components/InviteFriendsCard';
import VideoPromoCard from './components/FreePromCard';
import Footer from './components/Footer';
import HalfSphere from './assets/img/halfSphere.png';
import TinySphere from './assets/img/TinySphere.png';
import TiniestSphere from './assets/img/FuckingTinySphere.png';
import Pzdz from './assets/img/PzdzSmall.png';
import styled from 'styled-components';
import tw from 'twin.macro';

const AppContainer = styled.div`
    ${tw`bg-[rgb(11,35,22)] min-h-screen`}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Sphere = styled.img`
    left: -50px;
    top: 95%;
    position: absolute;
`;

const Sphere2 = styled.img`
    left: 10%;
    top: 45%;
    position: absolute;
`;

const Sphere3 = styled.img`
    right: 10%;
    top: 45%;
    position: absolute;
`;
const Sphere4 = styled.img`
    right: 8%;
    top: 90%;
    position: absolute;
`;

const BonusPage = () => {
    return (
        <AppContainer>
            <Sphere src={HalfSphere} alt="Floating Sphere" />
            <Sphere2 src={TinySphere} alt="Floating Sphere" />
            <Sphere3 src={TiniestSphere} alt="Floating Sphere" />
            <Sphere4 src={Pzdz} alt="Floating Sphere" />

            <BonusCard/>
            <Invite/>
            <VideoPromoCard/>
            <Footer/>
        </AppContainer>
    );
};

export default BonusPage;
