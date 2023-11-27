import { createContext, useEffect, useState } from "react";
import { Home } from "./views/Home";
import { Route, Routes } from "react-router-dom";

export const languageContext = createContext();

function App() {
  const [isEnglishSelected, SetIsEnglishSelected] = useState(true);
  const [language, setLanguage] = useState("english JSON"); // Esto es el JSON en ingles!
  const languageHandler = () => SetIsEnglishSelected(!isEnglishSelected);
  useEffect(() => {
    setLanguage(isEnglishSelected ? "english JSON" : "spanish JSON"); // Esto es JSON en SPA
  }, [isEnglishSelected]);
  return (
    <>
      <languageContext.Provider value={{ language, languageHandler }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </languageContext.Provider>
    </>
  );
}

export default App;
