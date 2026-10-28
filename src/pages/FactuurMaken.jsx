import React, { useState } from "react";

import Navbar from "../components/Navbar";

const FactuurMakenData = {
  name: "Factuur Maken(met Klantenreferentie)",

  video: "/media/administrations/fp/fpvideo.mp4",

  steps: [
    {
      number: 1,
      title: "Klik op Abonnementen knop",
      instruction:
        <ol className="list-decimal pl-6"> <h1 className="font-bold">Om de factuur te kunnen maken moet het abonnement:
</h1>
            <li>Bevestigd zijn door de klant. Ofwel door het digitaal te tekenen of via bevestiging van de e-mail als de abonnementsofferte naar de e-mail de klant is gestuurd.</li>
            <li>Nog niet afgerekend zijn via de kassa.</li>
           
            
          </ol>,
      image: "/media/administrations/fm/fm1.jpeg",
    },
    {
      number: 2,
      title: "Naam van de klant invullen",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm2.jpeg",
    },
    {
      number: 3,
      title: "Klik op het abonnement van de klant",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm3.jpeg",
    },
    {
      number: 4,
      title: "Klik op Factuur Maken knop",
      instruction:
        ".................",
      
      image: "/media/administrations/fm/fm4.jpeg",
    },

    {
      number: 5,
      title: "Klik op Concept Maken knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm5.jpeg",
    },

    {
      number: 6,
      title: "Klik op Overig Info knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm6.jpeg",
    },

    {
      number: 7,
      title: "Geef de Klantenreferentie",
      instruction:
        "....................",
      image: "/media/administrations/fm/fm7.jpeg",
    },

    {
      number: 8,
      title: "Klik op Bevestigen knop",
      instruction:
        ".............",
      image: "/media/administrations/fm/fm8.jpeg",
    },

    {
      number: 9,
      title: "Klik op Verzenden knop",
      instruction:
        ".................",
        
      image: "/media/administrations/fm/fm9.jpeg",
    },

    {
      number: 10,
      title: "Klik op Verzenden knop",
      instruction:
        ".................",
       
      image: "/media/administrations/fm/fm10.jpeg",
    },
    {
      number: 11,
      title: "Klik op Kassa knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm11.jpeg",
    },
    {
      number: 12,
      title: "Klik op Verkoop Hervatten knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm12.jpeg",
    },
    {
      number: 13,
      title: "Klik op Acties knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm13.jpeg",
    },
    {
      number: 14,
      title: "Klik op Offerte/Order knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm14.jpeg",
    },
    {
      number: 15,
      title: "Zoek de naam van de klant",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm15.jpeg",
    },
    {
      number: 16,
      title: "Klik op Klant info knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm16.jpeg",
    },
    {
      number: 17,
      title: "Klik op Reken de order af",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm17.jpeg",
    },
    {
      number: 18,
      title: "Klik op Acties knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm18.jpeg",
    },
    {
      number: 19,
      title: "Klik op Klantnotitie knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm19.jpeg",
    },
    {
      number: 20,
      title: "Klik op Toepassen knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm20.jpeg",
    },
    {
      number: 21,
      title: "Klik op Betaling knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm21.jpeg",
    },
    {
      number: 22,
      title: "Kies de Betaalmethode en klik op Bevestigen knop",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm22.jpeg",
    },
    {
      number: 23,
      title: "Factuur is aangemaakt",
      instruction:
        ".................",
      image: "/media/administrations/fm/fm23.jpeg",
    }
  ],
};

function FactuurMaken({
  admin,
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick,
   onTechnicalForTalentClick,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepInput, setStepInput] = useState(currentStep + 1);

  const step = FactuurMakenData.steps[currentStep];

  const handleBack = () => {
    onBack();
  };

  const nextStep = () => {
    if (currentStep < FactuurMakenData.steps.length - 1) {
      const next = currentStep + 1;

      setCurrentStep(next);
      setStepInput(next + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      const previous = currentStep - 1;

      setCurrentStep(previous);
      setStepInput(previous + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const goToStep = (stepNumber) => {
    if (
      stepNumber >= 1 &&
      stepNumber <= FactuurMakenData.steps.length
    ) {
      setCurrentStep(stepNumber - 1);
      setStepInput(stepNumber);
    }
  };

  return (
     <div
  className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
  style={{ backgroundImage: 'url("/bgfh.jpg")' }}
>

      {/* Navbar */}

      <Navbar
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
          activePage="Administration"
      />

      {/* Top bar */}

      <div className="border-b bg-gray-50">

        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700 cursor-pointer"
          >
            ← Back
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-500">

            <input
              type="number"
              min="1"
              max={FactuurMakenData.steps.length}
              value={stepInput}
              onChange={(e) => setStepInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  goToStep(Number(stepInput));
                }
              }}
              onBlur={() => {
                goToStep(Number(stepInput));
              }}
              className="w-12 rounded border border-gray-300 px-2 py-1 text-center"
            />

            <span>/ {FactuurMakenData.steps.length}</span>

          </div>

          {/*
          <span className="text-sm text-gray-500">
            {currentStep + 1} / {FactuurMakenData.steps.length}
          </span>
          */}

        </div>

      </div>

      <main className="mx-auto max-w-4xl px-6 py-10">

        {/* Header */}

        <div className="text-center">

          <div className="text-6xl">
            🚲
          </div>

          {admin && (
            <h1 className="mt-5 text-4xl font-bold text-red-500">
              {admin.name}
            </h1>
          )}

        </div>

        {/* Progress bar */}

        <div className="mt-8 h-3 overflow-hidden rounded-full bg-gray-200">

          <div
            className="h-full rounded-full bg-gray-800 transition-all duration-300"
            style={{
              width: `${
                ((currentStep + 1) /
                  FactuurMakenData.steps.length) *
                100
              }%`,
            }}
          />

        </div>

        {/* Video */}

        {currentStep === 0 && FactuurMakenData.video && (

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
                  src={FactuurMakenData.video}
                  type="video/mp4"
                />

                Your browser does not support video playback.

              </video>

            </div>

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

          {/* Image */}

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

          {currentStep === FactuurMakenData.steps.length - 1 ? (

            <button
              onClick={() => onBack()}
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

export default FactuurMaken;