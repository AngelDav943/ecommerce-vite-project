import axios from "axios";

const ProductApi = axios.create({
    baseURL: "https://dummyjson.com/products",
    timeout: 1000,
})

export default ProductApi;