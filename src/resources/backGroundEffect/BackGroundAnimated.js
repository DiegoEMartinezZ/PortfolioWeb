import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const BackGroundAnimated = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      params={particlesConfig}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default BackGroundAnimated;
