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
    fetch('https://automotive-store-server-2np4zgyhp-shapla-sarkers-projects.vercel.app/automotive')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // setProducts(data);
        // Filter products based on brand_name
        const uniqueProduct = data.filter(product => product.brand.toLowerCase() === brand_name.toLowerCase())
        console.log(uniqueProduct);
        setUniqueProducts(uniqueProduct)
    } )
   },[brand_name])
   
   console.log(uniqueProducts);
    return (
        <div className="w-11/12 lg:w-10/12 m-auto">
            
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-20">
            {
                 uniqueProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard> )
            }
           </div>
        </div>
    );
};

export default Product;