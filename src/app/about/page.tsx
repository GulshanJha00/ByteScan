import React from 'react';

const Page = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
      {/* Container */}
      <div className="max-w-4xl mx-auto p-10">
        <h1 className="text-4xl font-extrabold text-center mt-10 mb-5">Welcome to ByteScan</h1>

        {/* How to Use Section */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg mt-8">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-5">New to ByteScan? Here's How to Use</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Enter the URL or text you want to generate into a QR Code in the input field.</li>
            <li>Click on the "Generate QR" button to create the QR code instantly.</li>
            <li>Download the generated QR code or share it directly wherever you want.</li>
          </ol>
        </div>

        {/* About Me Section */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg mt-8">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-5">About Me</h2>
          <p className="text-lg">
            Hello! I'm <strong>Gulshan Kumar</strong>, a 3rd semester Information Science Engineering (ISE) student
            at the National Institute of Engineering, Mysore. I'm passionate about web development and building
            useful tools to make life easier.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg mt-8 mb-10">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-5">Contact</h2>
          <p className="text-lg">Feel free to reach out to me at:</p>
          <a
            href="mailto:gulshankumarjha0707@gmail.com"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            gulshankumarjha0707@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;