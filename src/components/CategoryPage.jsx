import React, { useState, useEffect } from 'react';
import { useParams, Link,useLocation } from 'react-router-dom';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import ModalComponent from '../components/ModalComponent';

function CategoryPage() {
    // const { category } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('name');
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await request.json();
                setProducts(data);
                setShowModal(false);
            } catch (error) {
                console.error('Hubo un problema al cargar los productos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [category]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header onSearchChange={handleSearchChange} />
            <Container className='category-container'>
                <h2 className="mb-4">
                    <Link to="/" className="custom-link">
                        <FaArrowLeft className="icon" />
                    </Link>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <ListGroup>
                        {filteredProducts.map(product => (
                            <ListGroup.Item key={product.id} className="justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={product.image} alt={product.title} style={{ width: '120px', height: '130px', marginRight: '15px' }} />
                                    <div>
                                        <h5 className="mb-1">{product.title}</h5>
                                        <p className="mb-1">${product.price}</p>
                                        <p className="mb-1">${product.description}</p>
                                    </div>
                                </div>
                                <Button variant="danger" onClick={() => handleAddToCart(product)} style={{ marginTop:'15px', marginBottom:'15px' }}>
                                    Agregar
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Container>
            {selectedProduct && (
                <ModalComponent
                    showModal={showModal}
                    handleClose={handleClose}
                    selectedProduct={selectedProduct}
                />
            )}
        </>
    );
}

export default CategoryPage;







