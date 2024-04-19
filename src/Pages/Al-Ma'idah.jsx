import React from 'react';
import Nav from '../Component/Navbar/Nav';
import Footer from '../Component/footer/footer';
import AlMaIdahComponent from '../Component/suwar/Al-Ma\'idah/Al-Ma\'idahComponent';

const AlMaIdah = () => {
  return (
    <div>
      <Nav />
      <AlMaIdahComponent />
      <Footer />
    </div>
  );
}

export default AlMaIdah;
