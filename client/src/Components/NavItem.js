import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import { Link } from "react-router-dom";
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
    emotionColor,
    setEmotionColor,
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
                <StyledLi>
                  <StyledLink
                    href="#"
                    onClick={() => {
                      setOpen(!open);
                      setClicked(e._id);
                      setEmotionColor(e.color);
                    }}
                    style={{ color: "white", "background-color": e.color }}
                  >
                    {e.name}
                    {open && clicked === e._id
                      ? e.children.map((ele) => {
                          return (
                            <>
                              <StyledSubLink
                                onClick={() => {
                                  setUserEmotion(ele);
                                }}
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
  /* align-items: center;
  justify-content: center; */
  font-family: var(--font-family);
  z-index: 10;
`;

const SubWrap = styled.div``;

const StyledLi = styled.li`
  display: inline-block;
  align-content: center;
  font-family: var(--font-family);
  margin: 0;
  padding: 2px;
  width: 120px;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 2px;
  font-size: 20px;
  &:hover {
    box-shadow: 1px 1px black;
  }
`;

const StyledSubLink = styled(Link)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* align-items: flex-start; */
  text-decoration: none;
  padding: 1px;
  &:hover {
    border: 1px solid white;
  }
`;

export default NavItem;
