import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../api/CoinContext'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Coin = () => {
  const { coins, currency } = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])
  const [input, setInput] = useState("")
  const { t } = useTranslation();

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const coin = await coins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coin)
  }

  useEffect(() => {
    setDisplayCoin(coins)
  }, [coins])

  return (
    <div className="flex flex-col items-center w-full p-4 mt-[-40px]">
      <form onSubmit={handleSearch} className="w-full flex flex-col items-center">
        <input
          type="text"
          placeholder={t('search.placeholder')}
          className="mb-4 p-2 w-1/2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-amber-50"
          value={input} onChange={handleInput}
        />
        <button type="submit" className="bg-gradient-to-r from-white to-gray-600  px-4 py-2 rounded-lg transition transform hover:scale-105">
          {t('search.button')}
        </button>
      </form>
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
            <tr key={coin.id} className="cursor-pointer hover:bg-gray-800">
              <td className="p-3 border border-gray-300">
                <Link to={`/coin/${coin.id}`} className="text-gray-300">
                  {coin.market_cap_rank}
                </Link>
              </td>
              <td className="p-3 border border-gray-300">
                <Link to={`/coin/${coin.id}`} className="flex items-center">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                  <span className="text-gray-300">{coin.name}</span>
                  <span className="text-gray-300 ml-2">({coin.symbol.toUpperCase()})</span>
                </Link>
              </td>
              <td className="p-3 border border-gray-300">
                <Link to={`/coin/${coin.id}`} className="text-gray-300">
                  {currency.symbol}{coin.current_price.toLocaleString()}
                </Link>
              </td>
              <td className="p-3 border border-gray-300">
                <Link to={`/coin/${coin.id}`} className={coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </Link>
              </td>
              <td className="p-3 border border-gray-300">
                <Link to={`/coin/${coin.id}`} className="text-gray-300">
                  {currency.symbol}{coin.market_cap.toLocaleString()}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Coin
