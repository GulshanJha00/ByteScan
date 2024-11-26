import React from "react";
import Button from "./Button";
// import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className=" hidden bg-gray-700 w-full h-24 lg:flex justify-between items-center">
        {/* Parent container for Image needs to have relative positioning */}
        <div className="flex justify-center items-center p-4 mx-14">

          {/* <Image src={"/Logo.png"} alt="logo" height={20} width={20} className="h-20 w-20 p-4 "/> */}
          <h1 className="font-bold lg:text-4xl text-lg">Byte<span className="text-blue-600">Scan</span></h1>
          </div>
        <div className="flex gap-4 justify-center items-center mx-14 ">
          <Button link="signin" title="Sign In"/>
          <Button link="signup" title="Sign Up" />
        </div>
      </div>

      <div className="lg:hidden ">

      </div>
    
    </>
  );
};

export default Navbar;
