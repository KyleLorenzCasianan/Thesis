import React from "react";
import LandPageNav from "../Components/LandPageNav";
import LandPageCenter from "../Components/LandPageCenter";
import LandPageFeature from "../Components/LandPageFeature";
import LandPageBottom from "../Components/LandPageBottom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <LandPageNav />
      <LandPageCenter />
      <LandPageFeature />
      <LandPageBottom />
    </div>
  );
};

export default LandingPage;
