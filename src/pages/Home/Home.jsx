import React from 'react'
import Hero from './Hero'
import TechnologySolutions from './Solutions'
import Simulations from './Simulations'
import Roadmap from './RoadMap'

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