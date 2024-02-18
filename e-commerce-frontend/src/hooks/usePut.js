import axios from "axios";
import { useState } from "react";

const usePut = (url, { onSuccess, onError }) =>
{
    const [loading, setLoading] = useState(false);

    const mutate = async (data) =>
    {
        setLoading(true);
        try
        {
            const response = await axios.put(url, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            onSuccess(response.data);
        } catch (error)
        {
            onError(error);
        } finally
        {
            setLoading(false);
        }
    };

    return {
        loading,
        mutate
    };
};

export default usePut;