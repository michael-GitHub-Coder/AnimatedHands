import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const AnimatedLoginForm = () => {
  const [isHide, setIsHide] = useState(false);

  const hideDog = () => {
    setIsHide(!isHide);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-radial from-gray-300 to-[#93B5C6]">
      <div className="container mx-auto shadow-lg bg-gradient-radial from-[#865439] to-[#91684A] w-[350px] h-[600px] border-2 border-black rounded-lg relative">
        <div className="dog relative w-full h-[288px]">
          <div className="ear-left absolute w-[100px] h-[100px] bg-[#91684A] rounded-br-full"></div>
          <div className="ear-right absolute right-0 w-[100px] h-[100px] bg-[#91684A] rounded-bl-full"></div>
          <div className="eye-left w-[50px] h-[50px] bg-white rounded-full absolute top-[50px] left-[90px] z-10"></div>
          <div className="eye-right w-[50px] h-[50px] bg-white rounded-full absolute top-[50px] left-[210px] z-10"></div>
          {/* {isHide && (
            <> */}
              <div className="eye-hide-left w-[50px] h-[50px] bg-[#222831] rounded-full absolute top-[50px] left-[90px] z-20"></div>
              <div className="eye-hide-right w-[50px] h-[50px] bg-[#222831] rounded-full absolute top-[50px] left-[210px] z-20"></div>
            {/* </>
          )} */}
          <div className="nose w-[40px] h-[30px] bg-[#91684A] absolute top-[110px] left-[155px] rounded-full shadow-md"></div>
          <div className="nose::before content-[''] w-[20px] h-[10px] bg-[#222831] absolute top-[114px] left-[165px] rounded-full"></div>
          <div className="mouth w-[100px] h-[70px] border-4 border-t-transparent border-l-transparent border-r-transparent border-black absolute top-[95px] left-[125px] rounded-full z-10"></div>
        </div>

        {/* Hands */}
        <div className={`hand-left ${isHide ? 'left-[75px] top-[64px] rotate-[-150deg]' : 'left-[50px] top-[270px] rotate-[-5deg]'} absolute w-[62px] h-[35px] z-20 transition-all duration-300`}>
          <div className="h1-left w-[20px] h-[30px] bg-gradient-radial from-[#865439] to-[#91684A] bg-[#91684A] border-4 border-black rounded-tl-[20px] absolute left-0 top-[5px]"></div>
          <div className="h2-left w-[20px] h-[40px] bg-gradient-radial from-[#865439] to-[#91684A] bg-[#91684A] border-4 border-black rounded-bl-[20px] absolute left-[15px]"></div>
          <div className="h3-left w-[20px] h-[30px] bg-gradient-radial from-[#865439] to-[#91684A] bg-[#91684A] border-4 border-black rounded-br-[20px] absolute left-[31px] top-[2px]"></div>
        </div>
        <div className={`hand-right ${isHide ? 'left-[206px] top-[69px] rotate-[150deg]' : 'left-[235px] top-[270px] rotate-[5deg]'} absolute w-[62px] h-[35px] z-20 transition-all duration-300`}>
          <div className="h1-right w-[20px] h-[30px] bg-gradient-radial from-[#865439] to-[#91684A] bg-[#91684A] border-4 border-black rounded-tr-[20px] absolute left-[31px] top-[5px]"></div>
          <div className="h2-right w-[20px] h-[40px] bg-gradient-radial from-[#865439] to-[#91684A] bg-[#91684A] border-4 border-black rounded-br-[20px] absolute left-[15px]"></div>
          <div className="h3-right w-[20px] h-[30px] bg-gradient-radial from-[#865439] to-[#91684A] bg-[#91684A] border-4 border-black rounded-tl-[20px] absolute left-0 top-[2px]"></div>
        </div>

        {/* Form */}
        <div className="form flex flex-col items-center mt-8">
          <input className="input-box rounded border-2 border-black p-2 mb-2 -mt-5" placeholder="User Name" />
          <input id="pwd" type="password" placeholder="Password" className="input-box rounded border-2 border-black p-2" onFocus={hideDog} onBlur={hideDog} />
          <input id="btn" type="submit" value="Login" className="mt-4 bg-[#222831] text-white font-mono py-3 px-6 rounded cursor-pointer hover:bg-[#C9CCD5] hover:text-[#222831]" />
          <div className="orDiv flex items-center justify-between w-full mt-4">
            <hr className="w-1/3" />
            <b className="txt text-gray-500">Or</b>
            <hr className="w-1/3" />
          </div>
          <div className="btns flex justify-center mt-4 space-x-4">
            <FaFacebook size={30} color="#222831" className="cursor-pointer hover:rotate-45 transform transition duration-500" />
            <FaWhatsapp size={30} color="#222831" className="cursor-pointer hover:rotate-45 transform transition duration-500"/>
            <FaTwitter size={30} color="#222831" className="cursor-pointer hover:rotate-45 transform transition duration-500"/>
            <FaInstagram size={30} color="#222831" className="cursor-pointer hover:rotate-45 transform transition duration-500"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLoginForm;
