import React from "react";
import quran from "../../../assets/1.png";
const TopHero = ({ radio, setradio }) => {
  return (
    <div>
      <div className="flex justify-between items-start p-4 mr-auto ml-auto w-[90%]  text-sm">
        {radio && (
          <div className="  hidden ">
            <audio
              src="http://n11.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABjbPi7EwAVr1pEqfNIRbeEg"
              controls
              autoPlay 
              
            ></audio>
          </div>
        )}
        <button
          className="p-4 m-1 w-[12%] text-white flex gap-2 rounded-md border-[1px] border-white hover:scale-105 hover:duration-300 "
          onClick={() => {
            setradio(!radio);
          }}
        >
          {" "}
          {radio ? (
            <div className=" text-white flex gap-2 ">
              {" "}
              <span className="icon-radio"></span> ايقاف الراديو{" "}
            </div>
          ) : (
            <div className=" text-white flex gap-2">
              <span className="icon-radio"></span> تشغيل الراديو{" "}
            </div>
          )}
        </button>
        <img src={quran} alt={quran} className=" w-[50%]  flex  text-white " loading="lazy"  />
        <button className="p-4  w-[12%] text-white border-[1px] rounded-md border-white hover:scale-105 hover:duration-300">
          خطط التعلم{" "}
        </button>
      </div>
    </div>
  );
};

export default TopHero;
