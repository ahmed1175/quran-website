import React from "react";
import { Link } from "react-router-dom";
const BottomHero = ({ buttonUnderSearch, setsearch }) => {
  return (
    <div>
      <div className="">
        <div
          className="flex justify-center   mr-auto ml-auto"
          onClick={() => {
            setsearch(true);
          }}
        >
          <button className=" flex justify-between bg-white w-[60%] p-4 rounded-full items-center text-lg">
            <div className="flex items-center ">
              <span className="icon-mic px-3 text-xl hover:bg-[#6d6d6d] rounded-full hover:text-white"></span>
            </div>
            <div className="flex gap-3 ">
              <p className="text-md text-gray-500 ">ماذا تريد أن تقرأ؟</p>
              <span className="icon-search text-gray-500 p-1"></span>
            </div>
          </button>
        </div>
        <div className="flex justify-center ">
          <button className="flex flex-wrap gap-3 p-3 mx-2 my-2 justify-center md:p-3 md:gap-4 md:mx-4 md:my-2 text-black ">
            {buttonUnderSearch.map((items) => {
              return (
                <div
                  key={items}
                  className=" bg-white p-2 rounded-full hover:scale-105 duration-200"
                >
                  <Link to={items.Link}>
                    {" "}
                    <button className="mx-2">{items.name} </button>{" "}
                  </Link>
                </div>
              );
            })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
