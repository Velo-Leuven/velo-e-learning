 import React, { useState } from "react";
import WheelProcedures from "./WheelProcedures";
import ProcedureDetail from "./ProcedureDetail";
import BrakeCityBike from "./BrakeCityBike";
import GearCityBike from "./GearCityBike";
import ChainCityBike from "./ChainCityBike";
import TireCityBike from "./TireCityBike";
import LightsCityBike from "./LightsCityBike";

const repairCategories = [
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
];

function RepairCategories({ bike, onBack }) {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  

  // Wheel procedures
  if (selectedCategory?.name === "Wheel") {
    return (
      <WheelProcedures
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }

   // Brake procedures
  if (selectedCategory?.name === "Brake") {
    return (
      <BrakeCityBike
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
  // Gear procedures
  if (selectedCategory?.name === "Gear") {
    return (
      <GearCityBike
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
  // Chain procedures
  if (selectedCategory?.name === "Chain") {
    return (
      <ChainCityBike
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
  // Tire procedures
  if (selectedCategory?.name === "Tire") {
    return (
      <TireCityBike
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
  // Lights procedures
  if (selectedCategory?.name === "Lights") {
    return (
      <LightsCityBike
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen  px-6 py-12">

      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700 cursor-pointer"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="mb-12 text-center">

          <div className="h-full w-full flex items-center justify-center">
  <img
    src={bike.image}
    alt={bike.name}
    className="object-cover h-57 w-89 rounded-lg shadow-lg"
  />
</div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            {bike.name}
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            What do you want to repair?
          </p>

        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">

          {repairCategories.map((category) => (

            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="
                group
                flex
                min-h-[180px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
                active:scale-95
                cursor-pointer
              "
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

export default RepairCategories;