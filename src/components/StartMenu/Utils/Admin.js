import React from 'react'
import adminImg from '../../Images/windows-icon/admin.png'
import powerButton from '../../Images/windows-icon/powerButton.svg'
import { styled } from 'styled-components'

const Admin = () => {
  return (
    <>
      <Wrap>
        <Avatar>
          <img src={adminImg} alt="admin/img" />
          <p>Admin</p>
        </Avatar>
        <PowerButton>
          <img src={powerButton} alt="power/button" />
        </PowerButton>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  padding: 3vh 3rem;
  opacity: 1;
  z-index: 2000;
  border-radius: 0 0 0.345rem 0.345rem;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(0rem);
  box-shadow: 0 -0.1rem 0.5rem rgba(0,0,0,0.1);
`;

const PowerButton = styled.div`
  img{
    z-index: 2000;
    opacity: 1;
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0,0,0,0.3));
    transition: all 500ms cubic-bezier(0.39,0.575,0.565,1) 0s;

    &:hover{
      transform: scale(1.2);
    }
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  img{
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
    opacity: 1;
    transition: all 500ms cubic-bezier(0.39,0.575,0.565,1) 0s;

    &:hover{
      transform: scale(1.2);
    }
  }
  p{
    font-size: 1.2rem;
    font-weight: 400;
    margin-left: 1rem;
  }
`;

export default Admin
