import React from 'react';
import Nav from '../Component/Navbar/Nav';
import Footer from '../Component/footer/footer';
import HudComponent from '../Component/suwar/Hud/HudComponent';

const Hud = () => {
  return (
    <div>
      <Nav />
<HudComponent />
      <Footer />
    </div>
  );
}

export default Hud;
