'use client'
import React, { useState } from 'react'
import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs'
import QRCode from 'qrcode'


const Page = () => {
  const [input, setInput] = useState('')
  
  const generateQRCode = async () => {
    if (!input) {
      alert('Please enter valid input!');
      return;
    }
    try {
      const qr = await QRCode.toDataURL(input);
      
      console.log(qr);
    } catch (err) {
      console.error(err);
    }
  }



  return (
    <>
    <div className='flex bg-gray-800 justify-center items-center h-screen absolute left-1/3'>

    <SignedOut>
      <SignIn routing='hash' />
    </SignedOut>
    </div>
    <SignedIn>


    <div>

      <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text or URL"
            className="w-1/2 p-3 border border-gray-300 rounded-md text-blue-600"
          />

<button
          onClick={generateQRCode}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        >
          Generate QR Code
        </button>
    </div>


    </SignedIn>
    </>
  )
}

export default Page