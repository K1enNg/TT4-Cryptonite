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
            headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-WHRX6H6Zj3W1MvYp4ehM2PAV'}
          };
          
          fetch(`https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setCoins(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoins();
    },[currency])

    const contextValue = {
        coins, currency, setCurrency
    }

    return (
        <CoinContext.Provider value={{}}>
        {props.children}
        </CoinContext.Provider>
    );
}

export default CoinContextProvider;