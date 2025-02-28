import React from 'react'

const Coin = () => {
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
            <tr>
              <td className="p-3 border border-gray-300"></td>
              <td className="p-3 border border-gray-300"></td>
              <td className="p-3 border border-gray-300"></td>
              <td className="p-3 border border-gray-300"></td>
              <td className="p-3 border border-gray-300"></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Coin