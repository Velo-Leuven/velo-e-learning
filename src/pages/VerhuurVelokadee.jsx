import React, { useState } from "react";

import Navbar from "../components/Navbar";

const VerhuurVelokadeeData = {
  name: "Verhuur VELOkadee",

  video: "/media/administrations/fp/fpvideo.mp4",

  steps: [
    {
      number: 1,
      title: "Voor een nieuwe klant – nog niet zelf aangemeld - selecteer Contacten",
      instruction:
        ".................",
        
      image: "/media/administrations/vv/vv1.jpeg",
    },
    {
      number: 2,
      title: "klik op Nieuw knop",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv2.jpeg",
    },
    {
      number: 3,
      title: "Vul alle gegevens in van de ouder (roos = verplichte velden)",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv3.jpeg",
    },
    {
      number: 4,
      title: "Kies Toevoegen om de gegevens van het kind of de kinderen aan te vullen",
      instruction: "................."   
          ,
      
      image: "/media/administrations/vv/vv4.jpeg",
    },

    {
      number: 5,
      title: "Vul de naam en geboortedatum van het kind in en kies Opslaan & Sluiten (de geboortedatum is ook de code van het slot, op deze manier kunnen we de code terugvinden als de klant de code niet meer kent). ",
      instruction:
        ".................",
        
      image: "/media/administrations/vv/vv5.jpeg",
    },

    {
      number: 6,
      title: "Opslaan gaat automatisch door linksboven terug te gaan naar Contacten",
      instruction:
        ".",
      image: "/media/administrations/vv/vv6.jpeg",
    },

    {
      number: 7,
      title: "Fiets koppelen aan kind / Ga naar Fiets - Gebruiker",
      instruction:
        "....................",
      image: "/media/administrations/vv/vv7.jpeg",
    },

    {
      number: 8,
      title: "Kies Nieuw",
      instruction: ".",
      image: "/media/administrations/vv/vv8.jpeg",
    },

    {
      number: 9,
      title: "Geef het kind in als Gebruiker (een kind is gekoppeld aan zijn ouder en wordt daarom weergegeven als Naam ouder, naam kind)",
      instruction:
        ".................",
        
      image: "/media/administrations/vv/vv9.jpeg",
    },

    {
      number: 10,
      title: "Voeg een fiets toe via Toevoegen via Serienummer",
      instruction:
        ".................",
       
      image: "/media/administrations/vv/vv10.jpeg",
    },
    {
      number: 11,
      title: "Controleer of de cursor op de juiste plaats staat en scan het fietsnummer en klik op Bevestigen",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv11.jpeg",
    },
    {
      number: 12,
      title: "Klik vervolgens op Ophalen - je ziet de fiets staan – en klik op Bevestigen",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv12.jpeg",
    },
    {
      number: 13,
      title: "Abonnement koppelen aan ouder / Ga je naar Abonnementen",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv13.jpeg",
    },
    {
      number: 14,
      title: "Klik op Nieuw",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv14.jpeg",
    },
    {
      number: 15,
      title: "Geef de ouder in als Klant (het is de ouder die het contract tekent, niet het kind)",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv15.jpeg",
    },
    {
      number: 16,
      title: "Kies voor Velokadee bij Offertesjabloon",
      instruction:
        ".................",
        
      image: "/media/administrations/vv/vv16.jpeg",
    },
    {
      number: 17,
      title: "Onder Orderreferentie, klik op Regel toevoegen ",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv17.jpeg",
    },
    {
      number: 18,
      title: "Selecteer het juiste fietsnummer",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv18.jpeg",
    },
    {
      number: 19,
      title: "Als het kansentarief van toepassing is, geef dan 80% korting via Korting",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv19.jpeg",
    },
    {
      number: 20,
      title: "Klik vervolgens op Digitaal handtekenen",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv20.jpeg",
    },
    {
      number: 21,
      title: "Klik op Accepteer en Teken, de klant kan nu op het touchscreen tekenen",
      instruction:
        ".................",
        
      image: "/media/administrations/vv/vv21.jpeg",
    },
    {
      number: 22,
      title: "Bestaande klant (Fiets wisselen) / Ga naar Fiets - Gebruiker",
      instruction:
        ".",
      image: "/media/administrations/vv/vv22.jpeg",
    },
    {
      number: 23,
      title: "Scan het fietsnummer in de zoekbalk en open het verhuurorder door erop te klikken",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv23.jpeg",
    },
    {
      number: 24,
      title: "Kies hier Fietswissel",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv24.jpeg",
    },
    {
      number: 25,
      title: "Kies Regel toevoegen",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv25.jpeg",
    },
    {
      number: 26,
      title: "Scan de barcode van de nieuwe fiets",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv26.jpeg",
    },
    {
      number: 27,
      title: "Als er geen schade is aan de fiets, kies Bevestigen zonder herstelling.",
      instruction:
        ".................",
      image: "/media/administrations/vv/vv27.jpeg",
    },
    {
      number: 28,
      title: "Als de fiets beschadigd is, kies dan Bevestigen met herstelling.",
      instruction:
        ".",
      image: "/media/administrations/vv/vv28.jpeg",
    },
    {
      number: 29,
      title: "Bij Product toevoegen, scan de barcode uit de map met alle herstellingen die nodig zijn.",
      instruction:
        ".....",
      image: "/media/administrations/vv/vv29.jpeg",
    },
    {
      number: 30,
      title: "Kies Bevestigen",
      instruction:
        "...",
      image: "/media/administrations/vv/vv30.jpeg",
    },
    {
      number: 31,
      title: "Fiets binnenbrengen voor herstelling / Ga naar Fiets - Gebruiker",
      instruction:
        ".",
      image: "/media/administrations/vv/vv31.jpeg",
    },
    {
      number: 32,
      title: "Scan het fietsnummer in de zoekbalk en open het verhuurorder door erop te klikken",
      instruction:
        ".",
      image: "/media/administrations/vv/vv32.jpeg",
    },
    {
      number: 33,
      title: "Kies Herstelling",
      instruction:
        ".",
      image: "/media/administrations/vv/vv33.jpeg",
    },
    {
      number: 34,
      title: "Bevestig herstelling",
      instruction:
        ".",
      image: "/media/administrations/vv/vv34.jpeg",
    },
    {
      number: 35,
      title: "Ophalen na (herstelling / wissel) / Ga naar Fiets - Gebruiker",
      instruction:
        ".",
      image: "/media/administrations/vv/vv35.jpeg",
    },
    {
      number: 36,
      title: "Scan het fietsnummer in de zoekbalk en open het verhuurorder door erop te klikken",
      instruction:
        ".",
      image: "/media/administrations/vv/vv36.jpeg",
    },
    {
      number: 37,
      title: "Klik op Bevestigen/Ophalen en Bevestigen in functie van de mogelijkheden",
      instruction:
        ".",
      image: "/media/administrations/vv/vv37.jpeg",
    },
    {
      number: 38,
      title: "Check of de verhuurstatus is veranderd in Opgehaald.",
      instruction:
        ".",
      image: "/media/administrations/vv/vv38.jpeg",
    },
    {
      number: 39,
      title: "Check ook de einddatum van het abonnement. Indien je merkt dat deze binnenkort verloopt of reeds is verlopen, verleng dan het contract (zie Abonnement verlengen 🡪 ).",
      instruction:
        ".",
      image: "/media/administrations/vv/vv39.jpeg",
    },
    {
      number: 40,
      title: "Abonnement verlengen / Ga naar Fiets - Gebruiker",
      instruction:
        ".",
      image: "/media/administrations/vv/vv40.jpeg",
    },
    {
      number: 41,
      title: "Scan het fietsnummer in de zoekbalk en open het verhuurorder door erop te klikken.",
      instruction:
        ".",
      image: "/media/administrations/vv/vv41.jpeg",
    },
    {
      number: 42,
      title: "Klik op de orderreferentie en open de abonnementspagina door op de pijltjes te klikken.",
      instruction:
        ".",
      image: "/media/administrations/vv/vv42.jpeg",
    },
    {
      number: 43,
      title: "Klik op Verlengen",
      instruction:
        ".",
      image: "/media/administrations/vv/vv43.jpeg",
    },
    {
      number: 44,
      title: "Als het kansentarief van toepassing is, geef dan 80% korting via Korting",
      instruction:
        ".",
      image: "/media/administrations/vv/vv44.jpeg",
    },
    {
      number: 45,
      title: "Klik vervolgens op Digitaal handtekenen",
      instruction:
        ".",
      image: "/media/administrations/vv/vv45.jpeg",
    },
    {
      number: 46,
      title: "Klik op Accepteer en Teken, de klant kan nu op het touchscreen tekenen.",
      instruction:
        ".",
      image: "/media/administrations/vv/vv46.jpeg",
    },
    {
      number: 47,
      title: "Afrekenen / Ga naar Kassa ",
      instruction:
        ".",
      image: "/media/administrations/vv/vv47.jpeg",
    },
    {
      number: 48,
      title: "Ga via Acties naar Offerte / Order",
      instruction:
        ".",
       
      image: "/media/administrations/vv/vv48.jpeg",
    },
    {
      number: 49,
      title: "Typ de naam van de klant in de zoekbalk en check zo alle openstaande betalingen, reken af door op de order te klikken",
      instruction:
        ".",
        
      image: "/media/administrations/vv/vv49.jpeg",
    },
    {
      number: 50,
      title: "Klik op Reken de order af",
      instruction:
        ".",
      image: "/media/administrations/vv/vv50.jpeg",
    },
    {
      number: 51,
      title: "Fiets aanmelden voor afbraak / Ga naar Voorraad > bewerkingen > afkeuren",
      instruction:
         ".",
      image: "/media/administrations/vv/vv51.jpeg",
    },
    {
      number: 52,
      title: "Kies Nieuw" ,
      instruction:
        ".",
       
      image: "/media/administrations/vv/vv52.jpeg",
    },
    {
      number: 53,
      title: "Vul hier het type in van het product (bv. Velokadee – 16 inch), dan wordt het aantal ook automatisch ingevuld.",
      instruction:
        ".",
      image: "/media/administrations/vv/vv53.jpeg",
    },
    {
      number: 54,
      title: "Vul tenslotte het serienummer van de fiets voor afbraak in en klik op de knop ‘Bevestigen’.",
      instruction:
        ".",
      image: "/media/administrations/vv/vv54.jpeg",
    }
    
  ],
};

function VerhuurVelokadee({
  admin,
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick,
   onTechnicalForTalentClick,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepInput, setStepInput] = useState(currentStep + 1);

  const step = VerhuurVelokadeeData.steps[currentStep];

  const handleBack = () => {
    onBack();
  };

  const nextStep = () => {
    if (currentStep < VerhuurVelokadeeData.steps.length - 1) {
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
      stepNumber <= VerhuurVelokadeeData.steps.length
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
              max={VerhuurVelokadeeData.steps.length}
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

            <span>/ {VerhuurVelokadeeData.steps.length}</span>

          </div>

          {/*
          <span className="text-sm text-gray-500">
            {currentStep + 1} / {VerhuurVelokadeeData.steps.length}
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
                  VerhuurVelokadeeData.steps.length) *
                100
              }%`,
            }}
          />

        </div>

        {/* Video */}

        {currentStep === 0 && VerhuurVelokadeeData.video && (

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
                  src={VerhuurVelokadeeData.video}
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

            <div className="flex h-12 w-12 items-center shrink-0 justify-center rounded-full bg-gray-900 text-xl font-bold text-white">
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

          {currentStep === VerhuurVelokadeeData.steps.length - 1 ? (

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

export default VerhuurVelokadee;