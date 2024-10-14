import React from 'react'
import Hero from './Hero'
import Roadmap from './RoadMap'
import Simulations from './Simulations'
import TechnologySolutions from './Solutions'
import TreeProfile from './Adoption'

const Home = () => {
  return (
    <div className="">
        <Hero/>
        <TechnologySolutions/>
        <Simulations/>
        <Roadmap/>
        <TreeProfile/>
    </div>
  )
}

export default Home