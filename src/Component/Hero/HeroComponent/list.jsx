import React from "react";

const List = ({ result, handlechange, inputText, setsearch }) => {
  return (
    <div className="search1  fixed top-[15%] right-[25%] bg-white h-[75%] w-[50%] overflow-y-scroll rounded-xl p-2 ">
      <span
        className="p-6 mt-8 pt-10 text-2xl text-bold cursor-pointer text-white bg-red-700 hover:text-red-700 hover:bg-white duration-300"
        onClick={() => {
          setsearch(false);
        }}
      >
        X
      </span>
      <div
        id="header"
        className="flex justify-between  mr-auto ml-auto border-b-[1px] border-blue-200 w-[95%] "
      >
        <button className=" flex justify-between bg-white w-[100%] p-4 rounded-full items-center text-lg">
          <div className="flex items-center ">
            <span className="icon-mic px-3 text-blue hover:bg-[#6d6d6d] rounded-full hover:text-white text-2xl"></span>
          </div>
          <div className="flex gap-3 w-[95%] ">
            <input
              type="text"
              placeholder="ماذا تريد أن تقرأ؟"
              className=" placeholder:text-end w-[100%] placeholder:text-2xl p-4 rounded-lg focus:outline-none text-end"
              value={inputText}
              onChange={(e) => handlechange(e.target.value)}
            />
            <span className="icon-search text-gray-500  items-center py-4"></span>
          </div>
        </button>
      </div>
      <div
        id="List"
        className="rounded-xl  mr-auto ml-auto p-6 cursor-pointer  text-lg w-[95%] border-b-[1px] border-blue-200 bg-gray-50 m-1 "
      >
        <div className="border-b-[2px] border-blue-200 ">
          {result.map((items) => {
            return (
              <div
                key={items.id}
                className=" p-6 border-b-[0.5px] border-blue-200 w-[100%] gap-12 flex justify-between  "
              >
                <div>تنتهي: {items.end_page}</div>
                <div>تبدء: {items.start_page}</div>
                <div> مكيه : {items.makkia ? "نعم" : "لا"}</div>
                <div>{items.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
