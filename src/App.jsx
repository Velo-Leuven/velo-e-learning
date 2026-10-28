import { Routes, Route } from "react-router-dom";

import VeloELearning from "./pages/VeloELearning";
import Administration from "./pages/Administration";
import TechnicalTraining from "./pages/TechnicalTraining";
import TechnicalForTalent from "./pages/TechnicalForTalent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VeloELearning />} />
      <Route path="/administration" element={<Administration />} />
      <Route path="/technical-training" element={<TechnicalTraining />} />
      <Route path="/technicalfortalent" element={<TechnicalForTalent />} />
    </Routes>
  );
}

export default App;