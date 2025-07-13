import ServerDataContext from "./ServerDataContext";
import useServerData from "../hooks/useServerData";

export default function ServerDataProvider({ children }) {
    const { servers, loading, error } = useServerData();
    return (
        <ServerDataContext.Provider value={{ servers, loading, error }}>
            {children}
        </ServerDataContext.Provider>
    )
}