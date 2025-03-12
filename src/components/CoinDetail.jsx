import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../api/CoinContext';


const CoinDetail = () => {
    
    const {coinId} = useParams();
    const [coinData, setCoinData] = useState();
    const {currency} = useContext(CoinContext);

    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-Tzy7YRtANQWBepEcy1CHJzLM'}
          };

          try {
            const response = await fetch (
                `https://api.coingecko.com/api/v3/coins/${coinId}`,
                {
                    ...options,
                    mode: 'cors'
                }
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
    }, [currency]);
    
    
    return (
        <div>
            {coinData ? (
                <div>
                    <img src={coinData.image.large} alt={coinData.name} />
                    <p>{coinData.name}</p>
                    <p>{coinData.symbol}</p>
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
