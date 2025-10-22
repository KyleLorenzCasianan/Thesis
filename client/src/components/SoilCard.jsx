import React from 'react'

const SoilCard = () => {
  return (
    <div className="flex justify-center m-5">
        <div className="card bg-primary text-primary-content m-5 w-120">
            <div className="card-body">
                <h2 className="card-title">Soil Sensor 1
                    <span className="badge badge-secondary ml-2">Rice</span>
                    
                </h2>
                    <p>Details:</p>
                    <div className="card-actions justify-end">
                        <button className="btn">More Details</button>
                    </div>
            </div>
        </div>

        <div className="card bg-primary text-primary-content m-5 w-120">
            <div className="card-body">
                <h2 className="card-title">Soil Sensor 2
                    <span className="badge badge-secondary ml-2">Sugarcane</span>
                    
                </h2>
                    <p>Details:</p>
                    <div className="card-actions justify-end">
                        <button className="btn">More Details</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SoilCard