import React, { useState } from "react";
import GenericInput from "../../../components/GenericInput";
import { Form, Formik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";




function CreateProduct()
{

    const navigate = useNavigate();

    const [files, setFile] = useState();

    const initialValues = {
        name: "",
        description: "",
        brand: "",
        price: null
    };
    const onSubmit = (values) =>
    {
        if (!files)
        {
            toast.error("Please Select a File");
            return;
        }
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("brand", values.brand);
        formData.append("price", values.price);
        [...files].forEach((file, index) =>
        {
            formData.append(`images[${index}]`, file);
        });
        axios.post(`${process.env.REACT_APP_API_URL}/product`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) =>
            {
                toast.success(res.data?.message);
                navigate("/dashboard/listProduct")
            })
            .catch((error) =>
            {
                toast.error(error.response?.data?.message)
            })
    }
    const onChange = (event) =>
    {
        if (event.target.files)
        {
            setFile(event.target.files)
        }
    };
    return (
        <>
            <div className="flex flex-col items-start py-12 min-h-lvh sm:px-6 lg:px-8">
                <div className="mt-8 sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <Formik onSubmit={onSubmit} initialValues={initialValues}>
                            <Form className="space-y-4">
                                <GenericInput label="Product Name" name="name" type="text" placeholder="Product Name" />
                                <GenericInput label="Price" name="price" type="number" placeholder="Price" />
                                <GenericInput label="Description" name="description" type="text" placeholder="Enter a Description" />
                                <GenericInput label="Brand" name="brand" type="text" placeholder="Enter a brand name" />
                                <GenericInput label="Select Images" name="image" type="file" placeholder="Select Prduct Images" multiple="multiple" onChange={onChange} />
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Create a Product
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


export default CreateProduct;