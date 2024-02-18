import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MenuButton(props)
{
    const { links } = props;

    return (
        <div>
            <Menu as="div">
                <div>
                    <Menu.Button className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                        </svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg right-4 ring-1 ring-black/5 focus:outline-none">
                        {links.map((link, index) => (
                            <Menu.Item key={`menu-item-${index}`}>
                                <button
                                    className={`flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    onClick={link?.onClick}>
                                    {link.label}
                                </button>
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}