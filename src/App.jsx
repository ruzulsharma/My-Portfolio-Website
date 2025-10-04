import React from "react";
import AppRoutes from "./AppRoutes";
import LeftPage from "./pages/LeftPage";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  return (
    <div className="">
      <ToastContainer />
      <AppRoutes />
    </div>
  );
};

export default App;
