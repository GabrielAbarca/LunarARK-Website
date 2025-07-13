import { useContext } from "react";
import ServerDataContext from "./ServerDataContext";

export default function useServerDataContext() {
    return useContext(ServerDataContext);
}