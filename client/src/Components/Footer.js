import React, { useState, useEffect, component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <StyledLink to="#">about</StyledLink>
        <StyledLink to="#">contact</StyledLink>
        <StyledLink to="#">media inquiries</StyledLink>
        <StyledLink to="#">careers</StyledLink>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  font-family: "Teko", sans-serif;
`;

const StyledLink = styled(Link)`
  color: lightgray;
  padding: 8px;
`;
export default Footer;
