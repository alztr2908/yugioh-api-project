import { createContext, useState, useContext, useEffect } from "react";

const DataContext = createContext();
const LoadContext = createContext();

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
};

export function ThemeContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((mem) => {
                setData(mem);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
    );
}
