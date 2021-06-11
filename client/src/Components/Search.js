import React, { useContext } from "react";
import { CurrentUserContext } from "../CurrentUserContext";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import styled from "styled-components";

export const Search = ({ mapRef, onMapLoad }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    request: {
      location: {
        lat: () => 41.3851,
        lng: () => 2.1734,
      },
      radius: 200 * 1000,
    },
  });

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(10);
  }, []);

  return (
    <>
      <div>
        <Combobox
          onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions();
            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);
              panTo({ lat, lng });
            } catch (error) {
              console.log("error");
            }
          }}
        >
          <StyledComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="search"
          />
          <ComboboxPopover>
            <StyledComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <StyledComboboxOption key={id} value={description} />
                ))}
            </StyledComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    </>
  );
};

export const CenterButton = ({ mapRef, onMapLoad }) => {
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(100);
  }, []);
  return (
    <>
      <StyledCenter
        alt="center map"
        title="center map"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <span>🧭</span>
        Center Map
      </StyledCenter>
    </>
  );
};

const StyledComboboxList = styled(ComboboxList)`
  background-color: white;
  font-family: "Teko", sans-serif;
  padding-top: 1px;
  background-color: #ffffff;
  border: 1px solid #212121;
  color: #212121;
`;

const StyledComboboxInput = styled(ComboboxInput)`
  z-index: 10;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  height: 2rem;
  border: 1px solid #212121;
  background-color: #ffffff;
  font-family: "Teko", sans-serif;
  color: #212121;
`;

const StyledComboboxOption = styled(ComboboxOption)`
  border-bottom: 1px solid #212121;
  &:hover {
    background-color: #ffffff;
    font-weight: bold;
  }
  &:focus {
    background-color: #ffffff;
    font-weight: bold;
  }
`;

const StyledCenter = styled.button`
  z-index: 10;
  position: absolute;
  top: 1rem;
  left: 74%;
  transform: translateX(-50%);
  max-width: 100px;
  height: 2.2rem;
  border: none;
  background-color: #add8e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Teko", sans-serif;
  color: #212121;
  &:active {
    background-color: #ffffff;
    color: #add8e6;
    box-shadow: 0 2px #666;
  }
`;
