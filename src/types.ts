export interface Product {
  category: string[];
  amount: number;
  [index: string]: any;
}

export interface NavCategory {
  title: string;
  type: string;
  to?: string;
}

export interface ProductCategory {
  title: string;
  to: string;
}
