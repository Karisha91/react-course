import Header from '../../components/Header';
import { useSearchParams } from 'react-router';
import './HomePage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsGrid from './ProductsGrid';

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';


  // Fetch products from the API when the component mounts  

useEffect(() => {
  if (searchQuery) {
    const fetchProducts = async () => {
      const response = await axios.get(`/api/products?search=${encodeURIComponent(searchQuery)}`);
      setProducts(response.data);
    };
    fetchProducts();
  } else {
    // If no search query, fetch all products
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }
}, [searchQuery]); // Dependency array should be here

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />


      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
export default HomePage;