import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import './Products.css'

const Products = ({addToCart}) => {
  const [data, setData] = useState(null);
    
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="products">
      {data &&
        data.map((item) => (   
          <ProductCard key={item.id} title={item.title} price={item.price} image={item.image} addToCart={() => addToCart(item)}/>
        ))}
    </div>
  );
};

export default Products;
