export interface ProductImage {
  id: number;
  publicId: string;
  url: string;
}

export interface ProductCategory {
  id: number;
  categoryName: string;
  categoryStatus: "ACTIVE" | "INACTIVE";
  categoryDescription: string;
}

export interface Product {
  id: number;
  productName: string;
  productCode: string;
  productStatus: "ACTIVE" | "INACTIVE";
  price: number;
  priceFull: string;
  description: string;
  createdAt: string; 
  category: ProductCategory;
  images: ProductImage[];
}


export type ProductCardProps = {
  item: Product;
};