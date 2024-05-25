import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import CarouselImg from "./components/CarouselImg";
import FilterProducts from "./components/FilterProducts";
import Carr from "./components/Carr";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Error from "./components/Error";
import ModalComponent from "./components/ModalComponent";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClose = () => setShowModal(false);

  const readData = async () => {
    try {
      const request = await fetch('https://fakestoreapi.com/products');
      const data = await request.json();
      setProducts(data);
    } catch (error) {
      setError('Hubo un problema al cargar los productos. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    readData();
  }, []);

  const handleSearchChange = (event) => {
    event.preventDefault();
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

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedProducts = searchTerm ? filteredProducts : products.slice(0, 3);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <main>
      <Header onSearchChange={handleSearchChange} />
      <CarouselImg />
      <div className="container">
        <FilterProducts products={displayedProducts} onAddToCart={handleAddToCart} />
      </div>
      <Carr carr={cart} />
      {selectedProduct && (
        <ModalComponent
          showModal={showModal}
          handleClose={handleClose}
          selectedProduct={selectedProduct}
        />
      )}
      <Footer />
    </main>
  );
}

export default App;

