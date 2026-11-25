 import React, { useState } from "react";
import ProcedureDetail from "./ProcedureDetail";
import Navbar from "../components/Navbar";

const procedures = [
  {
    id: 1,
    name: "Change Front Wheel",
    icon: "🚲",
    difficulty: "Medium",
    time: "10 min",
  },
  {
    id: 2,
    name: "Change Rear Wheel",
    icon: "🚲",
    difficulty: "Advanced",
    time: "20 min",
  },
];

function WheelProcedures({
  admin,
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick,
  onTechnicalForTalentClick,
}) {
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  // Open the selected procedure
  const handleProcedureClick = (procedure) => {
    setSelectedProcedure(procedure);
  };

  // Return to the wheel procedures list
  const handleBack = () => {
    setSelectedProcedure(null);
  };

  // Handle navigation back to the main pages
  const handleHomeNavigation = () => {
    setSelectedProcedure(null);
    if (onHomeClick) onHomeClick();
  };

  const handleAdministrationNavigation = () => {
    setSelectedProcedure(null);
    if (onAdministrationClick) onAdministrationClick();
  };

  const handleTechnicalTrainingNavigation = () => {
    setSelectedProcedure(null);
    if (onTechnicalTrainingClick) onTechnicalTrainingClick();
  };

  const handleTechnicalForTalentNavigation = () => {
    setSelectedProcedure(null);
    if (onTechnicalForTalentClick) onTechnicalForTalentClick();
  };

  // Show the selected procedure
  if (selectedProcedure) {
    return (
      <ProcedureDetail
        procedure={selectedProcedure}
        admin={admin}
        onBack={handleBack}
        onHomeClick={handleHomeNavigation}
        onAdministrationClick={handleAdministrationNavigation}
        onTechnicalTrainingClick={handleTechnicalTrainingNavigation}
        onTechnicalForTalentClick={handleTechnicalForTalentNavigation}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
      
       style={{ backgroundImage: `url("${import.meta.env.BASE_URL}/bgtt.jpg")` }}
    >
      <Navbar
        onHomeClick={handleHomeNavigation}
        onAdministrationClick={handleAdministrationNavigation}
        onTechnicalTrainingClick={handleTechnicalTrainingNavigation}
        onTechnicalForTalentClick={handleTechnicalForTalentNavigation}
        activePage="Technical Training"
      />

      <div className="mx-auto max-w-5xl">
        {/* Back button */}
        <button
          type="button"
          onClick={onBack}
          className="mb-8 flex cursor-pointer items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700"
        >
          ← Back to repair categories
        </button>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="text-6xl">🔧</div>

          

          {admin?.name && (
            <p className="mt-4 text-4xl font-bold text-red-600">
              {admin.name}
            </p>
          )}

          <p className="mt-4 text-2xl font-bold text-white font-serif tracking-wide background-clip-text  bg-gradient-to-r from-red-200 to-pink-800">
            Slecteer de procedure
          </p>
        </div>

        {/* Procedures */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {procedures.map((procedure) => (
            <button
              type="button"
              key={procedure.id}
              onClick={() => handleProcedureClick(procedure)}
              className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-100 text-4xl">
                  {procedure.icon}
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {procedure.name}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    ⏱ {procedure.time}
                  </p>

                  <p className="mt-1 text-gray-500">
                    Difficulty: {procedure.difficulty}
                  </p>
                </div>
              </div>

              <div className="mt-6 text-right text-gray-500">
                Open procedure →
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WheelProcedures;