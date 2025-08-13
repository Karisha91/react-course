import Header from '../../components/Header';

import './HomePage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsGrid from './ProductsGrid';

function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
  

  // Fetch products from the API when the component mounts  

  useEffect(() => {
         axios.get('/api/products').then((response) => {
          setProducts(response.data);
        }).catch((error) => {
          console.error('Error fetching products:', error);
        });
        
  }, []);
  

  return (
    <>
    <title>Ecommerce Project</title>
    <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

    <Header cart={cart} />
    

    <div className="home-page">
      <ProductsGrid products={products} />
      </div>
    </>
  );
}
export default HomePage;