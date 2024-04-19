import React, { lazy } from "react";
import { useState, useEffect } from "react";
const AnNisaComponent = () => {
  const [AlBaqarah, setAlBaqarah] = useState([]);
  const [scrollposition, setscrollposition] = useState(0);
  const fetchdata = async () => {
    const response = await fetch(
      "https://mp3quran.net/api/v3/ayat_timing?surah=2&read=5"
    );
    const data = await response.json();
    setAlBaqarah(data.slice(77, 107));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolltop = document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setscrollposition((scrolltop / height) * 100);
    });
  }, []);
  return (
    <div>
      {AlBaqarah.map((item) => {
        return (
          <div key={item.ayah} className="flex justify-center border-b-2">
            <img
              src={`https://www.mp3quran.net/api/quran_pages_svg/${
                item.ayah < 100 ? "0" + item.ayah : +item.ayah
              }.svg`}
              onLoad={lazy}
              alt=""
              className="w-[35rem]"
            />
          </div>
        );
      })}
      <div
        className="fixed top-0 right-0 z-50 bg-blue  rounded-sm text-[3px] "
        style={{ width: `${scrollposition}%` }}
      >
        1
      </div>
    </div>
  );
};

export default AnNisaComponent;
