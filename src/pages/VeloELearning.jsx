import React, { useState } from "react";

import TechnicalTraining from "./TechnicalTraining";
import Administration from "./Administration";
import Navbar from "../components/Navbar";
import TechnicalForTalent from "./TechnicalForTalent";

const ServiceTypes = [
  {
    id: 1,
    name: "Administration",
    icon: "📝",
  },
  {
    id: 2,
    name: "Technical Training",
    icon: "🔧",
  },
  {
    id: 3,
    name: "Technical For Talent",
    icon: "🎓",
  },
  {
    id: 4,
    name: "HR",
    icon: "👥",
  },
];

function VeloELearning() {
  const [selectedService, setSelectedService] = useState(null);

  // Select a service
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Go Home
  const handleHome = () => {
    setSelectedService(null);
  };

  // Go to Administration
  const handleAdministration = () => {
    const administration = ServiceTypes.find(
      (service) => service.name === "Administration"
    );

    setSelectedService(administration);
  };

  // Go to Technical Training
  const handleTechnicalTraining = () => {
    const technicalTraining = ServiceTypes.find(
      (service) => service.name === "Technical Training"
    );

    setSelectedService(technicalTraining);
  };
  // Go to Technical Training
  const handleTechnicalForTalent = () => {
    const technicalfortalent = ServiceTypes.find(
      (service) => service.name === "Technical For Talent"
    );

    setSelectedService(technicalfortalent);
  };
  // Show Technical Training
  if (
    selectedService &&
    selectedService.name === "Technical Training"
  ) {
    return (
      <TechnicalTraining
        onBack={handleHome}
        onHomeClick={handleHome}
        onAdministrationClick={handleAdministration}
        onTechnicalTrainingClick={handleTechnicalTraining}
        onTechnicalForTalentClick={handleTechnicalForTalent}
      />
    );
  }
  if(
    selectedService &&
    selectedService.name==="Technical For Talent"
  ){
    return(
      <TechnicalForTalent
      onBack={handleHome}
      onHomeClick={handleHome}
      onAdministrationClick={handleAdministration}
      onTechnicalTrainingClick={handleTechnicalTraining}
      onTechnicalForTalentClick={handleTechnicalForTalent}
      />
    );
  }

  // Show Administration
  if (
    selectedService &&
    selectedService.name === "Administration"
  ) {
    return (
      <Administration
        onBack={handleHome}
        onHomeClick={handleHome}
        onAdministrationClick={handleAdministration}
        onTechnicalTrainingClick={handleTechnicalTraining}
        onTechnicalForTalentClick={handleTechnicalForTalent}
      />
    );
  }

  // Main Home page
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
      style={{
        backgroundImage: 'url("/background.jpg")',
      }}
    >

      <Navbar
        onHomeClick={handleHome}
        onAdministrationClick={handleAdministration}
        onTechnicalTrainingClick={handleTechnicalTraining}
        onTechnicalForTalentClick={handleTechnicalForTalent}
        activePage="Home"
      />

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mt-6 text-3xl font-bold text-gray-900">
            What do you want to learn?
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {ServiceTypes.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service)}
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
              <span className="text-7xl transition group-hover:scale-110">
                {service.icon}
              </span>

              <span className="mt-6 text-2xl font-semibold text-gray-800">
                {service.name}
              </span>
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}

export default VeloELearning;