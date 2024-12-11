"use client";
import React, { useState } from "react";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import QRCode from "qrcode";
import Image from "next/image";
const Page = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState('')

  const generateQRCode = async () => {
    if (!input) {
      alert("Please enter valid input!");
      return;
    }
    try {
      const qr = await QRCode.toDataURL(input);

      setQrCode(qr)
      console.log(qr);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[url]">
      <div className="flex justify-center items-center h-screen absolute left-1/3">
        <SignedOut>
          <SignIn routing="hash" />
        </SignedOut>
      </div>
      <SignedIn>
        <div className="bg-gray-800 h-screen flex justify-center items-center gap-7">
          <div >

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text or URL"
              className="w-1/2 p-3 border bg-yellow-50 border-gray-300 rounded-md text-blue-600"
            />

            <button
              onClick={generateQRCode}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
            >
              Generate
            </button>
          </div>
          
          {qrCode?<div>
            <Image src={qrCode} height={100} width={100} alt="image"></Image>
          </div>
          :
          <Image src={`/Logo.png`} height={100} width={100} alt="image"></Image>}
      </div>

      </SignedIn>
    </div>
  );
};

export default Page;
