export type TCategory = string;

export type TRating = { rate: number; count: number };

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: TCategory;
  image: string;
  rating: TRating;
};
