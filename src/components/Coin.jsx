import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../api/CoinContext'

const Coin = () => {
  const { coins, currency } = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])

  useEffect(() => {
    setDisplayCoin(coins)
  }, [coins])

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
          {Array.isArray(displayCoin) && displayCoin.map((coin) => (
            <tr key={coin.id} className="hover:bg-gray-100">
              <td className="p-3 border border-gray-300 text-gray-300">{coin.market_cap_rank}</td>
              <td className="p-3 border border-gray-300">
                <div className="flex items-center">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                  <span className="text-gray-300">{coin.name}</span>
                  <span className="text-gray-300 ml-2">({coin.symbol.toUpperCase()})</span>
                </div>
              </td>
              <td className="p-3 border border-gray-300 text-gray-300">
                {currency.symbol}{coin.current_price.toLocaleString()}
              </td>
              <td className={`p-3 border border-gray-300 ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="p-3 border border-gray-300 text-gray-300">
                {currency.symbol}{coin.market_cap.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Coin