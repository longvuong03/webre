import axios from "./customize-axios";
const fetchAllProduct = (page) => {
    return axios.get(`api/Product?page=${page}`);
}
const getbyidProduct = (id) => {
    return axios.get(`api/Product/getbyidProduct/${id}`);
}

const postCreateProduct = (img, nameProduct, price) => {
    console.log(img, nameProduct, price);
    return axios.post("/api/product", { img : img, nameProduct :nameProduct, price : price });
};

const putUpdateProduct = (id, img, nameProduct, price) => {
    return axios.post(`/api/product/editproduct`, {id:id, img : img, nameProduct :nameProduct, price : price });
};

const deleteProduct = (id) => {
    return axios.delete(`/api/product/${id}`);
};

export { fetchAllProduct,getbyidProduct,postCreateProduct,putUpdateProduct,deleteProduct };