export interface IProductItem {
  id: number;
  name: string;
  description: string;
  category: number;
  ratings: number;
  variants: IVariants[];
}

export interface IVariants {
  id: number;
  color: string;
  size?: string;
  price: number;
  images: string[];
}
