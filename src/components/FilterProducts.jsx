import React from 'react';
import CardProduct from "./CardProduct";

function FilterProducts({ products, onAddToCart }) {
    return (
        <div className="row space-row">
            {products.map((product) => (
                <CardProduct key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
}

export default FilterProducts;
