import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
const NewMap = () => {
  const map = useMap();
  useEffect(() => {
    L.Routing.control({
      waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
    }).addTo(map);
  });
  return null;
};

export default NewMap;
