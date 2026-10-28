import React, { useState } from "react";

const SWUGOTireData = {
  
    difficulty: "Medium",
    time: "10 minutes",

    tools: [
      "Allen key",
      "Torque wrench",
      "Bike repair stand",
    ],

    steps: [
      {
        number: 1,
        title: "Prepare the bike",
        instruction:
          "Place the bicycle securely on the repair stand. Make sure the bike is stable before starting the repair.",
        image: "/media/wheel/front-wheel-step1.jpg",
      },
      {
        number: 2,
        title: "Release the brake",
        instruction:
          "Release the front brake so that the wheel can be removed safely.",
        warning:
          "Make sure the brake is completely released before removing the wheel.",
           image: "/media/wheel/maxresdefault.jpg",
      },
      {
        number: 3,
        title: "Remove the axle",
        instruction:
          "Use the correct tool to loosen the front axle. Keep the axle and washers in a safe place.",
      },
      {
        number: 4,
        title: "Remove the wheel",
        instruction:
          "Carefully remove the front wheel from the fork. Avoid damaging the brake or other components.",
      },
      {
        number: 5,
        title: "Install the new wheel",
        instruction:
          "Place the new wheel correctly between the fork legs and insert the axle.",
      },
      {
        number: 6,
        title: "Tighten the axle",
        instruction:
          "Tighten the axle using the correct torque specified for this bicycle.",
        warning:
          "Do not overtighten the axle. Always follow the manufacturer's torque specification.",
      },
      {
        number: 7,
        title: "Check the brake",
        instruction:
          "Reconnect the brake and check that the brake pads are correctly aligned with the rim or disc.",
      },
      {
        number: 8,
        title: "Final safety check",
        instruction:
          "Spin the wheel and check that it rotates freely. Check the brake and make sure the wheel is securely installed.",
      },
    ],
    video: "/media/wheel/front-wheel.mp4",
  
    
};

function TireSWUGO({ procedure, bike, onBack }) {
  const [currentStep, setCurrentStep] = useState(0);

 

  const step = SWUGOTireData.steps[currentStep];

  const nextStep = () => {
    if (currentStep < SWUGOTireData.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen px-6 py-12">

      {/* Top bar */}
      <div className="border-b bg-white">

        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700 cursor-pointer"
          >
            ← Back
          </button>

          <span className="text-sm text-gray-500">
            {currentStep + 1} / {SWUGOTireData.steps.length}
          </span>

        </div>

      </div>

      <main className="mx-auto max-w-4xl px-6 py-10">

        {/* Procedure header */}
        <div className="text-center">

          <div className="text-6xl">
            🛞
          </div>

          <h1 className="mt-5 text-4xl font-bold text-gray-900">
            .....
          </h1>

          <p className="mt-3 text-lg text-gray-400">
            {bike.name}
          </p>

        </div>

        {/* Information */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">

          <div className="rounded-xl bg-white p-5 text-center shadow-sm">
            <p className="text-sm text-gray-500">
              Difficulty
            </p>

            <p className="mt-2 font-semibold">
              {SWUGOTireData.difficulty}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 text-center shadow-sm">
            <p className="text-sm text-gray-500">
              Estimated time
            </p>

            <p className="mt-2 font-semibold">
              ⏱ {SWUGOTireData.time}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 text-center shadow-sm">
            <p className="text-sm text-gray-500">
              Progress
            </p>

            <p className="mt-2 font-semibold">
              {Math.round(
                ((currentStep + 1) / SWUGOTireData.steps.length) * 100
              )}
              %
            </p>
          </div>

        </div>

        {/* Progress bar */}
        <div className="mt-8 h-3 overflow-hidden rounded-full bg-gray-200">

          <div
            className="h-full rounded-full bg-gray-800 transition-all duration-300"
            style={{
              width: `${
                ((currentStep + 1) / SWUGOTireData.steps.length) * 100
              }%`,
            }}
          />

        </div>

        {/* Video */}
        {/* Instructional Video */}
{currentStep === 0 && SWUGOTireData.video && (
  <div className="mt-10">
    
    <h2 className="mb-4 text-xl font-semibold text-gray-900">
      🎥 Instructional Video
    </h2>

    <div className="overflow-hidden rounded-2xl bg-black shadow-lg">
      <video
        controls
        className="w-full"
      >
        <source
          src={SWUGOTireData.video}
          type="video/mp4"
        />

        Your browser does not support video playback.
      </video>
    </div>

  </div>
)}

        {/* Tools */}
        {currentStep === 0 && (
          <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-xl font-semibold">
              🔧 Tools Required
            </h2>

            <ul className="mt-4 space-y-3">

              {SWUGOTireData.tools.map((tool) => (
                <li
                  key={tool}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span>✓</span>
                  {tool}
                </li>
              ))}

            </ul>

          </div>
        )}

        {/* Current step */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm md:p-10">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-white">
              {step.number}
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              {step.title}
            </h2>

          </div>
          {/* Image placeholder */}

          {step.image && (
            <div className="mt-8 overflow-hidden rounded-xl">
                <img
                src={step.image}
                alt={step.title}
                className="w-full object-cover"
                />
                </div>
            )}

          {/* Instruction */}
          <div className="mt-8">

            <h3 className="text-lg font-semibold">
              Instructions
            </h3>

            <p className="mt-3 text-lg leading-8 text-gray-600">
              {step.instruction}
            </p>

          </div>

          {/* Warning */}
          {step.warning && (
            <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5">

              <p className="font-semibold text-yellow-800">
                ⚠️ Important
              </p>

              <p className="mt-2 text-yellow-700">
                {step.warning}
              </p>

            </div>
          )}

        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4">

          <button
            onClick={previousStep}
            disabled={currentStep === 0}
            className="
              rounded-xl
              border
              border-gray-300
              bg-white
              px-6
              py-4
              font-semibold
              disabled:cursor-not-allowed
              disabled:opacity-40
              cursor-pointer
            "
          >
            ← Previous
          </button>

          {currentStep === SWUGOTireData.steps.length - 1 ? (

            <button
              onClick={() => alert("Procedure completed!")}
              className="
                rounded-xl
                bg-gray-900
                px-8
                py-4
                font-semibold
                text-white
                hover:bg-gray-700
                cursor-pointer
              "
            >
              ✓ Complete Procedure
            </button>

          ) : (

            <button
              onClick={nextStep}
              className="
                rounded-xl
                bg-gray-900
                px-8
                py-4
                font-semibold
                text-white
                hover:bg-gray-700
                cursor-pointer
              "
            >
              Next →
            </button>

          )}

        </div>

      </main>

    </div>
  );
}

export default TireSWUGO;