import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

function CartItems(props)
{
    const cartContext = useContext(CartContext);
    const navigate = useNavigate();
    const onLogout = () =>
    {
        localStorage.removeItem("token");
        navigate("/auth/login");
    }
    return (
        <>
            <span className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent ">
                Cart Items : {cartContext?.total}
            </span>
            <button className="ml-2 text-sm bg-indigo-600 rounded-md text-white px-4 py-2" onClick={onLogout}>Logout</button>
        </>
    );
}

export default function Navbar()
{
    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="grid w-full grid-cols-8">
                                <div className="flex items-center flex-shrink-0 col-span-8 sm:col-span-1">
                                    <img
                                        className="block w-auto h-8 lg:hidden"
                                        src="https://i.ibb.co/XS7XpHP/e-commerce.png"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden w-auto h-8 lg:block"
                                        src="https://i.ibb.co/XS7XpHP/e-commerce.png"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:col-span-2 sm:ml-6 sm:flex sm:space-x-8">
                                    <Link
                                        to="/"
                                        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
                                        Home
                                    </Link>
                                    <Link
                                        to="/cart"
                                        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
                                        Cart
                                    </Link>
                                </div>
                                <div className="items-center justify-end hidden sm:col-span-5 sm:flex">
                                    <CartItems length={0} />
                                </div>
                            </div>

                            <div className="flex items-center -mr-2 sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">
                                About Us
                            </Disclosure.Button>
                            <Disclosure.Button as="div" className="pl-3 pr-4">
                                <CartItems length={0} />
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}