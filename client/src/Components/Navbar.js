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
  background-color: var(--bg);
  padding: 0 1rem;
  height: 60px;
  border: 1px solid cyan;
`;

const StyledUl = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid lime;
`;

export default Navbar;
