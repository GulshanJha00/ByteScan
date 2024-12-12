'use client'
import QRCode from "qrcode";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [input, setInput] = useState("");
  const [QrCode, setQrCode] = useState("");

  const downloadQR = () => {
    if (QrCode) {
      const link = document.createElement("a");
      link.href = QrCode;  // QR code data URL
      link.download = "QRCode.png";  // Name of the downloaded file
      link.click();  // Trigger download
    } else {
      alert("Please generate a QR code first.");
    }
  };

  const saveQRCode = () => {
    if (QrCode) {
      // Get the current saved QR codes from localStorage
      const savedQRs = JSON.parse(localStorage.getItem("savedQRs") || "[]");
  
      // Add the new QR code to the array
      savedQRs.push(QrCode);
  
      // Save the updated array back to localStorage
      localStorage.setItem("savedQRs", JSON.stringify(savedQRs));
  
      window.location.href = "/saved";  // Redirect to profile page
    } else {
      alert("Please generate a QR code first.");
    }
  };
  
  


  const generateQR = async () => {
    if (!input) return alert('Please enter valid input!');
    try {
      const qr = await QRCode.toDataURL(input);
      setQrCode(qr);
      localStorage.setItem("savedQRCode", qr);  // Save QR code to localStorage
    } catch (err) {
      alert('Failed to generate QR code!' + err);
    }
  };

  

  return (
    <div className="bg-[#6e2bdc] min-h-screen">
      {/* Title Section */}
      <div className="flex justify-center p-10 lg:p-20">
        <h1 className="text-[#fceaff] font-sans font-bold text-3xl whitespace-nowrap lg:text-5xl">
          Welcome To <span className="border-y-2">Byte<span className="text-[#63baaa]">Scan</span></span>
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-10 h-auto">
        {/* Left Section */}
        <div className="bg-[#ffffff] flex flex-col items-center justify-center p-6 min-h-[400px]">
          <h1 className="font-bold text-[#63baaa] text-3xl font-sans">
            Enter Your URL here
          </h1>
          <input
            type="text"
            placeholder="Enter Your Website, any URL or any Text"
            className="h-10 text-black mt-4 w-full sm:w-80 p-2 border-black border-2 rounded-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={generateQR}
            className="mt-10 bg-[#63baaa] text-white p-2 rounded-lg"
          >
            Generate QR
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-[#63baaa] flex flex-col items-center p-3 min-h-[300px]">
          {QrCode ? (
            <Image
              src={QrCode}
              className="h-60 w-60 lg:h-72 lg:w-72"
              height={100}
              width={100}
              alt="QR Code"
            />
          ) : (
            <Image
              src={"/Logo.png"}
              className="h-60 w-60 lg:h-72 lg:w-72"
              height={100}
              width={100}
              alt="Logo"
            />
          )}
          <div className="flex justify-center items-center gap-7 mt-2 p-2">
            <button onClick={saveQRCode} className="bg-[#6e2bdc] p-2"> Save</button>
            <button onClick={downloadQR} className="bg-[#6e2bdc] p-2">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
