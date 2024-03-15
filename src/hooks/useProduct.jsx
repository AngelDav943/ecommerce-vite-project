import React, { useEffect, useState } from 'react'
import ProductApi from '../api/Product'

const useProduct = () => {
    const itemsPerPage = 20
    const [products, setProducts] = useState(new Array(10).fill(undefined));

    const getAllProducts = async (page = 0) => {
        const viewPage = Math.max(0, page - 1) * itemsPerPage
        try {
            const apiResponse = await ProductApi.get(`?limit=${itemsPerPage}&skip=${viewPage}`);

            if (apiResponse["data"] == undefined) return;

            const data = apiResponse.data;
            if (data["products"] != undefined) setProducts(data.products)
        } catch (error) {

        }
    }

    const getProduct = async (id) => {
        try {
            const apiResponse = await ProductApi.get(`/${id}`);
            if (apiResponse["data"] == undefined) return;
            console.log(apiResponse["data"])
            setProducts([apiResponse["data"]])
        } catch (error) {

        }
    }

    return {
        products,
        getProduct,
        getAllProducts,
    }
}

export default useProduct