const Leftsidebar = ({ count, disabled, setcount, setdisplay, rotates }) => {
  return (
    <div>
      {rotates === "active2" && (
        <div className="dark:text-[#d1caca] dark:bg-[#343a40] p-5 pb-8">
          <div className="flex justify-between py-5 items-center dark:border-blue-200 dark:text-[#d1caca] dark:bg-[#343a40]">
            <select
              name=""
              id=""
              className=" bg-[#f8f9fa] dark:text-[#d1caca] dark:bg-[#343a40] dark:border-blue-200 rounded-md w-[80%] text-[#272727] text-[16px] text-start p-1  m-0 "
            >
              <option
                value="مجمع الملك فهد الاصدار 1"
                className="bg-white dark:text-[#d1caca] dark:bg-[#343a40] "
              >
                مجمع الملك فهد الاصدار 1
              </option>
              <option
                value=""
                className="bg-white dark:text-[#d1caca] dark:bg-[#343a40]"
              >
                مجمع الملك فهد الاصدار 2
              </option>
              <option className="bg-white dark:text-[#d1caca] dark:bg-[#343a40]">
                خط الرسم العثماني-حفص- مجمع الملك
              </option>
            </select>
            <p className="text-md  cursor-pointer text-[#272727] text-[16px] text-lg dark:text-[#d1caca] dark:bg-[#343a40]">
              نمط
            </p>
          </div>
          <div className="flex justify-between py-5 items-center dark:text-[#d1caca] dark:bg-[#343a40] dark:border-blue-200 ">
            <div className="flex gap-4 font-bold bg-[#f8f9fa] p-1 rounded-2xl dark:text-[#d1caca] dark:bg-[#343a40]">
              <button
                className=" text-xl"
                onClick={() => {
                  {
                    count < 10 && setcount(count + 1);
                  }
                }}
              >
                +
              </button>
              <div className="p-3 text-xl ">{count}</div>
              <button
                className="text-xl "
                onClick={() => {
                  {
                    count > 1 && setcount(count - 1);
                  }
                }}
              >
                -
              </button>
            </div>
            <p className="  cursor-pointer text-[#272727] text-[16px] text-lg  dark:text-[#d1caca] dark:bg-[#343a40]">
              حجم الخط
            </p>
          </div>
          <p className="text-[#272727] text-[16px] text-sm dark:text-[#d1caca] dark:bg-[#343a40]">
            توفر خطوط مجمع الملك فهد (الإصدارين 1 و 2) جودة أعلى ولكنها تستغرق
            وقتًا أطول للتحميل.
          </p>
          <div className=" text-black w-[100%] py-[22%]  border-b-[1px]  border-black">
            <h5
              style={{ fontSize: `${count + 12}px` }}
              className={
                " leading-[33.6609px] bg-[#f8f9fa] p-[3%] tracking-normal text-xl w-[100%] dark:text-[#d1caca] dark:bg-[#343a40] "
              }
            >
              {" "}
              أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ
              الْمُفْلِحُونَ ۝{" "}
            </h5>
          </div>
          <div className="flex  justify-end text-end py-6 border-solid  flex-col text-sm dark:text-[#d1caca] dark:bg-[#343a40] ">
            <div className="text-md  cursor-pointer font-bold  text-lg flex justify-end border-b-[1px] border-blue-200 dark:text-[#d1caca] dark:bg-[#343a40]">
              كلمة بكلمة
            </div>
            <div className="dark:text-[#d1caca] dark:bg-[#343a40]">
              <div className="flex justify-end gap-3 py-1 pt-4  items-center">
                <p className="text-lg text-black dark:text-[#d1caca] dark:bg-[#343a40]">
                  الترجمه
                </p>
                <input
                  type="checkbox"
                  className=" checkbox dark:text-[#d1caca] dark:bg-[#343a40]"
                  onClick={() => {
                    setdisplay(!disabled);
                  }}
                  checked={disabled}
                />
              </div>
              <div className="flex justify-end gap-3 py-1  items-center dark:text-[#d1caca] dark:bg-[#343a40]">
                <p className="text-lg text-black dark:text-[#d1caca] dark:bg-[#343a40]">
                  النقل الحرفي
                </p>
                <input
                  type="checkbox"
                  className=" checkbox"
                  onClick={() => {
                    setdisplay(!disabled);
                  }}
                  checked={!disabled}
                />
              </div>
              <div className="flex justify-end gap-3 py-1  items-center dark:text-[#d1caca] dark:bg-[#343a40]">
                <p className="text-lg text-black dark:text-[#d1caca] dark:bg-[#343a40]">
                  التلاوه
                </p>
                <input type="checkbox" className=" checkbox" />
              </div>
            </div>
            <p className="text-[#272727] text-[16px] pb-4 text-sm mt-6 border-b-[1px] border-blue-200 dark:text-[#d1caca] dark:bg-[#343a40]">
              قارئ كلمة بكلمة: Shaikh Wisam Sharieff . اضغط على كلمة للاستماع
              إلى تلاوتها.
            </p>
            <div className="flex justify-between py-5 dark:text-[#d1caca] dark:bg-[#343a40]">
              <select
                className="bg-[#f8f9fa]  rounded-md w-[30%] text-[#272727] text-[16px] text-start p-1 dark:text-[#d1caca] dark:bg-[#343a40] m-0"
                disabled={!disabled}
              >
                <option
                  value=""
                  className="bg-white dark:text-[#d1caca] dark:bg-[#343a40]"
                >
                  English
                </option>
              </select>
              <p className="text-md  text-[#272727] text-[16px] text-lg dark:text-[#d1caca] dark:bg-[#343a40]">
                لغه الترجمه{" "}
              </p>
            </div>
            <div className="dark:text-[#d1caca] dark:bg-[#343a40]">
              <p className="text-md  text-[#272727] text-[16px] text-lg pb-3 dark:text-[#d1caca] dark:bg-[#343a40]">
                عرض
              </p>
              <div className="flex justify-end gap-3 py-1  items-center">
                <p
                  className="text-lg text-gray-300"
                  style={disabled ? { color: "black" } : {}}
                >
                  في النسق{" "}
                </p>
                <input
                  type="checkbox"
                  className="checkbox"
                  disabled={disabled === false}
                />
              </div>
              <div className="flex justify-end gap-3 py-1 pb-8 items-center  border-b-[1px] border-black">
                <p
                  className="text-lg text-gray-300"
                  style={disabled ? { color: "black" } : {}}
                >
                  اداء ارشادي
                </p>
                <input
                  type="checkbox"
                  className=" checkbox"
                  disabled={disabled === false}
                />
              </div>
            </div>
          </div>
          <div className="flex  justify-end text-end py-6 border-solid pb-8 flex-col text-sm border-b-[1px] border-black dark:text-[#d1caca] dark:bg-[#343a40]">
            <div className="text-md  cursor-pointer font-bold  text-lg flex justify-end border-b-[1px] border-blue-200">
              الترجمه
            </div>
            <div className="flex justify-between items-center bg-[#f1f1f1] p-5 mt-3 rounded-lg cursor-pointer dark:text-[#d1caca] dark:bg-[#343a40] ">
              <h1 className="text-2xl">{"<"}</h1>
              <div className="dark:text-[#d1caca] dark:bg-[#343a40]">
                <p className="text-gray-400 text-[12px]">الترجمات المختاره </p>
                <h1 className="font-bold">لم يتم اخيار ترجمه </h1>
              </div>
            </div>
          </div>
          <div className=" justify-center flex mt-4  bg-black text-white w-[fit-content] mr-auto ml-auto p-4 rounded-lg hover:bg-white hover:text-black hover:border-solid border-[1px] border-black duration-300 ">
            <button className="">استعاده الاعدادات المحدده مسبقا</button>
          </div>
        </div>
      )}
      {rotates === "active1" && (
        <div className="dark:text-[#d1caca] dark:bg-[#343a40] p-5 pb-6">
          <div className="flex justify-between py-5 items-center dark:text-[#d1caca] dark:bg-[#343a40]">
            <select
              name=""
              id=""
              className="bg-[#f8f9fa]  rounded-md w-[30%] text-[#272727] text-[16px] text-start p-1  m-0 dark:text-[#d1caca] dark:bg-[#343a40]"
            >
              <option
                value=""
                className="dark:text-[#d1caca] dark:bg-[#343a40]"
              >
                نستعليق
              </option>
            </select>
            <p className="text-md  cursor-pointer text-[#272727] text-[16px] text-lg dark:text-[#d1caca] dark:bg-[#343a40]">
              نمط
            </p>
          </div>
          <div className="flex justify-between py-5 items-center ">
            <select
              name=""
              id=""
              className="bg-[#f8f9fa]  rounded-md w-[30%] text-[#272727] text-[16px] text-start p-1  m-0 dark:text-[#d1caca] dark:bg-[#343a40]"
            >
              <option
                value=""
                className="dark:text-[#d1caca] dark:bg-[#343a40]"
              >
                {" "}
                سطرا 16
              </option>
            </select>
            <p className="text-md  cursor-pointer text-[#272727] text-[16px] text-lg dark:text-[#d1caca] dark:bg-[#343a40]">
              الاسطر
            </p>
          </div>
          <div className="flex justify-between py-5 items-center dark:text-[#d1caca] dark:bg-[#343a40] dark:border-blue-200 ">
            <div className="flex gap-4 font-bold bg-[#f8f9fa] p-1 rounded-2xl dark:text-[#d1caca] dark:bg-[#343a40]">
              <button
                className=" text-xl"
                onClick={() => {
                  {
                    count < 10 && setcount(count + 1);
                  }
                }}
              >
                +
              </button>
              <div className="p-3 text-xl ">{count}</div>
              <button
                className="text-xl "
                onClick={() => {
                  {
                    count > 1 && setcount(count - 1);
                  }
                }}
              >
                -
              </button>
            </div>
            <p className="  cursor-pointer text-[#272727] text-[16px] text-lg  dark:text-[#d1caca] dark:bg-[#343a40]">
              حجم الخط
            </p>
          </div>
          <p className="text-[#272727] text-[16px] text-sm dark:text-[#d1caca] dark:bg-[#343a40]">
            توفر خطوط مجمع الملك فهد (الإصدارين 1 و 2) جودة أعلى ولكنها تستغرق
            وقتًا أطول للتحميل.
          </p>
          <div className=" text-black w-[100%] py-[22%]  border-b-[1px]  border-black">
            <h5
              style={{ fontSize: `${count + 12}px` }}
              className={
                " leading-[33.6609px] bg-[#f8f9fa] p-[3%] tracking-normal text-xl w-[100%] dark:text-[#d1caca] dark:bg-[#343a40] "
              }
            >
              {" "}
              أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ
              الْمُفْلِحُونَ ۝{" "}
            </h5>
          </div>
          <div className="flex  justify-end text-end py-6 border-solid  flex-col text-sm dark:text-[#d1caca] dark:bg-[#343a40] ">
            <div className="text-md  cursor-pointer font-bold  text-lg flex justify-end border-b-[1px] border-blue-200 dark:text-[#d1caca] dark:bg-[#343a40]">
              كلمة بكلمة
            </div>
            <div className="dark:text-[#d1caca] dark:bg-[#343a40]">
              <div className="flex justify-end gap-3 py-1 pt-4  items-center">
                <p className="text-lg text-black dark:text-[#d1caca] dark:bg-[#343a40]">
                  الترجمه
                </p>
                <input
                  type="checkbox"
                  className=" checkbox dark:text-[#d1caca] dark:bg-[#343a40]"
                  onClick={() => {
                    setdisplay(!disabled);
                  }}
                  checked={disabled}
                />
              </div>
              <div className="flex justify-end gap-3 py-1  items-center dark:text-[#d1caca] dark:bg-[#343a40]">
                <p className="text-lg text-black dark:text-[#d1caca] dark:bg-[#343a40]">
                  النقل الحرفي
                </p>
                <input
                  type="checkbox"
                  className=" checkbox"
                  onClick={() => {
                    setdisplay(!disabled);
                  }}
                  checked={!disabled}
                />
              </div>
              <div className="flex justify-end gap-3 py-1  items-center dark:text-[#d1caca] dark:bg-[#343a40]">
                <p className="text-lg text-black dark:text-[#d1caca] dark:bg-[#343a40]">
                  التلاوه
                </p>
                <input type="checkbox" className=" checkbox" />
              </div>
            </div>
            <p className="text-[#272727] text-[16px] pb-4 text-sm mt-6 border-b-[1px] border-blue-200 dark:text-[#d1caca] dark:bg-[#343a40]">
              قارئ كلمة بكلمة: Shaikh Wisam Sharieff . اضغط على كلمة للاستماع
              إلى تلاوتها.
            </p>
            <div className="flex justify-between py-5 dark:text-[#d1caca] dark:bg-[#343a40]">
              <select
                className="bg-[#f8f9fa]  rounded-md w-[30%] text-[#272727] text-[16px] text-start p-1 dark:text-[#d1caca] dark:bg-[#343a40] m-0"
                disabled={!disabled}
              >
                <option
                  value=""
                  className="bg-white dark:text-[#d1caca] dark:bg-[#343a40]"
                >
                  English
                </option>
              </select>
              <p className="text-md  text-[#272727] text-[16px] text-lg dark:text-[#d1caca] dark:bg-[#343a40]">
                لغه الترجمه{" "}
              </p>
            </div>
            <div className="dark:text-[#d1caca] dark:bg-[#343a40]">
              <p className="text-md  text-[#272727] text-[16px] text-lg pb-3 dark:text-[#d1caca] dark:bg-[#343a40]">
                عرض
              </p>
              <div className="flex justify-end gap-3 py-1  items-center">
                <p
                  className="text-lg text-gray-300"
                  style={disabled ? { color: "black" } : {}}
                >
                  في النسق{" "}
                </p>
                <input
                  type="checkbox"
                  className="checkbox"
                  disabled={disabled === false}
                />
              </div>
              <div className="flex justify-end gap-3 py-1 pb-8 items-center  border-b-[1px] border-black">
                <p
                  className="text-lg text-gray-300"
                  style={disabled ? { color: "black" } : {}}
                >
                  اداء ارشادي
                </p>
                <input
                  type="checkbox"
                  className=" checkbox"
                  disabled={disabled === false}
                />
              </div>
            </div>
          </div>
          <div className="flex  justify-end text-end py-6 border-solid pb-8 flex-col text-sm border-b-[1px] border-black dark:text-[#d1caca] dark:bg-[#343a40]">
            <div className="text-md  cursor-pointer font-bold  text-lg flex justify-end border-b-[1px] border-blue-200">
              الترجمه
            </div>
            <div className="flex justify-between items-center bg-[#f1f1f1] p-5 mt-3 rounded-lg cursor-pointer dark:text-[#d1caca] dark:bg-[#343a40] ">
              <h1 className="text-2xl">{"<"}</h1>
              <div className="dark:text-[#d1caca] dark:bg-[#343a40]">
                <p className="text-gray-400 text-[12px]">الترجمات المختاره </p>
                <h1 className="font-bold">لم يتم اخيار ترجمه </h1>
              </div>
            </div>
          </div>
          <div className=" justify-center flex mt-4  bg-black text-white w-[fit-content] mr-auto ml-auto p-4 rounded-lg hover:bg-white hover:text-black hover:border-solid border-[1px] border-black duration-300 ">
            <button className="">استعاده الاعدادات المحدده مسبقا</button>
          </div>
        </div>
      )}
      {rotates === "active" && (
        <div className="dark:text-[#d1caca] dark:bg-[#343a40] p-5 pb-6">
          <div className="md:flex hidden justify-between py-5 items-center dark:text-[#d1caca] dark:bg-[#343a40] ">
            <select
              name=""
              id=""
              className="bg-[#f8f9fa]  rounded-md w-[30%] text-[#272727] text-[16px] text-start p-1  m-0 dark:text-[#d1caca] dark:bg-[#343a40]"
            >
              <option
                value=""
                className="dark:text-[#d1caca] dark:bg-[#343a40]"
              >
                التجويد
              </option>
            </select>
            <p className="text-md  cursor-pointer text-[#272727] text-[16px] text-lg dark:text-[#d1caca] dark:bg-[#343a40]">
              نمط
            </p>
          </div>
          <div className="flex justify-between py-5 items-center dark:text-[#d1caca] dark:bg-[#343a40] dark:border-blue-200 ">
            <div className="flex gap-4 font-bold bg-[#f8f9fa] p-1 rounded-2xl dark:text-[#d1caca] dark:bg-[#343a40]">
              <button
                className=" text-xl"
                onClick={() => {
                  {
                    count < 10 && setcount(count + 1);
                  }
                }}
              >
                +
              </button>
              <div className="p-3 text-xl ">{count}</div>
              <button
                className="text-xl "
                onClick={() => {
                  {
                    count > 1 && setcount(count - 1);
                  }
                }}
              >
                -
              </button>
            </div>
            <p className="  cursor-pointer text-[#272727] text-[16px] text-lg  dark:text-[#d1caca] dark:bg-[#343a40]">
              حجم الخط
            </p>
          </div>
          <p className="text-[#272727] text-[16px] text-sm dark:text-[#d1caca] dark:bg-[#343a40]">
            توفر خطوط مجمع الملك فهد (الإصدارين 1 و 2) جودة أعلى ولكنها تستغرق
            وقتًا أطول للتحميل.
          </p>
          <div className=" text-black w-[100%] py-[22%]  border-b-[1px]  border-black">
            <h5
              style={{ fontSize: `${count + 12}px` }}
              className={
                " leading-[33.6609px] bg-[#f8f9fa] p-[3%] tracking-normal text-xl w-[100%] dark:text-[#d1caca] dark:bg-[#343a40] "
              }
            >
              {" "}
              أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ
              الْمُفْلِحُونَ ۝{" "}
            </h5>
          </div>
          <div className="flex  justify-end text-end py-6 border-solid  flex-col text-sm dark:text-[#d1caca] dark:bg-[#343a40] ">
            <div className="text-md  cursor-pointer font-bold  text-lg flex justify-end border-b-[1px] border-blue-200 dark:text-[#d1caca] dark:bg-[#343a40]">
              كلمة بكلمة
            </div>
            <div className="dark:text-[#d1caca] dark:bg-[#343a40]">
              <div className="flex justify-end gap-3 py-1 pt-4  items-center">
                <p className="text-lg text-black dark:text-[#d1caca] dark:bg-[#343a40]">
                  الترجمه
                </p>
                <input
                  type="checkbox"
                  className=" checkbox dark:text-[#d1caca] dark:bg-[#343a40]"
                  onClick={() => {
                    setdisplay(!disabled);
                  }}
                  checked={disabled}
                />
              </div>
              <div className="flex justify-end gap-3 py-1  items-center dark:text-[#d1caca] dark:bg-[#343a40]">
                <p className="text-lg text-black dark:text-[#d1caca] dark:bg-[#343a40]">
                  النقل الحرفي
                </p>
                <input
                  type="checkbox"
                  className=" checkbox"
                  onClick={() => {
                    setdisplay(!disabled);
                  }}
                  checked={!disabled}
                />
              </div>
              <div className="flex justify-end gap-3 py-1  items-center dark:text-[#d1caca] dark:bg-[#343a40]">
                <p className="text-lg text-black dark:text-[#d1caca] dark:bg-[#343a40]">
                  التلاوه
                </p>
                <input type="checkbox" className=" checkbox" />
              </div>
            </div>
            <p className="text-[#272727] text-[16px] pb-4 text-sm mt-6 border-b-[1px] border-blue-200 dark:text-[#d1caca] dark:bg-[#343a40]">
              قارئ كلمة بكلمة: Shaikh Wisam Sharieff . اضغط على كلمة للاستماع
              إلى تلاوتها.
            </p>
            <div className="flex justify-between py-5 dark:text-[#d1caca] dark:bg-[#343a40]">
              <select
                className="bg-[#f8f9fa]  rounded-md w-[30%] text-[#272727] text-[16px] text-start p-1 dark:text-[#d1caca] dark:bg-[#343a40] m-0"
                disabled={!disabled}
              >
                <option
                  value=""
                  className="bg-white dark:text-[#d1caca] dark:bg-[#343a40]"
                >
                  English
                </option>
              </select>
              <p className="text-md  text-[#272727] text-[16px] text-lg dark:text-[#d1caca] dark:bg-[#343a40]">
                لغه الترجمه{" "}
              </p>
            </div>
            <div className="dark:text-[#d1caca] dark:bg-[#343a40]">
              <p className="text-md  text-[#272727] text-[16px] text-lg pb-3 dark:text-[#d1caca] dark:bg-[#343a40]">
                عرض
              </p>
              <div className="flex justify-end gap-3 py-1  items-center">
                <p
                  className="text-lg text-gray-300"
                  style={disabled ? { color: "black" } : {}}
                >
                  في النسق{" "}
                </p>
                <input
                  type="checkbox"
                  className="checkbox"
                  disabled={disabled === false}
                />
              </div>
              <div className="flex justify-end gap-3 py-1 pb-8 items-center  border-b-[1px] border-black">
                <p
                  className="text-lg text-gray-300"
                  style={disabled ? { color: "black" } : {}}
                >
                  اداء ارشادي
                </p>
                <input
                  type="checkbox"
                  className=" checkbox"
                  disabled={disabled === false}
                />
              </div>
            </div>
          </div>
          <div className="flex  justify-end text-end py-6 border-solid pb-8 flex-col text-sm border-b-[1px] border-black dark:text-[#d1caca] dark:bg-[#343a40]">
            <div className="text-md  cursor-pointer font-bold  text-lg flex justify-end border-b-[1px] border-blue-200">
              الترجمه
            </div>
            <div className="flex justify-between items-center bg-[#f1f1f1] p-5 mt-3 rounded-lg cursor-pointer dark:text-[#d1caca] dark:bg-[#343a40] ">
              <h1 className="text-2xl">{"<"}</h1>
              <div className="dark:text-[#d1caca] dark:bg-[#343a40]">
                <p className="text-gray-400 text-[12px]">الترجمات المختاره </p>
                <h1 className="font-bold">لم يتم اخيار ترجمه </h1>
              </div>
            </div>
          </div>
          <div className=" justify-center flex mt-4  bg-black text-white w-[fit-content] mr-auto ml-auto p-4 rounded-lg hover:bg-white hover:text-black hover:border-solid border-[1px] border-black duration-300 ">
            <button className="">استعاده الاعدادات المحدده مسبقا</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leftsidebar;
