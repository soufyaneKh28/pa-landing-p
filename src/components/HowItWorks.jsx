import { useEffect } from "react";
import { video } from "../assets";
import { steps } from "../constants";
import Aos from "aos";
import "aos/dist/aos.css";
function HowItWorks() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section className=" bg-white  py-5" id=" ">
      <div className="container">
        <div className=" flex justify-center items-center flex-col ">
          <div>
            <h2 className=" text-center text-secondary font-semibold leading-[30px]">
              كيف يعمل ؟<br />
              <span className=" text-[26px] text-gray-900 font-bold">
                التقويم الشفاف؟
              </span>
            </h2>
          </div>

          <div className=" relative  max-w-[600px]  mx-4 mt-5">
            <div className="absolute bg-[#ea435d] w-[40px] h-[40px] z-[100] rounded-full flex justify-center items-center right-[-5px] top-[-10px] cursor-pointer border-[2px] border-white">
              <div className="triangle   "></div>
            </div>
            <div
              className="rounded-[20px] overflow-hidden"
              data-aos-delay="50"
              data-aos="fade-up"
            >
              <iframe
                className="w-[360px] h-[255px] md:w-[600px] md:h-[400px]"
                src="https://www.youtube.com/embed/UTt6qMrUEN0?si=62FE4HiPv43OhK79&amp;start=28"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className=" max-w-[1000px] overflow-hidden my-3">
            <div className=" w-full my-5 sm:my-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`item animation w-full  relative flex flex-row p-3 items-center justify-center ${
                    index % 2 === 0 ? " flex-row-reverse" : " flex-row"
                  }`}
                  data-aos="fade-up"
                >
                  <div
                    className={` flex-1 ${
                      index % 2 === 0 ? " justify-start" : " justify-end"
                    } flex p-3 `}
                  >
                    <div
                      className={` relative rounded-full border-red-600  border-[2px] w-[120px] h-[120px] flex justify-center items-center p-2 ${
                        index % 2 === 0 ? "  after" : " before"
                      }  `}
                    >
                      <img
                        src={step.img}
                        alt="make_it_clean"
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="  ">
                    <div className=" text-white number  relative w-[30px] h-[30px] bg-red-600 before:bg-red-600 flex items-center  justify-center text-center rounded-full">
                      {index + 1}
                    </div>
                  </div>
                  <div className=" w-[45%] flex-1  p-3 ">
                    <h2 className=" font-bold">{step.title}</h2>
                    <p className=" max-w-[420px] mt-2 text-[12px] sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
