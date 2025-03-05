import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Coin from '../components/Coin'
import TrendingCoin from '../components/TrendingCoin'

const Homepage = () => {

  return (
    <>
    <TrendingCoin />
      {/* <Hero /> */}
      <Coin />
    </>
  )
}

export default Homepage
