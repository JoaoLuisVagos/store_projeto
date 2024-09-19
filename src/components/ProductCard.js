import React from 'react';
import {Col, Button, Card } from 'react-bootstrap';
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product, addToCart, index }) => {
  const { name, listPrice, price, image } = product;
  const hasDiscount = listPrice > price;

  return (
    <Col key={index} md={4} className="mb-4">
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            {hasDiscount ? (
              <Card.Text>
                <span className="text-muted text-decoration-line-through">De: R${product.listPrice.toFixed(2)}</span><br />
                <span className="text-primary">Por: R${product.price.toFixed(2)}</span>
              </Card.Text>
            ) : (
              <Card.Text>R${product.price.toFixed(2)}</Card.Text>
            )}
            <Button variant="success" onClick={() => addToCart(product)}>
              <FaCartPlus /> Adicionar ao Carrinho
            </Button>
            </Card.Body>
        </Card>
    </Col>
  );
};

export default ProductCard;
