import React, { createContext, useState } from 'react';


export const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
    const [items, setItems] = useState([
        { id: 1, image: 'Assets/Shirt.png', description: 'Shirt', points: "200", cookies: 'Assets/Oreo-cookie.png'},
        { id: 2, image: 'Assets/Hip-bag.png', description: 'Hip-bag', points: "220", cookies: 'Assets/Oreo-cookie.png'},
        { id: 3, image: 'Assets/Cap.png', description: 'Cap',points: "180", cookies: 'Assets/Oreo-cookie.png'},
        { id: 4, image: 'Assets/Hoodie_1.png', description: 'Hoodie',points: "160", cookies: 'Assets/Oreo-cookie.png'},
        { id: 5, image: 'Assets/T-Shirt-1.png', description: 'T-Shirt',points: "150", cookies: 'Assets/Oreo-cookie.png'},
        { id: 6, image: 'Assets/Skateboard-1.png', description: 'Skateboard',points: "30", cookies: 'Assets/Oreo-cookie.png'},
        { id: 7, image: 'Assets/Socks-1.png', description: 'Socks',points: "111", cookies: 'Assets/Oreo-cookie.png'},
    ]);

    return (
        <GlobalContext.Provider value={{ items, setItems }}>
            {children}
        </GlobalContext.Provider>
    );
};