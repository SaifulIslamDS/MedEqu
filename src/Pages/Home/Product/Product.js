import React from 'react';
import './Product.css';

const Product = (props) => {
    const {equName , description, price, img } = props.product;
    return (
        <div>
            <div className="single-product">
                <img className="product-img" src={img} alt="" />
                <h2 className="product-title">{equName}</h2>
                <p className="product-price">Price: <span>${price}</span></p>
                <p className="product-desc">{description}</p>
                <button className="btn-detail">Detail</button>
            </div>
            
        </div>
    );
};

export default Product;