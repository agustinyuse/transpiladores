export class Products {
    products: any[];
    constructor() {
      this.products = [];
    }
  
    get = () => {
      return this.products;
    };
  
    getById = (id: string) => {
      return this.products.filter((p) => p.id === id);
    };
  
    save = (product: any) => {
      this.products.push(product);
    };
  
    update = (index: number, product: any) => {
      this.products[index] = product;
    };
  
    delete = (index: number) => {
      const product = this.products[index];
      this.products.splice(index, 1);
  
      return product;
    };
  }
  