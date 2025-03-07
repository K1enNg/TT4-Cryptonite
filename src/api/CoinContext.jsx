import { createContext, useEffect } from "react";
import { useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [coins, setCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$",
    });

    const fetchAllCoins = async () => {
        const options = {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        };

        try {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`,
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
            setCoins(data);
        } catch (error) {
            console.error('Error fetching coins:', error);
        }
    }

    useEffect(() => {
        fetchAllCoins();
    }, [currency])

    const contextValue = {
        coins, currency, setCurrency
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
}

export default CoinContextProvider;