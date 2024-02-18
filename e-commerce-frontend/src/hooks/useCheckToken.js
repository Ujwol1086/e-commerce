import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function useCheckToken()
{
    const navigate = useNavigate();
    useEffect(() =>
    {
        const token = localStorage.getItem("token");
        if (!token)
        {
            navigate("/auth/login");
        }
    }, []);
    return null
}

export default useCheckToken
