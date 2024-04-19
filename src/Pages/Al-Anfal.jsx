import React from "react";
import Nav from "../Component/Navbar/Nav";
import Footer from "../Component/footer/footer";
import AlAnfalComponent from "../Component/suwar/Al-Anfal/Al-AnfalComponent";

const AlAnfal = () => {
  return (
    <div>
      <Nav />
      <AlAnfalComponent />
      <Footer />
    </div>
  );
};

export default AlAnfal;
