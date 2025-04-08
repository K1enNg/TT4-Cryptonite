import React, { useState, useContext, useEffect } from 'react'
import { CoinContext } from './CoinContext';
import LineChart from '../components/LineChart';
import LazyLoading from '../components/LazyLoading';

const HistoricalData = ({ coinId }) => {
    const [historicalData, setHistoricalData] = useState();
    const { currency } = useContext(CoinContext);

    // const fetchHistoricalData = async () => {
    //     try {
    //       const response = await fetch(
    //         `http://localhost:5000/api/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`
    //       );
    //       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    //       const data = await response.json();
    //       setHistoricalData(data);
    //     } catch (error) {
    //       console.error('Error fetching historical data:', error);
    //     }
    //   };

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
                <LazyLoading />
            )}
        </div>
    )
}

export default HistoricalData
