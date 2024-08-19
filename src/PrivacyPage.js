import React from 'react';
import Header from './components/header';
import Privacy from './components/PrivacyPolicy';
import Footer from './components/Footer';

import styled from 'styled-components';
import tw from 'twin.macro';

const AppContainer = styled.div`
    ${tw`bg-[rgb(19, 17, 27)] min-h-screen`}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


const BonusPage = () => {
    return (
        <AppContainer>
            <Header/>
            <Privacy/>
            <Footer/>
        </AppContainer>
    );
};

export default BonusPage;
