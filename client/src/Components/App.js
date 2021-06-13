import React, { useState, useEffect, component, useContext } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { MapContainer } from "./MapContainer";
import Header from "./Header";
import StatsCard from "./StatsCard";
import GetLocation from "./GetLocation";
import Dropdown from "react-dropdown";
// import { Survey } from "./Survey";
import GlobalStyle from "./GlobalStyles";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <SecondWrapper>
        <Header />
      </SecondWrapper>
      <Switch>
        <Route path="/" exact>
          <Wrapper>
            <StatsCard />
            <MapContainer />
          </Wrapper>

          {/* <DropdownMenu /> */}
        </Route>
      </Switch>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </BrowserRouter>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: auto;
  position: relative;
  font-family: var(--font-family);
`;

const SecondWrapper = styled.div`
  width: 100%;
  background-color: #add8e6;
`;
const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0px;
`;

export default App;
