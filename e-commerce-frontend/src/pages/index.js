import React from "react";
import ProductList from "../components/ProductList";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

function Index()
{
    const { data: products, loading: isLoading } = useFetch(
        `${process.env.REACT_APP_API_URL}/product`
    );

    if (isLoading) return <Loading />;

    return (
        <div>
            <ProductList products={products?.data || []} />
        </div>
    );
}

export default Index;