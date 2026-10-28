import React, { useState } from "react";
import Navbar from "../components/Navbar";

const fietsverhData = {
  name: "Fietsverhuur",
  

 

  video: "/media/administrations/fh/fhvideo.mp4",

  steps: [
    {
      number: 1,
      title: "Klik op Fiets-Gebruiker knop",
      instruction:
        ".......................",
        
      image: "/media/administrations/fh/fh1.jpeg",
    },

    {
      number: 2,
      title: "Klik op Nieuw knop",
      instruction:
        ".................",
      image: "/media/administrations/fh/fh2.jpeg",
    },

    {
      number: 3,
      title: "Klant info invullen",
      instruction:
        ".................",
        image: "/media/administrations/fh/fh3.jpeg",
    },

    {
      number: 4,
      title: "Klik op Bevestigen knop",
      instruction:
        "....................",
      image: "/media/administrations/fh/fh4.jpeg",
    },

    {
      number: 5,
      title: "Klik op Ophalen knop",
      instruction:
        ".............",
        image: "/media/administrations/fh/fh5.jpeg",
    },

    {
      number: 6,
      title: "Klik op Bevestigen knop",
      instruction:
        ".................",
        image: "/media/administrations/fh/fh6.jpeg",
    },
    {
        number: 7,
        title: "Klik op Fiets-Gebruiker",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh7.jpeg",
    },
    {
        number: 8,
        title: "Klik op Abonnementen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh8.jpeg",
    },
    {
        number: 9,
        title: "Klik op Nieuw knop",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh9.jpeg",
    },
    {
        number: 10,
        title: "Info invullen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh10.jpeg",
    },
    {
        number: 11,
        title: "Offertesjabloon gekozen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh11.jpeg",
    },
    {
        number: 12,
        title: "Klik op Regel toevoegen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh12.jpeg",
    },
    {
        number: 13,
        title: "Klik op checkbox",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh13.jpeg",
    },
    {
        number: 14,
        title: "Klik op Selecteren knop",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh14.jpeg",
    },
    {
        number: 15,
        title: "Kies de Onderwijsinstelling",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh15.jpeg",
    },
    {
        number: 16,
        title: "Studentnummer invullen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh16.jpeg",
    },
    {
        number: 17,
        title: "Huurtermijn Kiezen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh17.jpeg",
    },
    {
        number: 18,
        title: "Klik op Digitaal Handtekenen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh18.jpeg",
    },
    {
        number: 19,
        title: "Klik op Accept & Sign knop",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh19.jpeg",
    },
    {
        number: 20,
        title: "Klik op Accept & Sign knop",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh20.jpeg",
    },
    {
        number: 21,
        title: "Klik op Back to edit mode",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh21.jpeg",
    },
    {
        number: 22,
        title: "Klik op Abonnementen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh22.jpeg",
    },
    {
        number: 23,
        title: "Klik op Kassa knop",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh23.jpeg",
    },
    {
        number: 24,
        title: "Klik op Verkoop Hervatten knop",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh24.jpeg",
    },
    {
        number: 25,
        title: "Klik op Acties knop",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh25.jpeg",
    },
    {
        number: 26,
        title: "Klik op Offerte / Order",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh26.jpeg",
    },
    {
        number: 27,
        title: "Klantnaam invullen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh27.jpeg",
    },
    {
        number: 28,
        title: "Klik op juiste Offerte / Order",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh28.jpeg",
    },
    {
        number: 29,
        title: "Klik op Reken de order af",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh29.jpeg",
    },
    {
        number: 30,
        title: "Klik op Betaling knop",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh30.jpeg",
    },
    {
        number: 31,
        title: "Kies Betaalmethode en Klik op Bevestigen",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh31.jpeg",
    },
    {
        number: 32,
        title: "Ontvangstbewijs is aangemaakt",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh32.jpeg",
    },
    {
        number: 33,
        title: "Klik op Backend",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh33.jpeg",
    },
    {
        number: 34,
        title: "Klik op Kassa",
        instruction:
          ".................",
        image: "/media/administrations/fh/fh34.jpeg",
    },
    {
        number: 35,
        title: "Info van de klant nakijken",
        warning:
          "Zoek het abonnement van de klant opnieuw op ter controle.",
        instruction:
          <ol className="list-decimal pl-6"> <h1 className="font-bold">Contrroleer:</h1>
            <li>De datum van de volgende factuur (= de einddatum van de huurtermijn).</li>
            <li>Of er een waarborg aan het abonnement is gelinkt.</li>
            
          </ol>,
        image: "/media/administrations/fh/fh35.jpeg",
    },
  ],
};

function FietsVerhuur({ admin,
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick, 
 onTechnicalForTalentClick}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepInput, setStepInput] = useState(currentStep + 1);

  const step = fietsverhData.steps[currentStep];

  const handleBack = () => {
    onBack();
  };

  const nextStep = () => {
    if (currentStep < fietsverhData.steps.length - 1) {
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
      stepNumber <= fietsverhData.steps.length
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
      <div className="border-b bg-white">
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
              max={fietsverhData.steps.length}
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

            <span>/ {fietsverhData.steps.length}</span>

          </div>

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
                  fietsverhData.steps.length) *
                100
              }%`,
            }}
          />

        </div>

        {/* Video */}
        {currentStep === 0 && fietsverhData.video && (
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
                  src={fietsverhData.video}
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

          {currentStep === fietsverhData.steps.length - 1 ? (

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

export default FietsVerhuur;