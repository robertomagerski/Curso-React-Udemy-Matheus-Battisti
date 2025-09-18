//1- Criando o Context

import { createContext, useState } from "react";

export const CounterContext = createContext();

//2- Criando o Provider

export const ProviderCounterContext = ({children}) =>{ 

    const [counter, setCounter] = useState(4);
    return(
        <CounterContext.Provider value={{counter,setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}