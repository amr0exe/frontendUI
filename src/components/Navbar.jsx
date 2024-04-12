// Navbar.js

import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 w-full border-b border-purple-950 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="ml-32">
          <img src="/logs.svg" alt="not here" className="w-24 h-16"/>
        </div> 

        <div className="flex gap-4 mr-44 text-white text-base font-sans items-center">
          <p>Blog</p>
          <p>Documentation</p>
          <p>Usecases</p>
          <p>Contribute</p>
          <p>About</p>
          <p>Forum</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
