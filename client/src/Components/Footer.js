import React, { useState, useEffect, component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <StyledLink to="/about">about</StyledLink>
        <StyledLink to="#">contact</StyledLink>
        <StyledExternal
          href="https://www.linkedin.com/in/kieran-oc/"
          target="_blank"
        >
          linkedin
        </StyledExternal>
        <StyledExternal href="https://github.com/K-OC" target="_blank">
          github
        </StyledExternal>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const StyledLink = styled(Link)`
  color: lightgray;
  padding: 8px;
  text-decoration: none;
  &:hover {
    border-bottom: solid 1px lightgray;
  }
`;

const StyledExternal = styled.a`
  color: lightgray;
  padding: 8px;
  text-decoration: none;
  &:hover {
    border-bottom: solid 1px lightgray;
  }
`;
export default Footer;
