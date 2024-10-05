export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  brand: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;
}

export interface StateType {
  amazon: {
    cart: ProductType[];
    userInfo: string;
  };
}
