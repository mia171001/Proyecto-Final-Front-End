import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { FaDollarSign, FaCheckCircle } from "react-icons/fa";

function ModalComponent({ showModal, handleClose, selectedProduct }) {
    const navigate = useNavigate();

    const goToCart = () => {
        handleClose();
        navigate('/cart');
    };

    return (
        <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header>
                <FaCheckCircle />
                <Modal.Title>Se agregó este artículo a tu carrito</Modal.Title>
            </Modal.Header>
            <Modal.Body className="container-modal-body">
                <img src={selectedProduct.image} style={{ width: '200px', height: '250px', marginBottom: '10px' }} alt={selectedProduct.title} />
                <div>
                    <p className="title-modal-p">{selectedProduct.title}</p>
                    <p className='price-modal'>
                        <FaDollarSign />{selectedProduct.price}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} variant="success">
                    Seguir Comprando
                </Button>
                <Button onClick={goToCart} variant="danger">
                    Ir al carrito
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;


