import React, { useState } from "react";

import WheelSWUGO from "./WheelSWUGO";
import BrakeSWUGO from "./BrakeSWUGO";
import GearSWUGO from "./GearSWUGO";
import ChainSWUGO from "./ChainSWUGO";
import TireSWUGO from "./TireSWUGO";
import LightsSWUGO from "./LightsSWUGO";
import BatterySWUGO from "./BatterySWUGO";


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

function RepairCategoriesSWUGO({ bike, onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  

 

  // Wheel procedures
  if (selectedCategory?.name === "Wheel") {
    return (
      <WheelSWUGO
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
   // Brake procedures
  if (selectedCategory?.name === "Brake") {
    return (
      <BrakeSWUGO
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
   // Gear procedures
  if (selectedCategory?.name === "Gear") {
    return (
      <GearSWUGO
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
    // Chain procedures
  if (selectedCategory?.name === "Chain") {
    return (
      <ChainSWUGO
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
   // Tire procedures
  if (selectedCategory?.name === "Tire") {
    return (
      <TireSWUGO
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
    // Lights procedures
  if (selectedCategory?.name === "Lights") {
    return (
      <LightsSWUGO
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }
  // Battery procedures
  if (selectedCategory?.name === "Battery") {
    return (
      <BatterySWUGO
        bike={bike}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <button
          onClick={onBack}
          className="mb-8 flex cursor-pointer items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="mb-12 text-center">

          <div className="flex h-full w-full items-center justify-center">
            <img
              src={bike.image}
              alt={bike.name}
              className="h-[228px] w-[356px] rounded-lg object-cover shadow-lg"
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
          {repairCategoriesSWUGO.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="
                group
                flex
                min-h-[180px]
                cursor-pointer
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

export default RepairCategoriesSWUGO;