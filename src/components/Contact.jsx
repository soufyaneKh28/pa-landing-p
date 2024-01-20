import { contact_img, response } from "../assets";
import { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import styles from "../style";


import { isValidPhoneNumber } from "libphonenumber-js";
const Contact = ({ handleAlertClose, handleAlertOpen, handleOpen }) => {
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
  function inputClear() {
    setPhone("");
    setFormData({
      fullname: "",
      message: "",
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(phone);

    if (!isValidPhoneNumber(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!(formData.fullname && formData.message && phone)) {
      handleAlertOpen();
      return;
    }

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
    formChecking();
    inputClear();
  };

  function formChecking() {
    if (formData.fullname && formData.message && phone) {
      handleOpen();
      handleAlertClose();
    } else {
      handleAlertOpen();
    }
  }
  return (
    <section className=" gradient-contact" id="Contact-Us">
      <div className="container p-6 flex flex-col justify-center items-center ">
        <div className="flex  justify-center items-center ">
          <div className="flex-1">
            <h3 className="text-[35px] text-[#D7D4FC] font-medium">
              هيا لنتحدث
            </h3>
            <p className=" text-white mt-3">
              اكتب لنا أي شيء يدور في ذهنك، فنحن هنا من أجلك على مدار الساعة
              طوال أيام الأسبوع
            </p>
          </div>
          <div className="flex-1">
            <img src={contact_img} alt=" contact-img" />
          </div>
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col items-center  justify-center w-full"
          >
            <div className="flex flex-col w-full sm:flex-row mt-3 ">
              <div className="flex flex-col sm:w-[50%] mt-3 sm:ml-2">
                <label htmlFor="fullname">الاسم الكامل</label>
                <input
                  id="fullname"
                  required
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="اكتب اسمك"
                />
              </div>
              <div className="flex flex-col sm:w-[50%] mt-3 sm:mr-2 footer-form-cont">
                <label htmlFor="phone">الهاتف</label>
                <PhoneInput
                  required
                  defaultCountry="tr"
                  id="phone"
                  value={phone}
                  onChange={(phone) => setPhone(phone.toString())}
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-3">
              <label htmlFor="">اكتب رسالتك</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                id=""
                cols="30"
                rows="10"
                placeholder="اكتب رسالتك"
              ></textarea>
            </div>
            <div>
              <button
                onClick={""}
                className={`${styles.button} my-5 rounded-[20px] font-semibold w-fit shadow-md hover:bg-slate-400 transition px-10`}
                type="submit"
              >
                ارسل
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
