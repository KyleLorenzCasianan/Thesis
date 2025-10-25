import React from 'react'

const LandPageCenter = () => {
  return (
<div 
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i0.wp.com/geopard.tech/wp-content/uploads/2021/12/What-is-fertigation-2-min.jpg?resize=810%2C439&ssl=1)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Soil NPK Fertilizer</h1>
      <p className="mb-5">
        This study aims to implement a machine-learning powered soil analysis and crop suitability monitoring system. This system aims to measure and analyze soil parameters to assist farmers in maintaining or improving soil conditions suitable for next planting.
      </p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default LandPageCenter