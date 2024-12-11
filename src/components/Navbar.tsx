"use client";
import React, { useState } from "react";
import Button from "./Button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
// import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="z-50 bg-[#9a82b4] w-full lg:h-20 flex justify-between items-center sticky top-0">
        {/* Parent container for Image needs to have relative positioning */}
        <div className="flex justify-center items-center p-4 mx-5 lg:mx-14">
          {/* <Image src={"/Logo.png"} alt="logo" height={20} width={20} className="h-20 w-20 p-4 "/> */}
          <Link href={"/"}>
          
          <h1 className="font-bold lg:text-4xl text-lg">
            Byte<span className="text-[#63baaa]">Scan</span>
          </h1>
          </Link>
        </div>
        <div className="flex gap-4 justify-center items-center mx-14 ">
          <div className="hidden lg:flex">
            <Button link="save" title="Saved QR" />
            <Button link="about" title="About Us" />
            <button className="ml-4 hover:bg-[#63baaa] p-2 rounded-md"> <UserButton/>
              
              </button>
          </div>

          <div
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            className="cursor-pointer lg:hidden"
          >
            {isOpen ? (
              <div className="text-black text-4xl absolute top-2 right-7">x</div>
            ) : (
              <div className="absolute top-6 right-8 " >
            
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>
            )}
          </div>

          {isOpen ? (
            <div className="absolute top-12 right-0 w-full">
              <ul className="block text-center w-full lg:hidden bg-[#9a82b4]">
              <li>

                <UserButton/>

                </li>
                <li>
                  
                  <Button link="save" title="Saved QR" />
                </li>
                <li>
                  <Button link="about" title="About Us" />
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
