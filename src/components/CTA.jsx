import { aligner } from "../assets";
import styles from "../style";
const CTA = () => (
  <section className=" gradient w-full overflow-hidden py-3" id="CTA">
    <div className="containe flex-col sm:flex-row flex items-center justify-center sm:max-h-[250px]">
      <div className=" relative flex-1 w-full ">
        <img
          src={aligner}
          alt="aligner"
          className=" z-[4] relative  w-[100%] lg:w-[69%]"
        />
        <div className=" sm:w-[700px] sm:h-[700px]  lg:w-[900px] w-[300px] h-[300px] rounded-full bg-secondary absolute sm:-top-20 -top-5 sm:right-[-200px] lg:right-[-360px]  right-[-100px]" />
      </div>
      <div className=" flex-1 flex flex-col sm:items-start z-[3] items-center ">
        <h2 className=" text-white text-[20px] sm:text-[25px] font-normal leading-8 sm:leading-9 text-center sm:text-start">
          انظر للتغيير,
          <br />
          <span className="font-bold text-[26px] sm:text-[28px]">
            اشعر بالثقة
          </span>
        </h2>
        <a
          href="#Contact-Us"
          className={`${styles.button}  my-2 rounded-[20px] font-semibold w-fit shadow-md hover:bg-slate-400 transition text-[12px] sm:text-[18px] `}
        >
          ابدأ رحلتك
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
