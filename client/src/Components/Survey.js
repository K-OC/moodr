import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";
import { formatRelative, format, set } from "date-fns";
const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: "f48bb375b57743fe8034d2052ebb5b89",
    q: `${lat},${lng}`,
  };

  return opencage
    .geocode(requestObj)
    .then((data) => {
      const place = data.results[0].formatted;
      return place;
    })

    .catch((error) => {
      console.log("error", error.message);
      return error;
    });
}

// import {
//   GoogleMap,
//   useJsApiLoader,
//   LoadScript,
//   useLoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";

export const Survey = () => {
  const {
    setStatus,
    setLng,
    setLat,
    lat,
    lng,
    status,
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
    moodrList,
    setMoodrList,
    locality,
    setLocality,
  } = useContext(CurrentUserContext);

  const onClick = (ev) => {
    ev.preventDefault();
    setMarker(true);
    getAddressFromPosition(`${lat}`, `${lng}`).then((response) =>
      setLocality(response)
    );
    console.log("response", locality);
    const date = new Date();
    let emoObj = {};
    emoObj.emoDate = format(date, "EEEE,MMMM do, yyyy hh:mm a");
    emoObj.name = userEmotion.name;
    emoObj.lat = lat;
    emoObj.lng = lng;
    emoObj.locality = `${locality}`;
    const newMoodr = moodrList.slice();
    newMoodr.push(emoObj);
    setMoodrList(newMoodr);
    fetch("/api/postmoodr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emoObj),
    })
      .then((response) => response.json())
      .then((json) => {
        if (status === 201) {
          console.log("puppy", json);
        }

        // window.location.href = "/confirmed";
      });
  };
  console.log(moodrList, "ma mood list lolz");

  return (
    <>
      <Wrapper>
        <StyledForm>
          <UserPrompt>Today, I am feeling:</UserPrompt>
          <StyledInput type="text-area" value={userEmotion.name}></StyledInput>
          <StyledButton type="submit" onClick={onClick}>
            share moodr
          </StyledButton>
        </StyledForm>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;
const UserPrompt = styled.p`
  font-size: 25px;
  font-family: "Teko", sans-serif;
  padding-right: 15px;
`;

const StyledInput = styled.input`
  font-size: 25px;
  border: none;
  width: fit-content;
  margin: 0;
  border-bottom: 3px solid #add8e6;
`;

const StyledButton = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background-color: #add8e6;
  color: white;
  font-size: 20px;
  width: 150px;
  margin: 0;
  &:active {
    background-color: #ffffff;
    color: #add8e6;
    box-shadow: 0 2px #666;
    transform: translateY(1px);
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #add8e6;
  width: 100%;
  margin-top: 40px;
`;

// export const UserSubmit = () => {
//   const {
//     setStatus,
//     setLng,
//     setLat,
//     lat,
//     lng,
//     status,
//     markerGenerate,
//     setMarkerGenerate,
//     emotions,
//     setEmotions,
//     componentState,
//     setComponentState,
//     subList,
//     setSubList,
//     userEmotion,
//     setUserEmotion,
//   } = useContext(CurrentUserContext);
//   const position = {
//     lat: lat,
//     lng: lng,
//   };
//   return (
//     <>
//       <Marker position={{ lat: position.lat, lng: position.lng }} />
//     </>
//   );
// };
