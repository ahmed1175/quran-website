import React from 'react';
import Nav from '../Component/Navbar/Nav';
import Footer from '../Component/footer/footer';
import AlAnAmComponent from '../Component/suwar/Al-An\'am/Al-An\'amComponent';

const AlAnAm = () => {
  return (
    <div>
      <Nav />
      <AlAnAmComponent />
      <Footer />
    </div>
  );
}

export default AlAnAm;
