import React from "react";

function Navbar({
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick,
  onTechnicalForTalentClick,
  activePage,
}) {
  return (
    <nav className="mb-8 bg-gray-900 px-6 py-4 text-white font-bold shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between ">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <button
  onClick={onHomeClick}
  className="flex items-center gap-3 cursor-pointer"
  aria-label="Go to Home"
>

          <img
            src="/logo.jpg"
            alt="VELO.BE"
            className="h-10 w-auto object-contain"
          />

          <span className="text-xl font-bold">

            E-Learning Platform
            
          </span>
</button>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <button
            onClick={onHomeClick}
            className={`transition ${activePage==="Home" ? "text-blue-400":"text-white hover:text-blue-400 cursor-pointer"}`}  
          >
            Home
          </button>

          <button
            onClick={onAdministrationClick}
            className={`transition ${activePage==="Administration"?"text-blue-400 cursor-pointer": "text-white hover:text-blue-400 cursor-pointer"}`}
          >
            Administration
          </button>

          <button
            onClick={onTechnicalTrainingClick}
            className={`transition ${activePage==="Technical Training"?"text-blue-400 cursor-pointer": "text-white hover:text-blue-400 cursor-pointer"}`}
          >
            Technical Training
          </button>

          <button
            onClick={onTechnicalForTalentClick}
            className={`transition ${activePage==="Technical For Talent"?"text-blue-400 cursor-pointer": "text-white hover:text-blue-400 cursor-pointer"}`}
          >
            Technical For Talent
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;