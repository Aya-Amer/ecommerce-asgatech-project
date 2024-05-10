import { Product } from './product.model';
import { Subject } from 'rxjs';
export class ProductService {
  private products: Product[] = [];
  productsChanged = new Subject<Product[]>();
  //   private products: Product[] = [
  //     new Product(
  //       1,
  //       'iPhone 9',
  //       'An apple mobile which is nothing like apple',
  //       549,
  //       12.96,
  //       4.69,
  //       94,
  //       'Apple',
  //       'smartphones',
  //       'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',

  //     ),
  //     new Product(
  //       2,
  //       'iPhone X',
  //       'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
  //       899,
  //       17.94,
  //       4.44,
  //       34,
  //       'Apple',
  //       'smartphones',
  //       'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg'
  //     ),
  //     new Product(
  //       3,
  //       'Samsung Universe 9',
  //       'Samsung new variant which goes beyond Galaxy to the Universe',
  //       1249,
  //       15.46,
  //       4.09,
  //       36,
  //       'Samsung',
  //       'smartphones',
  //       'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg'
  //     ),
  //     new Product(
  //       4,
  //       'OPPOF19',
  //       'OPPO F19 is officially announced on April 2021.',
  //       280,
  //       17.91,
  //       4.3,
  //       123,
  //       'OPPO',
  //       'smartphones',
  //       'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg'
  //     ),
  //     new Product(
  //       5,
  //       'Huawei P30',
  //       'Huawei re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
  //       499,
  //       10.58,
  //       4.09,
  //       32,
  //       'Huawei',
  //       'smartphones',
  //       'https://cdn.dummyjson.com/product-images/5/thumbnail.jpg'
  //     ),
  //     new Product(
  //       6,
  //       'MacBook Pro',
  //       'MacBook Pro 2021 with mini-LED display may launch between September, November',
  //       1749,
  //       11.02,
  //       4.57,
  //       83,
  //       'Apple',
  //       'laptops',
  //       'https://cdn.dummyjson.com/product-images/6/thumbnail.png'
  //     ),
  //   ];
  getProducts() {
    return this.products.slice();
  }

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
    console.log(this.products, 'this.products');
  }
}
