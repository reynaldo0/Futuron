import React from 'react'
import Hero from './Hero'
import Roadmap from './RoadMap'
import Simulations from './Simulations'
import Solutions from './Solutions'
import TreeCanvas from '../../components/Models/Canvas'
import ImpactFeed from './ImpactFeed'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-white bg-gray-100'>
        <Hero/>
        <Solutions/>
        <Simulations/>
        <Roadmap/>
        <TreeCanvas/>
        <ImpactFeed/>
    </div>
  )
}

export default Home