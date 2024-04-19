import React from "react";

const IconNavbar = ({
  iconHeader,
  setsidebar,
  language,
  disabled,
  setdisplay,
}) => {
  return (
    <div >
      <div className=" flex  rounded-full gap-1 dark:bg-[#343a40]  ">
        {iconHeader.map((icon) => {
          return (
            <span
              key={icon}
              onClick={() => {
                {
                  icon.span === "icon-cog" ? setsidebar("leftsidebar") : {};
                }
                {
                  icon.span === "icon-language" ? setdisplay(!disabled) : {};
                }
              }}
              className={
                icon.span +
                " cursor-pointer px-2 py-2 hover:bg-[#d1caca]  dark:hover:bg-[#6d6d6d] hover:rounded-full   "
              }
            ></span>
          );
        })}
      </div>
      <div
        className=" absolute top-[100%] cursor-pointer left-[4.5%] bg-gray-50 rounded-lg text-[#272727]  w-[10%] hidden"
        style={disabled === true ? { display: "block" } : {}}
      >
        {language.map((item) => {
          return (
            <div key={item} className="flex flex-col p-6 hover:bg-[#eeeeee]">
              {item.language}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconNavbar;
