export class Product {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public discountPercentage?: number;
  public rating?: number;
  public stock: number;
  public brand: string;
  public category: string;
  public thumbnail: string;
  constructor(
    id: number,
    title: string,
    desc: string,
    price: number,
    discount: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string
  ) {
    this.id = id;
    this.title = title;
    this.description = desc;
    this.price = price;
    this.discountPercentage = discount;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
  }
}
