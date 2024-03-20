import React, { useEffect, useState } from 'react'
import ProductApi from '../api/Product'

const useProduct = () => {
    const itemsPerPage = 20
    const [products, setProducts] = useState(new Array(10).fill(undefined));
    const [totalPages, setTotalPages] = useState(1);

    const getAllProducts = async (page = 0) => {
        const viewPage = Math.max(0, page - 1) * itemsPerPage
        try {
            const apiResponse = await ProductApi.get(`?limit=${itemsPerPage}&skip=${viewPage}`);

            if (apiResponse["data"] == undefined) return;
            if (apiResponse.data["products"] == undefined) return;

            setTotalPages(Math.ceil(apiResponse.data.total / itemsPerPage))
            setProducts(apiResponse.data.products)
        } catch (error) {

        }
    }

    const searchProduct = async (query = "", page = 0) => {
        const viewPage = Math.min(Math.max(0, page - 1), totalPages) * itemsPerPage
        try {
            const apiResponse = await ProductApi.get(`search?q=${query}&limit=${itemsPerPage}&skip=${viewPage}`);

            if (apiResponse["data"] == undefined) return;
            if (apiResponse.data["products"] == undefined) return;

            setTotalPages(Math.ceil(apiResponse.data.total / itemsPerPage))
            setProducts(apiResponse.data.products)
        } catch (error) {

        }
    }

    const getProduct = async (id) => {
        try {
            const apiResponse = await ProductApi.get(`/${id}`);
            if (apiResponse["data"] == undefined) return;
            setProducts([apiResponse["data"]])
        } catch (error) {

        }
    }

    return {
        products,
        totalPages,
        itemsPerPage,
        getProduct,
        getAllProducts,
        searchProduct,
    }
}

export default useProduct