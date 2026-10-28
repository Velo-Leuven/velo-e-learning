import React from "react";

function Header() {
  return (
   
    <header className="border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
        
        <img
          src="/logo.jpg"
          alt="Velo.be"
          className="h-12 w-auto object-contain"
        />

      </div>
      
    </header>
  );
}

export default Header;