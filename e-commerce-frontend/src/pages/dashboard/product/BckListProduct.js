import { useEffect, useState } from "react";
import MenuButton from "../../../components/MenuButton";
import axios from "axios";
import ReactPaginate from "react-paginate";
import usePagination from "../../../hooks/usePagination";

export default function ListProduct()
{
    const [products, setProducts] = useState({
        data: [],
        total: 0
    });
    const { pageCount, setPage, take, skip } = usePagination({
        total: products.total,
        perPage: 5
    });

    const handlePageClick = (event) =>
    {
        setPage(event.selected);
    };

    useEffect(() =>
    {
        axios
            .get(`${process.env.REACT_APP_API_URL}/product?take=${take}&skip=${skip}`)
            .then((res) =>
            {
                setProducts({
                    data: res.data.data,
                    total: res.data.total
                });
            });
    }, [take, skip]);

    return (
        <div className="min-h-screen overflow-y-auto">
            <div className="my-4">
                <span className="mx-8 text-2xl font-bold text-gray-600">
                    List of Products
                </span>
            </div>
            <table className="h-full min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Brand</th>
                        <th>Created At</th>
                        <th className="relative px-6 py-3">
                            <span className="">Action</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products?.data?.map((person) => (
                        <tr key={person._id}>
                            <td>{person.name}</td>
                            <td>{person.price}</td>
                            <td>{person.description}</td>
                            <td>{person.brand}</td>
                            <td>{person.createdAt}</td>
                            <td>
                                <MenuButton
                                    links={[
                                        { onClick: () => { }, label: "Update" },
                                        { onClick: () => { }, label: "Delete" }
                                    ]}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        containerClassName="pg-container"
        activeClassName="active-pg-page"
        pageClassName="pg-page"
        previousClassName="pg-prev"
        nextClassName="pg-next"
        renderOnZeroPageCount={null}
      /> */}
        </div>
    );
}