import React from 'react'
import EnergyDashboard from './EnergyDashboard'
import VerticalFarming from './VerticalFarming'
import SmartWaste from './SmartWaste'

const Environment = () => {
  return (
    <div className='pt-40'>
      <EnergyDashboard/>
      <VerticalFarming/>
      <SmartWaste/>
    </div>
   
  )
}

export default Environment