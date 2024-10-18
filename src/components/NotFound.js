import React from 'react'
import styled from 'styled-components';
const NotFound = () => {
    return (
      <>
            <Container>
                <Content>
                    <h2>ERROR 404 : This page was not found ! </h2>
                    <h3>The requested route does not exist</h3>
                    </Content>
            </Container>
    </>
  )
}
const Container = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;  
const Content = styled.div`
  text-align: center;
  color: #ffff;
  font-size: 24px; padding: 20px;
  border: 3px solid #ffff;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`
export default NotFound
