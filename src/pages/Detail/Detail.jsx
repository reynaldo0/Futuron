import React from 'react'
import MilestonesPage from './MilestoneCard'
import Community from './Community'
import Events from './Event'
import HeroDetail from './Hero'

const Detail = () => {
  return (
    <div>
        <HeroDetail/>
        <Community/>
        <MilestonesPage/>
        <Events/>
    </div>
  )
}

export default Detail