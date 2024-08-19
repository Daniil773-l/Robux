import React from 'react';
import Header from './components/header';
import User from './components/UserAgreement';
import Footer from './components/Footer';
import styled from 'styled-components';
import tw from 'twin.macro';



const AppContainer = styled.div`
    ${tw`bg-[rgb(11,35,22)] min-h-screen`} // Apply the background color and make sure it covers the full screen height
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function App() {
    return (
        <AppContainer>
            <Header />
            <User/>
            <Footer />
        </AppContainer>
    );
}

export default App;
