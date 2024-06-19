import { useState } from "react";
import DarkMode from "./ComponentNavbar/DarkMode";
import Leftsidebar from "./ComponentNavbar/leftsidebar";
import ButtonLeftside from "./ComponentNavbar/buttonLeftside";
import Rightsidebar from "./ComponentNavbar/rightsidebar";
import Topleftbar from "./ComponentNavbar/topleftbar";
import { menuElemnt } from "./ComponentNavbar/DataNav";
import { iconHeader } from "./ComponentNavbar/DataNav";
import { actives1 } from "./ComponentNavbar/DataNav";
import IconNavbar from "./ComponentNavbar/iconNavbar";
import { language } from "./ComponentNavbar/DataNav";
const Nav = () => {
  const [sidebar, setsidebar] = useState("");
  const [rotates, setrotate] = useState("active2");
  const [count, setcount] = useState(5);
  const [disabled, setdisplay] = useState(false);
  const [languages, setlanguage] = useState(false);
  return (
    <nav className=" dark:bg-[#343a40]  dark:duration-300 dark:text-[#d1caca] flex px-8 font-bold py-5 text-xl justify-between mr-auto ml-auto  p-4 bg-primary text-black leading-[21.664px] text-[16px] align-middle gap-6 shadow-sm sticky top-0 z-10">
      <IconNavbar
        iconHeader={iconHeader}
        disabled={languages}
        setdisplay={setlanguage}
        language={language}
        setsidebar={setsidebar}
      />
      {/**
       * _______________________right sidebar of the navbar______________________________________________
       */}
      <div>
        <Rightsidebar
          menuElemnt={menuElemnt}
          sidebar={sidebar}
          setsidebar={setsidebar}
        />
        {/*
        ____________________________ left sidebar_________________________________
         */}
        {sidebar === "leftsidebar" && (
          <div className="scroll fixed text-black w-[100%] md:block  left-0 top-0 z-10 rounded-lg bg-white md:w-[30%] h-[100vh] overflow-y-scroll ">
            <Topleftbar sidebar={sidebar} setsidebar={setsidebar} />
            <DarkMode />
            <div className="flex  justify-end text-end  border-solid shadow-lg flex-col text-sm  ">
              <ButtonLeftside
                actives1={actives1}
                setrotate={setrotate}
                rotates={rotates}
              />
              <Leftsidebar
                count={count}
                disabled={disabled}
                setdisplay={setdisplay}
                setcount={setcount}
                rotates={rotates}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
