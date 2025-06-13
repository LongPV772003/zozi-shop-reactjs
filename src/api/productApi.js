import axios from "axios";
const URL_productApi = "http://localhost:5000/api/products"

export const fetchProducts = async() => {
    try {
        const res = await axios.get(URL_productApi);
        return res.data;
    } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err);
        throw err;
    }
}