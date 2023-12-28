import { hero_img, whatsApp_icon, whatsApp_stikey } from "../assets";
import styles from "../style";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <section
        id=""
        className={`hero-section flex flex-col-reverse sm:flex-row  items-center  pt-6`}
      >
        <div className="flex-1  " data-aos="fade-up">
          <img
            src={hero_img}
            alt="hero_img"
            className=" w-[100%]  sm:w-[100%] h-[100%] object-contain"
          />
        </div>
        <div className="flex-1">
          <div
            className="  text-white text-center sm:text-start  flex flex-col items-center sm:items-start justify-center pt-6 sm:pt-0 sm:mr-7 w-[100%] "
            data-aos="fade-up"
          >
            <h1 className=" uppercase text-[47px] font-normal leading-[59px]">
              إستثمر <br />
              <span className=" font-bold">في إبتسامتك </span>
            </h1>
            <p className="max-w-[360px] sm:max-w-[420px] text-[18px] font-medium mt-4">
              مع باريس ألاين، أنت على وشك الشروع في رحلة تحويلية تضمن لك ابتسامة
              رائعة !{" "}
            </p>
            <button
              className={` bg-green-600 my-5  rounded-[20px] font-semibold w-fit shadow-md hover:bg-slate-400 transition flex items-center justify-center px-2 py-1`}
            >
              <img
                src={whatsApp_stikey}
                alt="whatsApp_stikey"
                className="  w-10"
              />
              إبدأ خطتك
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
