import axios from "axios";
import { useState } from "react";

const useDelete = (url, { onSuccess, onError }) =>
{
    const [loading, setLoading] = useState(false);

    const mutate = async (id, data) =>
    {
        setLoading(true);
        try
        {
            const response = await axios.delete(url + `/${id}`, {
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

export default useDelete;