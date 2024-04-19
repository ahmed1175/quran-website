import { lazy } from "react";
import alfatehah from "../../../assets/001.svg";
const Ayat = () => {
  return (
    <div className="flex justify-center w-[80%] mr-auto ml-auto p-4 ">
      <img className="w-[35rem] cursor-pointer" src={alfatehah} onLoad={lazy} alt="An image of Al-Fateha verse in Arabic calligraphy" />
    </div>
  );
};

export default Ayat;
