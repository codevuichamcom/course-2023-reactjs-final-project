import { Card, CardBody } from "reactstrap";

import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <Card className="product-card text-center">
      <img alt="Sample" src={product.imageUrl} />
      <CardBody>
        <p>{product.brand}</p>
        <h4 className="card-product__title">
          <a href="single-product.html">{product.name}</a>
        </h4>
        <p className="card-product__price">${product.price}</p>
      </CardBody>
    </Card>
  );
};
