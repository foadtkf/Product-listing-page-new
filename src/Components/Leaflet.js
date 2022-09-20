import React, { useState } from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import cities from "./cities.json";
const Leaflet = () => {
  const [center, setCenter] = useState({ lat: 21.76, lng: 78.8718 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  const markerIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/codegeous/react-component-depot/master/src/resources/images/marker.png",
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });
  return (
    <MapContainer center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/winter/{z}/{x}/{y}.png?key=6vvnwGb0BM94rN6tkokq"
      />
      {cities.map((city, idx) => (
        <Marker position={[city.lat, city.lng]} icon={markerIcon} key={idx}>
          <Popup>
            <b>
              {city.city}, {city.country}
            </b>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Leaflet;
