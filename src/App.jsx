import React from "react";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import ParticleBackground from "./components/ParticleBackground";

const App = () => {
  return (
    <div className="relative">
      {/* Global 3D particle background */}
      <ParticleBackground />
      <ToastContainer />
      <AppRoutes />
    </div>
  );
};

export default App;
