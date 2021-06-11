import React, { useState, useEffect, component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import GlobalStyles from "./GlobalStyles";

function Header() {
  return (
    <>
      <TopOfPage>
        <StyledHeader>
          <StyledLink to="/">Moodr</StyledLink>
        </StyledHeader>
        <StyledSignIn>
          <StyledLink to="/signin">
            <StyledLogo src="../assets/crow.svg" />
          </StyledLink>
        </StyledSignIn>
      </TopOfPage>
    </>
  );
}

const StyledButton = styled.button`
  background-color: #002b36;
  font-family: var(--heading-font-family);
  color: #eee8d5;
  border-color: white;
  border-width: 1.4px;
  font-size: 15px;
  height: 40px;
  width: 80px;
`;

const TopOfPage = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #add8e6;
  height: 5vh;
  margin: 0;
  padding: 0;
  width: auto;
`;

const StyledLogo = styled.img`
  height: 30px;
  width: 30px;
`;

const StyledHeader = styled.span`
  display: flex;
  font-family: "Teko", sans-serif;
  font-size: 30px;
  color: black;
  align-items: center;
`;

const StyledSignIn = styled.span`
  display: flex;
  color: white;
  font-family: "Teko", sans-serif;
  font-size: 20px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default Header;
