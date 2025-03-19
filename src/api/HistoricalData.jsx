import React, { useState, useContext, useEffect } from 'react'
import { CoinContext } from './CoinContext';
import LineChart from '../components/LineChart';

const HistoricalData = ({coinId}) => {
    const [historicalData, setHistoricalData] = useState();
    const { currency } = useContext(CoinContext);

    const fetchHistoricalData = async () => {
        try {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`
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
                <LineChart historicalData={historicalData} />
            ) : (
                <div className="flex justify-center items-center h-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
        </div>
    )
}

export default HistoricalData
