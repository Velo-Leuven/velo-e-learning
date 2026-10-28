import React, { useState } from "react";

import Navbar from "../components/Navbar";

const GroepVerhuurData = {
  name: "Groep Verhuur",

  video: "/media/administrations/fp/fpvideo.mp4",

  steps: [
    {
      number: 1,
      title: "Klik op Abonnementen knop",
      instruction:
        ".................",
        warning: "Vóór je begint moet je de klant aanmaken in Odoo, met de volledige registratie (via Contact > Nieuw).",
      image: "/media/administrations/gv/gv1.jpeg",
    },
    {
      number: 2,
      title: "klik op Nieuw knop",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv2.jpeg",
    },
    {
      number: 3,
      title: "Naam van de klant invoeren",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv3.jpeg",
    },
    {
      number: 4,
      title: "Kies Sjabloon",
      instruction:
         <ol className="list-decimal pl-6"> <h1 className="font-bold"></h1>

            <li>Als er verschillende soorten fietsen op één abonnement moeten, dan moet je gebruik maken van het ‘Gemengd KT’ offertesjabloon.</li>
            <li>Stadsfietsen zijn opgesplitst in dames- en herenfietsen, maar kunnen samen gebruikt worden op het ‘Stadsfiets KT’ sjabloon.</li>
            <li>Voor al de rest kies je het sjabloon voor dat soort fiets.</li>

            <li><ol className="list-decimal pl-6"> <h1 className="font-bold">Voorbeelden:</h1>

            <li>Om 3 stadsfietsen te verhuren (2 damesfietsen en 1 herenfiets), kies je als offertesjabloon ‘Stadsfiets KT’.
</li>
            <li>Om 8 E-bikes te huren kies je voor het offertesjabloon ‘E-bike KT’.</li>
            <li>Om een rolstoelfiets, duofiets, 4 E-bikes, 2 herenfietsen en 5 damesfietsen te verhuren, kies je als offertesjabloon ‘Gemengd KT’.
</li>
<li>Om een driewieler te verhuren, kies je als offertesjabloon ‘Driewieler KT’.
</li>
           
        
          </ol></li>
           
        
          </ol>

          
          
          
          ,
      
      image: "/media/administrations/gv/gv4.jpeg",
    },

    {
      number: 5,
      title: "Offertesjabloon ",
      instruction:
        ".................",
        warning: "Voor groepsverhuur gebruiken we uitsluitend de offertesjablonen die eindigen op ‘KT’.",
      image: "/media/administrations/gv/gv5.jpeg",
    },

    {
      number: 6,
      title: "Aantal fietsen invoeren",
      instruction:
        "In het voorbeeld hierna worden stadsfietsen als voorbeeld gebruikt. Om een voorbeeld te zien van gemengd verhuur.",
      image: "/media/administrations/gv/gv6.jpeg",
    },

    {
      number: 7,
      title: "Kies Niet Student",
      instruction:
        "....................",
      image: "/media/administrations/gv/gv7.jpeg",
    },

    {
      number: 8,
      title: "Kies Huurperiode",
      instruction:
       <ol className="list-disc pl-6"> <h1 className="font-bold">Kies bij herhalend plan voor  de overeenkomende huurtermijn en zijn er</h1>

            <li>Minder dan 5 stadsfietsen (ongeacht dames of herenmodel), kies dan KT – X dagen.</li>
            <li> 5 of meer stadsfietsen (ongeacht dames of herenmodel), kies dan KT (5+) – X dagen.</li>
            

            <h1 className="font-bold">Dit is omdat er verschillende tarieven zijn voor stadfietsen vanaf 5 fietsen.</h1>
           
        
          </ol>,
      image: "/media/administrations/gv/gv8.jpeg",
    },

    {
      number: 9,
      title: "Klik op Digitaal Handtekenen knop",
      instruction:
        ".................",
        
      image: "/media/administrations/gv/gv9.jpeg",
    },

    {
      number: 10,
      title: "Klik op Accept & Sign knop",
      instruction:
        ".................",
       
      image: "/media/administrations/gv/gv10.jpeg",
    },
    {
      number: 11,
      title: "Klik op Groepsverhuur knop",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv11.jpeg",
    },
    {
      number: 12,
      title: "Scan de QR code van de Fiets",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv12.jpeg",
    },
    {
      number: 13,
      title: "Klik op Ophalen knop",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv13.jpeg",
    },
    {
      number: 14,
      title: "Klik op Ok knop",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv14.jpeg",
    },
    {
      number: 15,
      title: "klik op Abonnementennummer",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv15.jpeg",
    },
    {
      number: 16,
      title: "Klik op Abonnementen knop",
      instruction:
        ".................",
        warning: "Reken het abonnement af in de kassa.",
      image: "/media/administrations/gv/gv16.jpeg",
    },
    {
      number: 17,
      title: "In het voorbeeld hierna worden een voorbeeld gegeven van gemengd fietsenverhuur. ",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv17.jpeg",
    },
    {
      number: 18,
      title: "Pas de Hoeveelheden aan",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv18.jpeg",
    },
    {
      number: 19,
      title: "Kies Niet Student",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv19.jpeg",
    },
    {
      number: 20,
      title: "Kies De Huurperiode",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv20.jpeg",
    },
    {
      number: 21,
      title: "Klik op Digitaal Handtekenen knop",
      instruction:
        ".................",
        warning: "Vanaf hier is het hetzelfde als andere verhuur (vanaf de stap ‘digitaal tekenen’)",
      image: "/media/administrations/gv/gv21.jpeg",
    },
    {
      number: 22,
      title: "Klik op Verzenden per E-mail knop",
      instruction:
        <ol className="list-none pl-6"> <h1 className="font-bold">Offerte opsturen
</h1>

            <li>Vul alle gegevens in om het abonnement klaar te maken, maar laat het nog niet tekenen door de klant.
</li>
            
           
        
          </ol>,
      image: "/media/administrations/gv/gv22.jpeg",
    },
    {
      number: 23,
      title: "Klik op Verzenden knop",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv23.jpeg",
    },
    {
      number: 24,
      title: "Offerte is aangemaakt",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv24.jpeg",
    },
    {
      number: 25,
      title: "Bewijs afdrukken voor ontvangst / levering",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv25.jpeg",
    },
    {
      number: 26,
      title: "Klik op Offerte / Order knop",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv26.jpeg",
    },
    {
      number: 27,
      title: "Order Document is aangemaakt",
      instruction:
        ".................",
      image: "/media/administrations/gv/gv27.jpeg",
    },
    {
      number: 28,
      title: "Abonnement is aangemaakt",
      instruction:
        "Als de klant bevestigd heeft, dan kan je terug naar het abonnement gaan en de fietsen toevoegen, zoals gewoonlijk.",
      image: "/media/administrations/gv/gv28.jpeg",
    },
    {
      number: 29,
      title: "Groepsverhuur inleveren",
      instruction:
        ".....",
      image: "/media/administrations/gv/gv29.jpeg",
    },
    {
      number: 30,
      title: "Scannen van de QR code van de fiets",
      instruction:
        "...",
      image: "/media/administrations/gv/gv30.jpeg",
    },
    {
      number: 31,
      title: "Klik op Groepsverhuur Inleveren knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv31.jpeg",
    },
    {
      number: 32,
      title: "Klik op Bevestigen  zonder Schade knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv32.jpeg",
    },
    {
      number: 33,
      title: "Klik op Afsluiten knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv33.jpeg",
    },
    {
      number: 34,
      title: "Klik op Reden",
      instruction:
        ".",
      image: "/media/administrations/gv/gv34.jpeg",
    },
    {
      number: 35,
      title: "Kies de reden voor het afsluiten van het abonnement",
      instruction:
        ".",
      image: "/media/administrations/gv/gv35.jpeg",
    },
    {
      number: 36,
      title: "klik op Indienen knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv36.jpeg",
    },
    {
      number: 37,
      title: "Fiets beschadigd, verloren of gestolen? Klik op Groepsverhuur Inleveren knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv37.jpeg",
    },
    {
      number: 38,
      title: "Scannen van de QR code van de fiets",
      instruction:
        ".",
      image: "/media/administrations/gv/gv38.jpeg",
    },
    {
      number: 39,
      title: "klik op Serienummers van de fiets",
      instruction:
        ".",
      image: "/media/administrations/gv/gv39.jpeg",
    },
    {
      number: 40,
      title: "Klik op Groepsverhuur Inleveren knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv40.jpeg",
    },
    {
      number: 41,
      title: "klik op Bevestigen met Schade knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv41.jpeg",
    },
    {
      number: 42,
      title: "klik op Regel Toevoegen",
      instruction:
        ".",
      image: "/media/administrations/gv/gv42.jpeg",
    },
    {
      number: 43,
      title: "kies Verloren / Gestolen Fiets",
      instruction:
        ".",
      image: "/media/administrations/gv/gv43.jpeg",
    },
    {
      number: 44,
      title: "Klik op Bevestigen knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv44.jpeg",
    },
    {
      number: 45,
      title: "klik op Abonnementennummer",
      instruction:
        ".",
      image: "/media/administrations/gv/gv45.jpeg",
    },
    {
      number: 46,
      title: "Klik op Opgehaald knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv46.jpeg",
    },
    {
      number: 47,
      title: "Klik op Rapporteer Diefstal knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv47.jpeg",
    },
    {
      number: 48,
      title: "Het is aangemaakt",
      instruction:
        ".",
        warning: "Zoek de klant op in de kassa en reken de schade of het verlies van de fiets af.",
      image: "/media/administrations/gv/gv48.jpeg",
    },
    {
      number: 49,
      title: "Aangifte opslaan",
      instruction:
        ".",
        warning: "Aangifte opslaan bij het abonnement (chatter bovenaan).",
      image: "/media/administrations/gv/gv49.jpeg",
    },
    {
      number: 50,
      title: "Klik op Voeg Bestanden toe",
      instruction:
        ".",
      image: "/media/administrations/gv/gv50.jpeg",
    },
    {
      number: 51,
      title: "Transportkosten aanrekenen",
      instruction:
         <ol className="list-disc pl-6"> <h1 className="font-bold"></h1>

            <li>Om fietsen te verhuren op locatie, moeten we ook de transportkosten naar die locatie ingeven.</li>
            <li> Als er transport nodig is, voeg dan sowieso een orderregel ‘Transport KT verhuur’ toe aan het abonnement. Dit is de minimum kost voor transport binnen de 24km.</li>
            <li> Als het transport verder dan 24km is, voeg dan ook nog een extra regel ‘Transport KT verhuur (/km)’ toe op het abonnement en kies als aantal de bijkomende afstand naar de locatie in kilometer.
</li>
<li>Voorbeeld: het transport is 32km (heen en terug voor levering en ophaling), dan moet er een orderregel ‘Transport KT verhuur’ toegevoegd worden én een orderregel ‘Transport KT verhuur (/km)’ met als hoeveelheid 8 toegevoegd worden.
</li>
<li>Totale afstand = 32km 
Transport KT verhuur = 24km
Verschil = 8km
DUS: nog toe te voegen: 8 x ‘transportKT verhuur (/km)’
</li>
            

           
           
        
          </ol>,
      image: "/media/administrations/gv/gv51.jpeg",
    },
    {
      number: 52,
      title: "Facturen maken voor bedrijfsklanten" ,
      instruction:
        "Klik op Acties Knop",
        warning: "Controleer VOORAF of het abonnement op naam van een particuliere klant of een bedrijf moet gemaakt worden. Dit is van groot belang voor de facturatie en kan achteraf niet meer aangepast worden!.",
      image: "/media/administrations/gv/gv52.jpeg",
    },
    {
      number: 53,
      title: "Zoek de klant op zijn naam",
      instruction:
        ".",
      image: "/media/administrations/gv/gv53.jpeg",
    },
    {
      number: 54,
      title: "Klik op zijn info",
      instruction:
        ".",
      image: "/media/administrations/gv/gv54.jpeg",
    },
    {
      number: 55,
      title: "Klik op Reden de order af",
      instruction:
        ".",
      image: "/media/administrations/gv/gv55.jpeg",
    },
    {
      number: 56,
      title: "Klik op Acties knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv56.jpeg",
    },
    {
      number: 57,
      title: "Klik op Algemene notitie",
      instruction:
        ".",
      image: "/media/administrations/gv/gv57.jpeg",
    },
    {
      number: 58,
      title: "Bestelnummer van de klant invoeren",
      instruction:
        ".",
      image: "/media/administrations/gv/gv58.jpeg",
    },
    {
      number: 59,
      title: "Klik op Betaling knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv59.jpeg",
    },
    {
      number: 60,
      title: "Klik op Bevestigen knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv60.jpeg",
    },
    {
      number: 61,
      title: "Facturen met bestelbonnummer maken voor bedrijfsklanten",
      instruction:
        "Tijdens het opmaken van het abonnement kan het bestelbonnummer toegevoegd worden onder de tab ‘Overige Info’.",
      image: "/media/administrations/gv/gv61.jpeg",
    },
    {
      number: 62,
      title: "Vul het bestelbonnummer in bij ‘Referentie klant’",
      instruction:
        ".",
      image: "/media/administrations/gv/gv62.jpeg",
    },
    {
      number: 63,
      title: "Verzend de factuur naar de klant",
      instruction:
        ".",
      image: "/media/administrations/gv/gv63.jpeg",
    },
    
    {
      number: 64,
      title: "Bevestigde abonnementen voor groepsverhuur aanpassen bij ophaling",
      instruction:
        "Het gebeurt wel eens dat een klant een aantal fietsen wil huren en op het moment van ophaling er meer/minder fietsen nodig zijn dan aangevraagd. Je kan het abonnement nog op de volgende manier aanpassen. Klik op Annuleren knop",
      image: "/media/administrations/gv/gv64.jpeg",
    },
    {
      number: 65,
      title: "klik op Annuleren knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv65.jpeg",
    },
    {
      number: 66,
      title: "Klik op Zie op Offerte knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv66.jpeg",
    },
    {
      number: 67,
      title: "Hoevelheid invoeren",
      instruction:
        ".",
      image: "/media/administrations/gv/gv67.jpeg",
    },
    {
      number: 68,
      title: "Klik op Digitaal handtekenen knop",
      instruction:
        ".",
      image: "/media/administrations/gv/gv68.jpeg",
    },
    
  ],
};

function GroepVerhuur({
  admin,
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick,
   onTechnicalForTalentClick,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepInput, setStepInput] = useState(currentStep + 1);

  const step = GroepVerhuurData.steps[currentStep];

  const handleBack = () => {
    onBack();
  };

  const nextStep = () => {
    if (currentStep < GroepVerhuurData.steps.length - 1) {
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
      stepNumber <= GroepVerhuurData.steps.length
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
              max={GroepVerhuurData.steps.length}
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

            <span>/ {GroepVerhuurData.steps.length}</span>

          </div>

          {/*
          <span className="text-sm text-gray-500">
            {currentStep + 1} / {GroepVerhuurData.steps.length}
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
                  GroepVerhuurData.steps.length) *
                100
              }%`,
            }}
          />

        </div>

        {/* Video */}

        {currentStep === 0 && GroepVerhuurData.video && (

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
                  src={GroepVerhuurData.video}
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

          {currentStep === GroepVerhuurData.steps.length - 1 ? (

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

export default GroepVerhuur;