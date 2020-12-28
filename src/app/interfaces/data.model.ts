export interface Review {
  author: string;
  text: string;
  rating: number;
}

export interface Model {
  id: number;
  imgUrl: string;
  price: number;
  discount: number;
  main: boolean;
  shop: string;
  name: string;
  description: string;
  shipping: string;
  discountUntil: string;
  new: boolean;
  color: any[];
  size: any[];
  review: Review[];
}
