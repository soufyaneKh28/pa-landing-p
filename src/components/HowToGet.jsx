// import { connect_icon, kick_start_icon, sustain_logo } from "../assets";
import { how_cards } from "../constants";
import styles from "../style";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function HowToGet() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className=" py-6 px-7 relative overflow-hidden" id="">
      <div className=" w-[300px] h-[300px] -top-[150px] filter blur-3xl -left-[150px] opacity-75 z-[-2] absolute bg-secondary rounded-full" />
      <div className=" w-[300px] h-[300px]  -bottom-[150px] filter blur-3xl -right-[150px] opacity-75 z-[-2] absolute bg-secondary rounded-full" />
      <div className="container ">
        <h2 className=" text-center text-secondary font-semibold leading-[30px]">
          كيف تحصل على ؟<br />
          <span className=" text-[26px] text-gray-900 font-bold">
            تقويم باريس ألاين الشفاف
          </span>
        </h2>

        <div className=" flex flex-wrap  mt-[50px] flex-col sm:flex-row  ">
          {how_cards.map((card, index) => (
            <div
              key={card.id}
              className={` item-card flex-1 relative flex flex-col items-center border-[2px] rounded-3xl border-[#7A74D1] p-6 ${
                index !== how_cards.length - 1 ? "mb-[60px]" : " mb-0"
              }   mx-5  sm:mb-0 `}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className=" absolute p-3  flex justify-center border rounded-full w-[75px] h-[75px]  -top-10 bg-white card-circle ">
                <img
                  src={card.icon}
                  alt={card.id}
                  className="w-[100%] z-[5] rotate-45"
                />
              </div>
              <div
                className="mt-6 text-center flex flex-col items-center 
              "
              >
                <h3 className=" font-bold text-center text-[24px] max-w-[220px] leading-[30px]">
                  {card.title}
                </h3>
                <p className="mt-3  sm:text-[18px] text-[14px] sm:leading-[28px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            className={`${styles.button} my-5 rounded-[20px] font-semibold w-fit shadow-md hover:bg-slate-400 transition`}
            href="https://parisaline.com/ar/eligible"
          >
            {" "}
            هل أنا مؤهل؟
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowToGet;
