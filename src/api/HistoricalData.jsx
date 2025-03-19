import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CoinContext } from './CoinContext';

const HistoricalData = () => {
    const {coinId} = useParams();
    const [historicalData, setHistoricalData] = useState();
    const { currency } = useContext(CoinContext);

    const fetchHistoricalData = async () => {
        try {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Fetched data:', data);
            setHistoricalData(data);
    
        } catch (error) {
            console.error('Error fetching coins:', error);
        }       
    }

    useEffect(() => {
        fetchHistoricalData();
    }, [coinId, currency]);

    return (
        <div>
            {historicalData ? (
      <div>
        <h2 className="text-lg font-bold mb-2">Historical Prices (last 10 days)</h2>
        <ul>
          {historicalData.prices.map(([timestamp, price]) => (
            <li key={timestamp}>
              {new Date(timestamp).toLocaleDateString()} — {price.toFixed(2)} {currency.name.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      ) : (
                <div className="flex justify-center items-center h-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
        </div>
    )
}

export default HistoricalData
