import React from 'react';
import Header from './components/Stats';
import Footer from './components/Footer';

import FAQ from './components/FAQComponent';
import styled from "styled-components";
import tw from "twin.macro"; // Assuming you saved the FAQ component here

const AppContainer = styled.div`
    ${tw`bg-[rgb(21,21,21)] min-h-screen`} // Apply the background color and make sure it covers the full screen height
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FAQPage = () => {
    return (
        <div>
            <AppContainer>

                <FAQ />
                <Footer/>
            </AppContainer>

        </div>
    );
};

export default FAQPage;
