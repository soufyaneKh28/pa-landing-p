import { icon_email, icon_phone, logo_footer } from "../assets";
import { footer_icons } from "../constants";

const Footer = () => (
  <footer className=" bg-[#272727]" id="">
    <div className="container pb-10 sm:pb-5 pt-5 px-6">
      <div className=" flex flex-col sm:flex-row justify-between " dir="ltr">
        <div className="flex justify-center sm:justify-start p-5">
          <img src={logo_footer} alt="logo" className=" w-[200px]" />
        </div>

        <div className="  my-3 flex flex-col items-end">
          <p className="mr-1 text-white font-medium">تابعنا</p>
          <ul className=" flex">
            {footer_icons.map((icon) => (
              <li
                key={icon.id}
                className=" bg-white p-2 w-10 h-10 m-1 rounded-md hover:scale-110 transition"
              >
                <a href={icon.link}>
                  <img
                    src={icon.img}
                    alt={icon.id}
                    className=" w-[100%] h-[100%] object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" py-6 sm:flex sm:justify-between ">
        <div className="">
          <div>
            <p className="mr-1 text-white font-medium">الهاتف</p>
            <div className="flex mt-1 justify-start items-center">
              <div className="w-10 h-10 p-1">
                <img
                  src={icon_phone}
                  alt="icon_phone"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mr-4 text-white" dir="ltr">
                <p>+90 544 260 60 00</p>
                <p>+90 544 260 60 00</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="mr-1 text-white font-medium">البريد إلكتروني</p>
            <div className="flex mt-1 justify-start items-center">
              <div className="w-10 h-10 p-1">
                <img
                  src={icon_email}
                  alt="icon_email"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mr-4 text-white" dir="ltr">
                <p>info@arzhairgroup.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className=" text-white mt-4">
            !أطلق العنان للرؤى الحصرية - اشترك الآن
          </p>

          <form action="">
            <div className="mt-2">
              <label htmlFor="">اكتب بريدك الإلكتروني </label>
              <input
                type="email"
                className="w-full bg-dimWhite  text-white shadow-inner border-none mt-2 placeholder:text-white"
                placeholder="ايميل"
              />
            </div>
            <button
              className=" w-full bg-secondary text-white font-medium py-3 my-3 rounded-md hover:bg-green-800 transition"
              type="submit"
            >
              اشترك
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
