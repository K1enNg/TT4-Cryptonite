import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Coin from '../components/Coin'

const Homepage = () => {
  const [showCoin, setShowCoin] = useState(false);
  const [showHero, setShowHero] = useState(true);

  const handleGetStarted = () => {
    setShowCoin(true);
    setShowHero(false);
  };

  return (
    <>
      {showHero && <Hero onGetStarted={handleGetStarted} />}
      {showCoin && <Coin />}
    </>
  )
}

export default Homepage
