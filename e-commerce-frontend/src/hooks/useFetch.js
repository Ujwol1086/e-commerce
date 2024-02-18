import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) =>
{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () =>
    {
        setLoading(true);
        try
        {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setData(response.data);
        } catch (error)
        {
            setError(error);
        } finally
        {
            setLoading(false);
        }
    };

    useEffect(() =>
    {
        fetchData();
    }, []);

    return {
        data,
        error,
        loading,
        refetch: fetchData
    }

}

export default useFetch;
