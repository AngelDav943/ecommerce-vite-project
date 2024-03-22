import { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext()

export const useCart = () => {
    return useContext(cartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState({});

    function addItem(item) {
        if (item.id == undefined) return;

        if (cart[item.id] != undefined) {
            let newCart = cart;
            newCart[item.id].amount += 1

            setCart({ ...newCart })
            return;
        }

        setCart({
            ...cart,
            [item.id]: {
                ...item,
                amount: 1
            }
        })
    }

    function removeItem(id) {
        if (cart[id] == undefined) return;

        let newCart = cart;
        delete newCart[id];

        setCart({...newCart})

        console.log("remove")
    }

    const values = {
        cart,
        addItem,
        removeItem
    }

    return (
        <cartContext.Provider value={{ ...values }}>
            {children}
        </cartContext.Provider>
    )
}