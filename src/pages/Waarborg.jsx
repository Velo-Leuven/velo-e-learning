import React, { useState , useEffect  } from "react";

import Navbar from "../components/Navbar";

const WaarborgData = {
  name: "Waarborg Teurgstorten",

 video: `${import.meta.env.BASE_URL}media/administrations/fp/video.mp4`,

  steps: [
    {
      number: 1,
      title: "Fiets-gebruiker",
      instruction:
       
          "Formulier inleverbewijs scannen."

           
           
            
            ,
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb1.jpeg`,
    },
    {
      number: 2,
      title: "In het verhuurorder:",
      instruction:
        <ol className="list-decimal pl-6"> 
          
             <li>Klik op degene met verhuurstatus 'opgehaald.</li>
            <li>Vraag naam klant ter bevestiging.</li>
            
           
            
            </ol>,
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb2.jpeg`,
    },
    {
      number: 3,
      title: "In Contact → ", 
      instruction:
       <ol className="list-decimal pl-6">
              <li>Check fietsnummer.</li>

            <li>Klik op naam klant.</li>
            </ol>,
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb3.jpeg`,
    },
    {
      number: 4,
      title: "Klik op abonnementen ",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb4.jpeg`,
    },
    {
      
      number: 5,
      title: "Klik op Afsluiten knop",
      instruction:
        <ol className="list-decimal pl-6"> <h1 className="font-bold">Controleer:</h1>
            <li>→ Check S-nummer om te bevestigen (→ op inleverbewijs).</li>
            <li>De status van de fiets moet ‘Geretourneerd’ zijn
(dit wordt gedaan door de technieker bij het inleveren van de fiets).</li>
            <li>Klik op de afsluiten knop.</li>
           
            
          </ol>,
         
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb5.jpeg`,
    },
    {
      number: 6,
      title: "Kies de reden van de terugbetaling",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb6.jpeg`,
    },
    {
      number: 7,
      title: "Rekeningnummer van de klant invullen",
      instruction:
        "...........",
         warning: <ol className="list-decimal pl-6"> <h1 className="font-bold"></h1>
            <li>Kijk naar einddatum, is deze persoon op tijd? (optijd= binnen 14 dagen na einddatum)  → afsluiten</li>
            <li>Afsluiten: waarborg terug op twee manieren
               <ol className="list-decimal pl-6"> <h1 className="font-bold">Klant overschrijving:</h1>
                <li>Vul IBAN (moet Europees zijn) in en druk op TAB</li>
                <li>Sleep het venster naar het tweede scherm, en laat controleren door de klant.</li>
                <li>Ok?, druk op "Opslaan en sluiten"→ indienen.</li>


               </ol>
<ol className="list-decimal pl-6"> <h1 className="font-bold">Cash=Kassa (check eerst waarom) vooral voor niet-Europees:</h1>
                <li>Klik op waarborg cash terugbetalen.</li>
                <li>Vraag klant om studentenkaart, ID kaart of paspoort...</li>
                <li>Papier invullen, laten tekenen, inleverbewijs aan vast nieten.</li>
               
</ol>


            </li>
            </ol>,

      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb7.jpeg`,
    },
    

    {
      number: 8,
      title: "Klik op Klant knop",
      instruction:
        <ol className="list-decimal pl-6"> <h1 className="font-bold">Ga naar tabblad Odoo Pos= kassa:</h1>
            <li>Klik op Orders.  <h1 className="font-bold">→ staat er 'te factureren'?</h1>
            <ol>
              <li>Ja, klik open = pech → ga naar stap 7 (Acties, waarborg terugbetalen).</li>
              <li>Nee, heel goed, geen kosten → klik op naam (klant) → naam invullen → ga naar stap 7 (Acties, waarborg terugbetalen).</li>

            </ol>
            
            </li>
           
           
            
          </ol>,
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb8.jpeg`,
    },

    {
      number: 9,
      title: "Klant info invullen",
      instruction:
        "Acties, waarborg terugbetalen",
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb9.jpeg`,
    },

    {
      number: 10,
      title: "Klik op Klant info",
      instruction:
        "Op manier van afsluiting.",
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb10.jpeg`,
    },

    {
      number: 11,
      title: "Klik op Acties knop",
      instruction:
        ".................",
        
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb11.jpeg`,
    },

    {
      number: 12,
      title: "Klik op Waarborg Terugbetaling knop",
      instruction:
        ".................",
        warning: <ol className="list-decimal pl-6"> <h1 className="font-bold">Contrroleer:</h1>
            <li>Controleer ALTIJD of de klant nog openstaande orders heerft onder de knop <h1 className="font-bold">'Offer/Order'.</h1></li>
            <li>Als er schade aan de fiets was, heeft de technieker een schadeorder aangemaakt dat hier afgerekend moet worden. Dit bedrag wordt dan automatisch afgetrokken van de waarborg.</li>
           
            
          </ol>,
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb12.jpeg`,
    },
    {
      number: 13,
      title: "Klik op Betaling knop",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb13.jpeg`,
    },
    {
      number: 14,
      title: "Kies de Betaalmethode en klik op Bevestigen knop",
      instruction:
        "....",
        warning: "Via Cash ook mogelijk",
      image: `${import.meta.env.BASE_URL}/media/administrations/wb/wb14.jpeg`,
    }
  ],
};

function Waarborg({
  icon,
  admin,
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick,
   onTechnicalForTalentClick,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepInput, setStepInput] = useState(currentStep + 1);
  useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, []); 
 
  const step = WaarborgData.steps[currentStep];

  const handleBack = () => {
    onBack();
  };

  const nextStep = () => {
    if (currentStep < WaarborgData.steps.length - 1) {
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
      stepNumber <= WaarborgData.steps.length
    ) {
      setCurrentStep(stepNumber - 1);
      setStepInput(stepNumber);
    }
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
              max={WaarborgData.steps.length}
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

            <span>/ {WaarborgData.steps.length}</span>

          </div>

          {/*
          <span className="text-sm text-gray-500">
            {currentStep + 1} / {WaarborgData.steps.length}
          </span>
          */}

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
                  WaarborgData.steps.length) *
                100
              }%`,
            }}
          />

        </div>

        {/* Video */}

        {currentStep === 0 && WaarborgData.video && (

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
                  src={WaarborgData.video}
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
              {step.instruction}
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

          {currentStep === WaarborgData.steps.length - 1 ? (

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

export default Waarborg;