import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from './App';

const BuyProductPage = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(p => p.id.toString() === productId);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const subtotal = product.price * quantity;
  const total = subtotal;

  const handleConfirmBuy = () => {
    alert('Your order has been placed!');
  };


  return (
    <div className="product-details-page">
      <div className="product-card">
        <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">Price: ${product.price}</p>
          <div className="quantity-container">
            <label htmlFor="quantity">Quantity:</label>
            <input type='number' id="quantity" value={quantity} onChange={handleQuantityChange}/>
          </div>
          <div className="subtotal-container">
            <label>Subtotal:</label>
            <p>${subtotal}</p>
          </div>
          <div className="shipping-container">
            <label>Shipping/Delivery Charge:</label>
            <p>Free</p>
          </div>
          <div>
            <hr />
          </div>
          <div className="total-container">
            <label>Total:</label>
            <p>${total}</p>
          </div>
          <div className="button-container">
          <Link to="/" className="cancel-button">Cancel</Link>
           <button onClick={handleConfirmBuy}>Confirm to Buy</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProductPage;