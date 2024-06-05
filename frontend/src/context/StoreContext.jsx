
import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const [whitlistItems, setWhitlistItems] = useState({});

    const addToWhitlist = (itemId) => {
        if (!whitlistItems[itemId]) {
            setWhitlistItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setWhitlistItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromWhitlist = (itemId) => {
        setWhitlistItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalWhitlistAmount = () => {
       
        for (const item in whitlistItems) {
            if (whitlistItems[item] > 0) {
                let itemInfo = food_list.find((product) => product.food_id === Number(item));
            
            }

        }

    }
    const contextValue = {
        food_list,
        whitlistItems,
        setWhitlistItems,
        addToWhitlist,
        removeFromWhitlist,
        getTotalWhitlistAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;