import { contact_img } from "../assets";

import styles from "../style";
const Contact = () => (
  <section className=" gradient-contact" id="Contact-Us">
    <div className="container p-6 flex flex-col justify-center items-center ">
      <div className="flex  justify-center items-center ">
        <div className="flex-1">
          <h3 className="text-[35px] text-[#D7D4FC] font-medium">هيا لنتحدث</h3>
          <p className=" text-white mt-3">
            اكتب لنا أي شيء يدور في ذهنك، فنحن هنا من أجلك على مدار الساعة طوال
            أيام الأسبوع
          </p>
        </div>
        <div className="flex-1">
          <img src={contact_img} alt=" contact-img" />
        </div>
      </div>
      <div className="w-full">
        <form
          action=""
          className=" flex flex-col items-center  justify-center w-full"
        >
          <div className="flex flex-col w-full sm:flex-row mt-3 ">
            <div className="flex flex-col sm:w-[50%] mt-3 sm:ml-2">
              <label htmlFor="">الاسم</label>
              <input type="text" placeholder="اكتب اسمك" />
            </div>
            <div className="flex flex-col sm:w-[50%] mt-3 sm:mr-2">
              <label htmlFor="">البريد الالكتروني</label>
              <input type="emal" placeholder="اكتب اسمك" />
            </div>
          </div>
          <div className="flex flex-col w-full mt-3">
            <label htmlFor="">اكتب رسالتك</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="اكتب رسالتك"
            ></textarea>
          </div>
          <div>
            <button
              className={`${styles.button} my-5 rounded-[20px] font-semibold w-fit shadow-md hover:bg-slate-400 transition px-10`}
            >
              ارسل
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
