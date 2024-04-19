import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, settheme] = useState(localStorage.getItem("current") ?? "dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const [active, setactive] = useState(false);
  const actives = {
    backgroundColor: "gray",
    padding: "10px",
    borderRadius: "10px",
    margin: "3px",
    width: "5rem",
  };
  return (
    <div className="flex  justify-end text-end p-6 border-solid shadow-lg flex-col text-sm dark:bg-[#343a40] dark:text-[#d1caca]">
      <div className="text-md  cursor-pointer font-bold  text-lg flex justify-end border-b-[1px] border-blue-200">
        السمة
      </div>
      <div className="flex justify-around bg-white text-black text-[12px] border-b-[1px] border-black dark:bg-[#343a40] dark:text-[#d1caca] dark:border-white">
        <div className=" flex  mt-4 rounded-full w-[70%] justify-around">
          <button
            className="  p-[10px] rounded-[15px] m-[3px] w-[5rem] dark:shadow-xl dark:border-"
            style={active ? actives : {}}
            onClick={() => {
              setactive(true);
              localStorage.setItem("current", "");
              settheme(localStorage.getItem("current"));
            }}
          >
            فاتح
          </button>
          <button
            className=" p-[10px] rounded-[15px] m-[3px] w-[5rem]"
            style={active === false ? actives : {}}
            onClick={() => {
              setactive(false);
              localStorage.setItem("current", "dark");
              settheme(localStorage.getItem("current"));
            }}
          >
            داكن
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
