import React from 'react';
import styled from 'styled-components';

// Styled Components
const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #f8f9fa; /* Light gray background */
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 60px;
  }

  h1 {
    font-size: 1.25rem; /* 20px */
    font-weight: bold;
    color: #2b6cb0; /* Blue */
    margin: 0;

    span {
      color: #4299e1; /* Lighter Blue */
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;

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



const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Logo Section */}
      <Logo>
        <img
          src="/logo.jpg" // Replace with your logo path
          alt="Logo"
        />
        {/* <h1>
          OPEN<span>ALPR</span>
        </h1> */}
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

export default Navbar;
