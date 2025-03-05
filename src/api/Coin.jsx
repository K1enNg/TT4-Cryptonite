import { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [coins, setCoins] = useState([]);
    const [currency, setCurrency] = useState('usd');

    const contextValue = {

    }

    return (
        <CoinContext.Provider value={{}}>
        {props.children}
        </CoinContext.Provider>
    );
}

export default CoinContextProvider;