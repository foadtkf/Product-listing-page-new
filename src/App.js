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
import Dough from "./Components/GraphsCharts/Dough";
import FramerTest from "./Components/Framer/FramerTest";
import VideoBG from "./Components/PageWithVideoBG/VideoBG";

function App() {
  return (
    <div style={{ fontFamily: "Press Start 2P" }}>
      {/* <Products />
      <Leaflet /> */}
      {/* <div >
      </div> */}
      <div className="py-5  ">
        <h1 className=" text-2xl md:text-9xl text-center text-black font-bold font-serif">
          <span style={{ fontFamily: "Press Start 2P" }}>Not Average</span>
        </h1>
      </div>
      <div className="mt-[-6%]">
        <h1 className="text-sm md:text-3xl text-center text-black font-bold font-serif">
          <span className="text-red-600 bg-black px-3 pb-3 rounded-tl-box rounded-br-box">
            Be Savage
          </span>
        </h1>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpg />} />
        <Route path="/products" element={<Products />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/maps" element={<Leaflet />} />
        <Route path="/csvtut" element={<CSVTut />} />
        <Route path="/dough" element={<Dough />} />
        <Route path="/framer" element={<FramerTest />} />
        <Route path="/videobg" element={<VideoBG />} />
      </Routes>
      {/* <Accordion /> */}
    </div>
  );
}

export default App;
