import React from 'react'
import NavBar from '../components/navbar.jsx'
import SoilCard from '../components/SoilCard.jsx'

const HomePage = () => {
  return (
    <div className="min-h-screen">
        <NavBar/>
        <SoilCard />
    </div>
  )
}

export default HomePage