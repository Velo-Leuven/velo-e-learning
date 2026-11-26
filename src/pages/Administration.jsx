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
import FietsVervangen from "./FietsVervangen";
import FietsVerlengen from "./FietsVerlengen";
import OphalingFietsHerstelling from "./OphalingFietsHerstelling";


const adminTypes = [
  {
    id: 1,
    name: "Fietsverkoop Particulier Afrekenen",
    icon: "💵",
    category: "Fiets",
  },
  {
    id: 2,
    name: "Fietsverhuur",
    icon: "📝",
    category: "Fiets",
  },
  {
    id: 3,
    name: "Fiets Wisselen Van Ander Type",
    icon: "🔄",
    category: "Fiets",
  },
  {
    id: 4,
    name: "Factuur Maken(met Klantenreferentie)",
    icon: "🧾",
    category: "Kassa",
  },
  {
    id: 5,
    name: "Gestolen Fiets",
    icon: "🚨",
    category: "Fiets",
  },
  {
    id: 6,
    name: "Waarborg Terugstorten",
    icon: "💰",
    category: "Kassa",
  },
  {
    id: 7,
    name: "Groepsverhuur",
    icon: "👥",
    category: "Fiets",
  },
  {
    id: 8,
    name: "Verkooporder Aanpassen",
    icon: "📦",
    category: "Kassa",
  },
  {
    id: 9,
    name: "Late Ophaling Aanrekenen",
    icon: "⏰",
    category: "Kassa",
  },
  {
    id: 10,
    name: "Herstelling Afrekenen (privé fietsen)",
    icon: "🛠️",
    category: "Kassa",
  },
  {
    id: 11,
    name: "Verhuur VELOkadee",
    icon: "🚲",
    category: "Fiets",
  },
  {
    id:12,
    name:"Handleiding Kassa",
    icon:"💳",
    category: "Kassa",
  },
  {
    id:13,
    name:"Fiets Verplaatsen",
    icon:"📍",
    category: "Fiets",
  },
  {
  id:14,
    name:"Fiets Vervangen (diefstal)",
    icon:"🚨",
    category: "Fiets",
  },
  {
    id:15,
    name:"Fiets Verlengen",
    icon:"📊",
    category: "Fiets",
  },
  {
    id:16,
    name:" Ophaling Fiets uit Herstelling",
    icon:"🔩",
    category: "Fiets",
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
  const [selectedFilter, setSelectedFilter] = useState("Alles");

const filteredAdminTypes =
  selectedFilter === "Alles"
    ? adminTypes
    : adminTypes.filter((admin) => admin.category === selectedFilter);

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
        icon={selectedAdmin.icon}
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
        icon={selectedAdmin.icon}
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
        icon={selectedAdmin.icon}
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
      icon={selectedAdmin.icon}
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
      icon={selectedAdmin.icon}
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
      icon={selectedAdmin.icon}
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
      icon={selectedAdmin.icon}
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
        icon={selectedAdmin.icon}
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
        icon={selectedAdmin.icon}
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
        icon={selectedAdmin.icon}
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
        icon={selectedAdmin.icon}
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
        icon={selectedAdmin.icon}
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
        icon={selectedAdmin.icon}
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
//FietsVervangen
  if(
    selectedAdmin&&
    selectedAdmin.name==="Fiets Vervangen (diefstal)"
  ){
    return(
      <FietsVervangen
        icon={selectedAdmin.icon}
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }   
  //Fiets Verlengen
  if(
    selectedAdmin&&
    selectedAdmin.name==="Fiets Verlengen"
  ){
    return(
      <FietsVerlengen
        icon={selectedAdmin.icon}
        admin={selectedAdmin}
        onBack={handleBack}
        onHomeClick={onHomeClick}
        onAdministrationClick={handleAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
         onTechnicalForTalentClick={onTechnicalForTalentClick}
      />
    )
  }
  //Ophaling Fiets uit Herstelling
  if(
    selectedAdmin&&
    selectedAdmin.name===" Ophaling Fiets uit Herstelling"
  ){
    return(
      <OphalingFietsHerstelling
        icon={selectedAdmin.icon}
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
        backgroundImage:   `url("${import.meta.env.BASE_URL}/bgfp.jpg")`,
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

          <p className="mt-6 text-2xl font-bold text-gray-200 font-serif tracking-wide background-clip-text  bg-gradient-to-r from-red-200 to-pink-800">
            Wat wil je doen?
          </p>
          <div className="mt-6 flex justify-center gap-3">
  {["Alles", "Fiets", "Kassa"].map((filter) => (
    <button
      key={filter}
      onClick={() => setSelectedFilter(filter)}
      className={`rounded-lg px-6 py-2 font-semibold transition cursor-pointer ${
        selectedFilter === filter
          ? "bg-blue-600 text-white shadow-md"
          : "bg-white text-gray-800 hover:bg-gray-200"
      }`}
    >
      {filter}
    </button>
  ))}
</div>

        </div>

        {/* Administration cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {filteredAdminTypes.map((admin) => (
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