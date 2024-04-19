import React, { useEffect, useState } from "react";
import Nav from "../Component/Navbar/Nav";
import AlqraHero from "../Component/alqraPage/AlqraHero";
import AlqraMain from "../Component/alqraPage/Alqra.main";
import Footer from "../Component/footer/footer";

const Alqra = () => {
  const [quraa, setquraa] = useState([]);
  const [input, setinput] = useState("");
  const handleFetchApi = async (value) => {
    const response = await fetch(
      "https://www.mp3quran.net/api/v3/reciters?language=ar"
    );
    const data = await response.json();
    const result = data.reciters
      .sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      })

      .filter((result) => {
        return (
          (result &&
            result.name &&
            result.name.toLowerCase().includes(value)) ||
          result.name.toLowerCase().includes(input)
        );
      });
    setquraa(result);
  };
  useEffect(() => {
    handleFetchApi();
  }, []);

  const handlechange = (result) => {
    setinput(result);
    handleFetchApi(result);
  };
  const button = [
    {
      id: 0,
      button: "الكل",
    },
    {
      id: 1,
      button: "أ",
    },
    {
      id: 2,
      button: "ب",
    },
    {
      id: 3,
      button: "ت",
    },
    {
      id: 4,
      button: "ث",
    },
    {
      id: 5,
      button: "ج",
    },
    {
      id: 6,
      button: "ح",
    },
    {
      id: 7,
      button: "خ",
    },
    {
      id: 8,
      button: "د",
    },
    {
      id: 9,
      button: "ذ",
    },
    {
      id: 10,
      button: "ر",
    },
    {
      id: 11,
      button: "ز",
    },
    {
      id: 12,
      button: "س",
    },
    {
      id: 13,
      button: "ش",
    },
    {
      id: 14,
      button: "ص",
    },
    {
      id: 15,
      button: "ض",
    },
    {
      id: 16,
      button: "ط",
    },
    {
      id: 17,
      button: "ظ",
    },
    {
      id: 18,
      button: "ع",
    },
    {
      id: 19,
      button: "غ",
    },
    {
      id: 20,
      button: "ف",
    },
    {
      id: 21,
      button: "ق",
    },
    {
      id: 22,
      button: "ك",
    },
    {
      id: 23,
      button: "م",
    },
    {
      id: 24,
      button: "ن",
    },
    {
      id: 25,
      button: "ه",
    },
    {
      id: 26,
      button: "و",
    },
    {
      id: 27,
      button: "ي",
    },
  ];
  return (
    <div>
      <Nav />
      <AlqraHero handlechange={handlechange} input={input} />
      <AlqraMain quraa={quraa} input={input} button={button} />
      <Footer />
    </div>
  );
};

export default Alqra;
