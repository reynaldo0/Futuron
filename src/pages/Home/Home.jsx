import React from 'react'
import Hero from './Hero'
import Roadmap from './RoadMap'
import Simulations from './Simulations'
import Solutions from './Solutions'
import TreeCanvas from '../../components/Models/Canvas'
import ImpactFeed from './ImpactFeed'

const Home = () => {
  return (
    <>
        <Hero/>
        <Solutions/>
        <Simulations/>
        <Roadmap/>
        <TreeCanvas/>
        <ImpactFeed/>
    </>
  )
}

export default Home