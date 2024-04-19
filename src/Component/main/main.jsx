import React, { useState, useEffect } from "react";
import Header from "./MainComponent/header";
import Suwar from "./MainComponent/suwar";

const Main = () => {
  const [suwar, setsuwar] = useState([]);

  useEffect(() => {
    fetch(" https://api.quran.com/api/v4/chapters")
      .then((response) => response.json())
      .then((json) => setsuwar(json.chapters));
  }, []);

  return (
    <div>
      <Header />
      <Suwar suwar={suwar} />
      
    </div>
  );
};

export default Main;
