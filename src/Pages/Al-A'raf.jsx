import React from 'react';
import Nav from '../Component/Navbar/Nav';
import Footer from '../Component/footer/footer';
import AlARafComponent from '../Component/suwar/Al-A\'raf/Al-A\'rafComponent';

const AlARaf = () => {
  return (
    <div>
      <Nav />
      <AlARafComponent />
      <Footer />
    </div>
  );
}

export default AlARaf;

