import React from 'react'
import EnergyDashboard from './EnergyDashboard'
import Hero from './Hero'
import SmartWaste from './SmartWaste'
import Sustainability from './Sustainability'
import VerticalFarming from './VerticalFarming'

const Environment = () => {
  return (
    <div className='bg-gray-100'>
      <Hero/>
      <EnergyDashboard/>
      <VerticalFarming/>
      <Sustainability/>
      <SmartWaste/>
    </div>
   
  )
}

export default Environment