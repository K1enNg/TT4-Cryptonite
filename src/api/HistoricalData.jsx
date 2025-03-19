import React, { use, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CoinContext } from './CoinContext';

const HistoricalData = () => {
    const [coinId, setCoinId] = useParams();
    const [historicalData, setHistoricalData] = useState();
    const [currency, setCurrency] = useContext(CoinContext);

    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-Tzy7YRtANQWBepEcy1CHJzLM'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options)
            .then(res => res.json())
            .then(res => setHistoricalData(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchHistoricalData();
    }, [coinId, currency]);

    return (
        <div>
            {historicalData ? (
                <div>
                    <p>{historicalData}</p>
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
