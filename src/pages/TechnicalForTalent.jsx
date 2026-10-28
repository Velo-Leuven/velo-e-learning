import React, { useState } from "react";

import Navbar from "../components/Navbar";

const chapters = [
  {
    id: 1,
    title: "Soorten fietsen en de wet",
    description: (
      <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
          <li>De geschiedenis van de fiets</li>
          <li>De definitie van de fiets</li>
          <li>De klassieke fiets</li>
          <li>De hybride fiets</li>
          <li>De klassieke racefiets</li>
          <li>De mountainbike</li>
          <li>De kinderfiets</li>
          <li>De vouwfiets</li>
          <li>De ligfiets</li>
          <li>De elektrische fiets</li>
          <li>Alle andere fietsen</li>
          <li>Fietsen en de wet</li>
          <li>Vul in</li>
        </ol>
      </div>
    ),
    pdf: "/media/technical-talent/Hoofdstuk 1 soorten fietsen en de wet.pdf",
  },

  {
    id: 2,
    title: "De binnen en buitenband",
    description: (
      <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
          <li>De taken van een band</li>
          <li>Waaruit is een fietsband opgebouwd?</li>
          <li>Waaruit is een tube opgebouwd?</li>
          <li>Wat is dan een tubeless?</li>

          <li>
            De doelen van een buitenband

            <ol className="mt-2 list-[lower-alpha] pl-6">
              <li>Grip en buitenprofiel</li>
              <li>Rolweerstand</li>
              <li>Lekbescherming en levensduur</li>
              <li>Het gewicht</li>
            </ol>
          </li>

          <li>De bandenmaat</li>
          <li>De ventielen</li>
          <li>Het velglint</li>
          <li>Vul in</li>
          <li>Praktijk</li>
        </ol>
      </div>
    ),
    pdf: "/media/technical-talent/Hoofdstuk 2 banden.pdf",
  },

  {
    id: 3,
    title: "Mechanicain de fietstechniek",
    description: (
      <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
          <li>Elektrisch meten</li>
          <li>Mechanisch meten
            <ol className="mt-2 list-[upper-alpha] pl-6">
              <li>De spaakliniaal</li>
              <li>De schuifmaat</li>
              <li>Andere afstandsmeters
              <ol className="mt-2 list-[lower-alpha] pl-6">
              <li>Schroefmaat (micrometer)</li>
              <li>Voelermaat</li>
              <li>Kettingslijtagemeter</li>
              <li>Tandwielslijtagemeter</li>

              </ol>


              </li>
              <li>Schroefdraad meten</li>
              <li>Luchtdruk meten</li>
            </ol>
      <li>Schroefdraadverbindingen

       <ol className="mt-2 list-[lower-alpha] pl-6">
              <li>Linkse en rechtse draad</li>
              <li>Het opzuiveren van schroefdraad</li>
              <li>Het borgen van de schroefdraad</li>
              

              </ol>


      </li>

          </li>
          
          <li>Kabelverbindingen
           <ol className="mt-2 list-[upper-alpha] pl-6">
              <li>Remmen

             <ol className="mt-2 list-[lower-alpha] pl-6">
              <li>Mechanische remkabels</li>
              <li>Hydraulische remkabels</li>
              
              </ol>


              </li>
              <li>Versnellingen</li>
              


</ol>
          </li>

          <li>
            Kader / frame

            <ol className="mt-2 list-[lower-alpha] pl-6">
              <li>Materiaaleigenschappen</li>
              <li>Soorten verbindingen</li>
              <li>Carbon</li>
              
            </ol>
          </li>

          
        </ol>
      </div>
    ),
    pdf: "/media/technical-talent/Hoofdstuk 3 mech elektr meten verbindingen.pdf",
  },

  {
    id: 4,
    title: "Remmen",
    description: <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
          <li>Geschiedenis van de rem
            <ol className="mt-2 list-[lower-alpha] pl-6">
              <li>De Fixie, de spoonbrake en de duck’s rollerbrake</li>
              <li>De trommelrem</li>
              <li>De staafjesrem</li>
              <li>De zijoptrekrem</li>
              <li>De rollerbrake</li>
              <li>De U Brake</li>
              
            </ol>



          </li>
          <li>Remmen met grote kracht

           <ol className="mt-2 list-[lower-alpha] pl-6">
              <li>De cantilever rem</li>
              <li>De V-brake</li>
              <li>Hydraulische velgremmen</li>
              <li>Hydraulische schijfremmen</li>
              
              
            </ol>
             <li>Remblokken</li>
              <li>Test van het hoofdstuk</li>
              <li>Remmen in de 21e eeuw</li>

          </li>
        </ol>
        </div>
            
            ,
    pdf: "/media/technical-talent/Hoofdstuk 4. remmen.pdf",
  },

  {
    id: 5,
    title: "Wielen",
    description: <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
          <li>Inleiding</li>
          <li>Eigenschappen van een goed wiel</li>
          <li>Velgen</li>
          <li>Spaken

           <ol className="mt-2 list-[lower-alpha] pl-6">
              <li>Spaaknippels</li>
              <li>Krachten op spaak en spaaknippel</li>
              
            </ol>
            </li>
             <li>Naven</li>
              <li>Het bepalen van spaaklengtes</li>
              <li>Het vlechten
              <ol className="mt-2 list-[lower-alpha] pl-6">
              <li>Wielen maken: gereedschap</li>
              <li>Vlechten: woordenschat</li>
              <li>Alvorens te beginnen</li>
              <li>De eerste reeks spaken</li>
              <li>De tweede reeks spaken</li>
              <li>De derde reeks spaken</li>
              <li>De vierde reeks spaken</li>
              <li>Krachten in de spaken</li>
              <li>Opmerkingen bij de spaakmethode</li>
              
            </ol>
          </li>
          <li>Het richten van het wiel</li>
          <li>Het vervangen van gebroken spaken</li>
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 5 wielen.pdf",
  },

  {
    id: 6,
    title: "Reinigen",
    description:
      <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
          <li>Fietsvriendelijk reinigen</li>
          <li>De juiste reinigingsvolgorde  <ol className="mt-2 list-none pl-6">
              <li>Reinigen met water</li>
              <li>Ontvetten</li>
              <li>Reinigen met water</li>
              <li>Drogen</li>
              <li>Smeren</li>
              
            </ol>
          </li>
          <li>Smeermiddelen 
            <ol className="mt-2 list-none pl-6">
              <li>Het reinigen en smeren van de ketting
                <ol className="mt-2 list-none pl-6">
              <li>Demonteren</li>
              <li>Reinigen</li>
              <li>Smeren en monteren of monteren en smeren </li>
             
              
            </ol>



              </li>
              <li>Soorten smeermiddelen en hun toepassing</li>
             
              
            </ol>






          </li>
         
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 6 reinigen.pdf",
  },

  {
    id: 7,
    title: "Verlichting en elektriciteit",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
          <li>Wat is elektriciteit ?    <ol className="mt-2 list-none pl-6">
          <li>Elektrische spanning  </li>
          <li>Elektrische stroom</li>
          <li>Elektrisch vermogen </li>
          <li>Serie en parallel schakeling</li>
          <li>Elektrische weerstand</li>
          <li>De dynamo</li>
          <li>Batterijen</li>
          <li>De lampen</li>
          </ol>
          </li>
          
          <li>Het meten van elektriciteit
            <ol className="mt-2 list-none pl-6">
              <li>Kortsluiting </li>
              <li>Fouten zoeken in een elektrisch circuit</li>
             
              
            </ol>  </li>
         <li>De kern van dit hoofdstuk</li>
         <li>Verlichting: opgelet <ol className="mt-2 list-none pl-6">Dynamopositie</ol></li>
         <li>Kabels<ol className="mt-2 list-none pl-6">
          <li>Batterijverlichting vs dynamo’s</li>
          <li>Oorzaken van defecten</li>
          
          </ol></li>
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 7. verlichting en electriciteit.pdf",
  },
  {
    id: 8,
    title: "Groepen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
          <li>Introductie  </li>
         <li>Racefietsgroepen</li>
         <li>MTB groepen </li>
         <li>Het zelf opbouwen van een fiets</li>
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 8.groepen.pdf",
  },
  {
    id: 9,
    title: "Steekassen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
          <li>Wat is een steekas en hoe verschilt die van “gewone” assen?  </li>
         <li>Steekassen: waarom?</li>
         <li>Welke types steekassen bestaan er?
          
          <ol className="mt-2 list-none pl-6">
              <li>De inbouwbreedte 

 <ol className="mt-2 list-none pl-6">

<li>Vooraan</li>
<li>Achteraan</li>

 </ol>


              </li>
              <li>De asdiameter


                 <ol className="mt-2 list-none pl-6">
                   <li>Voorvorken</li>
                   <li>Achterwielen en frames</li>


                 </ol>
              </li>
              <li>Compatibiliteit en ombouwsets</li>
             
              
            </ol> 
          
           </li>



        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 9.steekassen.pdf",
  },
  {
    id: 10,
    title: "Balhoofden",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
          <li>Wat is een balhoofd?
            <ol className="mt-2 list-none pl-6">
                   <li>Drie types cups</li>
                   <li>Vier types lagers</li>
                   <li>Drie types vorken</li>


                 </ol>
            
            
              </li>
         <li>Standardization Headset Identification System of kort S.H.I.S.</li>
         <li>Demontage van balhoofden</li>
         <li>Het frezen van balhoofden
 <ol className="mt-2 list-none pl-6">
                   <li>Balhoofdlug frezen</li>
                   <li>Voorvorkkroon frezen</li>
                  


                 </ol>


         </li>
         <li>Het inkorten van een voorvork</li>
         <li>Het monteren van cups en conussen in frame en vork</li>
         <li>Installatie van het kroontje bij een Ahead</li>
         <li>Onderhoud van balhoofden</li>



        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 10 balhoofden.pdf",
  },

  {
    id: 11.1,
    title: "Aandrijving",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
          <li>Overzicht achternaven (excl. remsystemen, zie 1e jaar)
            <ol className="mt-2 list-none pl-6">
                   <li>Zonder versnellingen: enkelvoudige freewheelpion of “fixed hub”</li>
                   <li>Zonder versnellingen; cassette met body</li>
                   <li>Met versnellingen: freewheel of cassette in combinatie met naafversnelling</li>
                   <li>Met versnellingen: meervoudige freewheelpion</li>
                   <li>Met versnellingen: cassettes</li>
                   <li>Combinatiemodellen</li>
                   <li>Derailleur VS naafversnellingen</li>
                   <li>Opmerkingen ivm. Naafbreedten</li>
                   <li>Vorm van de “achterpadden”</li>


                 </ol>
            
            
              </li>
         <li>Overzicht kettingen</li>
        
 <ol className="mt-2 list-none pl-6">
                   <li>De ketting</li>
                   <li>Soorten kettingen
                    <ol className="mt-2 list-none pl-6">
             <li>Voor fietsen zonder derailleur</li>
             <li>Voor fietsen met derailleur</li>



                    </ol>
                    <li>Iets over de compatibiliteit van kettingen en tandwielen</li>
                    <li>Soorten sluitingen van de ketting</li>
                    <li>Juiste kettingspanning</li>
                    <li>Slijtage
                    <ol className="mt-2 list-none pl-6">
                       <li>Kettingslijtage</li>
                       <li>Slijtage van de tandwielen</li>


                    </ol>


                    </li>
                    <li>De kettinglijn</li>





                   </li>
                  


                 </ol>


       
        



        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 11.1 Aandrijving.pdf",
  },
  {
    id: 11.2,
    title: "Trapassen en crankstellen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
          <li>Trapassen
            <ol className="mt-2 list-none pl-6">
                   <li>Voorbereiden van trapassen
                     <ol className="mt-2 list-none pl-6">
                      <li>Trapasdraad</li>
                      <li>Het frezen van de trapasdraad</li>
                      <li>Het vlakken van de trapaszijkanten</li>


                     </ol>



                   </li>
                   <li>Soorten trapassen
                    <ol className="mt-2 list-none pl-6">
                    <li>Types trapassen met draad</li>
                    <li>Types trapassen zonder draad (niet-regelbare trapassen)</li>


                    </ol>



                   </li>
                   <li>(de)montage van trapassen</li>
                  


                 </ol>
            
            
              </li>
         <li>Crankstellen
        
 <ol className="mt-2 list-none pl-6">
                   <li>Slijtage bij crankstellen</li>
                   <li>Problemen bij Kal cranks </li>
                    <li>Problemen bij vierkante cranks</li>


                 </ol>

</li>
        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 11.2 trapassen en cranks.pdf",
  },
   {
    id: 11.3,
    title: "Kettinglijn",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
          <li>Wat betekent het begrip “kettinglijn”?
            <ol className="mt-2 list-none pl-6">
                   <li>Het belang van de kettinglijn</li>
                   <li>Vbn. van een perfecte kettinglijn </li>
                 
                 </ol>
            
              </li>
         <li>Wanneer meet ik de kettinglijn op?
        
 <ol className="mt-2 list-none pl-6">
                   <li>Symptomen van problemen met de kettinglijn</li>
                   <li>Handelingen die de kettinglijn kunnen wijzigen? </li>
               
                 </ol>

</li>
<li>Drie cruciale maten
 <ol className="mt-2 list-none pl-6">
<li>Framelijn en framevlak A-B</li>
<li>Kettinglijn en kettingvlak C-D</li>
<li>Kettinglijnafstand e en B-D</li>


 </ol>


</li>
<li>Correcties uitvoeren
<ol className="mt-2 list-none pl-6">
<li>Handelingen die de kettinglijn kunnen wijzigen</li>

</ol>


</li>
        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 11.3 kettinglijn.pdf",
  },
  {
    id: 12,
    title: "Derailleurs",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
          <li>Vooraf: ketting, kabels, ...
          
            
              </li>
         <li>Achterderailleur
        
 <ol className="mt-2 list-none pl-6">
                   <li>De geschikte derailleur</li>
                   <li>Installatie </li>
                   <li>Afstelling</li>
                   <li>Problemen</li>
                   <li>Iets over het derailleuroog</li>
                   <li>Onderhoud</li>
               
                 </ol>

</li>
<li>Voorderailleur
</li>

        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 12 Derailleurs afstellen.pdf",
  },
  {
    id: 12.3,
    title: "Voorderailleurs",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
         
         <li>Voorderailleurs
        
 <ol className="mt-2 list-none pl-6">
                   <li>Eigenschappen van voorderailleurs</li>
                   <li>Afstellen van de voorderailleur
 </li>
                   <li>Troubleshooting (cfr. Barnett Manual)
</li>
                  
               
                 </ol>

</li>


        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 12-3 Derailleurs afstellen.pdf",
  },
  {
    id: 13,
    title: "Hydraulische remmen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
         
         <li>Iets over kabels en vloeistoffen</li>
         <li>Velgremmen
        
 <ol className="mt-2 list-none pl-6">
                   <li>Voor- en nadelen</li>
                   <li>Onderdelen</li>
                   <li>Ontluchten en inkorten van leidingen</li>
                 </ol>

</li>
<li>Schijfremmen
  <ol className="mt-2 list-none pl-6">

    <li>Voor- en nadelen</li>
    <li>Onderdelen</li>
    <li>Speciale eisen aan schijfremmen: frezen, wielvereisten.</li>
    <li>Ontluchten en inkorten van leidingen</li>
  </ol></li>
<li>Conclusie: de beste rem?</li>



        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 13. hydraulische remmen.pdf",
  },
  {
    id: 14.1,
    title: "Veringen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
         
         <li>Intro:
          <ol className="mt-2 list-none pl-6">
           <li>Waarom vering?</li>
           <li>Soorten vering</li>
           <li>Voordelen</li>
           <li>Nadelen</li>

          </ol>



         </li>
         <li>Technisch:
        
 <ol className="mt-2 list-none pl-6">
                   <li>The basics van vering en demping</li>
                   <li>Integratiesystemen</li>
                   <li>Cruciale onderhoudstips</li>
                 </ol>

</li>
<li>Klein en groot onderhoud</li>
<li>Specials</li>



        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 14-1 vering.pdf",
  },
   {
    id: 14.2,
    title: "Onderhoud van veringen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
          
         
         <li>Klein en groot onderhoud
          <ol className="mt-2 list-none pl-6">
           <li>Klein onderhoud</li>
           <li>Groot onderhoud
<ol className="mt-2 list-none pl-6">
  <li>Een typisch vb. van verende voorvorken onderhoud</li>
           <li>Controle en onderhoud van stalen veren</li>
</ol>


           </li>
          
           
  <li>Specials
<ol className="mt-2 list-none pl-6">
<li>Cannondale lefty</li>
<li>Cannondale Head shok</li>
<li>German A Flame</li>
<li>German A Kilo</li>


</ol>



  </li>
          </ol>



         </li>

        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 14-2 vering onderhoud.pdf",
  },
   {
    id: 15,
    title: "Elektrische fietsen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
         <li>Types elektrische fietsen</li>
         <li>Batterijen voor elektrische fietsen</li>
         <li>Prestaties van elektrische fietsen</li>
         <li>De beste elektrische fiets</li>

        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 15 elektrische fietsen.pdf",
  },
  {
    id: 16,
    title: "Elektrische schakelen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
         <li>Waarom elektronisch schakelen ?</li>
         <li>Geschiedenis van elektronisch schakelen in een notendop:</li>
         <li>Toepassingen:
          <ol className="mt-2 list-none pl-6">
            <li>Racefietsen</li>
            <li>Stadsfietsen (en elektronisch schakelen)</li>
            <li>MTB</li>

          </ol>



         </li>
         

        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 16 elektronisch schakelen.pdf",
  },
  {
    id: 17,
    title: "Riemaandrijving",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
         <li>Ketting of riem?
                <ol className="mt-2 list-none pl-6">
               <li>Sterkte</li>
               <li>Onderhoud</li>
               <li>Slijtage</li>
               <li>Prijs</li>
               <li>Verschillende soorten aandrijvingen</li>
               <li>Speciaal frame nodig?</li>
               <li>Conclusie</li>
                </ol>
         </li>
         <li>Overzicht van het gamma van Gates</li>
        <li>Overzicht van het aanbod van Veer Cycles</li>
        <li>Berekening van de riemlengte</li>
        <li>Een buitenbeentje: de cardan</li>
        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 17 riemaandrijving.pdf",
  },
  {
    id: 18.1,
    title: "Naafversnellingen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
        
         <li>Derailleur of naafversnelling</li>
        <li>Naafversnellingen</li>
        <li>Planetenstelsels</li>
        <li>Sturmey Archer 3 speed
          <ol className="mt-2 list-none pl-6">
              <li>Installatie van de S.A.3</li>
              <li>Demontage van de S.A.3 naaf</li>
              <li>Montage van de S.A.3 naaf</li>

          </ol>

        </li>
        <li>Nexus 3
          <ol className="mt-2 list-none pl-6">
            <li>Demontage van de Nexus 3</li>
          </ol>


        </li>
        <li>Nexus 4</li>
          <li>Nexus 7</li>
            <li>Nexus 8</li>
            <li>Alfine</li>
            <li>Kennischeck</li>
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 18.1 interne versnellingsnaven.pdf",
  },
   {
    id: 18.2,
    title: "Naaf- en trapasversnellingen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
         <li>Rohloff</li>
         <li>Nuvinci / Enviolo</li>
         <li>Trapasversnellingen
          <ol className="mt-2 list-none pl-6">
            <li>De Hammerschmidt</li>
            <li>Pinion</li>
           

          </ol>



         </li>
         <li>Wat is nu het beste versnellings systeem?</li>

        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 18.2 naaf en trapasversnellingen.pdf",
  },
  {
    id: 19,
    title: "Geometrie van fietsen",
    description:
     <div>
        <h3 className="mb-2 font-bold">Inhoud</h3>

        <ol className="list-decimal pl-6">
        
         <li>Introductie</li>
         <li>De ergonomie van een fiets</li>
         <li>Conclusie:</li>

        
        </ol>
        </div>,
    pdf: "/media/technical-talent/Hoofdstuk 19. Geometrie van fietsen.pdf",
  }
  
  
];

function TechnicalForTalent({ onBack, onHomeClick,
  onAdministrationClick,
  onTechnicalTrainingClick, 
  onTechnicalForTalentClick,}) {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const handleBikeClick = (bike) => {
    setSelectedBike(bike);
  };

  const handleBack = () => {
    setSelectedBike(null);
  };

  // PDF viewer
  if (selectedChapter) {
    return (
      <div className="min-h-screen bg-gray-100">
       {/* Navbar */}
      

        <main className="mx-auto max-w-7xl px-6 py-8">
         
          <button
            onClick={() => setSelectedChapter(null)}
            className="mb-6 cursor-pointer rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700"
          >
            ← Back to Chapters
          </button>

          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {selectedChapter.title}
            </h1>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <iframe
              src={selectedChapter.pdf}
              title={selectedChapter.title}
              className="h-[80vh] w-full"
            />
          </div>
        </main>
      </div>
    );
  }

  // Chapter list
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed px-6 py-12"
      style={{ backgroundImage: 'url("/bgtft.jpg")' }}
    >
      <Navbar
        onHomeClick={onHomeClick}
        onAdministrationClick={onAdministrationClick}
        onTechnicalTrainingClick={onTechnicalTrainingClick}
        onTechnicalForTalentClick={onTechnicalForTalentClick}
        activePage="Technical For Talent"
      />

      <main className="mx-auto max-w-6xl py-8">
        <button
          onClick={onBack}
          className="mb-8 cursor-pointer rounded-lg bg-gray-800 px-5 py-3 text-white transition hover:bg-gray-700"
        >
          ← Back
        </button>

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-red-500">
            Technical for Talent
          </h1>

          <p className="mt-3 text-xl text-gray-900">
            Select a chapter to open the course slides.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => setSelectedChapter(chapter)}
              className="group flex cursor-pointer flex-col rounded-2xl bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-800 text-2xl font-bold text-white">
                {chapter.id}
              </div>

              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                {chapter.title}
              </h2>

              <div className="mt-3 text-gray-600">
                {chapter.description}
              </div>

              <div className="mt-auto pt-5 font-medium text-blue-600">
                Open slides →
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TechnicalForTalent;