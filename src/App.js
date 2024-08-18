import React from 'react';
import Header from './components/header';
import Buy from './components/block1';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Stats from './components/Stats';
import GiftCards from './components/GiftCards';
import Why from './components/WhyUs';
import Goal from './components/Goal';
import styled from 'styled-components';
import tw from 'twin.macro';
import {Gi3dGlasses} from "react-icons/gi";

// Create a styled div for the background
const AppContainer = styled.div`
    ${tw`bg-[rgb(19, 17, 27)] min-h-screen`} // Apply the background color and make sure it covers the full screen height
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function App() {
    return (
        <AppContainer>
            <Header />
            <Buy />
            <Cards/>
            <Stats/>
            <GiftCards/>
            <Why/>
            <Goal/>
            <Footer />
        </AppContainer>
    );
}

export default App;
