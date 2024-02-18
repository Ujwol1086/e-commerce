import { Outlet } from "react-router-dom";
import useCheckToken from "../hooks/useCheckToken";


export default function DashboardLayout()
{
    useCheckToken();
    return (
        <div className="flex flex-col flex-grow h-screen overflow-y-auto bg-white border-r border-gray-200">
            <div className="grid flex-grow h-full grid-cols-9 grid-rows-1">
                <nav className="h-full col-span-2 px-2 pt-4 space-y-1 bg-indigo-600">
                    <div>
                        <img
                            className="w-auto h-12 mx-auto mb-4 invert brightness-0"
                            src="https://i.ibb.co/1s66x32/e-commerce-removebg.png"
                            alt="title"
                        />
                    </div>
                    <ul className="space-y-1">
                        <li>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between px-4 py-2 text-white rounded-lg cursor-pointer hover:bg-indigo-800">
                                    <span className="text-sm font-medium"> Product </span>
                                    <span className="transition duration-300 shrink-0 group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>


                                <ul className="px-4 mt-2 space-y-1">
                                    <li>
                                        <a href="/" className="sidebar-item">
                                            View
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="sidebar-item">
                                            Create
                                        </a>
                                    </li>


                                    <li>
                                        <a href="/" className="sidebar-item">
                                            Update
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </nav>
                <main className="col-span-7">

                    <Outlet />
                </main>
            </div>
        </div>
    );
}