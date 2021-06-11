import React, { useState, useEffect, component, useContext } from "react";
import Marker from "./Marker";
import { CurrentUserContext } from "../CurrentUserContext";

export const GetLocation = () => {
  const { setStatus, setLng, setLat, lat, lng, status } =
    useContext(CurrentUserContext);

  const personFinder = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation not supported by your browser");
    } else {
      setStatus("Loading");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <div>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {personFinder}
      {lat && <p>Lat: {lat}</p>}
      {lng && <p>Long: {lng}</p>}
    </div>
  );
};

export default GetLocation;
