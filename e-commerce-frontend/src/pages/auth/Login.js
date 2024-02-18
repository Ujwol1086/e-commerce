import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login()
{
    const navigate = useNavigate();
    const onSubmit = (values) =>
    {
        console.log(values);

        axios
            .post(`${process.env.REACT_APP_API_URL}/auth/login`, values)
            .then((res) =>
            {
                toast.success(res.data.message);
                localStorage.setItem("token", res.data.access_token);
                navigate("/");
            })
            .catch((error) =>
            {
                toast.error(error.response.data.message);
            });
    };

    return (
        <>
            <div className="flex flex-col justify-center py-12 min-h-lvh sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="w-auto h-12 mx-auto"
                        src="https://i.ibb.co/XS7XpHP/e-commerce.png"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                        Login your account
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                        <Formik initialValues={{}} onSubmit={onSubmit}>
                            <Form className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <Field
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Login
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
