import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ProductCard from './components/ProductCard';
import CartItens from './components/CartItens';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCartShopping } from "react-icons/fa6";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const cartRef = useRef(null);

  useEffect(() => {
    const data = {
      "products": [
        {
          "id": 1,
          "name": "Calça Alfaiataria Rendada 1 ",
          "price": 190.90,
          "image": "https://lojalancaperfume.vtexassets.com/arquivos/ids/504997-150-200/"
        },
        {
          "id": 2,
          "name": "Calça Alfaiataria Rendada 2 ",
          "listPrice": 250.90,
          "price": 120.90,
          "image": "https://lojalancaperfume.vtexassets.com/arquivos/ids/504997-150-200/"
        },
        {
          "id": 3,
          "name": "Calça Alfaiataria Rendada 3 ",
          "listPrice": 230.90,
          "price": 225.90,
          "image": "https://lojalancaperfume.vtexassets.com/arquivos/ids/504997-150-200/"
        }
      ]
    };
    setProducts(data.products);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const addToCart = (product) => {

    if (cart.includes(product)) {
      toast.warn(`${product.name} ja foi adicionado ao carrinho!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Carrinho limpo!');
  };

  return (
    <Container>
      <header className="d-flex justify-content-between align-items-center py-3 position-relative">
        <h1>Vitrine de Produtos</h1>
        <div className="d-flex align-items-center">
          <div className="cart position-relative" onClick={() => setShowCart(!showCart)}>
            <span className="badge bg-danger"><FaCartShopping /> {cart.length}</span>
          </div>
        </div>
      </header>

      {showCart && (
        <CartItens cart={cart} cartRef={cartRef} clearCart={clearCart} />
      )}

      <Row>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </Row>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default App;
