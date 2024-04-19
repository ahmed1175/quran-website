import React from "react";

const Footer = () => {
  const Fotter = [
    {
      p1: "الصفحة الرئيسة",
      p2: "QuranicAudio.com",
      p3: "آية الكرسي",
    },
    {
      p1: "راديو القرآن",
      p2: "Salah.com",
      p3: "سورة يس",
    },
    {
      p1: "القراء",
      p2: "Sunnah.com",
      p3: "سورة الملك",
    },
    {
      p1: "معلومات عنا",
      p2: "Legacy.Quran.com",
      p3: "سورة الرّحمن",
    },
    {
      p1: "تبرع",
      p2: "Previous.Quran.com",
      p3: "سورة الواقعة",
    },
    {
      p1: "تطبيقات المحمول",
      p2: "Corpus.Quran.com",
      p3: "سورة الكهف",
    },
    {
      p1: "المطورون",
      p2: "QuranReflect.com",
      p3: "سورة المزّمّل",
    },
  ];
  return (
    <div className="flex gap-2 justify-between mr-auto ml-auto w-[80%] ">
      <div className="flex justify-between w-[50%]   mr-auto ml-auto text-end">
        <div>
          <h1 className="m-1 p-4 font-bold">روابط شائعة</h1>

          {Fotter.map((item) => {
            return (
              <p
                key={item}
                className="m-1 p-1.5 font-semibold text-sm hover:underline cursor-pointer text-[#666]"
              >
                {" "}
                {item.p3}
              </p>
            );
          })}
        </div>
        <div>
          <h1 className="m-1 p-4 font-bold">الشبكه</h1>
          {Fotter.map((item) => {
            return (
              <p
                key={item}
                className="m-1 p-1.5 text-sm font-semibold cursor-pointer hover:underline text-[#666]"
              >
                {" "}
                {item.p2}
              </p>
            );
          })}
        </div>
        <div className=" ">
          <h1 className=" p-4 text-lg font-bold">التنقل</h1>
          {Fotter.map((item) => {
            return (
              <p
                key={item}
                className="m-1 text-sm font-semibold p-1.5 hover:underline cursor-pointer text-[#666]"
              >
                {item.p1}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-[45%] text-end " id="right">
        <h1 className=" text-[18px] font-bold m-1 p-4 leading-[21px] ">
          اقرأ وادرس وتعلم القرآن الكريم
        </h1>
        <p className="text-[16px] text-[#666]  p-2 w-[100%]">
          موقع قرآن.كوم هو صدقة جارية. نأمل أن نسهل على الجميع قراءة القرآن
          الكريم ودراسته وتعلمه. القرآن الكريم له أسماء عديدة منها القرآن الكريم
          والكتاب والفرقان والموعظة والذكر والنور.
        </p>
      </div>
    </div>
  );
};

export default Footer;
