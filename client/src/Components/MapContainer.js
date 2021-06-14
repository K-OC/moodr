import React, {
  useState,
  useEffect,
  component,
  useRef,
  useContext,
} from "react";
import { CurrentUserContext } from "../CurrentUserContext";
import { Search, CenterButton } from "./Search";
import SpinningLogo from "./SpinningLogo";
import styled from "styled-components";
import {
  GoogleMap,
  useJsApiLoader,
  LoadScript,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  disableAutoPan: true,
};

export const MapContainer = () => {
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
    center,
    setCenter,
    locality,
    setLocality,
    zoom,
    setZoom,
  } = useContext(CurrentUserContext);
  const [clicked, setClicked] = useState([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGKxCtMtptCd2bJyvZr1KjkSpt3RXCD9U",
    libraries,
  });

  const findUser = () => {
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
  const clickPosition = (ev) => {
    const pos = [
      {
        lat: ev.latLng.lat(),
        lng: ev.latLng.lng(),
      },
    ];
    setClickLocation(pos);
    setCenter(clickLocation);
    // console.log("test", clickLocation);
  };

  const position = {
    lat: lat,
    lng: lng,
  };

  const onLoad = () => {
    setMarkerGenerate("idle");
    findUser();
  };

  const mapRef = useRef();
  // let center = {
  //   lat: 41.3851,
  //   lng: 2.1734,
  // };

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const date = new Date();

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
      {markerGenerate === "loading" ? (
        <div>
          <SpinningLogo />
          {onLoad()}
        </div>
      ) : (
        <Wrapper>
          <div>
            <SearchWrapper>
              <Search mapRef={mapRef} onMapLoad={onMapLoad} />
              <CenterButton mapRef={mapRef} onMapLoad={onMapLoad} />
            </SearchWrapper>

            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={zoom}
              options={options}
              onLoad={onMapLoad}
              center={center}
              onClick={clickPosition}
              style={{ "z-index": -1 }}
            >
              {moodrList.length > 0
                ? moodrList.map((mood) => {
                    return (
                      <Marker
                        id={mood._id}
                        position={{ lat: mood.lat, lng: mood.lng }}
                        icon={{
                          url: "../assets/crow.svg",
                          scaledSize: new window.google.maps.Size(30, 30),
                          origin: new window.google.maps.Point(0, 0),
                          anchor: new window.google.maps.Point(15, 15),
                        }}
                        onClick={(ev) => {
                          if (!selected) {
                            setSelected(clickLocation);
                            setCenter(clickLocation);
                            setClicked(mood._id);
                          } else {
                            setSelected(null);
                          }
                        }}
                      >
                        {selected && clicked === mood._id ? (
                          <InfoWindow
                            position={{ lat: mood.lat, lng: mood.lng }}
                          >
                            <MoodrWrapper>
                              <MoodWrapper>
                                <EmoColor
                                  style={{ "background-color": mood.color }}
                                ></EmoColor>
                                <PersistantPees>Mood:</PersistantPees>
                                <Mood>{mood.name}</Mood>
                              </MoodWrapper>
                              <LatLngWrap>
                                <PersistantPees>Lat:</PersistantPees>
                                <LatLng>{mood.lat}</LatLng>
                                <PersistantPees>Lng:</PersistantPees>
                                <LatLng>{mood.lng}</LatLng>
                              </LatLngWrap>
                              {/* <LocationWrapper>
                                <PersistantPees>Locality:</PersistantPees>
                                <Locality>
                                  {JSON.stringify(mood.locality)}
                                </Locality>
                              </LocationWrapper> */}
                              <TimeWrapper>
                                <PersistantPees>Emoted on:</PersistantPees>
                                <Time>{mood.emoDate}</Time>
                              </TimeWrapper>
                            </MoodrWrapper>
                          </InfoWindow>
                        ) : null}
                      </Marker>
                    );
                  })
                : "nah"}

              {marker === false ? (
                <div>loadin'...</div>
              ) : (
                <Marker
                  position={{ lat: position.lat, lng: position.lng }}
                  icon={{
                    url: "../assets/crow.svg",
                    scaledSize: new window.google.maps.Size(30, 30),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                  }}
                  onClick={() => {
                    setSelected(clickLocation);
                  }}
                ></Marker>
              )}
            </GoogleMap>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: fit-content;
  overflow: hidden;
  height: 700px;
  background-color: #c7bebf;
`;

const TimeWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const LocationWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: fit-content;
  margin: 0 auto;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-width: 20vw;
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
  margin: 0;
  flex-direction: column;
  padding: 3px;
  border: 5px solid #add8e6;
  flex-wrap: wrap;
`;
const LatLng = styled.div``;
const LatLngWrap = styled.div`
  display: flex;
  padding: 3px;
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
  align-items: center;
`;
const Time = styled.p``;

const EmoColor = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 100%;
`;

// export const MapContainer = () => {
//   const {
//     setStatus,
//     setLng,
//     setLat,
//     lat,
//     lng,
//     status,
//     markerGenerate,
//     setMarkerGenerate,
//   } = useContext(CurrentUserContext);
//   const myLatlng = { lat: -25.363, lng: 131.044 };
//   // project(chicago);
//   const mapStyles = {
//     height: "700px",
//     width: "75vw",
//   };

//   const defaultCenter = {
//     lat: 41.3851,
//     lng: 2.1734,
//   };

//   const onLoad = () => {
//     setMarkerGenerate("idle");
//   };

//   return (
//     <>
//       {markerGenerate === "loading" ? (
//         <div>HELLO.</div>
//       ) : (
//         <MapContainerContainer>
//           <LoadScript googleMapsApiKey="AIzaSyCGKxCtMtptCd2bJyvZr1KjkSpt3RXCD9U">
//             <GoogleMap
//               mapContainerStyle={mapStyles}
//               zoom={2}
//               center={defaultCenter}
//               onLoad={onLoad}
//             >
//               <Marker
//                 title={"The marker`s title will appear as a tooltip."}
//                 name={"SOMA"}
//                 position={defaultCenter}
//                 onLoad={onLoad}
//               />
//             </GoogleMap>
//           </LoadScript>
//         </MapContainerContainer>
//       )}
//     </>
//   );
// };

// const MapContainerContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   z-index: -1;
// `;

{
  /* <EmotionWrapper>
                              <div>{mood.name}</div>
                              <TimeWrapper>
                                <span>emoted at: </span>
                                <span>{mood.emoDate}</span>
                              </TimeWrapper>
                              <LocationWrapper>
                                <span>lat: </span>
                                <LatLngWrap>{mood.lat}</LatLngWrap>
                                <span>lng: </span>
                                <LatLngWrap>{mood.lng}</LatLngWrap>
                              </LocationWrapper>
                            </EmotionWrapper> */
}

{
  /* {selected ? (
                    <InfoWindow
                      position={{ lat: selected.lat, lng: selected.lng }}
                    >
                      <EmotionWrapper>
                        <div>{userEmotion.name}</div>
                        <TimeWrapper>
                          <span>emoted at: </span>
                          <span>
                            {format(date, "EEEE,MMMM do, yyyy hh:mm a")}
                          </span>
                          <div
                            className="hello"
                            style={{
                              backgroundColor: `${userEmotion.color}`,
                            }}
                          ></div>
                        </TimeWrapper>
                        <LocationWrapper>
                          <LatLngWrap>{selected.lat}</LatLngWrap>
                        </LocationWrapper>
                      </EmotionWrapper>
                    </InfoWindow>
                  ) : null} */
}
