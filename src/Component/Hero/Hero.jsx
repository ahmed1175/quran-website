import React, { useState } from "react";
import TopHero from "./HeroComponent/TopHero";
import BottomHero from "./HeroComponent/bottomHero";
import List from "./HeroComponent/list";

const Hero = () => {
  const [radio, setradio] = useState(false);
  const buttonUnderSearch = [
    {
      name: "سوره الواقعه",
      Link:""
    },
    {
      name: "سورة الملك",
      Link:""
    },
    {
      name: "سورة يس",
      Link:""
    },
    {
      name: "سورة الكهف",
      Link:""
    },
    {
      name: "القراء",
      Link:"/Alqra"
    },
  ];
  const [inputText, setInputText] = useState("");
  const [resultList, setResultList] = useState([]);
  const [search, setsearch] = useState(false);
  const FetchData = (value) => {
    fetch("https://mp3quran.net/api/v3/suwar")
      .then((response) => response.json())
      .then((json) => {
        const result = json.suwar.filter((result) => {
          return (
            value &&
            result &&
            result.name &&
            result.name.toLowerCase().includes(value)
          );
        });
        setResultList(result);
      });
  };
  const handlechange = (value) => {
    setInputText(value);
    FetchData(value);
  };

  return (
    <div className="hero ">
      <TopHero radio={radio} setradio={setradio} />
      <BottomHero buttonUnderSearch={buttonUnderSearch} setsearch={setsearch} />
      {search && (
        <div className="search fixed top-0 right-0 left-0 bottom-0  ">
          <List
            result={resultList}
            inputText={inputText}
            handlechange={handlechange}
            setsearch={setsearch}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
