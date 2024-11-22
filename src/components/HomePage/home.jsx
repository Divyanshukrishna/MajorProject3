import React from 'react';
import styled from 'styled-components';

// Wrapper with Background Image
const PageWrapper = styled.div`
  background-image: url('/background.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; /* Full height for the viewport */
  width: 100vw; /* Full width for the viewport */
  opacity: 0.8; /* Reduce opacity */
  display: flex; /* Set up flexbox layout */
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 90%; /* Adjust width as needed */
  max-width: 1200px; /* Set a max width */
  height: 100%;
  align-items: center;
  justify-content: space-between; /* Space out the text and image */
`;

const LeftSection = styled.div`
  width: 50%; /* 50% width for the left side */
  padding: 20px;
  color: white; /* Text color */
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
    border-radius: 10px; /* Optional rounded corners */
  }
`;

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: transparent; /* Default transparent */
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease; /* Smooth transition */

  &:hover {
    background-color: white; /* Turns white on hover */
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  /* Center the image inside the div */
  height: 62px; /* Height of the circular container */
  width: 60px; /* Width of the circular container */
  border-radius: 50%; /* This makes the container circular */
  overflow: hidden; /* Hide the excess part of the image */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image fills the circular container */
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding-left: 60px;

  li {
    font-size: 1rem; /* 16px */
    color: #2d3748; /* Dark Gray */
    font-weight: 500;
    cursor: pointer;
    padding-right: 40px;
    font-size: 1.3rem;

    &:hover {
      color: #4299e1; /* Blue on hover */
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
    background-color: white; /* Default background color */
    color: blue; /* Default text color */
    border: 1px solid blue; /* Blue border */
    margin-right: 60px;
    padding: 10px;
    width: 150px;
    font-size: 1.3rem;
    border-radius: 20px;

    &:hover {
      background-color: blue; /* Hover background color */
      color: white; /* Hover text color */
    }
  }
`;

const ButtonContainer2 = styled.div`
  display: flex;
  gap: 16px;

  button {
    padding: 10px 20px; /* Adjust padding for better appearance */
    font-size: 1rem;
    border-radius: 20px; /* Make buttons rounded */
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: white; /* Default background color */
    color: blue; /* Default text color */
    border: 1px solid blue; /* Blue border */

    &:hover {
      background-color: blue; /* Hover background color */
      color: white; /* Hover text color */
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Logo Section */}
      <Logo>
        <img
          src="/logo.jpg" // Replace with your logo path
          alt="Logo"
        />
      </Logo>

      {/* Navigation Links */}
      <NavLinks>
        <li>Use cases</li>
        <li>Products</li>
        <li>Resources</li>
        <li>Company</li>
      </NavLinks>

      {/* Buttons */}
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
          {/* Left Section with Text and Buttons */}
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
  
          {/* Right Section with Image */}
          <RightSection>
            <img src="/your-image.jpg" alt="Right Section Image" />
          </RightSection>
        </ContentWrapper>
      </PageWrapper>
    );
  };

export default App
