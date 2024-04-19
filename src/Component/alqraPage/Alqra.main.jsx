import { useState } from "react";

import { Link } from "react-router-dom";
const AlqraMain = ({ quraa, button, input }) => {
  const [check, setcheck] = useState(true);
  const [filter, setfilter] = useState(quraa);
  return (
    <div className="">
      <div className=" mr-auto ml-auto w-[80%] flex flex-wrap flex-row-reverse text-lg m-2">
        {button.map((item) => {
          return (
            <button
              key={item}
              className="hero p-2.5 focus:bg-cyan-600 my-3 mx-1  justify-center items-center text-center mr-auto ml-auto hover:scale-105 duration-300 rounded-lg  text-white "
              onClick={() => {
                setcheck(false);
                setfilter(
                  item.id === 0
                    ? quraa.filter((e) => e.letter)
                    : quraa.filter((e) => {
                        return e.letter === button[item.id].button;
                      })
                );
              }}
            >
              {item.button}
            </button>
          );
        })}
        {check || input
          ? quraa.map((item) => {
              return (
                <Link
                to={"/quranadio"}
                  key={item}
                  className="group text-start flex-col p-1 m-3 border-[1px] border-blue-500 rounded-md w-[31%] flex justify-around items-center hover:scale-105 duration-300 cursor-pointer hover:bg-gray-50 shadow-lg "
                >
                  <div className="flex justify-around w-[100%] items-center">
                    <h1 className="w-[60%]"> {item.name}</h1>
                    <div className="clip p-5 font-bold bg-gray-300 group-hover:bg-blue group-hover:text-white">
                      {item.id}
                    </div>
                  </div>
                  <div className="flex justify-around p-1 text-end ">
                    روايه: {item.moshaf[0].name}{" "}
                  </div>
                </Link>
              );
            })
          : filter.map((item) => {
              return (
                <Link
                to={"/quranadio"}
                  key={item}
                  className="group text-start flex-col p-1 m-3 border-[1px] border-blue-500 rounded-md w-[31%] flex justify-around items-center hover:scale-105 duration-300 cursor-pointer hover:bg-gray-50 shadow-lg "
                >
                  <div className="flex justify-around w-[100%] items-center">
                    <h1 className="w-[60%]"> {item.name}</h1>
                    <div className="clip p-5 font-bold bg-gray-300 group-hover:bg-blue group-hover:text-white">
                      {item.id}
                    </div>
                  </div>
                  <div className="flex justify-around p-1 text-end ">
                    روايه: {item.moshaf[0].name}{" "}
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default AlqraMain;
