import { Product } from "../interface";

export const getProducts = async (page = 1): Promise<Product[]> => {
  try {
    const response = await fetch(
      `http://localhost:3000/products?_page=${page}&_per_page=24`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching products");
    }
  } catch (error) {
    throw new Error("Network error");
  }
};
