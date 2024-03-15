import { useEffect, useState } from "react";
import ProducctCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const productData = async () => {
    // try{
    //     const res = await
    fetch("https://fakestoreapi.com/products")
      // .then((response)=>{
      //     if(!response.OK){
      //         throw new Error("server error")
      //     }
      //     return response.json()
      // })
      .then((response) => response.json())
      .then((response) => setData(response));
    // .catch((error) => setError(error))
    // .finally(() => setLoading(false))
    // }catch(err){
    //     setError(err.message)
    //     setData(null)
    // }finally{
    //     setLoading(false)
    // }
    // }
    // productData()
  }, []);
  return (
    <div>
      {data &&
        data.map((item) => (
          <ProducctCard key={item.id} title={item.title} price={item.price} image={item.image} description={item.description}/>
        ))}
    </div>
  );
};

export default Products;
