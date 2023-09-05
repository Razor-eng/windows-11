import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';

const ClockIcon = () => {
  const [timeState,setTimeState] = useState();
  const [dateState,setDateState] = useState();

  useEffect(()=>{
    setInterval(()=>{
      const timeStamp = new Date();
      setTimeState(timeStamp.toLocaleTimeString());
    },1000);
  },[]);

  useEffect(()=>{
    setInterval(()=>{
      const dateStamp = new Date();
      setDateState(dateStamp.toLocaleDateString());
    },1000);
  },[]);

  return (
    <>
      <WindowsClock>
        <div>{timeState}</div>
        <div>{dateState}</div>
      </WindowsClock>  
    </>
  )
}

const WindowsClock = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width:15vw;
  
  div{
    font-size: 0.85rem;
    display:flex;
    align-items:center;
    margin: 0.3vh 0;
  }
`;

export default ClockIcon
