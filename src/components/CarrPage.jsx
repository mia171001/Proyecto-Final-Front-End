import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

function CarrPage() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [showAlert, setShowAlert] = useState(false);

    // Agrupar productos por ID y calcular la cantidad y el precio total
    const groupedCart = cart.reduce((acc, product) => {
        if (!acc[product.id]) {
            acc[product.id] = { ...product, quantity: 1 };
        } else {
            acc[product.id].quantity += 1;
        }
        return acc;
    }, {});

    const cartItems = Object.values(groupedCart);

    // Calcular el precio total
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handlePurchase = () => {
        setShowAlert(true);
        localStorage.removeItem('cart');
        setCart([]);
    };

    const handleIncreaseQuantity = (id) => {
        const updatedCart = [...cart, cart.find(product => product.id === id)];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const handleDecreaseQuantity = (id) => {
        const updatedCart = cart.filter((product, index) => {
            const firstIndex = cart.findIndex(p => p.id === id);
            return index !== firstIndex;
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const handleRemoveProduct = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    return (
        <div className="container mt-4">
            <h2>
                <Link to="/" className="custom-link">
                    <FaArrowLeft className="icon" />
                </Link>
                Tu Carrito
            </h2>
            {showAlert && (
                <Alert variant="success">
                    <Alert.Heading>Compra realizada con éxito</Alert.Heading>
                </Alert>
            )}
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul className="list-group mb-4">
                        {cartItems.map(product => (
                            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                                    <div>
                                        <h5 className="mb-1">{product.title}</h5>
                                        <p className="mb-1">Precio: ${product.price}</p>
                                        <p className="mb-1">Total: ${product.price * product.quantity}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Button variant="secondary" size="sm" onClick={() => handleDecreaseQuantity(product.id)}>-</Button>
                                    <span className="mx-2">{product.quantity}</span>
                                    <Button variant="secondary" size="sm" onClick={() => handleIncreaseQuantity(product.id)}>+</Button>
                                    <Button variant="danger" size="sm" onClick={() => handleRemoveProduct(product.id)} className="ms-3">Eliminar</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total a pagar: ${totalPrice.toFixed(2)}</h3>
                    <Button variant="info" style={{ marginBottom: '10px', marginTop: '10px' }} className="btn btn-primary" onClick={handlePurchase}>Comprar</Button>
                </>
            )}
        </div>
    );
}

export default CarrPage;

