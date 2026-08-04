import { useEffect, useMemo, useState } from "react";

export function usePagination<T>(
    items: T[],
    itemsPerPage: number
) {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        if (page > totalPages) {
            setPage(1);
        }
    }, [page, totalPages]);

    const paginatedItems = useMemo(() => {

        const start = (page - 1) * itemsPerPage;

        return items.slice(
            start,
            start + itemsPerPage
        );

    }, [items, page, itemsPerPage]);

    return {
        page,
        setPage,
        totalPages,
        paginatedItems,
        totalItems: items.length
    };
}