import React from 'react'
import video from './Images/video.webm'
import { styled } from 'styled-components'
import bg from './Images/windows-bg-light.jpg'

const Desktop = () => {
  return (
    <>
        <Background>
            <video autoPlay={true} loop={false} muted={true} playsInline={true}>
                <source src={video}/>
            </video>    
        </Background> 
    </>
  )
}

const Background = styled.main`
    background: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height:100vh;
    position: relative;
    opacity: 1;
    z-index:1500;
    overflow: hidden;

    video{
        width: 100%;
        height: auto;
        object-fit: cover;
        pointer-events: none;
    }
`;

export default Desktop
