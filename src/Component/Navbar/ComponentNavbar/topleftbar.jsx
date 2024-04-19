import React from "react";

const Topleftbar = ({ setsidebar, sidebar }) => {
  return (
    <div>
      <div className="flex justify-between shadow-lg p-5 dark:text-[#d1caca] dark:bg-[#343a40] ">
        <span
          className="font-bold cursor-pointer"
          onClick={() => {
            setsidebar(false);
          }}
        >
          X
        </span>{" "}
        <span className=" font-bold">الإعدادات</span>
      </div>
    </div>
  );
};

export default Topleftbar;
