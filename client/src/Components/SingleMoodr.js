import React, { useState, useEffect, component, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleMoodr = () => {
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
  } = useContext(CurrentUserContext);
  return (
    <>
      <Wrapper>Hello</Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default SingleMoodr;
