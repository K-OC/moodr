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
  background-color: #e4ebea;
  padding: 0 1rem;
  height: 700px;
  width: 10%;
  border: 1px solid cyan;
  display: flex;
  flex-direction: column;
  display: flex;
`;

const StyledUl = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-evenly;

  margin: 0;
  padding: 0;
  border: 1px solid lime;
`;

export default Navbar;
