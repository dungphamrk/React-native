import axiosInstance from "@/utils/axiosInstance";

export const fetchAllProducts = async () => {
  const response = await axiosInstance.get('/products/all');
  return response.data; 
};

export const fetchProductDetail = async (id: number) => {
  const response = await axiosInstance.get(`products/${id}`);
  return response.data;
};

