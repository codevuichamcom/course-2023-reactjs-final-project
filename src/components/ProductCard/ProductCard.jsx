import { Card, CardBody } from "reactstrap";

import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const gotoDetailPage = () => {
    navigate(`/product-detail/${product.id}`);
  };
  return (
    <Card className="product-card text-center" onClick={gotoDetailPage}>
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
