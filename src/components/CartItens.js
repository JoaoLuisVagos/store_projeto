import React from "react";
import {Row, Col, Button, Card } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";

const CartItens = ({ cart, cartRef, clearCart }) => {
    return (
        <div ref={cartRef} className="cart-items position-fixed top-0 end-0 m-3 bg-white border rounded shadow-lg p-3">
            <h4>Itens no Carrinho</h4>
            <ul>
            {cart.map((item, index) => (
                <li key={index}>
                <Row>
                    <Col sm={3}>
                    <Card.Img variant="top" src={item.image} />
                    </Col>
                    <Col sm={4}>
                    {item.name}
                    </Col>
                    <Col sm={3} style={{ fontWeight: 'bold' , textAlign: 'right'}}>
                    R${item.price.toFixed(2)}
                    </Col>
                </Row>
                </li>
            ))}
            </ul>
            <Row>
                <Col sm={8}>
                    <span style={{ fontWeight: 'bold' }}>
                        Total: R${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                    </span>
                </Col>
                <Col sm={2}>
                    <Button variant="danger" onClick={clearCart}>
                        <FaTrashAlt />
                    </Button>
                </Col>
            </Row>
        </div>
    )
};

export default CartItens