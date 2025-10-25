import React from "react";
import LandPageNav from "../Components/LandPageNav";
import LandPageCenter from "../Components/LandPageCenter";




const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <LandPageNav />
      <div className="flex m-10">
        <LandPageCenter />
      </div>
    </div>
  );
};

export default LandingPage;
