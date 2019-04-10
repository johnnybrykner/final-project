export interface Product {
  category: string[],
  [index: string]: any;
}

export interface NavCategory {
  title: string,
  type: string,
  to?: string;
}

export interface ProductCategory {
  title: string,
  to: string
}