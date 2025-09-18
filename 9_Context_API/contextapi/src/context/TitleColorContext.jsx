import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleUseReducer = (state, action) => {
    switch(action.type) {
        case "RED":
            return {color: "red"};
        case "BLUE":
            return {color: "blue"};
        default:
            return state;
    }
}

export const TitleColorProvider = ({ children }) => {

    const [state, dispatch] = useReducer(TitleUseReducer, { color: "purple" });

    console.log("Teste meu estado", state)

  return <TitleColorContext.Provider value={{...state}}>{children}</TitleColorContext.Provider>
};
