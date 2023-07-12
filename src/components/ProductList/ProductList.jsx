import { Col, Row } from "reactstrap";
import { ProductCard } from "../ProductCard/ProductCard";

const products = [
  {
    id: 1,
    brand: "Accessories",
    name: "Quartz Belt Watch",
    imageUrl: "/img/product/product1.png",
    price: 150.0,
  },
  {
    id: 2,
    brand: "Beauty",
    name: "Women Freshwash",
    imageUrl: "/img/product/product2.png",
    price: 150.0,
  },
  {
    id: 3,
    brand: "Accessories",
    name: "Quartz Belt Watch",
    imageUrl: "/img/product/product3.png",
    price: 150.0,
  },
  {
    id: 4,
    brand: "Decor",
    name: "Room Flash Light",
    imageUrl: "/img/product/product4.png",
    price: 150.0,
  },
  {
    id: 5,
    brand: "Decor",
    name: "Room Flash Light",
    imageUrl: "/img/product/product5.png",
    price: 150.0,
  },
  {
    id: 6,
    brand: "Accessories",
    name: "Man Office Bag",
    imageUrl: "/img/product/product6.png",
    price: 150.0,
  },
  {
    id: 7,
    brand: "Accessories",
    name: "Quartz Belt Watch",
    imageUrl: "/img/product/product7.png",
    price: 150.0,
  },
  {
    id: 8,
    brand: "Kids Toy",
    name: "Charging Car",
    imageUrl: "/img/product/product8.png",
    price: 150.0,
  },
  {
    id: 9,
    brand: "Decor",
    name: "Room Flash Light",
    imageUrl: "/img/product/product5.png",
    price: 150.0,
  },
  {
    id: 10,
    brand: "Accessories",
    name: "Man Office Bag",
    imageUrl: "/img/product/product6.png",
    price: 150.0,
  },
  {
    id: 11,
    brand: "Accessories",
    name: "Quartz Belt Watch",
    imageUrl: "/img/product/product7.png",
    price: 150.0,
  },
  {
    id: 12,
    brand: "Kids Toy",
    name: "Charging Car",
    imageUrl: "/img/product/product8.png",
    price: 150.0,
  },
];
export const ProductList = ({ ...args }) => {
  return (
    <Row md="2" lg="3" xl="4" {...args}>
      {products.map((product) => (
        <Col key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
