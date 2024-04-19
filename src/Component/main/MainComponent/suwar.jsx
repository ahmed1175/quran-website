import React, { useState } from "react";
import { Link } from "react-router-dom";
const Suwar = ({ suwar }) => {
  const [colorBorder, setColorBorder] = useState("suwar");
  const [Descending, setDescending] = useState(true);

  return (
    <div>
      <div className="mr-auto ml-auto w-[80%] ">
        <div className="flex justify-end gap-6 text-lg px-4 pt-3 mb-8 border-b-[1px] border-blue-500 m-1 ">
          <span
            className=" cursor-pointer "
            onClick={() => {
              setColorBorder("tarteb");
            }}
            style={
              colorBorder === "tarteb"
                ? { borderBottom: "1.5px solid black" }
                : {}
            }
          >
            ترتيب نزول الوحي
          </span>

          <span
            className=" cursor-pointer"
            onClick={() => {
              setColorBorder("suwar");
            }}
            style={
              colorBorder === "suwar"
                ? { borderBottom: "1.5px solid black " }
                : {}
            }
          >
            سوره
          </span>
        </div>
        <div className="flex gap-2 cursor-pointer mb-4 text-sm">
          <span
            className="flex gap-2 text-sm font-bold"
            onClick={() => {
              setDescending(!Descending);
            }}
          >
            {Descending ? (
              <span className="icon-chevron-thin-up text-sm" />
            ) : (
              <span className="icon-chevron-thin-down text-sm" />
            )}
            {Descending ? "تصاعديا " : "تنازليا"}
          </span>
          <span className="">:رتب</span>
        </div>
        {colorBorder === "tarteb" && (
          <p className="text-[16px] bg-[#ebf9fa] font-extralight p-4 text-end  leading-[21.664px] m-1 rounded-md text-[#272727] tracking-normal">
            يُظهر هذا المنظر الترتيب الزمني للسور في القرآن بناءً على تاريخ
            نزولها على النبي محمد ﷺ . التسلسل الزمني هو محل خلاف بين العلماء
            وبعض السور نزلت مجزئة في أوقات مختلفة. [ملحوظة: ترتيب المصحف المجمّع
            من سورة الفاتحة إلى سورة الناس محل إجماع.]
          </p>
        )}
      </div>

      <div
        className=" mr-auto ml-auto w-[80%] flex flex-wrap flex-row-reverse   text-xl"
        style={
          Descending === false
            ? { flexWrap: "wrap-reverse", flexDirection: "row" }
            : { flexWrap: "wrap" }
        }
      >
        {colorBorder === "suwar" &&
          suwar
            .sort((a, b) => {
              if (a.id > b.id) {
                return 1;
              }
              if (a.id < b.id) {
                return -1;
              }
              return 0;
            })
            .map((item) => {
              return (
                <Link
                  to={
                    item.name_simple === "Ali%20'Imran"
                      ? item.id
                      : item.name_simple
                  }
                  className=" group p-3 m-2 border-[1px] border-blue-500 rounded-md w-[31.84%] flex justify-between items-center hover:scale-105 duration-300 cursor-pointer hover:bg-gray-50 hover:border-blue "
                  key={item.id}
                >
                  <div className="flex gap-3 group-hover:text-blue">
                    ايات
                    <div>{item.verses_count}</div>
                  </div>
                  <div className="flex gap-3 items-center ">
                    <div className="text-black font-bold text-xl">
                      {item.name_arabic}
                    </div>
                    <div className="clip p-5 font-bold bg-gray-300 group-hover:bg-blue group-hover:text-white">
                      {item.id}
                    </div>
                  </div>
                </Link>
              );
            })}
        {colorBorder === "tarteb" &&
          suwar
            .sort((a, b) => {
              if (a.revelation_order > b.revelation_order) {
                return 1;
              }
              if (a.revelation_order < b.revelation_order) {
                return -1;
              }
              return 0;
            })
            .map((item) => {
              return (
                <Link
                  to={
                    item.name_simple === "Ali%20'Imran"
                      ? "ali-amran"
                      : item.name_simple
                  }
                  className=" group p-3 m-2 border-[1px] border-blue-500 rounded-md w-[31.84%] flex justify-between items-center hover:scale-105 duration-300 cursor-pointer hover:bg-gray-50 hover:border-blue "
                  key={item.id}
                >
                  <div className="flex gap-3 group-hover:text-blue">
                    ايات
                    <div>{item.verses_count}</div>
                  </div>
                  <div className="flex gap-3 items-center ">
                    <div className="text-black font-bold text-xl">
                      {item.name_arabic}
                    </div>
                    <div className="clip p-5 font-bold bg-gray-300 group-hover:bg-blue group-hover:text-white">
                      {item.revelation_order}
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Suwar;
