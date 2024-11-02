import React from 'react'
import EnergyDashboard from './EnergyDashboard'
import Hero from './Hero'
import VerticalFarming from './VerticalFarming'

const Environment = () => {
  return (
    <div className='bg-gray-100'>
      <Hero/>
      <VerticalFarming/>
      <EnergyDashboard/>
    </div>
   
  )
}

export default Environment