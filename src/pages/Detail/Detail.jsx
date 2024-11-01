import React from 'react'
import Community from './Community'
import Exam from './Exam'
import GreenTech from './GreenTechs'
import HeroDetail from './Hero'
import MilestonesPage from './MilestoneCard'
import JoinCommunity from './JoinCommunity'

const Detail = () => {
  return (
    <div className='bg-green-50'>
        <HeroDetail/>
        <GreenTech/>
        <Exam/>
        <Community/>
        <MilestonesPage/>
        <JoinCommunity/>
    </div>
  )
}

export default Detail