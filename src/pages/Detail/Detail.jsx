import React from 'react'
import Community from './Community'
import GreenTechnology from './GreenTech'
import HeroDetail from './Hero'
import MilestonesPage from './MilestoneCard'
import GreenTech from './GreenTechs'
import Exam from './Exam'

const Detail = () => {
  return (
    <div>
        <HeroDetail/>
        <GreenTech/>
        <Exam/>
        <Community/>
        <MilestonesPage/>
        <GreenTechnology/>
    </div>
  )
}

export default Detail