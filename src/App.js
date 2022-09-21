import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products/Products";
import Leaflet from "./Components/Maps_leaflet_maptiler/Leaflet";
import Tasty from "./Components/Tasty";
import Accordion from "./Components/Accordion/Accordion";
import Tasty2 from "./Components/Tasty2";

function App() {
  return (
    <div>
      {/* <Products />
      <Leaflet /> */}
      {/* <div >
      </div> */}
      <Tasty />
      <Tasty2 />
      {/* <Accordion /> */}
    </div>
  );
}

export default App;
