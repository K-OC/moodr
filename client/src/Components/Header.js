import React, { useState, useEffect, component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Survey } from "./Survey.js";
import Navbar from "./Navbar";

// import GlobalStyles from "./GlobalStyles";

function Header() {
  return (
    <>
      <TopOfPage>
        <StyledHeader>
          <StyledLink to="/">Moodr</StyledLink>
        </StyledHeader>
        {window.location.pathname !== "/about" ? (
          <ContentWrapper>
            <Navbar />
            <Survey />
          </ContentWrapper>
        ) : null}
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
  width: 100vw;
  min-height: 8vh;
  margin: 0;
  padding: 0;
`;

const StyledLogo = styled.img`
  height: 40px;
  width: 40px;
  background-color: #add8e6;
  margin: 0;
  padding-left: 0;
`;

const StyledHeader = styled.span`
  display: flex;
  font-size: 30px;
  color: black;
  align-items: center;
  background-color: #add8e6;
`;

const StyledSignIn = styled.span`
  display: flex;
  color: white;
  font-size: 20px;
  margin: 0;
  padding-right: 10px;
  background-color: #add8e6;

  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: #add8e6;
  padding-left: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #add8e6;
`;
export default Header;
