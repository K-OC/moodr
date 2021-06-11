import React, { useState, useEffect, component, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import SpinningLogo from "./SpinningLogo";
function StatsCard() {
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
    locality,
    setLocality,
  } = useContext(CurrentUserContext);
  const sortedMoodrs = moodrList.reverse();

  return (
    <Wrapper>
      {moodrList.length < 1 ? (
        <SpinningLogo />
      ) : (
        sortedMoodrs.map((moodr) => {
          return (
            <>
              <CrowBaby src="../assets/crow.svg" />
              <MoodrWrapper>
                <MoodWrapper>
                  <PersistantPees>Mood:</PersistantPees>
                  <Mood>{moodr.name}</Mood>
                </MoodWrapper>
                <LatLngWrap>
                  <PersistantPees>Lat:</PersistantPees>
                  <LatLng>{moodr.lat.toFixed(4)}</LatLng>
                  <PersistantPees>Lng:</PersistantPees>
                  <LatLng>{moodr.lng.toFixed(4)}</LatLng>
                </LatLngWrap>
                {/* <LocalityWrapper>
                  <PersistantPees>Locality:</PersistantPees>
                  <Locality>{JSON.stringify(moodr.locality)}</Locality>
                </LocalityWrapper> */}
                <TimeWrapper>
                  <PersistantPees>Emoted on:</PersistantPees>
                  <Time>{moodr.emoDate}</Time>
                </TimeWrapper>
              </MoodrWrapper>
            </>
          );
        })
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-width: 25vw;
  max-height: 695px;
  border-style: solid;
  border-color: black;
  border-width: 2px;
  overflow: scroll;
  font-size: 15px;
  font-family: "Teko", sans-serif;
`;
const MoodrWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3px;
  border: 3px solid #add8e6;
  width: fit-content;
  flex-wrap: wrap;
`;
const LatLng = styled.div`
  max-width: fit-content;
`;
const LatLngWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1px;
  width: 100%;
  align-items: center;
`;
const LocalityWrapper = styled.div`
  width: 100%;
  align-items: center;
`;
const Locality = styled.div``;
const PersistantPees = styled.p`
  font-weight: bold;
  padding: 2px;
`;
const Mood = styled.div`
  width: fit-content;
`;
const MoodWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const Time = styled.p``;
const TimeWrapper = styled.div`
  width: 100%;
  align-items: center;
`;

const CrowBaby = styled.img`
  max-height: 20px;
  max-width: 20px;
`;

export default StatsCard;
