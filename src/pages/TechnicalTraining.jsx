import React, { useState } from "react";

import RepairCategories from "./RepairCategories";
import RepairCategoriesEBike from "./RepairCategoriesEBike";
import RepairCategoriesSWUGO from "./RepairCategoriesSWUGO";
import Navbar from "../components/Navbar";

const bikeTypes = [
  {
    id: 1,
    name: "City Bike",
    image: `${import.meta.env.BASE_URL}/media/biketypes/normalbike.jpg`,
  },
  {
    id: 2,
    name: "E-Bike",
    image: `${import.meta.env.BASE_URL}/media/biketypes/Ebike.jpg`,
  },
  {
    id: 3,
    name: "SWUGO Bike",
    image: `${import.meta.env.BASE_URL}/media/biketypes/swugo.jpg`,
  },
  {
    id: 4,
    name: "Other",
    icon: "🚲",
  },
];

function TechnicalTraining({
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick,
   onTechnicalForTalentClick,
 }) {




  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleAdminClick = (admin) => {
    setSelectedAdmin(admin);
  };

  const handleBack = () => {
    
    setSelectedAdmin(null);
    //onBack();
     
  };
  const handleAdministrationClick = () => {
  setSelectedAdmin(null);
  onTechnicalTrainingClick();
};

  // Show repair categories
  if (selectedAdmin && selectedAdmin.name === "City Bike") {
    return (
      <RepairCategories
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={handleAdministrationClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      
      />
    );
  }
  else if (selectedAdmin && selectedAdmin.name === "E-Bike") {
    return (
      <RepairCategoriesEBike
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={handleAdministrationClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }
  else if (selectedAdmin && selectedAdmin.name === "SWUGO Bike") {
    return (
      <RepairCategoriesSWUGO
       admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={handleAdministrationClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
        
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
      
       style={{ backgroundImage: `url("${import.meta.env.BASE_URL}/bgtt.jpg")` }}
    >

      {/* Navbar */}
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
          onClick={onBack}
          className="
            mb-8
            flex
            items-center
            gap-2
            rounded-lg
            bg-gray-800
            px-5
            py-3
            text-white
            transition
            hover:bg-gray-700
            cursor-pointer
          "
        >
          ← Back to E-Learning
        </button>

        {/* Header */}
        <div className="mb-12 text-center">

          
          <h2 className="mt-2 text-3xl font-bold text-red-500">
            TECHNICAL TRAINING
          </h2>

          <p className="mt-6 text-2xl font-bold text-white font-serif tracking-wide background-clip-text  bg-gradient-to-r from-red-200 to-pink-800">
            Wat wil je repareren?
          </p>

        </div>

        {/* Bike cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {bikeTypes.map((bike) => (
            <button
              key={bike.id}
              onClick={() => handleAdminClick(bike)}
              className="
                group
                flex
                min-h-[200px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-sm
                transition
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
                active:scale-95
                cursor-pointer
              "
            >

              {bike.image ? (
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="
                    h-40
                    w-full
                    object-contain
                    transition
                    duration-200
                    group-hover:scale-105
                  "
                />
              ) : (
                <span className="text-7xl">
                  {bike.icon}
                </span>
              )}

              <span className="mt-6 text-2xl font-semibold text-gray-800">
                {bike.name}
              </span>

            </button>
          ))}

        </div>
      </div>
    </div>
  );
}

export default TechnicalTraining;