import React from 'react';
import Nav from '../Component/Navbar/Nav';
import Footer from '../Component/footer/footer';
import AlBaqarahcomponent from '../Component/suwar/Al-Baqarah/Al-Baqarahcomponent';

const AlBaqarah = () => {
  return (
    <div>
      <Nav /> 
      <AlBaqarahcomponent />
      <Footer />
    </div>
  );
}

export default AlBaqarah;
