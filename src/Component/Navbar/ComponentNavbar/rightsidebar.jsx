import React from "react";

const Rightsidebar = ({ sidebar, setsidebar, menuElemnt }) => {
  return (
    <div className="flex gap-1">
      <div className=" font-[900] px-2 py-2 cursor-pointer">Quran.com</div>
      <span
        className="icon-menu cursor-pointer px-2 py-2  font-bold hover:rounded-full hover:bg-[#d1caca] dark:hover:bg-[#6d6d6d]"
        onClick={() => {
          setsidebar("rightsidebar");
        }}
      />
      {sidebar === "rightsidebar" && (
        <div className="sidebar md:fixed hidden dark:bg-[#343a40] dark:text-[#d1caca] w-[25%]  h-[100vh] bg-white z-10 right-0  top-0 rounded-lg  ">
          <div className="flex justify-between p-5 shadow-lg">
            <span
              className=" font-bold cursor-pointer"
              onClick={() => {
                setsidebar();
              }}
            >
              X
            </span>
            <h3 className=" font-bold">Quran.com</h3>
          </div>
          <div className=" flex  justify-end text-end p-6 border-solid shadow-lg flex-col text-sm ">
            <h1 className=" text-md  cursor-pointer font-bold  border-b-[1px] border-blue-200 text-lg ">
              القائمة
            </h1>
            <div className="flex flex-col divide-y text-[16px] divide-blue-200 w-[100%]  ">
              {menuElemnt.map((item) => {
                return (
                  <div
                    key={item}
                    className="flex justify-end  hover:text-black text-[#d1caca]   gap-2 p-6 cursor-pointer h-10 align-middle "
                  >
                    <h4 className="flex gap-2 text-black dark:text-[#d1caca] ">
                      {item.name}
                    </h4>
                    <span className={item.icon + " w-1"}></span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rightsidebar;
