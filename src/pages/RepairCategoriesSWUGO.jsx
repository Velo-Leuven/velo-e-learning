import React, { useState } from "react";

import WheelSWUGO from "./WheelSWUGO";
import BrakeSWUGO from "./BrakeSWUGO";
import GearSWUGO from "./GearSWUGO";
import ChainSWUGO from "./ChainSWUGO";
import TireSWUGO from "./TireSWUGO";
import LightsSWUGO from "./LightsSWUGO";
import BatterySWUGO from "./BatterySWUGO";
import Navbar from "../components/Navbar";


const repairCategoriesSWUGO = [
  {
    id: 1,
    name: "Wheel",
    icon: "🔧",
  },
  {
    id: 2,
    name: "Brake",
    icon: "🛑",
  },
  {
    id: 3,
    name: "Gear",
    icon: "⚙️",
  },
  {
    id: 4,
    name: "Chain",
    icon: "⛓️",
  },
  {
    id: 5,
    name: "Tire",
    icon: "🛞",
  },
  {
    id: 6,
    name: "Lights",
    icon: "💡",
  },
  {
    id: 7,
    name: "Battery",
    icon: "🔋",
  },
];

function RepairCategoriesSWUGO({admin,
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick,
  onTechnicalForTalentClick, firtsname, }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
 
 // Select a repair category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Return to the repair categories
  const handleBack = () => {
    setSelectedCategory(null);
  };
 

  // Wheel procedures
  if (selectedCategory?.name === "Wheel") {
    return (
      <WheelSWUGO
         admin={selectedCategory}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }
   // Brake procedures
  if (selectedCategory?.name === "Brake") {
    return (
      <BrakeSWUGO
        admin={selectedCategory}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }
   // Gear procedures
  if (selectedCategory?.name === "Gear") {
    return (
      <GearSWUGO
       admin={selectedCategory}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }
    // Chain procedures
  if (selectedCategory?.name === "Chain") {
    return (
      <ChainSWUGO
       admin={selectedCategory}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }
   // Tire procedures
  if (selectedCategory?.name === "Tire") {
    return (
      <TireSWUGO
        admin={selectedCategory}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }
    // Lights procedures
  if (selectedCategory?.name === "Lights") {
    return (
      <LightsSWUGO
         admin={selectedCategory}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }
  // Battery procedures
  if (selectedCategory?.name === "Battery") {
    return (
      <BatterySWUGO
         admin={selectedCategory}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
        
      />
    );
  }

  

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
      style={{
        backgroundImage: `url("${import.meta.env.BASE_URL}/bgtt1.jpg")`,
      }}
    >
      <Navbar
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
        activePage="Technical Training"
      />

      <div className="mx-auto max-w-5xl">
        {/* Back button */}
        <button
          type="button"
          onClick={onBack}
          className="mb-8 flex cursor-pointer items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="mb-12 text-center">
          {admin?.image && (
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={admin.image}
                alt={admin.name}
                className="h-57 w-89 rounded-lg object-cover shadow-lg"
              />
            </div>
          )}

          <h1 className="mt-4 text-4xl font-bold text-red-500">
            {admin?.name || "Repair Categories"}
          </h1>

          <p className="mt-4 text-2xl font-bold text-white font-serif tracking-wide background-clip-text  bg-gradient-to-r from-red-200 to-pink-800">
            Wat wil je repareren?
          </p>
        </div>

        {/* Repair categories */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {repairCategoriesSWUGO.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="group flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-95"
            >
              <span className="text-5xl transition group-hover:scale-110">
                {category.icon}
              </span>

              <span className="mt-5 text-xl font-semibold text-gray-800">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}



export default RepairCategoriesSWUGO;