import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from './CoinContext';
import HistoricalData from './HistoricalData';


const CoinDetail = () => {
    
    const {coinId} = useParams();
    const [coinData, setCoinData] = useState();
    const {currency} = useContext(CoinContext);

    const fetchCoinData = async () => {
        try {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/${coinId}`
            );
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Fetched data:', data);
            setCoinData(data);
    
        } catch (error) {
            console.error('Error fetching coins:', error);
        }       
    }
    

    useEffect(() => {
        fetchCoinData();
    }, [coinId, currency]);
    
    
    
    return (
        <div>
            {coinData ? (
                <div>
                    <img src={coinData.image.large} alt={coinData.name} />
                    <p>{coinData.name}</p>
                    <p>{coinData.symbol}</p>
                    <HistoricalData />
                </div>
            ) : (
                <div className="flex justify-center items-center h-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
        </div>
    )
}

export default CoinDetail;
