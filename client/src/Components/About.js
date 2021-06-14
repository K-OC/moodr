import React, { useState, useEffect, component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Wrapper>
        <Blurb>
          <Title>About Moodr:</Title>
          <Copy>
            Moodr is a simple social media platform that tells you how the world
            is feeling in real time. Just select an emotion from the menu, and
            share. A pin will be dropped on your location indicating how you
            feel. Feel free to click around and see how other users are feeling.
            If you like this platform, be sure to follow our trello for upcoming
            changes.
          </Copy>
        </Blurb>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  min-width: 50vw;
  min-height: 50vh;
  margin: 0;
  padding: 0;
  margin-top: 10%;
`;
const Title = styled.h2``;
const Blurb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  min-height: 100%;
  border: 3px solid #add8e6;
`;

const Copy = styled.p`
  text-align: center;
  padding-top: 10px;
  font-size: 20px;
`;
export default About;
