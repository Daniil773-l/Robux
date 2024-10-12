import React, { useEffect, useState } from 'react';
import DesktopHeader from './components/header';  // Компонент для десктопа
import Buy from './components/block1';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Stats from './components/Stats';
import GiftCards from './components/GiftCards';
import Why from './components/WhyUs';
import Goal from './components/Goal';
import styled from 'styled-components';
import tw from 'twin.macro';


// Styled div for app container
const AppContainer = styled.div`
    ${tw`bg-[rgb(21, 21, 21)] min-h-screen`} // Background color and minimum height
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const App = ({loggedInUser, setLoggedInUser}) => {
    return (
        <div>
            <AppContainer>
                   <Buy loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
                <Cards />
                <GiftCards />
                <Why />
                <Goal />
                <Footer />
            </AppContainer>

        </div>
    );
};

export default App;
