import React, { useState,useEffect } from "react";

import Navbar from "../components/Navbar";

const HandleidingData = {
  name: "Handleiding Kassa",

   video: `${import.meta.env.BASE_URL}media/administrations/fp/video.mp4`,

  steps: [
    {
      number: 1,
      title: "Kassa openen / Ga naar Kassa",
      instruction:
        "Foutjes / Hoe verwijder ik een product? Klik op [STEP:18]. Hoe annuleer ik een volledige bestelling? Klik op [STEP:19]. Hoe corrigeer ik een fout als ik de betaling al bevestigd heb? Klik op [STEP:21].  Sessie sluiten / Sessie sluiten zonder fouten klik op [STEP:22]. Sessie afsluiten met kasverschil klik op [STEP:28]. Rapporten kassa / Om de kassa-verrichtingen opnieuw te bekijken, ga naar Orders > Orders klik op [STEP:29].",
        
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk1.jpeg`,
    },
    {
      number: 2,
      title: "Klik op Kassa openen.",
      instruction:
        ".................",
        warning: "Als de kassa open is, klik dan op Hervatten.",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk2.jpeg`,
    },
    {
      number: 3,
      title: "Voordat je de kassa kunt gebruiken, moet je de cash inhoud van de kassa invoeren.  Het bedrag staat al vermeld: gewoon op Kassa openen klikken. ",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk3.jpeg`,
    },
    {
      number: 4,
      title: "Verkopen en afrekenen  ",
      instruction: "Klik op een product om ze aan de winkelwagen toe te voegen (bv. Huur + Waarborg LEV fiets). Een product kan worden opgezocht via de zoekbalk (A) en via de categorieën (B). "  , 
         warning: "A: Scannen product, bvb. binnenband -> barcode. B: Diversen, bij uitzondering -> we gebruiken tegels enkle als er geen order van is, dus extra onderdelen, boetes, etc. Alle de rest = via Acties -> Offerte/Order.",
          
      
      image:  `${import.meta.env.BASE_URL}/media/administrations/hk/hk4.jpeg`,
    },

    {
      number: 5,
      title: " ",
      instruction:
        <ol className="list-[lower-alpha] pl-6">
        <li>A: Om de hoeveelheid van een product te wijzigen, klik op Hvhd en voer je het gewenste aantal in</li>
        <li>B: Om de prijs van een product te wijzigen (bijn nooit nodig, enkel bij 2de hands-onderdelen en boetes), klik op Prijs en voer je het correcte aantal in.</li>
        <li>C: Om korting (meestal enkel bij persooneel =30%) toe te voegen, klik op % en voer je het gewenste percentage in.</li>
      </ol>,
        
      image:  `${import.meta.env.BASE_URL}/media/administrations/hk/hk5.jpeg`,
    },

    {
      number: 6,
      title: "Klik op Klant om een klant te selecteren of aan te maken. Zoek een bestaande klant (bv. Luce De Roover)  via de zoekbalk en klik om te selecteren (A)  als het niet meteen lukt druk op Zoek meer of klik op Aanmaken om een nieuwe klant in te voeren (B). ",
      instruction:
        ".",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk6.jpeg`,
    },

    {
      number: 7,
      title: "klik op de naam van de bestaande klant",
      instruction:
        "....................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk7.jpeg`,
    },

    {
      number: 8,
      title: "Op aanmaken duwen bij nieuwe klant -> klik op Opslaan van de nieuwe klant",
      instruction: ".",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk8.jpeg`,
    },

    {
      number: 9,
      title: "Voeg het fietsnummer toe via Acties > Klantnotitie. En klik op Toepassen.",
      instruction:
        "Extra info voor klant of boekhouder via klantnotitie toevoegen.",
        
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk9.jpeg`,
    },

    {
      number: 10,
      title: "Klik op Toepassen knoop",
      instruction:
        ".................",
       
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk10.jpeg`,
    },
    {
      number: 11,
      title: "Ga naar de afrekenpagina door op Betaling te klikken.",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk11.jpeg`,
    },
    {
      number: 12,
      title: "Indien de klant een FACTUUR wenst, vink Factuur aan. Zo niet, ga naar de volgende stap. Bestaat de klant nog niet kan je hem aanmaken en als de klant een  BTW nummer heeft moet je BEDRIJF kiezen als klant en de gefgevens invullen. ",
      instruction:
        <ol className="list-[lower-alpha] pl-6">  <h1 className="font-bold">Standaard aangevinkt</h1>
        <li>Wil nieuwe klant factuur? (zonder order) = bedrijfsklant aanmaken.</li>
        <li>Wil nieuwe klant geen factuur? (zonder order) = klant leeg laten = ok.</li>
        <li>Al de rest heeft een order en krijgt  automatisch een factuur.</li>
        
      </ol>,
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk12.jpeg`,
    },
    {
      number: 13,
      title: "De naam invullen",
      instruction:
        "BTW nummer moet erbij voor facturatie, tenzij: niet BTW-plichtig. vzw -> ondernemingsnummer.  ",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk13.jpeg`,
    },
    {
      number: 14,
      title: "Kies de gewenste betaalmethode Kas (A). Indien een klant cash betaalt, voer het ontvangen bedrag in (bv. €250 cash), wisselgeld wordt dan automatisch berekend door ODOO. Bij payconiq kies je (voorlopig) klant account en moet gecheckt worden via transactielijst. ",
      instruction:
        <ol className="list-[lower-alpha] pl-6">  
        <li>klik op payconiq als betaalwijze.</li>
        <li>klik op transactielijst.</li>
        <li>klik op zoeken, en check of de betaling binnenkomt.</li>
        <li>Portaal inloggen.</li>
        <li>Meerdere soorten betalingen (in dit voorbeeld eerst cash voor 2,50 euro).</li>
        </ol>,

      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk14.jpeg`,
    },
    {
      number: 15,
      title: "Kies de gewenste betaalmethode Kaart (B)",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk15.jpeg`,
    },
    {
      number: 16,
      title: "Klik op Bevestigen om de betaling te verwerken en de verkoop af te ronden. NIET TE SNEL wacht tot je weet hoe de klant gaat betalen vooraleer op bevestigen te drukken.",
      instruction:
        ".................",
        
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk16.jpeg`,
    },
    {
      number: 17,
      title: "Het ontvangstbewijs wordt automatisch via mail verstuurd naar de klant. Indien een factuur werd aangevraagd, wordt deze automatisch gedownload. Klik op Nieuw order om een nieuwe verkoop te starten.  ",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk17.jpeg`,
    },
    {
      number: 18,
      title: "Foutjes / Hoe verwijder ik een product?",
      instruction:
        "Een foute lijn kan gemakkelijk verwijderd worden door te dubbelklikken op het kruisje. ",
        warning: "Meestal niet nodig. Anuleer eerder het order en roep het order opnieuw op -> niet zomaar aanpassingen maken in kassaorders.",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk18.jpeg`,
    },
    {
      number: 19,
      title: "Hoe annuleer ik een volledige bestelling? ",
      instruction:
        "Ga naar Acties > Annuleer bestelling en klik op Ok om een volledige bestelling te annuleren.",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk19.jpeg`,
    },
    {
      number: 20,
      title: "Klik op Ok",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk20.jpeg`,
    },
    {
      number: 21,
      title: "Hoe corrigeer ik een fout als ik de betaling al bevestigd heb? ",
      warning: "Via orders -> zoek orders -> naam invullen (als op naam of datum zoeken)-> alle actieve orders -> Betaald. klik op order -> klik op retour -> Hvd (meestal) -> er verschijnt 'Terugbetalen' -> nogeens op retour -> betaling via cash. Eens een betaling uitgevoerd is, kan je vanuit de orders van de kassa wel eenvoudig op retour klikken. Bij zo’n retour kan je dan het correcte bedrag/artikel opnieuw aanrekenen, zodat in het nieuwe order zowel de retour als nieuwe aanrekening zit. Hier kan je ook altijd de betaalwijze corrigeren (bvb een negatieve betaling via kaart toevoegen tov een cash betaling of dergelijk).",
      instruction:
        <ol className="list-[lower-alpha] pl-6">
        <li>Klik op de drie streepjes naast de kassanaam rechtsboven. </li>
        <li>Klik op de hoeveelheid (in dit geval 1) en bevestig door nog eens op retour te klikken. </li>
        <li>Klik op retour als het order dat je wil terugbetalen de juiste is.</li>
        <li>Vul naam in als dit op klantnaam is, of op datum als deze er niet meer is in de zoekbalk, en selecteer betaald uit het dropdown menu.</li>
      </ol>,
        
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk21.jpeg`,
    },
    {
      number: 22,
      title: "Sessie sluiten   / Sessie sluiten zonder fouten ",
      instruction:
        ".",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk22.jpeg`,
    },
    {
      number: 23,
      title: "Om de kassa te sluiten, klik in het menu op Sessie sluiten.",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk23.jpeg`,
    },
    {
      number: 24,
      title: "Klik op het biljet-symbool om het eindbedrag in te geven.",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk24.jpeg`,
    },
    {
      number: 25,
      title: "Voer via de – en + de cash inhoud van de kassa in en klik op Bevestigen.",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk25.jpeg`,
    },
    {
      number: 26,
      title: "Vergeet niet op het bancontact kastje de dagtotalen en dagverrichtingen te printen en kijk na of het totaal overeenkomt.",
      instruction:
        "Verschil mag niet boven 20 EUR zijn. Eerst zoeken (check handleiding): Niet gevonden, >20 euro? -> open laten en melden. Niet gevonden, <20 euro? -> kassa afsluiten en melden. ",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk26.jpeg`,
    },
    {
      number: 27,
      title: "Klik vervolgens op Sessie sluiten.",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk27.jpeg`,
    },
    {
      number: 28,
      title: "Sessie afsluiten met kasverschil",
      instruction:
        (
    <>
      <p>
        Indien de telling van het cash geld niet overeenkomt met de registraties
        in ODOO, krijg je bij afsluiting van de sessie bovenstaande melding.
      </p>

      <p>
        Kijk na deze melding altijd eerst de kassaverrichtingen na, en voeg de
        ontbrekende betalingen nog toe aan de kassa vooraleer de sessie af te
        sluiten. (Klik 2x op negeren om de sessie-afsluiting te onderbreken).
      </p>

      <ol className="list-decimal pl-6"> <h1 className="font-bold">Nog verschillen nà de controle?</h1>  
        <li>Klein verschil ( &lt;20 EUR)?  Je mag de kassa afsluiten met betalingsverschil. 
Het betalingsverschil wordt onmiddellijk in de boekhouding opgenomen, en kan enkel nog vanuit de 
boekhouding gecorrigeerd worden! </li>
        <li>
           <ol className="list-[lower-alpha] pl-0">Groot verschil (&gt; 20 EUR)?  Je kan de kassa niet zomaar afsluiten. 
            <li> Zoek de dag zelf verder naar het verschil, en pas de boekingen in de kassa aan.</li>
            <li>Als het niet mogelijk is om het verschil de dag zelf terug te vinden (of als je hulp nodig hebt van een 
collega) om het verschil terug te vinden, kan je de kassa toch afsluiten, door het verschil op een 
wachtrekening te boeken:</li>




           </ol>



        </li>
      
      </ol>
    </>
  ),
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk28.jpeg`,
    },
    
    {
      number: 29,
      title: "Rapporten kassa / Om de kassa-verrichtingen opnieuw te bekijken, ga naar Orders > Orders. ",
      instruction:
        ".",
      image: `${import.meta.env.BASE_URL}/media/administrations/hk/hk33.jpeg`,
    },
    {
      number: 30,
      title: "Via de zoekbalk, groepeer op Kassa.",
      instruction:
        ".",
      image:  `${import.meta.env.BASE_URL}/media/administrations/hk/hk34.jpeg`,
    },
    {
      number: 31,
      title: "Kassa",
      instruction:
        ".",
      image:  `${import.meta.env.BASE_URL}/media/administrations/hk/hk35.jpeg`,
    }
    
  ],
};

function HandleidingKassa({
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

  const step = HandleidingData.steps[currentStep];

  const handleBack = () => {
    onBack();
  };

  const nextStep = () => {
    if (currentStep < HandleidingData.steps.length - 1) {
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
      stepNumber <= HandleidingData.steps.length
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
              max={HandleidingData.steps.length}
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

            <span>/ {HandleidingData.steps.length}</span>

          </div>

          {/*
          <span className="text-sm text-gray-500">
            {currentStep + 1} / {HandleidingData.steps.length}
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
                  HandleidingData.steps.length) *
                100
              }%`,
            }}
          />

        </div>

        {/* Video */}

        {currentStep === 0 && HandleidingData.video && (

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
                  src={HandleidingData.video}
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

          {currentStep === HandleidingData.steps.length - 1 ? (

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

export default HandleidingKassa;