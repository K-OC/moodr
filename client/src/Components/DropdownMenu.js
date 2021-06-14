import React, { useState, useEffect, useContext } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { CurrentUserContext } from "../CurrentUserContext";
function DropdownMenu() {
  const {
    emotions,
    setEmotions,
    componentState,
    setComponentState,
    subList,
    setSubList,
    userEmotion,
    setUserEmotion,
    dropdownClick,
    setDropdownClick,
    emotionColor,
    setEmotionColor,
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

  // const dropOneOptions = emotions.map((e) => {
  //   return (
  //     <>
  //       <StyledLink onChange={handleSelect}>
  //         {e.name}
  //       </StyledLink>
  //     </>
  //   );
  // });

  // const defaultOption = "select an emotion";

  return (
    <Wrapper>
      {componentState === "loading" ? (
        <span>loading...</span>
      ) : (
        <>
          {emotions.map((e) => {
            return (
              <>
                <GlobalStyle />
                <div>
                  <EmotionClass
                    key={e._id}
                    onClick={(ev) => {
                      if (dropdownClick === false) {
                        setDropdownClick(true);
                        setEmotionColor(e.color);
                      } else {
                        setDropdownClick(false);
                      }
                    }}
                    style={{ color: e.color, "background-color": "white" }}
                  >
                    {e.name}:{" "}
                  </EmotionClass>

                  {dropdownClick === true
                    ? e.children.map((ele) => {
                        // console.log("test", ele);
                        return (
                          <>
                            <SecondWrapper
                              style={{
                                "background-color": e.color,
                              }}
                            >
                              {console.log(e.color)}
                              <StyledLink
                                onClick={(ev) => {
                                  setUserEmotion(ele);
                                }}
                              >
                                {ele.name}
                              </StyledLink>
                            </SecondWrapper>
                          </>
                        );
                      })
                    : null}
                </div>
              </>
            );
          })}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  height: 100%;
`;
const SecondWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  border: 1px solid white;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const EmotionClass = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid white;
  }
`;

export default DropdownMenu;
