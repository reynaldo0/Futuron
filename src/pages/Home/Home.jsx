import React from 'react'
import Hero from './Hero'
import Roadmap from './RoadMap'
import Simulations from './Simulations'
import TechnologySolutions from './Solutions'
import TreeProfile from './Adoption'
import TreeCanvas from '../../components/Models/Canvas'

const Home = () => {
  return (
    <div className="">
        <Hero/>
        <TechnologySolutions/>
        <Simulations/>
        <Roadmap/>
        <TreeProfile/>
        <TreeCanvas/>
    </div>
  )
}

export default Home