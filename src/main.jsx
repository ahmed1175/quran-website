import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Alqra from "./Pages/alqra.jsx";
import AlFatihah from "./Pages/Al-Fatihah.jsx";
import Quranadio from "./Component/alqraPage/quranadio.jsx";
import AlBaqarah from "./Pages/Al-Baqarah.jsx";
import AnNisa from "./Pages/An-Nisa.jsx";
import AlMaIdah from "./Pages/Al-Ma'idah.jsx";
import AlAnAm from "./Pages/Al-An'am.jsx";
import AlARaf from "./Pages/Al-A'raf.jsx";
import AliImran from "./Pages/Ali 'Imran.jsx";
import AlAnfal from "./Pages/Al-Anfal.jsx";
import AtTawbah from "./Pages/At-Tawbah.jsx";
import Yunus from "./Pages/Yunus.jsx";
import Hud from "./Pages/Hud.jsx";
import Yusuf from "./Pages/Yusuf.jsx";
import ArRaD from "./Pages/Ar-Ra'd.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/alqra",
    element: (
      <div>
        <Alqra />
      </div>
    ),
  },
  {
    path: "/Al-Fatihah",
    element: (
      <div>
        <AlFatihah />
      </div>
    ),
  },
  {
    path: "/quranadio",
    element: (
      <div>
        <Quranadio />
      </div>
    ),
  },
  {
    path: "/Al-Baqarah",
    element: (
      <div>
        <AlBaqarah />
      </div>
    ),
  },
  {
    path: "/An-Nisa",
    element: (
      <div>
        <AnNisa />
      </div>
    ),
  },
  {
    path: "/Al-Ma'idah",
    element: (
      <div>
        <AlMaIdah />
      </div>
    ),
  },
  {
    path: "Al-An'am",
    element: (
      <div>
        <AlAnAm />
      </div>
    ),
  },
  {
    path: "/Al-A'raf",
    element: (
      <div>
        <AlARaf />
      </div>
    ),
  },
  {
    path: "/Ali 'Imran",
    element: (
      <div>
        <AliImran />
      </div>
    ),
  },
  {
    path: "Al-Anfal",
    element: (
      <div>
        <AlAnfal />
      </div>
    ),
  },
  {
    path: "/At-Tawbah",
    element: (
      <div>
        <AtTawbah />{" "}
      </div>
    ),
  },
  {
    path: "/Yunus",
    element: (
      <div>
        <Yunus />
      </div>
    ),
  },
  {
    path: "/hud",
    element: (
      <div>
        <Hud />
      </div>
    ),
  },
  {
    path: "/Yusuf",
    element: (
      <div>
        <Yusuf />
      </div>
    ),
  },
  {
    path: "/Ar-Ra'd",
    element: (
      <div>
        {" "}
        <ArRaD />{" "}
      </div>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
