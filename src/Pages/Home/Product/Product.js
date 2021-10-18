import React from 'react';

const Product = (props) => {
    const {equName , description, price, img } = props.product;
    return (
        <div>
            <div className="single-product">
                <img className="product-img" src={img} alt="" />
                <h2 className="product-title">{equName}</h2>
                <p className="product-price">Price: $ {price}</p>
                <p className="product-desc">{description}</p>
            </div>
            
        </div>
    );
};

export default Product;