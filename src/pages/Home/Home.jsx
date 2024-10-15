import React from 'react'
import Hero from './Hero'
import Roadmap from './RoadMap'
import Simulations from './Simulations'
import TechnologySolutions from './Solutions'
import TreeCanvas from '../../components/Models/Canvas'
import ImpactFeed from './ImpactFeed'

const Home = () => {
  return (
    <div className="">
        <Hero/>
        <TechnologySolutions/>
        <Simulations/>
        <Roadmap/>
        <TreeCanvas/>
        <ImpactFeed/>
    </div>
  )
}

export default Home