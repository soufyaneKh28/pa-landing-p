import { hero_img, whatsApp_icon, whatsApp_stikey } from "../assets";
import styles from "../style";
import { useEffect, useState, usePhoneValidation } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";
function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <section
        id=""
        className={`hero-section flex flex-col-reverse md:flex-row  items-center  pt-6`}
      >
        <div className="flex-1  " data-aos="fade-up">
          <img
            src={hero_img}
            alt="hero_img"
            className=" w-[100%]  sm:w-[100%] h-[100%] object-contain"
          />
        </div>
        <div className="flex-1 flex sm:px-5 sm:flex-row flex-col">
          <div
            className="  text-white text-center sm:text-start  flex flex-col items-center sm:items-start justify-center pt-6 my-7 sm:my-0 sm:pt-0 sm:ml-7 w-[100%] "
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
            {/* <button
              className={` bg-green-600 my-5  rounded-[20px] font-semibold w-fit shadow-md hover:bg-slate-400 transition flex items-center justify-center px-2 py-1`}
            >
              <img
                src={whatsApp_stikey}
                alt="whatsApp_stikey"
                className="  w-10"
              />
              إبدأ خطتك
            </button> */}
          </div>
          <HeroForm />
        </div>
      </section>
    </>
  );
}

export function HeroForm() {
  const [phone, setPhone] = useState("");
  // const phoneValidation = usePhoneValidation(phone);
  const [formData, setFormData] = useState({
    fullname: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(phone);
    // Create a query string from the form data
    // const queryString = new URLSearchParams(formData).toString();
    // console.log(queryString);
    const apiEndpoint = `https://www.zohoapis.com/crm/v2/functions/addleadwebhook/actions/execute?auth_type=apikey&zapikey=1003.c059758048a4d6909a95a78c580b20a7.c249d0c1b8f1608255df0fc04d47b494&fullname=${formData.fullname}&phone=+${phone}&email=""&message=${formData.message}&source=Google`;

    try {
      const response = await fetch(apiEndpoint, {
        method: "GET",
        mode: "no-cors",
        // Add any headers or other options as needed
      });

      console.log(response);
      // Handle the response here
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Assuming your API endpoint is at 'https://example.com/send-message'
  //   const apiUrl =
  //     "https://www.zohoapis.com/crm/v2/functions/addleadwebhook/actions/execute?auth_type=apikey&zapikey=1003.c059758048a4d6909a95a78c580b20a7.c249d0c1b8f1608255df0fc04d47b494&fullname=${formData.fullname}&phone=${phone}&message=${formData.message}&source=Google";

  //   // Constructing the query string from form data
  //   // const queryString = new URLSearchParams(formData).toString();

  //   // Making the GET request using fetch
  //   fetch(`${apiUrl}`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Response:", data);
  //       // Handle the response as needed
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       // Handle errors
  //     });
  // };

  return (
    <div className=" flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-fit px-5 py-3 rounded-[10px] flex flex-col justify-center"
      >
        {/* <div className="text">lorem ipsom</div> */}
        <label htmlFor="fullname" className="text-black">
          الاسم الكامل
        </label>
        <input
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className=" bg-primary mb-3"
          placeholder="اكتب اسمك"
        />
        <label htmlFor="phone" className="text-black">
          الهاتف
        </label>
        <PhoneInput
          defaultCountry="tr"
          id="phone"
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
        <label htmlFor="message" className="text-black">
          {" "}
          اكتب رسالتك
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          id="message"
          cols="30"
          rows="10"
          placeholder="اكتب رسالتك"
          className="bg-primary h-[200px]"
        />
        <button
          className={`${styles.button} mx-auto mt-2 rounded-[20px] font-semibold w-fit shadow-md hover:bg-slate-400 transition px-[40px]`}
        >
          ارسل
        </button>
      </form>
    </div>
  );
}
export default Hero;
