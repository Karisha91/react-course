import Header from '../../components/Header';

import './HomePage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsGrid from './ProductsGrid';

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  

  // Fetch products from the API when the component mounts  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products')
          setProducts(response.data);
    };
       fetchProducts();
  }, []);
  

  return (
    <>
    <title>Ecommerce Project</title>
    <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

    <Header cart={cart} />
    

    <div className="home-page">
      <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
export default HomePage;