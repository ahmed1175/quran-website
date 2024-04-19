import { useEffect, useState } from "react";

const HeaderSuwar = () => {
  const [scrollposition, setscrollposition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolltop = document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setscrollposition((scrolltop / height) * 100);
    });
  }, []);
  return (
    <div>
      <div className="flex justify-between px-8   py-4 border-b-2  ">
        <h1 className=" cursor-pointer p-2 text-">جزء ١ / حزب ١ - صفحة ١</h1>
        <h1 className=" cursor-pointer p-2 text-lg">الفاتحة</h1>
      </div>
      <div
        className="fixed top-0 right-0 z-50 bg-blue  rounded-sm text-[3px] "
        style={{ width: `${scrollposition}%` }}
      >
        1
      </div>
    </div>
  );
};

export default HeaderSuwar;
