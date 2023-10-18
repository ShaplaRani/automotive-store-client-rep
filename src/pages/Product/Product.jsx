import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";



const Product = () => {
    // const [products, setProducts] = useState([])
    const[uniqueProducts, setUniqueProducts] = useState([])
    const brands = useLoaderData()
    const {id} = useParams()
   const brand = brands.find(brand => brand.id == id);
    // console.log(brand);
   const {brand_name} = brand;
   useEffect(() => {
    fetch('http://localhost:5000/automotive')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // setProducts(data);
        // Filter products based on brand_name
        const uniqueProduct = data.filter(product => product.brand === brand_name)
        console.log(uniqueProduct);
        setUniqueProducts(uniqueProduct)
    } )
   },[brand_name])
   
   console.log(uniqueProducts);
    return (
        <div className="w-10/12 m-auto">
            
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                 uniqueProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard> )
            }
           </div>
        </div>
    );
};

export default Product;