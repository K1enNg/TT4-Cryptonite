import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import CoinTable from '../components/CoinTable';

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
      {showCoin && <CoinTable />}
    </>
  )
}

export default Homepage
