import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [val, setVal] = useState(1);
  return (
    <div class="tabs">
      <div className="tabs">
        <Link
          class={`tab tab-lg tab-lifted ${val === 1 && "tab-active"}`}
          onClick={() => setVal(1)}
          to="/"
        >
          Redux
        </Link>
        <Link
          onClick={() => setVal(2)}
          className={`tab tab-lg tab-lifted ${val === 2 && "tab-active"}`}
          to="/products"
        >
          Products
        </Link>
        <Link
          onClick={() => setVal(3)}
          className={`tab tab-lg tab-lifted ${val === 3 && "tab-active"}`}
          to="/maps"
        >
          Maps
        </Link>
        <Link
          onClick={() => setVal(4)}
          className={`tab tab-lg tab-lifted ${val === 4 && "tab-active"}`}
          to="/accordion"
        >
          Accordion
        </Link>
        <Link
          onClick={() => setVal(5)}
          className={`tab tab-lg tab-lifted ${val === 5 && "tab-active"}`}
          to="/csvtut"
        >
          CSV-Tutorial
        </Link>
        <Link
          onClick={() => setVal(6)}
          className={`tab tab-lg tab-lifted ${val === 6 && "tab-active"}`}
          to="/dough"
        >
          DoughNut
        </Link>
        <Link
          onClick={() => setVal(7)}
          className={`tab tab-lg tab-lifted ${val === 7 && "tab-active"}`}
          to="/framer"
        >
          Framer
        </Link>
        <Link
          onClick={() => setVal(8)}
          className={`tab tab-lg tab-lifted ${val === 8 && "tab-active"}`}
          to="/videobg"
        >
          VideoBG
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
