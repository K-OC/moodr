import React from "react";
import styled from "styled-components";

const Marker = ({ lat, lng }) => {
  const pos = { lat: { lat }, lng: { lng } };
  return (
    <>
      <p style={{ position: "absolute" }}>*</p>
    </>
  );
};

export default Marker;
