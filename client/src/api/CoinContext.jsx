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
    try {
      const response = await fetch(
        `http://localhost:3000/api/coins/markets?vs_currency=${currency.name}`
      );
  
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  
      const data = await response.json();
      console.log('Fetched data:', data);
      setCoins(data);
    } catch (error) {
      console.error('Error fetching coins:', error);
    }
  };

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