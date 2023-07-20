import React from "react";
import { Button, Container, Input, Table } from "reactstrap";
import { BannerPath } from "src/components";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateQuantity } from "src/app/feature/cart/CartSlice";

export const CartPage = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const renderCartRow = () => {
    const data = [];
    for (const productId in carts) {
      const { product, quantity } = carts[productId];
      data.push(
        <tr>
          <th scope="row">{product.id}</th>
          <td className="cart-area__image">
            <img width={150} height={100} src={product.imageUrl} />
          </td>
          <td>Minimalistic shop for multipurpose use</td>
          <td>${product.price}</td>
          <td className="cart-area__quantity">
            <Input
              type="number"
              onChange={(e) => {
                dispath(
                  updateQuantity({
                    productId: product.id,
                    quantity: e.target.value,
                  })
                );
              }}
              value={quantity}
            />
          </td>
          <td>${product.price * quantity}</td>
        </tr>
      );
    }
    return data;
  };
  return (
    <>
      <BannerPath title="Shopping Cart" path="Home - Shopping Cart" />
      <Container className="cart-area">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={2}>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{renderCartRow()}</tbody>
        </Table>
        <Button
          className="cart-area__btn-checkout"
          color="primary"
          outline
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Checkout
        </Button>
      </Container>
    </>
  );
};
