import React from 'react'
import Hero from './Hero'
import Roadmap from './RoadMap'
import Simulations from './Simulations'
import TechnologySolutions from './Solutions'

const Home = () => {
  return (
    <div className="">
        <Hero/>
        <TechnologySolutions/>
        <Simulations/>
        <Roadmap/>
    </div>
  )
}

export default Home