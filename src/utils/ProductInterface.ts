interface Price {
  mainPrice: number;
  discountPrice: number;
  pricePerSquare: number;
}

interface Highlights {
  title: string;
  value: string | number;
}

interface Shipping {
  availableShipping: 'cnc' | 'hd';
}

export interface Product {
  title: string;
  price: Price;
  id: number;
  name: string;
  description: string;
  highlights: Highlights[];
  mainImage: string;
  availableShipping?: Shipping[];
}