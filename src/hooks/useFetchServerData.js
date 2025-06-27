import { useEffect, useState } from "react";

export default function useFetchServerData(endpoint) {
  const [serverFetchData, setServerFetchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}${endpoint}`);
        if (!response.ok) {
          throw new Error("Error when obtaining data");
        }
        const data = await response.json();
        setServerFetchData(data);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint, apiUrl]);

  return { serverFetchData, loading, error };
}
