"use client";
import React, { useState } from "react";
import Button from "./Button";
// import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="z-50 bg-gray-700 w-full h-24 flex justify-between items-center">
        {/* Parent container for Image needs to have relative positioning */}
        <div className="flex justify-center items-center p-4 mx-5 lg:mx-14">
          {/* <Image src={"/Logo.png"} alt="logo" height={20} width={20} className="h-20 w-20 p-4 "/> */}
          <h1 className="font-bold lg:text-4xl text-lg">
            Byte<span className="text-blue-600">Scan</span>
          </h1>
        </div>
        <div className="flex gap-4 justify-center items-center mx-14 ">
          <div className="hidden lg:flex">
            <Button link="signin" title="Sign In" />
            <Button link="signup" title="Sign Up" />
          </div>

          <div
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            className="cursor-pointer lg:hidden"
          >
            {isOpen ? (
              <div className="text-black text-4xl absolute top-4 right-7">x</div>
            ) : (
              <div className="absolute top-8 right-8 " >
            
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>
            )}
          </div>

          {isOpen ? (
            <div className="absolute top-16 right-0 w-full">
              <ul className="block text-center w-full lg:hidden bg-gray-700">
                <li>
                  <Button link="signin" title="Sign In" />
                </li>
                <li>
                  <Button link="signup" title="Sign Up" />
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
