import React from "react";
import { whatsApp_stikey } from "../assets";

const Menu = () => (
  <div className="  w-full menu fixed bg-white flex justify-around bottom-0 sm:hidden z-[1000] shadow ">
    <div className="w-[50%] flex justify-center border-l-purple-600 border-l-3 h-full ">
      <button className=" w-full h-full py-4 border-l-[2px]">chat</button>
    </div>
    <div className="w-[50%] flex justify-center h-full ">
      <button className=" w-full h-full py-4 flex flex-row-reverse justify-center items-center">
        <img src={whatsApp_stikey} alt="" className=" w-10 mr-2" />
        whatsapp
      </button>
    </div>
  </div>
);

export default Menu;
