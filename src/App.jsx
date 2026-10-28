import { BrowserRouter, Routes, Route } from "react-router-dom";

import VeloELearning from "./pages/VeloELearning";
import Administration from "./pages/Administration";
import TechnicalTraining from "./pages/TechnicalTraining";
import TechnicalForTalent from "./pages/TechnicalForTalent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VeloELearning />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/technical-training" element={<TechnicalTraining />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;