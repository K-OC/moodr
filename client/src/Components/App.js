import React, { useState, useEffect, component, useContext } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { MapContainer } from "./MapContainer";
import Header from "./Header";
import StatsCard from "./StatsCard";
import GetLocation from "./GetLocation";
import Dropdown from "react-dropdown";
import { Survey } from "./Survey";
import DropdownMenu from "./DropdownMenu";
import GlobalStyle from "./GlobalStyles";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Wrapper>
            <StatsCard />
            <MapContainer />
          </Wrapper>
          <Survey />
          {/* <DropdownMenu /> */}
          <Navbar />
        </Route>
      </Switch>
      {/* <FooterWrapper>
        <Footer />
      </FooterWrapper> */}
    </BrowserRouter>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: auto;
  position: relative;
`;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0px;
`;

export default App;
