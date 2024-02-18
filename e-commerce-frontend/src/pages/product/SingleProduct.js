import { useParams } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import usePost from "../../hooks/usePost";
import { CartContext } from "../../context/CartProvider";

export default function SingleProduct()
{
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const cartContext = useContext(CartContext);

    const { data, loading, error, refetch } = useFetch(
        `${process.env.REACT_APP_API_URL}/product/${id}`
    );

    const { loading: isOrderLoading, mutate } = usePost(
        `${process.env.REACT_APP_API_URL}/order`,
        {
            onSuccess: (res) =>
            {
                toast.success(res?.message);
            },
            onError: (error) =>
            {
                toast.error(error?.response?.data?.message);
            }
        }
    );
    const { loading: isCartLoading, mutate: addToCart } = usePost(
        `${process.env.REACT_APP_API_URL}/cart`,
        {
            onSuccess: (res) =>
            {
                cartContext?.refetch();
                toast.success(res.message);
            },
            onError: () => { }
        }
    );

    const onSubmit = () =>
    {
        const qty = parseInt(quantity);
        if (qty < 1)
        {
            toast.error("Minimum quantity should be 1");
            return;
        }
        const submitData = {
            productId: id,
            quantity: qty
        };
        mutate(submitData);
    };

    const onCartClick = () =>
    {
        const qty = parseInt(quantity);
        if (qty < 1)
        {
            toast.error("Minimum quantity should be 1");
            return;
        }
        const submitData = {
            productId: id,
            quantity: qty
        };
        addToCart(submitData);
    };

    const { data: product } = data || {};
    const images =
        product?.images?.map(
            (image) => process.env.REACT_APP_API_URL + "/" + image
        ) || [];

    if (loading)
    {
        return <Loading />;
    }

    return (
        <div className="bg-white">
            <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    <ImageGallery images={images} />

                    <div className="px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                            {product?.name}
                        </h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">{product?.price}</p>
                        </div>

                        <div className="mt-3">
                            <h3 className="sr-only">Reviews</h3>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>

                            <div
                                className="space-y-6 text-base text-gray-700"
                                dangerouslySetInnerHTML={{ __html: product?.description }}
                            />
                        </div>

                        <div className="mt-6">
                            <input
                                type="number"
                                defaultValue={1}
                                onChange={(event) =>
                                {
                                    setQuantity(event.target.value);
                                }}
                            />
                            <div className="flex mt-10 space-x-2 sm:flex-col-1">
                                <button
                                    onClick={onCartClick}
                                    disabled={isCartLoading}
                                    type="button"
                                    className="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                                    Add to Cart
                                </button>
                                <button
                                    onClick={onSubmit}
                                    type="button"
                                    disabled={isOrderLoading}
                                    className="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}