import React, { useState } from "react";

import RepairCategories from "./RepairCategories";
import RepairCategoriesEBike from "./RepairCategoriesEBike";
import RepairCategoriesSWUGO from "./RepairCategoriesSWUGO";
import Navbar from "../components/Navbar";

const bikeTypes = [
  {
    id: 1,
    name: "City Bike",
    image: "/media/biketypes/normalbike.jpg",
  },
  {
    id: 2,
    name: "E-Bike",
    image: "/media/biketypes/Ebike.jpg",
  },
  {
    id: 3,
    name: "SWUGO Bike",
    image: "/media/biketypes/swugo.jpg",
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
  const [selectedBike, setSelectedBike] = useState(null);

  const handleBikeClick = (bike) => {
    setSelectedBike(bike);
  };

  const handleBack = () => {
    setSelectedBike(null);
  };

  // Show repair categories
  if (selectedBike && selectedBike.name === "City Bike") {
    return (
      <RepairCategories
        bike={selectedBike}
        onBack={handleBack}
      />
    );
  }else if (selectedBike && selectedBike.name === "E-Bike") {
    return (
      <RepairCategoriesEBike
        bike={selectedBike}
        onBack={handleBack}
      />
    );
  }else if (selectedBike && selectedBike.name === "SWUGO Bike") {
    return (
      <RepairCategoriesSWUGO
        bike={selectedBike}
        onBack={handleBack}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
      style={{
        backgroundImage: 'url("/bgtt.jpg")',
      }}
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

          <p className="mt-6 text-2xl font-bold text-gray-600">
            What do you want to repair?
          </p>

        </div>

        {/* Bike cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {bikeTypes.map((bike) => (
            <button
              key={bike.id}
              onClick={() => handleBikeClick(bike)}
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