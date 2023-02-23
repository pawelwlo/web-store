import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Categories from '../pages/Categories';
import Footer from '../components/Footer';
import './App.css';

export default function RootLayout({ cartCounter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="App">
      <header>
        <div className="App-header">
          <NavLink to="/">
            <img src="./logo-web-store.png" className="logo" />
          </NavLink>

          <div className="search">
            <input
              className="input"
              type={'search'}
              placeholder="search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="searchBtn" type="submit">
              <img className="searchImg" src="./search_icon.png" />
            </button>
          </div>
        </div>

        <div className="navHeader">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="about">
            About
          </NavLink>
          <NavLink className="nav-link" to="contact">
            Contact us
          </NavLink>

          <NavLink className="nav-link" to="cart">
            {' '}
            <span>
              {cartCounter}
              <br />
              <img className="cartLogo" src="./cart.png" />
            </span>
          </NavLink>
        </div>
      </header>

      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>
                <NavLink to={`/product/${product.id}`}>{product.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
}
