import React, { useState } from "react";

function usePagination(props)
{
    const { total, perPage } = props;
    const itemsPerPage = perPage || 5;
    const [page, setPage] = useState(0);

    const pageCount = Math.ceil(total / itemsPerPage);
    const skip = page * itemsPerPage;

    return {
        setPage,
        page,
        pageCount,
        skip,
        take: itemsPerPage
    };
}

export default usePagination;