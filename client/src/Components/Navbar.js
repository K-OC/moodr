import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import NavItem from "./NavItem";
import GlobalStyle from "./GlobalStyles";
const Navbar = () => {
  const {
    lat,
    setLat,
    lng,
    setLng,
    status,
    setStatus,
    markerGenerate,
    setMarkerGenerate,
    emotions,
    setEmotions,
    componentState,
    setComponentState,
    subList,
    setSubList,
    userEmotion,
    setUserEmotion,
    marker,
    setMarker,
    selected,
    setSelected,
    clickLocation,
    setClickLocation,
    moodrList,
    center,
    setCenter,
  } = useContext(CurrentUserContext);

  useEffect(() => {
    fetch("/api/allemotions")
      .then((response) => response.json())
      .then((json) => {
        setEmotions(json.data);
        console.log("test.", emotions);
        setComponentState("loaded");
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledUl>
          <NavItem />
        </StyledUl>
      </StyledNav>
    </>
  );
};

const StyledNav = styled.nav`
  padding: 0;
  margin: 0;
  display: flex;
  position: absolute;
  z-index: 1000;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

export default Navbar;
