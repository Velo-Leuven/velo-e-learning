import React, { useState } from "react";

import Fietsverkoop from "./Fietsverkoop";
import GestolenFiets from "./GestolenFiets";
import FietsVerhuur from "./FietsVerhuur";
import FietsWisselen from "./FietsWisselen";
import Waarborg from "./Waarborg"; 
import FactuurMaken from "./FactuurMaken";
import Navbar from "../components/Navbar";
import GroepVerhuur from "./GroepVerhuur";
import Verkooporder from "./Verkooporder";
import LateOphaling from "./Lateophaling";
import HerstellingAfrekenen from "./HerstellingAfrekenen";
import VerhuurVelokadee from "./VerhuurVelokadee";
import HandleidingKassa from "./HandleidingKassa";
import FietsVerplaatsen from "./FietsVerplaatsen";


const adminTypes = [
  {
    id: 1,
    name: "Fietsverkoop Particulier Afrekenen",
    icon: "📝",
  },
  {
    id: 2,
    name: "Fietsverhuur",
    icon: "🚲",
  },
  {
    id: 3,
    name: "Fiets Wisselen Van Ander Type",
    icon: "🔄",
  },
  {
    id: 4,
    name: "Factuur Maken(met Klantenreferentie)",
    icon: "💳",
  },
  {
    id: 5,
    name: "Gestolen Fiets",
    icon: "🚨",
  },
  {
    id: 6,
    name: "Waarborg Terugstorten",
    icon: "💰",
  },
  {
    id: 7,
    name: "Groepsverhuur",
    icon: "👥",
  },
  {
    id: 8,
    name: "Verkooporder Aanpassen",
    icon: "✏️",
  },
  {
    id: 9,
    name: "Late Ophaling Aanrekenen",
    icon: "⏰",
  },
  {
    id: 10,
    name: "Herstelling Afrekenen (privé fietsen)",
    icon: "🛠️",
  },
  {
    id: 11,
    name: "Verhuur VELOkadee",
    icon: "🚲",
  },
  {
    id:12,
    name:"Handleiding Kassa",
    icon:"💳",
  },
  {
    id:13,
    name:"Fiets Verplaatsen",
    icon:"🚲",
  }
];

function Administration({
  onBack,
  onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick,
  onTechnicalForTalentClick,
}) {
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleAdminClick = (admin) => {
    setSelectedAdmin(admin);
  };

  const handleBack = () => {
    
    setSelectedAdmin(null);
    //onBack();
     
  };
  const handleAdministrationClick = () => {
  setSelectedAdmin(null);
  onAdministrationClick();
};

  // Fietsverkoop
  if (
    selectedAdmin &&
    selectedAdmin.name === "Fietsverkoop Particulier Afrekenen"
  ) {
    return (
      <Fietsverkoop
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }

  // Gestolen Fiets
  if (
    selectedAdmin &&
    selectedAdmin.name === "Gestolen Fiets"
  ) {
    return (
      <GestolenFiets
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdminClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }

  // Fietsverhuur
  if (
    selectedAdmin &&
    selectedAdmin.name === "Fietsverhuur"
  ) {
    return (
      <FietsVerhuur
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    );
  }
  //FietsWisslen
  if(
    selectedAdmin&&
    selectedAdmin.name==="Fiets Wisselen Van Ander Type"
  ){
    return(
      <FietsWisselen
      admin={selectedAdmin}
      onBack={handleBack}
      onHomeClick={onHomeClick}
      onAdministrationClick={handleAdministrationClick}
      onTechnicalTrainingClick={onTechnicalTrainingClick}
       onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }

   //Waarborg
  if(
    selectedAdmin&&
    selectedAdmin.name==="Waarborg Terugstorten"
  ){
    return(
      <Waarborg
      admin={selectedAdmin}
      onBack={handleBack}
      onHomeClick={onHomeClick}
      onAdministrationClick={handleAdministrationClick}
      onTechnicalTrainingClick={onTechnicalTrainingClick}
       onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
   //Factuur Maken
  if(
    selectedAdmin&&
    selectedAdmin.name==="Factuur Maken(met Klantenreferentie)"
  ){
    return(
      <FactuurMaken
      admin={selectedAdmin}
      onBack={handleBack}
      onHomeClick={onHomeClick}
      onAdministrationClick={handleAdministrationClick}
      onTechnicalTrainingClick={onTechnicalTrainingClick}
       onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
  //Groep Verhuur
  if(
    selectedAdmin&&
    selectedAdmin.name==="Groepsverhuur"
  ){
    return(
      <GroepVerhuur
      admin={selectedAdmin}
      onBack={handleBack}
      onHomeClick={onHomeClick}
      onAdministrationClick={handleAdministrationClick}
      onTechnicalTrainingClick={onTechnicalTrainingClick}
       onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
  //Verkooporder
  if(
    selectedAdmin&&
    selectedAdmin.name==="Verkooporder Aanpassen"
  ){
    return(
      <Verkooporder
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
  //Late Ophaling
  if(
    selectedAdmin&&
    selectedAdmin.name==="Late Ophaling Aanrekenen"
  ){
    return(
      <LateOphaling
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
  //Herstelling Afrekenen
  if(
    selectedAdmin&&
    selectedAdmin.name==="Herstelling Afrekenen (privé fietsen)"
  ){
    return(
      <HerstellingAfrekenen
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
  //Verhuur VELOkadee
  if(
    selectedAdmin&&
    selectedAdmin.name==="Verhuur VELOkadee"
  ){
    return(
      <VerhuurVelokadee
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
  //Handleiding Kassa
  if(
    selectedAdmin&&
    selectedAdmin.name==="Handleiding Kassa"
  ){
    return(
      <HandleidingKassa
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
  //FietsVerplaatsen
  if(
    selectedAdmin&&
    selectedAdmin.name==="Fiets Verplaatsen"
  ){
    return(
      <FietsVerplaatsen
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }


  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
      style={{
        backgroundImage: 'url("/bgfp.jpg")',
      }}
    >

      {/* Navbar */}
      <Navbar
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
         activePage="Administration"
      />

      <div className="mx-auto max-w-5xl">

        {/* Back button */}
        <button
          onClick={onBack}
          className="
            mb-8
            flex
            items-center
            gap-2
            rounded-lg
            bg-gray-800
            px-5
            py-3
            text-white
            transition
            hover:bg-gray-700
            cursor-pointer
          "
        >
          ← Back to E-Learning
        </button>

        {/* Header */}
        <div className="mb-12 text-center">

          <h2 className="mt-2 text-3xl font-bold text-red-500">
            Administration
          </h2>

          <p className="mt-6 text-2xl font-bold text-gray-200">
            What do you want to do?
          </p>

        </div>

        {/* Administration cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {adminTypes.map((admin) => (
            <button
              key={admin.id}
              onClick={() => handleAdminClick(admin)}
              className="
                group
                flex
                min-h-[200px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-sm
                transition
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
                active:scale-95
                cursor-pointer
              "
            >
              <span className="text-7xl transition group-hover:scale-110">
                {admin.icon}
              </span>

              <span className="mt-6 text-2xl font-semibold text-gray-800">
                {admin.name}
              </span>
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Administration;