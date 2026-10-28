 import React, { useState } from "react";
import SWUGOWeelDetail from "./SWUGOWeelDetail";

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
    time: "25 min",
  },
];

function WheelSWUGO({ bike, onBack }) {
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  // Show the selected procedure
  if (selectedProcedure) {
    return (
      <SWUGOWeelDetail
        procedure={selectedProcedure}
        bike={bike}
        onBack={() => setSelectedProcedure(null)}
      />
    );
  }

  return (
    <div className="min-h-screen  px-6 py-12">

      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700 cursor-pointer"
        >
          ← Back to repair categories
        </button>

        {/* Header */}
        <div className="mb-12 text-center">

          <div className="text-6xl">
            🔧
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Wheel
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            {bike.name}
          </p>

          <p className="mt-2 text-lg text-gray-500">
            Select the procedure
          </p>

        </div>

        {/* Procedures */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {procedures.map((procedure) => (

            <button
              key={procedure.id}
              onClick={() => setSelectedProcedure(procedure)}
              className="
                group
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-8
                text-left
                shadow-sm
                transition
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
                active:scale-[0.98]
                cursor-pointer
              "
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

export default WheelSWUGO;