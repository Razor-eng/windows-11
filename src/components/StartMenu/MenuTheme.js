import React from 'react'
import { styled } from 'styled-components'
import Form from './Utils/Form';
import PinnedItems from './Utils/PinnedItems';
import RecommendedItems from './Utils/RecommendedItems';
import Admin from './Utils/Admin';

const MenuTheme = () => {
  return (
    <>
        <Theme>
            <Container>
                <Form/>
                <PinnedItems/>
                <RecommendedItems/>  
            </Container>
            <Admin/>
        </Theme> 
    </>
  )
}

const Theme = styled.div`
    width: 37vw;
    height: 93vh;
    z-index: 2000;
    opacity: 1;
    background-color: rgba(255,255,255,0.65);
    backdrop-filter: blur(0.7rem);  
    box-shadow: 0.1rem 0.1rem 4rem rgba(0,0,0,0.3);
    border-radius: 0.345rem;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;

const Container = styled.div`
    width:91%;
    margin-left: 3vh;
`;

export default MenuTheme
