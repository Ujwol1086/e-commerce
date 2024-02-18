import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

function Cart()
{
    // const { data: carts, loading } = useFetch(
    //     `${process.env.REACT_APP_API_URL}/cart`
    // );
    const { carts } = useContext(CartContext)
    const getTotalPrice = () =>
    {
        let total = 0;
        carts?.data?.forEach((cart) =>
        {
            total += cart.productId.price * cart.quantity;
        });
        return total;
    };

    // if (loading)
    // {
    //     return <Loading />;
    // }

    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
                        Shopping Cart
                    </h1>

                    <div className="mt-12">
                        <section aria-labelledby="cart-heading">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>

                            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                {carts?.data?.map((cart) => (
                                    <li key={cart._id} className="flex py-6">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={cart?.productId.image}
                                                alt={cart?.productId.image}
                                                className="object-cover object-center w-24 h-24 rounded-md sm:w-32 sm:h-32"
                                            />
                                        </div>

                                        <div className="flex flex-col flex-1 ml-4 sm:ml-6">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h4 className="text-sm">
                                                        <a
                                                            href={`product/${cart.productId._id}`}
                                                            className="font-medium text-gray-700 hover:text-gray-800">
                                                            {cart.productId.name}
                                                        </a>
                                                    </h4>
                                                    <p className="ml-4 text-sm font-medium text-gray-900">
                                                        ${cart.productId.price}
                                                    </p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Quantity: {cart.quantity}
                                                </p>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Brand: {cart.productId.brand}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section aria-labelledby="summary-heading" className="mt-10">
                            <h2 id="summary-heading" className="sr-only">
                                Order summary
                            </h2>

                            <div>
                                <dl className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-base font-medium text-gray-900">
                                            Subtotal
                                        </dt>
                                        <dd className="ml-4 text-base font-medium text-gray-900">
                                            ${getTotalPrice()}
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="mt-6 text-sm text-center">
                                <p>
                                    or{" "}
                                    <Link
                                        to="/"
                                        className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                    </Link>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;