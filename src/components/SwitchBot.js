import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
const SwitcherContainer = styled.div`
    ${tw`bg-[rgb(1, 92, 43)] p-8 rounded-lg shadow-lg flex flex-col`}
    max-width: 1200px;
    height: 80vh;
    margin: 0 auto;
    margin-top: 20px;
    padding: 40px;
    border-radius: 24px;
    color: white;
    overflow-y: auto;

    
    /* Custom scrollbar styles */
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
`

const SwitcherBot = ({loggedInUser, setLoggedInUser}) => {
    return(
        <SwitcherContainer>
            Как дела?
        </SwitcherContainer>
    )
}

export default SwitcherBot; 