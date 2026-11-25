import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";

const FietsVerlengenData = {
  name: "Fiets Verlengen",
  

 

video: `${import.meta.env.BASE_URL}media/administrations/fvg/fvgvideo.mp4`,

  steps: [
    {
      number: 1,
      title: "Ga naar fietsgebruiker en scan de fiets of vul het nummer in.",
      instruction:
        ".......................",
        
        
      image: `${import.meta.env.BASE_URL}/media/administrations/fvg/fvg1.jpeg`,
    },

    {
      number: 2,
      title: "Klik op het abonnement dat bij je fietsnummer hoort. ",
      instruction:
        ".................",
      image: `${import.meta.env.BASE_URL}/media/administrations/fvg/fvg2.jpeg`,
    },

    {
      number: 3,
      title: "Klik op verlengen",
      instruction:
        ".................",
        image: `${import.meta.env.BASE_URL}/media/administrations/fvg/fvg3.jpeg`,
    },

    {
      number: 4,
      title: "Vul de details in van de verlenging. De klant en het verhuurorder staat al juist, enkel studentennummer en herhalend plan aanpassen.",
      instruction:
        "....................",
      image: `${import.meta.env.BASE_URL}/media/administrations/fvg/fvg4.jpeg`,
    },

    
   
  ],
};

function FietsVerlengen({ icon, admin, onBack ,onHomeClick,onAdministrationClick,onTechnicalTrainingClick, onTechnicalForTalentClick,}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepInput, setStepInput]=useState(currentStep+1);
useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []); 
  const step = FietsVerlengenData.steps[currentStep];

  const handleBack=()=>{
    onBack();
  };

  const nextStep = () => {
    if (currentStep < FietsVerlengenData.steps.length - 1) {
      const next=currentStep + 1;

      setCurrentStep(next);
      setStepInput(next+1);

     
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      const previous=currentStep - 1;
      setCurrentStep(previous);
      setStepInput(previous+1);
     
    }
  };

  const goToStep=(stepNumber)=>{
   if (
    stepNumber >= 1&&
    stepNumber<=FietsVerlengenData.steps.length
   ){
    setCurrentStep(stepNumber-1);
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
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700"
          >
            ← Back
          </button>
         <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="number"
          min="1"
          max={FietsVerlengenData.steps.length}
          value={stepInput}
          onChange={(e)=>setStepInput(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              goToStep(Number(stepInput));
            }
          }} 
          onBlur={()=>{
            goToStep(Number(stepInput));
          }}
          className="w-12 rounded border border-gray-300 px-2 py-1 text-center"
          />
          <span>{FietsVerlengenData.steps.length}</span>
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
                  FietsVerlengenData.steps.length) *
                100
              }%`,
            }}
          />

        </div>

        {/* Video */}
        {currentStep === 0 && FietsVerlengenData.video && (
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
                  src={FietsVerlengenData.video}
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
            "
          >
            ← Previous
          </button>

          {currentStep === FietsVerlengenData.steps.length - 1 ? (

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

export default FietsVerlengen;