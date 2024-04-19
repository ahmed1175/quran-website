import React from "react";
import Nav from "../Component/Navbar/Nav";
import Footer from "../Component/footer/footer";
import AtTawbahComponent from "../Component/suwar/At-Tawbah/At-TawbahComponent";

const AtTawbah = () => {
  return (
    <div>
      <Nav />
      <AtTawbahComponent />
      <Footer />
    </div>
  );
};

export default AtTawbah;
