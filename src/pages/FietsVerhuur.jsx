import React, { useState , useEffect} from "react";
import Navbar from "../components/Navbar";

const fietsverhData = {
  name: "Fietsverhuur",
  

 

   video: `${import.meta.env.BASE_URL}media/administrations/fh/fhvideo.mp4`,

  steps: [
    {
      number: 1,
      title: "Klik op Fiets-Gebruiker knop",
      instruction:
        "Order afrekenen -> [STEP:21]",
        
      image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh1.jpeg`,
    },

    {
      number: 2,
      title: "Klik op Nieuw knop",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh2.jpeg`,
    },

    {
      number: 3,
      title: "Klant info invullen",
      instruction:
        ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh3.jpeg`,
    },

    {
      number: 4,
      title: "Klik op Bevestigen knop",
      instruction:
        "....................",
      image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh4.jpeg`,
    },

    {
      number: 5,
      title: "Klik op Ophalen knop",
      instruction:
        ".............",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh5.jpeg`,
    },

    {
      number: 6,
      title: "Klik op Bevestigen knop",
      instruction: <ol className="list-decimal pl-6"> <h1 className="font-bold"> → order bevestigen → klik op klantnaam → je bent bij contacten klant. →  ga naar abonnementen (naast saldilijst) <h2>Mogelijkheden:</h2>
</h1>
            <li>Geen lopend contract meer (ideaal) → klik op nieuw.</li>
            <li> lopend contract (over datum)
    <ol className="list-decimal pl-6"> <h1 className="font-bold">zelfde fiets soort:</h1>
<li>Regel toevoegen orders.</li>
<li> Verlengen.</li>
<li>Digitaltekenen</li>
    </ol>
<ol className="list-decimal pl-6"> <h1 className="font-bold">Andere fietssoort(afsluiten en waarborg overzetten):</h1>
<li>Contract afsluiten en einddatum onthouden.</li>
<li> Waarborg cash.</li>

    </ol>

            </li>
           
            
          </ol>,
      
        image:  `${import.meta.env.BASE_URL}/media/administrations/fh/fh6.jpeg`,
    },
    {
        number: 7,
        title: "Klik op Klantnaam",
        instruction:
          ".................",
        image:  `${import.meta.env.BASE_URL}/media/administrations/fh/fh7.jpg`,
    },
    {
        number: 8,
        title: "Klik op Abonnementen",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh8.jpg`,
    },
    {
        number: 9,
        title: "Klik op Nieuw knop",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh9.jpg`,
    },
    {
        number: 10,
        title: "Info invullen",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh10.jpeg`,
    },
    {
        number: 11,
        title: "Offertesjabloon gekozen",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh11.jpeg`,
    },
    {
        number: 12,
        title: "Klik op Regel toevoegen",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh12.jpeg`,
    },
    {
        number: 13,
        title: "Ophalen Fiets volgende factuurdatum (morgen)",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh13.jpeg`,
    },
    
    {
        number: 14,
        title: "Kies de Onderwijsinstelling",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh15.jpeg`,
    },
    {
        number: 15,
        title: "Studentnummer invullen",
        instruction:
          ".................",
          warning:"Voor KUL R-nummer en niet U-nummer (U-nummer is personeel -> enkel 2dehandfiets). Geen R-nummer-> 2dehandfiets",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh16.jpeg`,
    },
    {
        number: 16,
        title: "Huurtermijn Kiezen",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh17.jpeg`,
    },
    {
        number: 17,
        title: "Klik op Digitaal Handtekenen",
        instruction:
          ".................",
        image:  `${import.meta.env.BASE_URL}/media/administrations/fh/fh18.jpeg`,
    },
    {
        number: 18,
        title: "Klik op Accept & Sign knop",
        instruction:
          ".................",
        image:  `${import.meta.env.BASE_URL}/media/administrations/fh/fh19.jpeg`,
    },
    {
        number: 19,
        title: "Klik op Accept & Sign knop",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh20.jpeg`,
    },
    
    {
        number: 20,
        title: "Klik op Acties knop",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh25.jpeg`,
    },
    {
        number: 21,
        title: "Klik op Offerte / Order",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh26.jpeg`,
    },
    {
        number: 22,
        title: "Klantnaam invullen",
        instruction:
          "Helemaal FRESH -> nieuw contract van boven of Verlenging -> zoeken",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh27.jpeg`,
    },
    {
        number: 23,
        title: "Klik op juiste Offerte / Order",
        instruction:
          "Te factureren-> in principe ook orde kosten checken. Niet factureren-> Niet",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh28.jpeg`,
    },
    {
        number: 24,
        title: "Klik op Reken de order af",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh29.jpeg`,
    },
    {
        number: 25,
        title: "Klik op Betaling knop",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh30.jpeg`,
    },
    {
        number: 26,
        title: "Kies Betaalmethode en Klik op Bevestigen",
        instruction:
          "VB. Klant heeft 100 cash en 170 kaart-> kies eerst (Kas Veiling1) -> 100 aanklikken. Dan klikt (Kaartbetaling) voor 170 kaart (Resterend)",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh31.jpeg`,
    },
    {
        number: 27,
        title: "Nieuw Order klikken voor het volgende",
        instruction:
          ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fh/fh32.jpeg`,
    },
    
  ],
};

function FietsVerhuur({ icon, admin,
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick, 
 onTechnicalForTalentClick}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepInput, setStepInput] = useState(currentStep + 1);
  useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, []); 

  const step = fietsverhData.steps[currentStep];

  const handleBack = () => {
    onBack();
  };

  const nextStep = () => {
    if (currentStep < fietsverhData.steps.length - 1) {
      const next = currentStep + 1;

      setCurrentStep(next);
      setStepInput(next + 1);

     
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      const previous = currentStep - 1;

      setCurrentStep(previous);
      setStepInput(previous + 1);

     
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

   const renderInstruction = (instruction) => {
    // If instruction is JSX or another React element, display it directly
    if (typeof instruction !== "string") {
      return instruction;
    }
  
    const parts = instruction.split(/(\[STEP:\d+\])/g);
  
    return parts.map((part, index) => {
      const match = part.match(/\[STEP:(\d+)\]/);
  
      if (match) {
        const stepNumber = Number(match[1]);
  
        return (
          <button
            key={index}
            type="button"
            onClick={() => goToStep(stepNumber)}
            className="text-blue-600 underline font-semibold hover:text-blue-800 cursor-pointer"
          >
            Step {stepNumber}
          </button>
        );
      }
  
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
     <div
  className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
 style={{ backgroundImage: `url("${import.meta.env.BASE_URL}/bgfh.jpg")` }}
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
            {icon}
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

            <h2 className="mb-4 text-xl font-semibold text-red-600">
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


         {currentStep === 20 && fietsverhData.video && (
          <div className="mt-10">

            <h2 className="mb-4 text-xl font-semibold text-red-600">
              🎥 Instructional Video
            </h2>

            <div className="overflow-hidden rounded-2xl bg-black shadow-lg">

              <video
                controls
                className="w-full"
              >
                <source
                  src={`${import.meta.env.BASE_URL}media/administrations/fh/fh2video.mp4`}
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

            <div className="mt-3 text-lg leading-8 text-gray-600">
              {renderInstruction(step.instruction)}
            </div>

          </div>

          {/* Warning */}
          {step.warning && (
            <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5">

              <p className="font-semibold text-yellow-800">
                ⚠️ Important
              </p>

              <div className="mt-2 text-yellow-700">
                {step.warning}
              </div>

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