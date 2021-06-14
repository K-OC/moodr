import React, { useState, useEffect, component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Wrapper>
        {" "}
        <Blurb>
          <Copy>Pello</Copy>
        </Blurb>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;

  min-width: 50vw;
  min-height: 50vh;
  margin: 0;
  padding: 0;
`;

const Blurb = styled.div`
  display: flex;
  border: 3px solid #add8e6;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;

const Copy = styled.p`
  border-bottom: 1px solid #add8e6;
`;
export default About;
