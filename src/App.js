import { Home } from "./views/Home";
import { Route, Routes } from "react-router-dom";
import BackGroundAnimated from "../src/resources/backGroundEffect/BackGroundAnimated";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <BackGroundAnimated />
    </>
  );
}

export default App;
