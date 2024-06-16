import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import BuyProductPage from './BuyProductPage';
import Cart from './Cart';

const productsData = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.pinimg.com/originals/6b/3f/6b/6b3f6b9bb5ff4746d4876f301c8d00bd.jpg",
    "images":"https://i.pinimg.com/originals/6b/3f/6b/6b3f6b9bb5ff4746d4876f301c8d00bd.jpg"
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://pricematch.pk/uploadedstuff/productimages/20-Apple-iPhone-X-64-GB.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://thesun.my/binrepository/566x432/0c0/0d0/none/11808/VRPC/18b3-a70-main_556174_20190813111729.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/3/1.jpg"
    ]
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://images.fonearena.com/blog/wp-content/uploads/2021/04/OPPO-F19-1-1024x1015.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ]
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://tse2.mm.bing.net/th?id=OIP.Fafhf7TKxX3KoCoR2yEasQHaHa&pid=Api&P=0&h=180",
    "images": [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
  }
];

// Context
export const ProductContext = createContext();

const App = () => {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Shopping Cards</h1>
        </header>
        <ProductContext.Provider value={{ products: productsData }}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/buy/:productId" element={<BuyProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ProductContext.Provider>
      </div>
    </Router>
  );
};

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { id, title, description, price, brand, rating, thumbnail } = product;


  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-thumbnail" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">Price: ${price}</p>
        <p className="product-brand"><b>Brand:</b> {brand}</p>
        <p className="product-description">{description}</p>
        <p className="product-category"><b>Rating:</b> {rating}</p>
        <div className="buy-container">
          <Link to={`/buy/${id}`} className="buy-button">Buy Now</Link>
          
        </div>
      </div>
    </div>
  );
};

export default App;