import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import NewMap from "./NewMap";
// import { RoutingMachine, withLeaflet } from "leaflet-routing-machine";
import "./searchbar.css";
import LeafletRoutingMachine from "./LeafletRoutingMachine";
import LeafletGeocoder from "./LeafletGeocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
// const MyRoutingMachine = withLeaflet(RoutingMachine);
const MapTest = () => {
  const markerIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/codegeous/react-component-depot/master/src/resources/images/marker.png",
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState([]);

  const searchMap = () => {
    const nominatim_URL = `https://nominatim.openstreetmap.org/search/${search}?format=json&addressdetails=1&limit=5`;
    fetch(nominatim_URL)
      .then((response) => response.json())
      .then((data) => setLocation(data));
  };
  const [markloc, setMarkloc] = useState({});
  return (
    <div>
      <div className="form-control text-black ">
        <div className="input-group flex justify-center">
          <div className="w-[50%]">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered text-black w-full"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div
              id="dropdown"
              class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 suggestions"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                {location.map((loc) => (
                  <li key={loc.id}>
                    <button
                      onClick={() => {
                        setMarkloc(loc);
                        console.log(markloc);
                      }}
                      type="button"
                      class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {loc.display_name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className="btn btn-square" onClick={searchMap}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          // attribution="&copy; "
          url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=6vvnwGb0BM94rN6tkokq"
        />
        {location.map((city, idx) => (
          <Marker position={[city.lat, city.lon]} icon={markerIcon} key={idx}>
            <Popup>
              <b>{city.display_name}</b>
            </Popup>
          </Marker>
        ))}
        {/* <MyRoutingMachine
          waypoints={[start, end]}
          apikey="your-mapbox-api-key"
        /> */}
        <LeafletRoutingMachine />
        <LeafletGeocoder />
      </MapContainer>
    </div>
  );
};
let DefaultIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/codegeous/react-component-depot/master/src/resources/images/marker.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

export default MapTest;
