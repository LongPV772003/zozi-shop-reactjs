import axios from "axios";

const API_URL = "http://localhost:5000/api/categories";

export const fetchCategories = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi lấy danh mục:", err);
    throw err;
  }
};