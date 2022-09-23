import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products/Products";
import Leaflet from "./Components/Maps_leaflet_maptiler/Leaflet";
import Accordion from "./Components/Accordion/Accordion";
import Tasty2 from "./Components/Redux/Tasty2";
import Tasty from "./Components/Redux/Tasty";
import Navbar from "./Components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Mainpg from "./Components/Redux/Mainpg";
import CSVTut from "./Components/CSVTut/CSVTut";

function App() {
  return (
    <div>
      {/* <Products />
      <Leaflet /> */}
      {/* <div >
      </div> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpg />} />
        <Route path="/products" element={<Products />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/maps" element={<Leaflet />} />
        <Route path="/csvtut" element={<CSVTut />} />
      </Routes>
      {/* <Accordion /> */}
    </div>
  );
}

export default App;
