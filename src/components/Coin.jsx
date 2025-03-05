import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../api/CoinContext'

const Coin = () => {
    const {allCoins, currency} = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([])
  
    useEffect(() => {
      setDisplayCoin(allCoins)
    }, [allCoins])
    
  return (
    <div className="flex flex-col items-center w-full p-4 mt-[-40px]">
      <input
        type="text"
        placeholder="Search for a coin..."
        className="mb-4 p-2 w-1/2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-amber-50"
      />
      <table className="mt-10 w-full text-left border-collapse border border-gray-200">
        <thead className="bg-gradient-to-bl-700 text-white">
          <tr>
            <th className="p-3 border border-gray-300">#</th>
            <th className="p-3 border border-gray-300">Coins</th>
            <th className="p-3 border border-gray-300">Price</th>
            <th className="p-3 border border-gray-300">24H Change</th>
            <th className="p-3 border border-gray-300">Market Cap</th>
          </tr>
        </thead>
        <tbody>
            {Array.isArray(displayCoin) && displayCoin.slice(0, 10).map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{item.market_cap_rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Coin