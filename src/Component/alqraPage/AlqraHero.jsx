import React from "react";

const AlqraHero = ({ input, handlechange }) => {
  return (
    <div className="hero  ">
      <div className="flex justify-center h-[20rem] items-center p-4 flex-col  ">
        <h1 className="text-white text-[36px]  p-4">قراء القرآن</h1>
        <div className="flex mr-auto ml-auto ">
          <input
            type="text"
            placeholder="ابحث عن قارىْ"
            className=" md:w-[60vh] lg:w-[100vh] w-[100%] sm:w-[100%]  p-3 rounded-xl placeholder:text-end outline-none text-end"
            value={input}
            onChange={(e) => {
              handlechange(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AlqraHero;
