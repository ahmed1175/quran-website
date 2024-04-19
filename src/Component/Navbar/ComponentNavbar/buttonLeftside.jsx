import React from "react";

const ButtonLeftside = ({ actives1, setrotate, rotates }) => {
  const rotate = [
    {
      ButttonName: "نسخ",
      id: 1,
      state: true,
    },
    {
      ButttonName: "نستعليق",
      id: 2,
      state: false,
    },
    {
      ButttonName: "التجويد",
      id: 3,
      state: false,
    },
  ];
  return (
    <div>
      <div className="text-md  cursor-pointer font-bold  text-lg flex p-6 justify-end border-b-[1px] dark:border-blue-200 border-blue-200 dark:text-[#d1caca] dark:bg-[#343a40]">
        خط القرآن
      </div>
      <div>
        <div className="flex flex-col justify-around dark:text-[#d1caca] dark:bg-[#343a40] bg-white text-black text-[12px] border-b-[1px] border-black dark:border-blue-200">
          <div className="flex p-3  m-4 rounded-full w-[80%] justify-around mr-auto ml-auto dark:text-[#d1caca] dark:bg-[#343a40] dark:border-blue-200 ">
            <button
              className="p-[10px] rounded-[15px] m-[3px] w-[5rem]"
              style={rotates === "active" ? actives1 : {}}
              onClick={() => {
                setrotate("active");
              }}
            >
              {rotate[0].ButttonName}
            </button>
            <button
              className="p-[10px] rounded-[15px] m-[3px] w-[5rem]"
              style={rotates === "active1" ? actives1 : {}}
              onClick={() => {
                setrotate("active1");
              }}
            >
              {rotate[1].ButttonName}
            </button>
            <button
              className="p-[10px] rounded-[15px] m-[3px] w-[5rem]"
              style={rotates === "active2" ? actives1 : {}}
              onClick={() => {
                setrotate("active2");
              }}
            >
              {rotate[2].ButttonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonLeftside;
