import React, { useState, createContext, useEffect } from "react";

export const CurrentUserContext = createContext({});

export const CurrentUserProvider = ({ children }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [markerGenerate, setMarkerGenerate] = useState("loading");
  const [emotions, setEmotions] = useState([]);
  const [componentState, setComponentState] = useState("loading...");
  const [subList, setSubList] = useState(false);
  const [moodrList, setMoodrList] = useState([]);
  const [userEmotion, setUserEmotion] = useState({
    _id: "60b42a49dda5467728769c123455",
    name: "nothing",
    description: "i feel nothing!",
    color: "#757575",
    children: [
      {
        name: "nothing",
      },
      {
        name: "nadda",
      },
      {
        name: "null",
      },
      {
        name: "zilch",
      },
    ],
  });
  const [marker, setMarker] = useState(false);
  const [selected, setSelected] = useState([]);
  const [clickLocation, setClickLocation] = useState([]);
  const [dropdownClick, setDropdownClick] = useState(false);
  const [locality, setLocality] = useState([]);
  const [zoom, setZoom] = useState(3);
  const [center, setCenter] = useState({
    lat: 41.3851,
    lng: 2.1734,
  });
  useEffect(() => {
    fetch("/api/getallmoods")
      .then((response) => response.json())
      .then((json) => {
        console.log("test.", json);
        setMoodrList(json.data);
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
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
        dropdownClick,
        setDropdownClick,
        moodrList,
        setMoodrList,
        center,
        setCenter,
        locality,
        setLocality,
        zoom,
        setZoom,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
