import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDollarSign } from "react-icons/fa";

function CardProduct({ product, onAddToCart }) {
    return (
        <Card className='col-sm-3 m-3'>
            <img src={product.image} style={{ width: 'auto', height: '300px', marginTop: '10px' }} alt={product.title} />

            <Card.Body className='cards-body'>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <span className='price'>
                        <FaDollarSign />
                        {product.price}
                    </span>
                </Card.Text>
                <div>
                    <Button variant="danger" onClick={() => onAddToCart(product)}>Agregar</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardProduct;
