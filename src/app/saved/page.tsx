'use client'
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Profile = () => {
  const [savedQRCodes, setSavedQRCodes] = useState([]);

  useEffect(() => {
    const savedQRs = JSON.parse(localStorage.getItem("savedQRs") || "[]");

    setSavedQRCodes(savedQRs);
  }, []);

  return (
    <>
    <div className="flex justify-center items-center h-screen absolute">
    <SignedOut><SignIn routing="hash"/></SignedOut>
    </div>
    
    <SignedIn>
    <div className="bg-[#6e2bdc] min-h-screen">
      <div className="flex justify-center p-10 lg:p-20">
        <h1 className="text-[#fceaff] font-sans font-bold text-3xl lg:text-5xl">
          Your Saved QR Codes
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center p-6">
        {savedQRCodes.length > 0 ? (
          savedQRCodes.map((qr, index) => (
            <div key={index} className="m-4">
              <img src={qr} alt={`Saved QR Code ${index + 1}`} className="h-60 w-60" />
            </div>
          ))
        ) : (
          <p>No QR Codes saved.</p>
        )}
      </div>
    </div>
    </SignedIn>
    </>

    
  );
};

export default Profile;
