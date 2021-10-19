import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/medEquipment.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div id="products" className="p-4">
            <div className="container mx-auto">
                <h2 className="section-title text-4xl text-center">Our Products</h2>
                <div className="grid grid-cols-3 gap-32">
                    {
                        //loop through products with map method
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                        ></Product> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;