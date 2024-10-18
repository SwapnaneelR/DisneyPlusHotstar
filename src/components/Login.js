import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Login = (props) => {
   
  return (
      <Container>
        <Content >
        <BgImage />
        <StyledLink   > 
            GET STARTED
          </StyledLink>
        </Content>
      </Container>
  )
}
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;
const BgImage = styled.div`
height: 100%;
background-position:bottom ;   
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/Login99.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: -1;
width: 100%;

}
`;

 
const StyledLink = styled(Link).attrs({ to: '/home' })`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55vh;
  width: 80%;
  max-width: 400px;
  color: #ffffff;
  background-color: transparent;
  border: 5px solid #f9f9f9; 
  font-size: clamp(18px, 4vw, 25px);
  font-weight: bold;
  letter-spacing: 1.5px;
  line-height: 1.5;
  padding: 16px 14px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f9f9f9; 
    font-weight: normal;
    color: black;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 14px 12px;
  }
`;
export default Login
