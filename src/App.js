import { Home } from "./views/Home";
import { Route, Routes } from "react-router-dom";
import BackGroundAnimated from "../src/resources/backGroundEffect/BackGroundAnimated";

function App() {
  return (
    <>
      <BackGroundAnimated />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
