import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from './CoinContext';
import HistoricalData from './HistoricalData';


const CoinDetail = () => {

    const { coinId } = useParams();
    const [coinData, setCoinData] = useState();
    const { currency } = useContext(CoinContext);

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
        <div className="mt-[-80px]">
            {coinData ? (
                <div className="rounded-lg shadow-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src={coinData.image.large} alt={coinData.name} className="w-20 h-20 mb-4" />
                        <p className="text-white text-2xl font-bold">{coinData.name}</p>
                        <p className="text-gray-400 text-lg uppercase">{coinData.symbol}</p>
                    </div>
                    <div className="ml-40 mt-6">
                        <HistoricalData coinId={coinId} />
                    </div>
                    <div className="max-w-md mx-auto rounded-xl p-6 mt-6">
                        <ul className="space-y-3 text-white">
                            <li className="flex justify-between">
                                <span className="font-medium">Rank:</span>
                                <span>{coinData.market_cap_rank}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">Price:</span>
                                <span>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">Market Cap:</span>
                                <span>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">Highest Price (24H):</span>
                                <span>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">Lowest Price (24H):</span>
                                <span>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</span>
                            </li>
                        </ul>
                    </div>


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
