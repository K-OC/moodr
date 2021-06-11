import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import { Link } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
const NavItem = () => {
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
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState([]);
  return (
    <>
      {componentState === "loading" ? (
        <span>loading...</span>
      ) : (
        emotions.map((e) => {
          return (
            <>
              <Wrapper>
                <GlobalStyle />
                <StyledLi>
                  <StyledLink
                    href="#"
                    onClick={() => {
                      setOpen(!open);
                      setClicked(e._id);
                    }}
                    style={{ color: "white", "background-color": e.color }}
                  >
                    {e.name}
                    {open && clicked === e._id
                      ? e.children.map((ele) => {
                          return (
                            <>
                              <StyledSubLink
                                onClick={() => setUserEmotion(ele)}
                                style={{
                                  color: "white",
                                  "background-color": e.color,
                                }}
                              >
                                {ele.name}
                              </StyledSubLink>
                            </>
                          );
                        })
                      : null}
                  </StyledLink>
                </StyledLi>
              </Wrapper>
            </>
          );
        })
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid fuchsia;
  z-index: 10;
  max-height: fit-content;
  font-family: var(--font-family);
`;

const SubWrap = styled.div``;

const StyledLi = styled.li`
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid yellow;
`;
const FadeIn = keyframes`
0% {
opacity: 0.5;
}
100%{
  opacity: 1;
}
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 80px;
  align-items: center;
  justify-content: center;
  margin: 0;
  &:hover {
    box-shadow: 1px 1px #60464a;
  }
`;

const StyledSubLink = styled(Link)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* align-items: flex-start; */
  text-decoration: none;
  min-height: 100%;
  min-width: 100px;
  &:hover {
    border: 1px solid cyan;
  }
`;

export default NavItem;
