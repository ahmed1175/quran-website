import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../footer/footer";
const Quranadio = () => {
  const [Api, setApi] = useState([]);
  const [play, setplay] = useState(null);
  useEffect(() => {
    fetch("https://api.quran.com/api/v4/chapters")
      .then((response) => response.json())
      .then((json) => setApi(json.chapters));
  }, []);
  return (
    <div className="">
      <Nav />
      <div className="flex flex-wrap flex-row-reverse">
      <Link
      to={"/Alqra"}
          className="flex  w-[100%]"
        >
          <h1
            className="p-3 hover:underline cursor-pointer "
          >
            back
          </h1>
        </Link>
      {Api.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              setplay(item.id);
            }}
            className="group mr-auto p-3 ml-auto text-start justify-between  m-3 border-[1px] border-blue-500 rounded-md w-[49.5%] flex  items-center hover:scale-105 duration-300 cursor-pointer  shadow-lg"
          >
            <div>
              <audio
                src={`https://server10.mp3quran.net/Aamer/${item.id<10?"00"+item.id:"0"+item.id}.mp3`}
                controls 
                
              ></audio>
            </div>
            <div className="">{item.name_arabic}</div>
          </div>
        );
      })}
      </div>
      <Footer />
    </div>
  );
};

export default Quranadio;
