import React from 'react'
import EnergyDashboard from './EnergyDashboard'
import VerticalFarming from './VerticalFarming'
import SmartWaste from './SmartWaste'
import SolarTech from './SolarTech'

const Environment = () => {
  return (
    <div className='pt-40'>
      <SolarTech/>
      {/* <EnergyDashboard/> */}
      <VerticalFarming/>
      <SmartWaste/>
    </div>
   
  )
}

export default Environment