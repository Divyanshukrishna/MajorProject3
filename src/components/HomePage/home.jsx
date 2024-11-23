import React from 'react';
import styled from 'styled-components';


const PageWrapper = styled.div`
  background-image: url('/background.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; 
  width: 100vw; 
  opacity: 0.8; 
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 90%; 
  max-width: 1200px;
  height: 100%;
  align-items: center;
  justify-content: space-between; 
`;

const LeftSection = styled.div`
  width: 50%; 
  padding: 20px;
  color: white; 
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  h1{
    color: black;
    font-size: 3.5rem;
    font-weight: 750;
  }
  p{
    color: black;
    font-weight: 350;
  }

`;

const RightSection = styled.div`
  width: 50%; 
  padding: 20px;
  display: flex;
  justify-content: center; 
  align-items: center; 
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; 
  }
`;

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: transparent; 
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: white; 
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  height: 62px; 
  width: 60px; 
  border-radius: 50%; 
  overflow: hidden; 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding-left: 60px;

  li {
    font-size: 1rem; 
    color: #2d3748; 
    font-weight: 500;
    cursor: pointer;
    padding-right: 40px;
    font-size: 1.3rem;

    &:hover {
      color: #4299e1; 
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;

  button {
    padding: 8px 16px;
    font-size: 1rem;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: white; 
    color: blue;
    border: 1px solid blue; 
    margin-right: 60px;
    padding: 10px;
    width: 150px;
    font-size: 1.3rem;
    border-radius: 20px;

    &:hover {
      background-color: blue; 
      color: white; 
    }
  }
`;

const ButtonContainer2 = styled.div`
  display: flex;
  gap: 16px;

  button {
    padding: 10px 20px; 
    font-size: 1rem;
    border-radius: 20px; 
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: white;
    color: blue; 
    border: 1px solid blue; 

    &:hover {
      background-color: blue; 
      color: white;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>

      <Logo>
        <img
          src="/logo.jpg"
          alt="Logo"
        />
      </Logo>


      <NavLinks>
        <li>Use cases</li>
        <li>Products</li>
        <li>Resources</li>
        <li>Company</li>
      </NavLinks>


      <ButtonContainer>
        <button className="secondary">Sign in</button>
      </ButtonContainer>
    </NavbarContainer>
  );
};



const App = () => {
    return (
      <PageWrapper>
        <Navbar />
        <ContentWrapper>
          <LeftSection>
            <h1>
              Automatic license
              plate recognition
              made easy
            </h1>
            <p>
              Deploy LPR and vehicle recognition with Rekor's suite of software solutions 
              designed to provide invaluable vehicle intelligence which enhances business capabilities, 
              automates tasks, and increases overall community safety!
            </p>
            <ButtonContainer2>
              <button className="get-started">Get Started</button>
              <button className="learn-more">Learn More</button>
            </ButtonContainer2>
          </LeftSection>
  
          <RightSection>
            <img src="/download.jpeg" alt="Right Section Image" />
          </RightSection>
        </ContentWrapper>
      </PageWrapper>
    );
  };

export default App
