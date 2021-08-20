import { createContext, useState, useContext, useEffect } from "react";
import { getAllData, getData } from "./services/deliverData";

const baseURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

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

    // Fetching data asynchronously
    useEffect(() => {
        async function fetchData() {
            let response = await getAllData(baseURL);
            await loadData(response.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    const loadData = async (data) => {
        setData(data);
    };

    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
}
